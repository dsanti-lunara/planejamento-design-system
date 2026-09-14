import React from 'react';
import { IconCalendar } from '../icons/IconCalendar.jsx';
import { IconChevronDown } from '../icons/IconChevronDown.jsx';

// Period filter — button + popover. Presets first (Hoje/24h/7d/30d), native
// date inputs only for "Personalizado". Retokenized onto this system's
// tokens (--color-*, --font-sans, --duration-fast) from an uploaded
// reference built for a different kit (--surface-card/--nh-*/--r-sm).
const HEIGHT = 'calc(var(--size-control-touch) * 1px)';
const PRESETS = [
  { id: 'today', label: 'Hoje' },
  { id: '24h', label: 'Últimas 24h' },
  { id: '7d', label: 'Últimos 7 dias' },
  { id: '30d', label: 'Últimos 30 dias' },
  { id: 'month', label: 'Mês atual' },
  { id: 'custom', label: 'Personalizado' },
];

export function DateRangePicker(_p = {}) {
  const props = { ..._p, value: _p.value ?? { preset: '24h', start: '', end: '' }, label: _p.label ?? 'Período' };
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);

  const set = (patch) => props.onChange && props.onChange({ ...props.value, ...patch });
  const active = PRESETS.find((p) => p.id === props.value.preset);
  const valueLabel = props.value.preset === 'custom' && props.value.start && props.value.end
    ? `${props.value.start} – ${props.value.end}`
    : (active ? active.label : 'Personalizado');

  return (
    <div ref={ref} className={props.className} style={{ width: 250, position: 'relative', ...props.style }}>
      <div
        onClick={() => setOpen((v) => !v)}
        tabIndex={0}
        style={{
          width: '100%', height: HEIGHT, borderRadius: 8, backgroundColor: 'var(--color-surface-card)',
          boxShadow: `inset 0 0 0 ${open ? 2 : 1}px ${open ? 'var(--color-border-brand)' : 'var(--color-border-default)'}`,
          display: 'flex', padding: '0 12px', justifyContent: 'space-between', alignItems: 'center', gap: 8,
          boxSizing: 'border-box', cursor: 'pointer', transition: 'box-shadow var(--duration-fast) var(--ease-standard)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, flexGrow: 1, overflow: 'hidden' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 12, lineHeight: '16px', color: 'var(--color-text-primary)', whiteSpace: 'nowrap' }}>{props.label}</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 12, lineHeight: '18px', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{valueLabel}</span>
        </div>
        <span style={{ width: 16, height: 16, flexShrink: 0, color: 'var(--color-text-muted)' }}><IconCalendar /></span>
        <span style={{ width: 16, height: 16, flexShrink: 0, color: 'var(--color-text-muted)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--duration-fast) var(--ease-standard)' }}><IconChevronDown /></span>
      </div>

      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, marginTop: 4, zIndex: 10, width: '100%',
          backgroundColor: 'var(--color-surface-raised)', borderRadius: 8, boxShadow: 'var(--shadow-overlay)', padding: 4,
        }}>
          {PRESETS.map((p) => (
            <div
              key={p.id}
              onClick={() => { set({ preset: p.id }); if (p.id !== 'custom') setOpen(false); }}
              style={{
                padding: '8px 10px', borderRadius: 6, cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 12,
                fontWeight: props.value.preset === p.id ? 600 : 400,
                backgroundColor: props.value.preset === p.id ? 'var(--color-surface-selected)' : 'transparent',
                color: props.value.preset === p.id ? 'var(--color-text-brand)' : 'var(--color-text-primary)',
              }}
              onMouseEnter={(e) => { if (props.value.preset !== p.id) e.currentTarget.style.backgroundColor = 'var(--color-action-hover)'; }}
              onMouseLeave={(e) => { if (props.value.preset !== p.id) e.currentTarget.style.backgroundColor = 'transparent'; }}
            >{p.label}</div>
          ))}
          {props.value.preset === 'custom' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 8px 6px', borderTop: '1px solid var(--color-border-subtle)', marginTop: 4 }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>
                De
                <input type="date" value={props.value.start ?? ''} onChange={(e) => set({ start: e.target.value })}
                  style={{ border: '1px solid var(--color-border-default)', borderRadius: 6, padding: '7px 8px', fontFamily: 'var(--font-sans)', fontSize: 12, outline: 'none', color: 'var(--color-text-primary)', background: 'var(--color-surface-card)' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>
                Até
                <input type="date" value={props.value.end ?? ''} onChange={(e) => set({ end: e.target.value })}
                  style={{ border: '1px solid var(--color-border-default)', borderRadius: 6, padding: '7px 8px', fontFamily: 'var(--font-sans)', fontSize: 12, outline: 'none', color: 'var(--color-text-primary)', background: 'var(--color-surface-card)' }} />
              </label>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default DateRangePicker;
