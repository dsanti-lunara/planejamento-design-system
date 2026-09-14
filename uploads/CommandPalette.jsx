import React from 'react';

function norm(s) {
  return (s === undefined || s === null ? '' : String(s)).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}
function matches(it, q) {
  if (!q) return true;
  return norm(it.label).includes(q) || norm(it.keywords).includes(q);
}
function buildSections(items) {
  const sections = [];
  let current = { header: null, rows: [] };
  const flush = () => { if (current.rows.length) sections.push(current); };
  items.forEach((it) => {
    if (it.divider) { flush(); current = { header: null, rows: [] }; return; }
    if (it.header) { flush(); current = { header: it.header, rows: [] }; return; }
    current.rows.push(it);
  });
  flush();
  return sections;
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
  );
}

export function CommandPalette({
  open: controlledOpen,
  onOpenChange,
  items = [],
  placeholder = 'Buscar comando ou ação…',
  emptyLabel = 'Nenhum resultado.',
  width = 560,
  style = {},
}) {
  const [innerOpen, setInnerOpen] = React.useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : innerOpen;
  const setOpen = (v) => { if (!isControlled) setInnerOpen(v); onOpenChange && onOpenChange(v); };

  const [query, setQuery] = React.useState('');
  const [activeIdx, setActiveIdx] = React.useState(0);
  const inputRef = React.useRef(null);

  // ⌘K / Ctrl+K global toggle — the component's defining behavior.
  React.useEffect(() => {
    const onKey = (e) => {
      const k = e.key ? e.key.toLowerCase() : '';
      if ((e.metaKey || e.ctrlKey) && k === 'k') { e.preventDefault(); setOpen(!open); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  React.useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIdx(0);
      const t = setTimeout(() => { if (inputRef.current) inputRef.current.focus(); }, 10);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [open]);

  React.useEffect(() => { setActiveIdx(0); }, [query]);

  if (!open) return null;

  const q = norm(query);
  const filteredItems = items.filter((it) => it.header || it.divider || matches(it, q));
  const sections = buildSections(filteredItems);
  const flatRows = sections.reduce((acc, s) => acc.concat(s.rows), []);

  const runRow = (it) => { setOpen(false); it.onRun && it.onRun(); };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, flatRows.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); const it = flatRows[activeIdx]; if (it) runRow(it); }
  };

  let flatIndex = -1;

  return (
    <div
      onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: '11vh 24px 24px', boxSizing: 'border-box',
        background: 'rgba(11, 28, 58, 0.45)', backdropFilter: 'blur(2px)',
        animation: 'nh-cmdk-fade var(--dur-base) var(--ease-out)',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        style={{
          width, maxWidth: '100%', maxHeight: '72vh',
          display: 'flex', flexDirection: 'column',
          background: 'var(--surface-card)', borderRadius: 'var(--r-xl)',
          boxShadow: 'var(--shadow-lg)', overflow: 'hidden',
          animation: 'nh-cmdk-pop var(--dur-base) var(--ease-out)',
          ...style,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '15px 18px', borderBottom: '1px solid var(--nh-line-100)', flexShrink: 0 }}>
          <span style={{ display: 'inline-flex', width: 19, height: 19, color: 'var(--text-faint)', flexShrink: 0 }}><SearchIcon /></span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--text-heading)' }}
          />
          <span style={{ fontSize: 11, color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>ESC</span>
        </div>

        <div style={{ overflowY: 'auto', padding: 6, flex: 1, minHeight: 0 }}>
          {flatRows.length === 0 ? (
            <div style={{ padding: '32px 16px', textAlign: 'center', font: 'var(--type-table)', color: 'var(--text-faint)' }}>{emptyLabel}</div>
          ) : sections.map((sec, si) => (
            <div key={si} style={{ marginBottom: 4 }}>
              {sec.header ? (
                <div style={{ padding: '8px 10px 4px', fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{sec.header}</div>
              ) : null}
              {sec.rows.map((it) => {
                flatIndex += 1;
                const idx = flatIndex;
                const active = idx === activeIdx;
                return (
                  <button
                    key={it.id || idx}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => runRow(it)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '9px 10px',
                      border: 'none', borderRadius: 'var(--r-xs)', background: active ? 'var(--nh-blue-50)' : 'transparent',
                      cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 500,
                      color: active ? 'var(--color-primary)' : 'var(--text-body)',
                    }}
                  >
                    {it.icon ? <span style={{ display: 'inline-flex', width: 16, height: 16, flexShrink: 0, color: active ? 'var(--color-primary)' : 'var(--text-faint)' }}>{it.icon}</span> : null}
                    <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.label}</span>
                    {it.shortcut ? <span style={{ fontSize: 11, color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>{it.shortcut}</span> : null}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '9px 18px', borderTop: '1px solid var(--nh-line-100)', background: 'var(--nh-bg-1)', fontSize: 11, color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>
          <span>↑↓ navegar</span>
          <span>↵ selecionar</span>
          <span>esc fechar</span>
        </div>

        <style>{'@keyframes nh-cmdk-fade{from{opacity:0}to{opacity:1}}@keyframes nh-cmdk-pop{from{opacity:0;transform:translateY(-8px) scale(0.98)}to{opacity:1;transform:none}}'}</style>
      </div>
    </div>
  );
}
