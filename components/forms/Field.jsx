import React from 'react';
import { IconChevronDown } from "../icons/IconChevronDown.jsx";
import { IconSearch } from "../icons/IconSearch.jsx";

// figma node: 6646:2137 Field — consolidated from 24 duplicated static bodies
// into one component: real hover/focus, a real dropdown for type="select",
// a real typable input for type="search". `state` still accepts the demo-only
// overrides (disabled/error/loading/"no results") for storybook parity.
const HEIGHT = 'calc(var(--size-control-touch) * 1px)';

function borderFor({ disabled, error, active, hover }) {
  if (disabled) return { width: 1, color: 'var(--color-border-strong)' };
  if (error) return { width: 2, color: 'var(--color-border-negative)' };
  if (active) return { width: 2, color: 'var(--color-border-brand)' };
  if (hover) return { width: 1, color: 'var(--color-border-strong)' };
  return { width: 1, color: 'var(--color-border-default)' };
}

export function Field(_p = {}) {
  const props = {
    ..._p,
    selectionCount: _p.selectionCount ?? "3",
    value: _p.value ?? (_p.type === "search" ? "" : "Todos"),
    type: _p.type ?? "select",
    showSelectionCount: _p.showSelectionCount ?? false,
    label: _p.label ?? "Filtro",
    state: _p.state ?? "default",
    showTrailingIcon: _p.showTrailingIcon ?? true,
  };
  const options = props.options ?? ["Todos", "Ativo", "Bloqueado"];
  const forced = ["disabled", "error", "loading", "no results"].includes(props.state) ? props.state : null;
  const disabled = forced === "disabled";
  const error = forced === "error";
  const loading = forced === "loading";
  const noResults = forced === "no results";

  const [hover, setHover] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const isControlled = _p.value !== undefined && !!_p.onChange;
  const [innerValue, setInnerValue] = React.useState(props.value);
  const value = isControlled ? props.value : innerValue;
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => { if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open]);

  const commit = (v) => { if (!isControlled) setInnerValue(v); props.onChange && props.onChange(v); };
  const active = focused || open;
  const border = borderFor({ disabled, error, active, hover });

  if (props.type === "search") {
    return (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={props.className}
        style={{
          width: 300, height: HEIGHT, borderRadius: 8, backgroundColor: 'var(--color-surface-card)',
          boxShadow: `inset 0 0 0 ${border.width}px ${border.color}`,
          display: 'flex', gap: 8, padding: '0 12px', alignItems: 'center', boxSizing: 'border-box',
          opacity: disabled ? 0.55 : 1, transition: 'box-shadow var(--dur-fast,120ms)', ...props.style,
        }}
      >
        <input
          disabled={disabled}
          placeholder={props.placeholder ?? "Buscar..."}
          {...(isControlled ? { value } : { defaultValue: value })}
          onChange={(e) => { if (!isControlled) setInnerValue(e.target.value); props.onChange && props.onChange(e.target.value); }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 12, lineHeight: '18px',
            color: error ? 'var(--color-text-negative)' : 'var(--color-text-primary)',
          }}
        />
        {props.showTrailingIcon && <span style={{ width: 16, height: 16, flexShrink: 0, color: 'var(--color-text-muted)' }}>{props.icon1 ?? <IconSearch />}</span>}
      </div>
    );
  }

  return (
    <div ref={rootRef} className={props.className} style={{ width: 250, position: 'relative', ...props.style }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => { if (disabled) return; if (props.type === 'select') setOpen(o => !o); }}
        tabIndex={disabled ? -1 : 0}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%', height: HEIGHT, borderRadius: 8,
          backgroundColor: disabled ? 'var(--color-surface-subtle)' : 'var(--color-surface-card)',
          boxShadow: `inset 0 0 0 ${border.width}px ${border.color}`,
          display: 'flex', padding: '0 12px', justifyContent: 'space-between', alignItems: 'center', gap: 8,
          boxSizing: 'border-box', cursor: disabled ? 'not-allowed' : props.type === 'select' ? 'pointer' : 'default',
          opacity: disabled ? 0.55 : 1, transition: 'box-shadow var(--dur-fast,120ms)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, flexGrow: 1, overflow: 'hidden' }}>
          <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 12, lineHeight: '16px', color: error ? 'var(--color-text-negative)' : 'var(--color-text-primary)', whiteSpace: 'nowrap' }}>{props.label}</span>
          <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 12, lineHeight: '18px', color: error ? 'var(--color-text-negative)' : 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>
            {loading ? 'Carregando…' : noResults ? 'Nenhum resultado' : value}
          </span>
        </div>
        {props.showSelectionCount && (
          <div style={{
            height: 24, borderRadius: 999, backgroundColor: 'var(--color-surface-selected)',
            boxShadow: 'inset 0 0 0 1px var(--color-border-brand)', display: 'flex', alignItems: 'center', padding: '4px 8px', flexShrink: 0,
          }}>
            <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 500, fontSize: 12, lineHeight: '100%', color: 'var(--color-text-brand)' }}>{props.selectionCount}</span>
          </div>
        )}
        {props.showTrailingIcon && (
          <span style={{ width: 16, height: 16, flexShrink: 0, color: 'var(--color-text-muted)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-fast,120ms)' }}>
            {props.trailingIcon ?? <IconChevronDown />}
          </span>
        )}
      </div>
      {open && !disabled && props.type === 'select' && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4, zIndex: 10,
          backgroundColor: 'var(--color-surface-raised)', borderRadius: 8,
          boxShadow: 'var(--shadow-md, 0 6px 16px rgba(7,25,77,0.12))', padding: 4,
        }}>
          {options.map(opt => (
            <div
              key={opt}
              onClick={() => { commit(opt); setOpen(false); }}
              style={{
                padding: '8px 10px', borderRadius: 6, cursor: 'pointer', fontFamily: 'var(--font-sans, Inter, sans-serif)', fontSize: 12,
                backgroundColor: opt === value ? 'var(--color-surface-selected)' : 'transparent',
                color: opt === value ? 'var(--color-text-brand)' : 'var(--color-text-primary)',
              }}
              onMouseEnter={(e) => { if (opt !== value) e.currentTarget.style.backgroundColor = 'var(--color-action-hover)'; }}
              onMouseLeave={(e) => { if (opt !== value) e.currentTarget.style.backgroundColor = 'transparent'; }}
            >{opt}</div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Field;
