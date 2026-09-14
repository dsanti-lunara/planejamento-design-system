import React from 'react';
import { InputCheckbox } from '../forms/InputCheckbox.jsx';

/* Density v2 (evolution guide §7.3): compact/standard/audit control row padding + font size.
   `dense` (boolean) still works as a deprecated alias for density="compact". */
const densityCfg = {
  compact: { pad: '7px 12px', font: '400 11px/14px var(--font-sans)' },
  standard: { pad: '10px 14px', font: '400 12px/16px var(--font-sans)' },
  audit: { pad: '4px 10px', font: '400 9px/12px var(--font-sans)' },
};

const rowVariantStyle = {
  subtotal: { background: 'var(--color-surface-subtle)', fontWeight: 700, borderTop: '1px solid var(--color-border-default)' },
  total: { background: 'var(--color-surface-subtle)', fontWeight: 700, borderTop: '2px solid var(--color-text-primary)' },
  section: { background: 'var(--color-surface-canvas)', fontWeight: 600, color: 'var(--color-text-muted)', font: '400 9px/12px var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.04em' },
};

export function DataTable({
  columns = [],
  rows = [],
  rowKey = (r, i) => i,
  /** @deprecated use `density="compact"` */
  dense = false,
  /** Row density. Default 'standard'. 'audit' is the densest — logs, filas, cockpit. */
  density = 'standard',
  stickyHeader = false,
  /** Freeze the first column (and the selection checkbox column, if present) while the table
   *  scrolls horizontally — for wide operational tables with a long category/name column. */
  stickyFirstColumn = false,
  hoverable = true,
  selectable = false,
  selectedKeys = [],
  onSelectionChange = null,
  onRowClick = null,
  isRowActive = null,
  /** Classifies a row for styling: 'subtotal' | 'total' | 'section' | undefined (default row).
   *  A 'section' row spans all columns using its first column's `render`/value as the label. */
  rowVariant = null,
  empty = null,
  /** Two-level header — a top row grouping several sub-columns under one label (e.g.
   *  "Recebidas" spanning Realizado/Plano/Desvio/%Desvio). `[{ header, colSpan }]`, left to
   *  right, spans must sum to `columns.length`. Default null (single-level header, unchanged). */
  columnGroups = null,
  /** Turns the first column into an expand/collapse tree — rows with a non-empty `children`
   *  array (same row shape, recursive) show a chevron; only rows whose ancestor chain is fully
   *  expanded render. Default false (flat rows, unchanged). */
  expandable = false,
  /** Keys (from `rowKey`) of currently-expanded rows. Default `[]` (all collapsed). */
  expandedKeys = [],
  /** Called with a row's key when its chevron is clicked. */
  onToggleExpand = null,
  style = {},
}) {
  const d = densityCfg[dense && density === 'standard' ? 'compact' : density] || densityCfg.standard;
  const pad = d.pad;
  const selSet = new Set(selectedKeys);
  const expSet = new Set(expandedKeys);
  let flatCounter = 0;
  function flattenRows(list, depth) {
    let out = [];
    for (const row of list) {
      const idx = flatCounter++;
      const key = rowKey(row, idx);
      out.push({ row, depth, index: idx, key });
      if (expandable && row.children && row.children.length && expSet.has(key)) {
        out = out.concat(flattenRows(row.children, depth + 1));
      }
    }
    return out;
  }
  const flatRows = expandable ? flattenRows(rows, 0) : rows.map((row, index) => ({ row, depth: 0, index, key: rowKey(row, index) }));
  const allKeys = rows.map((r, i) => rowKey(r, i));
  const allSel = allKeys.length > 0 && allKeys.every((k) => selSet.has(k));
  const stickyColBg = 'var(--color-surface-card)';

  const toggleAll = () => onSelectionChange && onSelectionChange(allSel ? [] : allKeys);
  const toggleOne = (k) => {
    if (!onSelectionChange) return;
    const next = new Set(selSet);
    if (next.has(k)) next.delete(k); else next.add(k);
    onSelectionChange(Array.from(next));
  };

  const align = (a) => (a === 'right' ? 'flex-end' : a === 'center' ? 'center' : 'flex-start');
  const selColW = 40;
  // Column pinning (guide §7.3: "colunas pinadas") — any column may set pin:'left'|'right', not
  // just the first. Offsets are computed from each pinned column's own `width` (falls back to
  // 120px when omitted) so multiple pinned columns stack correctly during horizontal scroll.
  const leftPinned = columns.filter((c) => c.pin === 'left');
  const rightPinned = columns.filter((c) => c.pin === 'right');
  const pinWidth = (c) => (typeof c.width === 'number' ? c.width : 120);
  const leftOffset = {};
  { let acc = stickyFirstColumn ? selColW : 0; leftPinned.forEach((c) => { leftOffset[c.key] = acc; acc += pinWidth(c); }); }
  const rightOffset = {};
  { let acc = 0; [...rightPinned].reverse().forEach((c) => { rightOffset[c.key] = acc; acc += pinWidth(c); }); }
  function pinStyle(c, ci, activeBg) {
    if (stickyFirstColumn && ci === 0) return { position: 'sticky', left: selColW, zIndex: 3, background: activeBg };
    if (c.pin === 'left') return { position: 'sticky', left: leftOffset[c.key], zIndex: 2, background: activeBg, boxShadow: '1px 0 0 var(--color-border-subtle)' };
    if (c.pin === 'right') return { position: 'sticky', right: rightOffset[c.key], zIndex: 2, background: activeBg, boxShadow: '-1px 0 0 var(--color-border-subtle)' };
    return {};
  }

  return (
    <div style={{ width: '100%', overflowX: 'auto', ...style }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)' }}>
        <thead>
          {columnGroups ? (
            <tr style={{ position: stickyHeader ? 'sticky' : 'static', top: 0, zIndex: 2, background: 'var(--color-surface-card)' }}>
              {selectable ? <th style={{ padding: pad, width: selColW, borderBottom: '1px solid var(--color-border-subtle)' }} /> : null}
              {columnGroups.map((g, gi) => (
                <th key={gi} colSpan={g.colSpan} style={{ padding: '6px 14px', textAlign: 'center', font: '600 11px/14px var(--font-sans)', color: 'var(--color-text-muted)', fontWeight: 700, borderBottom: '1px solid var(--color-border-subtle)', borderLeft: gi > 0 ? '1px solid var(--color-border-subtle)' : 'none' }}>
                  {g.header}
                </th>
              ))}
            </tr>
          ) : null}
          <tr style={{ position: stickyHeader ? 'sticky' : 'static', top: columnGroups ? 33 : 0, zIndex: 2, background: 'var(--color-surface-card)' }}>
            {selectable ? (
              <th style={{ padding: pad, width: selColW, borderBottom: '1px solid var(--color-border-subtle)', position: stickyFirstColumn ? 'sticky' : 'static', left: 0, zIndex: stickyFirstColumn ? 3 : 'auto', background: stickyColBg }}>
                <InputCheckbox checked={allSel} onChange={toggleAll} showLabel={false} />
              </th>
            ) : null}
            {columns.map((c, ci) => (
              <th
                key={c.key}
                style={{
                  padding: pad, textAlign: c.numeric ? 'right' : (c.align || 'left'), width: c.width || 'auto',
                  minWidth: c.minWidth ?? c.width ?? undefined, maxWidth: c.lockWidth ? (c.width || c.minWidth) : 'none',
                  boxSizing: 'border-box',
                  font: '600 11px/14px var(--font-sans)', color: 'var(--color-text-muted)', whiteSpace: 'nowrap',
                  borderBottom: '1px solid var(--color-border-subtle)',
                  ...pinStyle(c, ci, stickyColBg),
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 5, justifyContent: align(c.numeric ? 'right' : c.align) }}>
                  {c.header}
                  {/* Unit lives once in the header, not repeated per cell (evolution guide §7.3). */}
                  {c.unit ? <span style={{ fontWeight: 500, color: 'var(--color-text-muted)', textTransform: 'none', letterSpacing: 0 }}>({c.unit})</span> : null}
                  {c.sortDir ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: c.sortDir === 'asc' ? 'rotate(180deg)' : 'none' }}><polyline points="6 9 12 15 18 9" /></svg>
                  ) : null}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && empty ? (
            <tr><td colSpan={columns.length + (selectable ? 1 : 0)} style={{ padding: 0 }}>{empty}</td></tr>
          ) : flatRows.map(({ row, depth, index: i, key: k }) => {
            const active = isRowActive ? isRowActive(row, i) : selSet.has(k);
            const variant = rowVariant ? rowVariant(row, i) : null;
            const vStyle = variant ? rowVariantStyle[variant] : null;
            if (variant === 'section') {
              const label = columns[0] && (columns[0].render ? columns[0].render(row, i) : row[columns[0].key]);
              return (
                <tr key={k} style={vStyle}>
                  <td colSpan={columns.length + (selectable ? 1 : 0)} style={{ padding: pad }}>{label}</td>
                </tr>
              );
            }
            const hasChildren = expandable && row.children && row.children.length > 0;
            const isExpanded = expSet.has(k);
            return (
              <tr
                key={k}
                onClick={onRowClick ? () => onRowClick(row, i) : undefined}
                style={{
                  cursor: onRowClick ? 'pointer' : 'default',
                  background: active ? 'var(--color-surface-selected)' : (vStyle ? vStyle.background : 'transparent'),
                  transition: 'background var(--duration-fast)',
                }}
                onMouseEnter={hoverable && !vStyle ? (e) => { if (!active) e.currentTarget.style.background = 'var(--color-surface-subtle)'; } : undefined}
                onMouseLeave={hoverable && !vStyle ? (e) => { if (!active) e.currentTarget.style.background = 'transparent'; } : undefined}
              >
                {selectable ? (
                  <td style={{ padding: pad, borderTop: vStyle ? (vStyle.borderTop || '1px solid var(--color-border-subtle)') : '1px solid var(--color-border-subtle)', position: stickyFirstColumn ? 'sticky' : 'static', left: 0, zIndex: stickyFirstColumn ? 1 : 'auto', background: stickyFirstColumn ? (active ? 'var(--color-surface-selected)' : (vStyle ? vStyle.background : stickyColBg)) : 'transparent' }} onClick={(e) => e.stopPropagation()}>
                    <InputCheckbox checked={selSet.has(k)} onChange={() => toggleOne(k)} showLabel={false} />
                  </td>
                ) : null}
                {columns.map((c, ci) => {
                  const cellValue = c.render ? c.render(row, i) : row[c.key];
                  const content = (expandable && ci === 0) ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, paddingLeft: depth * 18 }}>
                      {hasChildren ? (
                        <button
                          onClick={(e) => { e.stopPropagation(); onToggleExpand && onToggleExpand(k); }}
                          aria-label={isExpanded ? 'Recolher' : 'Expandir'}
                          style={{ display: 'inline-flex', width: 16, height: 16, alignItems: 'center', justifyContent: 'center', border: 'none', background: 'transparent', color: 'var(--color-text-muted)', cursor: 'pointer', padding: 0, flexShrink: 0 }}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isExpanded ? 'rotate(90deg)' : 'none', transition: 'transform var(--duration-fast)' }}><polyline points="9 6 15 12 9 18" /></svg>
                        </button>
                      ) : <span style={{ width: 16, flexShrink: 0 }} />}
                      <span>{cellValue}</span>
                    </span>
                  ) : cellValue;
                  return (
                  <td
                    key={c.key}
                    style={{
                      padding: pad, textAlign: c.numeric ? 'right' : (c.align || 'left'),
                      width: c.width || 'auto', minWidth: c.minWidth ?? c.width ?? undefined,
                      boxSizing: 'border-box',
                      font: c.mono ? '400 12px/16px var(--font-mono)' : d.font,
                      fontFamily: c.mono ? 'var(--font-mono)' : 'var(--font-sans)',
                      fontVariantNumeric: c.numeric ? 'tabular-nums' : 'normal',
                      color: c.muted ? 'var(--color-text-muted)' : 'var(--color-text-primary)',
                      fontWeight: vStyle ? vStyle.fontWeight : 'inherit',
                      borderTop: vStyle ? (vStyle.borderTop || '1px solid var(--color-border-subtle)') : '1px solid var(--color-border-subtle)',
                      whiteSpace: c.wrap ? 'normal' : 'nowrap',
                      maxWidth: c.maxWidth || (c.lockWidth ? (c.width || c.minWidth) : 'none'),
                      overflow: (c.maxWidth || c.lockWidth) ? 'hidden' : 'visible',
                      textOverflow: (c.maxWidth || c.lockWidth) ? 'ellipsis' : 'clip',
                      ...pinStyle(c, ci, active ? 'var(--color-surface-selected)' : (vStyle ? vStyle.background : stickyColBg)),
                    }}
                  >
                    {content}
                  </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
