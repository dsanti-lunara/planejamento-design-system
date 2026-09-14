import React from 'react';
import { TagTagChip } from './TagTagChip.jsx';

// figma node: 7243:7439 Input/MultiSelect — consolidated: one real dropdown
// (click to open, checkbox options, chip removal, real hover/focus) instead
// of 5 duplicated static bodies. Flexible width instead of a fixed 520px box.
function borderFor({ disabled, error, open, hover }) {
  if (disabled) return { width: 1, color: 'var(--color-border-default)' };
  if (error) return { width: 1, color: 'var(--color-border-negative)' };
  if (open) return { width: 1, color: 'var(--color-border-brand)' };
  if (hover) return { width: 1, color: 'var(--color-border-strong)' };
  return { width: 1, color: 'var(--color-border-default)' };
}

export function InputMultiSelect(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Produtos", options: _p.options ?? ["VM Produto A", "VM Produto B", "VM Produto C", "VM Financeiro"] };
  const isControlled = _p.value !== undefined && !!_p.onChange;
  const [innerValue, setInnerValue] = React.useState(Array.isArray(_p.value) ? _p.value : []);
  const value = isControlled ? _p.value : innerValue;
  const forced = ["disabled", "error"].includes(props.state) ? props.state : null;
  const disabled = forced === "disabled";
  const error = forced === "error";
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => { if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open]);

  const commit = (next) => { if (!isControlled) setInnerValue(next); props.onChange && props.onChange(next); };
  const toggleOption = (opt) => commit(value.includes(opt) ? value.filter(v => v !== opt) : [...value, opt]);
  const removeAt = (opt) => commit(value.filter(v => v !== opt));

  const border = borderFor({ disabled, error, open, hover });

  return (
    <div ref={rootRef} className={props.className} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 6, position: 'relative', ...props.style }}>
      <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 500, fontSize: 12, lineHeight: '100%', color: 'var(--color-text-primary)' }}>{props.label}</span>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => !disabled && setOpen(o => !o)}
        style={{
          width: '100%', minHeight: 40, borderRadius: 8, backgroundColor: 'var(--color-surface-card)',
          boxShadow: `inset 0 0 0 ${border.width}px ${border.color}`,
          display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center', padding: '6px 12px', boxSizing: 'border-box',
          cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
          transition: 'box-shadow var(--dur-fast,120ms)',
        }}
      >
        {value.length === 0 && (
          <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 13, color: 'var(--color-text-secondary)' }}>Selecione valores</span>
        )}
        {value.map(v => <TagTagChip key={v} label={v} onRemove={disabled ? undefined : () => removeAt(v)} />)}
      </div>
      {open && !disabled && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4, zIndex: 10, maxHeight: 220, overflowY: 'auto',
          backgroundColor: 'var(--color-surface-raised)', borderRadius: 8, boxShadow: 'var(--shadow-md, 0 4px 16px rgba(0,0,0,0.12))',
          padding: 4,
        }}>
          {props.options.map(opt => {
            const checked = value.includes(opt);
            return (
              <div key={opt} onClick={() => toggleOption(opt)} style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 6, cursor: 'pointer',
                fontFamily: 'var(--font-sans, Inter, sans-serif)', fontSize: 13, color: 'var(--color-text-primary)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-action-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span style={{
                  width: 16, height: 16, borderRadius: 4, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: checked ? 'var(--color-action-primary)' : 'transparent',
                  boxShadow: `inset 0 0 0 1px ${checked ? 'var(--color-border-brand)' : 'var(--color-border-strong)'}`,
                  color: 'var(--color-text-inverse)', fontSize: 11,
                }}>{checked ? '✓' : ''}</span>
                {opt}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default InputMultiSelect;
