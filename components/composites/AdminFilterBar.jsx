import React from 'react';
import { Button } from "../actions/Button.jsx";
import { ActionIconButtonSecondary } from "../actions/ActionIconButtonSecondary.jsx";
import { Field } from "../forms/Field.jsx";
import { DateRangePicker } from "../forms/DateRangePicker.jsx";
import { InputMultiSelect } from "../forms/InputMultiSelect.jsx";
import { TagFilterChip } from './TagFilterChip.jsx';

// figma node: 7268:7572 Admin/Filter Bar — the search field is now a contextual
// Field (type="search"), not SearchGlobalSearch: that component is the Topbar's
// global Nexo search (Ctrl+M) and doesn't belong inside a page-level filter bar.
// Every filter is opt-in via showSearch/showStatus/showProduct/showPeriod so a
// screen only renders the filters it actually uses.
export function AdminFilterBar(_p = {}) {
  const props = {
    ..._p,
    showSearch: _p.showSearch ?? true,
    searchPlaceholder: _p.searchPlaceholder ?? "Buscar",
    showStatus: _p.showStatus ?? true,
    statusLabel: _p.statusLabel ?? "Status",
    showProduct: _p.showProduct ?? true,
    productLabel: _p.productLabel ?? "Produto",
    showPeriod: _p.showPeriod ?? false,
    periodLabel: _p.periodLabel ?? "Período",
    activeFilters: _p.activeFilters ?? false,
    clearFilters: _p.clearFilters ?? true,
    viewControls: _p.viewControls ?? false,
    statusOptions: _p.statusOptions ?? ["Autorizado", "Restrito", "Pendente", "Arquivado"],
    productOptions: _p.productOptions ?? ["Claro Brasil", "Claro Empresas", "NET", "Vivo"],
    period: _p.period ?? { preset: "24h", start: "", end: "" },
    activeFilterChips: _p.activeFilterChips ?? [],
  };
  const [period, setPeriod] = React.useState(props.period);
  const handlePeriodChange = (v) => { setPeriod(v); props.onPeriodChange && props.onPeriodChange(v); };

  return (
    <div className={props.className} style={{
      width: "100%",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-sidebar)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: 12,
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "flex-end", flexWrap: "wrap" }}>
        {props.showSearch && (
          <Field
            type="search"
            placeholder={props.searchPlaceholder}
            value={props.searchValue}
            onChange={props.onSearchChange}
            style={{ width: 260, height: 40, flexShrink: 0 }}
          />
        )}
        {props.showStatus && (
        <InputMultiSelect
          style={{ width: 190, flexShrink: 0 }}
          label={props.statusLabel}
          options={props.statusOptions}
          value={props.statusValue}
          onChange={props.onStatusChange}
        />
        )}
        {props.showProduct && (
        <InputMultiSelect
          style={{ width: 220, flexShrink: 0 }}
          label={props.productLabel}
          options={props.productOptions}
          value={props.productValue}
          onChange={props.onProductChange}
        />
        )}
        {props.showPeriod && (
        <DateRangePicker
          style={{ width: 220, flexShrink: 0 }}
          label={props.periodLabel}
          value={period}
          onChange={handlePeriodChange}
        />
        )}
        <Button label="Mais filtros" size="default" style2="secondary" onClick={props.onMoreFilters} style={{ flexShrink: 0 }} />
        {props.clearFilters && (
          <Button label="Limpar filtros" size="default" style2="secondary" onClick={props.onClearFilters} style={{ flexShrink: 0 }} />
        )}
        {props.viewControls && (
          props.icon1 ?? <ActionIconButtonSecondary size={"sm"} state={"default"} />
        )}
      </div>
      {props.activeFilters && (
        <div style={{ display: "flex", flexDirection: "row", gap: 8, alignItems: "flex-start", flexWrap: "wrap" }}>
          {props.activeFilterChips.length ? props.activeFilterChips.map((c, i) => (
            <TagFilterChip key={i} style={{ flexShrink: 0 }} label={c.label} value={c.value} onClick={c.onRemove} />
          )) : <TagFilterChip style={{ flexShrink: 0 }} />}
        </div>
      )}
    </div>
  );
}
export default AdminFilterBar;
