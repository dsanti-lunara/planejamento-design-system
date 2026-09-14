import React from 'react';

const presets = [
  { id: 'today', label: 'Hoje' },
  { id: '24h', label: 'Últimas 24h' },
  { id: '7d', label: 'Últimos 7 dias' },
  { id: '30d', label: 'Últimos 30 dias' },
  { id: 'custom', label: 'Personalizado' },
];

const calendarIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
);

export function DateRangePicker({
  value = { preset: '24h', start: '', end: '' },
  onChange,
  size = 'md',
  style = {},
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const h = size === 'sm' ? 34 : size === 'lg' ? 44 : 38;

  React.useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);

  const set = (patch) => onChange && onChange({ ...value, ...patch });
  const active = presets.find((p) => p.id === value.preset);
  const label = value.preset === 'custom' && value.start && value.end ? `${value.start} – ${value.end}` : (active ? active.label : 'Personalizado');

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-flex', ...style }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, height: h, padding: '0 12px',
          background: 'var(--surface-card)', border: `1px solid ${open ? 'var(--color-primary)' : 'var(--border-default)'}`,
          borderRadius: 'var(--r-sm)', cursor: 'pointer', fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600,
          color: 'var(--text-heading)', whiteSpace: 'nowrap', boxShadow: open ? 'var(--shadow-focus)' : 'none',
          transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
        }}
      >
        <span style={{ display: 'inline-flex', width: 15, height: 15, color: 'var(--text-faint)' }}>{calendarIcon}</span>
        {label}
        <span style={{ display: 'inline-flex', color: 'var(--text-faint)' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-fast)' }}><polyline points="6 9 12 15 18 9" /></svg>
        </span>
      </button>

      {open ? (
        <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, zIndex: 50, width: 250, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-lg)', padding: 6, animation: 'nh-drp-in var(--dur-fast) var(--ease-out)' }}>
          <style>{'@keyframes nh-drp-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}'}</style>
          {presets.map((p) => (
            <div
              key={p.id}
              onClick={() => { set({ preset: p.id }); if (p.id !== 'custom') setOpen(false); }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px',
                borderRadius: 'var(--r-xs)', cursor: 'pointer', fontSize: 13,
                fontWeight: value.preset === p.id ? 700 : 500,
                color: value.preset === p.id ? 'var(--color-primary)' : 'var(--text-body)',
                background: value.preset === p.id ? 'var(--nh-blue-50)' : 'transparent',
              }}
              onMouseEnter={(e) => { if (value.preset !== p.id) e.currentTarget.style.background = 'var(--nh-bg-1)'; }}
              onMouseLeave={(e) => { if (value.preset !== p.id) e.currentTarget.style.background = 'transparent'; }}
            >
              {p.label}
            </div>
          ))}
          {value.preset === 'custom' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 8px 4px', borderTop: '1px solid var(--nh-line-100)', marginTop: 4 }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 4, font: 'var(--type-caption)', color: 'var(--text-faint)', fontWeight: 600 }}>
                De
                <input type="date" value={value.start} onChange={(e) => set({ start: e.target.value })} style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--r-xs)', padding: '7px 8px', fontFamily: 'var(--font-sans)', fontSize: 13, outline: 'none', color: 'var(--text-heading)' }} />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 4, font: 'var(--type-caption)', color: 'var(--text-faint)', fontWeight: 600 }}>
                Até
                <input type="date" value={value.end} onChange={(e) => set({ end: e.target.value })} style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--r-xs)', padding: '7px 8px', fontFamily: 'var(--font-sans)', fontSize: 13, outline: 'none', color: 'var(--text-heading)' }} />
              </label>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
