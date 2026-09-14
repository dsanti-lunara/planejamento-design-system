import React from 'react';
import { Button } from '../actions/Button.jsx';
import { Toggle } from '../forms/Toggle.jsx';
import { SegmentedControl } from '../forms/SegmentedControl.jsx';
import { Field } from '../forms/Field.jsx';
import { PaginationItem } from '../navigation/PaginationItem.jsx';
import { DataDataState } from '../feedback/DataDataState.jsx';
import { DataTable } from './DataTable.jsx';

const FONT = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

/** Colors a deviation string green/red/neutral by its leading sign — never repeats the unit. */
function devColor(text) {
  if (typeof text !== 'string') return 'var(--color-text-primary)';
  if (text.startsWith('+')) return 'var(--color-text-positive)';
  if (text.startsWith('-')) return 'var(--color-text-negative)';
  return 'var(--color-text-secondary)';
}

/** Builds DataTable columns + two-level columnGroups from a group config:
 *  groups: [{ key, title, measures: [{ key, label, unit?, deviation? }] }] */
function buildColumns(groups, showComparison) {
  const columns = [];
  const columnGroups = [];
  groups.forEach((g, gi) => {
    const measures = showComparison ? g.measures : g.measures.filter((m) => !m.deviation && m.key !== `${g.key}_plano`);
    measures.forEach((m) => {
      const isDimension = gi === 0;
      columns.push({
        key: m.key,
        header: m.label,
        numeric: !isDimension,
        unit: m.unit,
        pin: isDimension ? 'left' : undefined,
        width: isDimension ? 220 : undefined,
        render: (row) => {
          const v = row[m.key];
          return <span style={{ color: m.deviation ? devColor(v) : 'inherit' }}>{v}</span>;
        },
      });
    });
    columnGroups.push({ header: g.title, colSpan: measures.length });
  });
  return { columns, columnGroups };
}

export function AnalyticalDataTable({
  title = 'Tabela Analítica Estrutural',
  context = 'Modo Período (por operação)',
  dimensionLabel = 'Operação',
  dimensionOptions = { text1: 'Modo Dia', text2: 'Modo Período' },
  groups = [],
  rows = [],
  rowKey = (r, i) => r.key ?? i,
  rowVariant = (r) => (r.total ? 'total' : null),
  density = 'compact',
  onDensityChange = null,
  showComparison = true,
  onToggleComparison = null,
  showColumnsAction = true,
  showExportAction = true,
  onConfigureColumns = null,
  onExport = null,
  search = '',
  onSearchChange = null,
  dataState = null,
  dataStateProps = {},
  rowsSummary = null,
  page = 1,
  pageCount = 1,
  onPageChange = null,
  rowsPerPage = '10',
  onRowsPerPageChange = null,
  style = {},
}) {
  const { columns, columnGroups } = buildColumns(groups, showComparison);
  const summary = rowsSummary ?? `Mostrando ${rows.length} linha${rows.length === 1 ? '' : 's'} · carregamento no servidor`;

  const pages = [];
  for (let p = Math.max(1, page - 1); p <= Math.min(pageCount, page + 2); p++) pages.push(p);

  return (
    <div style={{ width: '100%', borderRadius: 12, background: 'var(--color-surface-card)', boxShadow: 'var(--shadow-border)', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: FONT, ...style }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', padding: 16, borderBottom: '1px solid var(--color-border-default)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginRight: 8 }}>
          <span style={{ font: '600 14px/20px ' + FONT, color: 'var(--color-text-primary)', whiteSpace: 'nowrap' }}>{title}</span>
          <span style={{ font: '400 12px/16px ' + FONT, color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{context}</span>
        </div>
        <SegmentedControl text1={dimensionOptions.text1} text2={dimensionOptions.text2} />
        <Field type="select" label="Densidade" value={density === 'compact' ? 'Compacta' : density === 'audit' ? 'Auditoria' : 'Padrão'} options={['Compacta', 'Padrão', 'Auditoria']}
          onChange={(v) => onDensityChange && onDensityChange(v === 'Compacta' ? 'compact' : v === 'Auditoria' ? 'audit' : 'standard')}
          style={{ width: 132 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ font: '500 12px/16px ' + FONT, color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>Exibir plano e desvio</span>
          <Toggle checked={showComparison} onChange={onToggleComparison} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {showColumnsAction ? <Button label="Configurar colunas" style2="secondary" size="compact" onClick={onConfigureColumns} /> : null}
          {showExportAction ? <Button label="Exportar" style2="secondary" size="compact" onClick={onExport} /> : null}
        </div>
        <Field type="search" placeholder="Buscar na tabela..." value={search} onChange={onSearchChange} style={{ flexGrow: 1, minWidth: 200, width: 'auto' }} />
      </div>

      {dataState ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 16px' }}>
          <DataDataState type={dataState} {...dataStateProps} />
        </div>
      ) : (
        <DataTable
          columns={columns}
          columnGroups={columnGroups}
          rows={rows}
          rowKey={rowKey}
          rowVariant={rowVariant}
          density={density}
          stickyFirstColumn
          hoverable
        />
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '10px 16px', borderTop: '1px solid var(--color-border-subtle)' }}>
        <span style={{ flexGrow: 1, font: '400 12px/16px ' + FONT, color: 'var(--color-text-secondary)' }}>{summary}</span>
        <div style={{ display: 'flex', gap: 6 }}>
          {pages.map((p) => (
            <PaginationItem key={p} label={String(p)} state={p === page ? 'current' : 'default'} onClick={() => onPageChange && onPageChange(p)} />
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ font: '400 12px/16px ' + FONT, color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>Linhas por página</span>
          <Field type="select" label="" value={rowsPerPage} options={['10', '25', '50']} showTrailingIcon onChange={onRowsPerPageChange} style={{ width: 72 }} />
        </div>
      </div>
    </div>
  );
}

export default AnalyticalDataTable;
