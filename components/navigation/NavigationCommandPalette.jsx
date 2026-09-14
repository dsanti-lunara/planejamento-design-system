import React from 'react';
import { IconSearch } from '../icons/IconSearch.jsx';

// Intentional addition — not in the Figma component inventory. Adapted from a reference
// implementation supplied by the team, retokenized onto this system's fig-tokens (no --nh-*
// values) so it matches the rest of NEXO's surfaces (radius 8, overlay shadow used by
// ActionDropdownMenu/ActionPopover, --color-* / --font-* tokens).
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

export function NavigationCommandPalette({
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

  React.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'm') { e.preventDefault(); setOpen(!open); }
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
      style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '11vh 24px 24px', boxSizing: 'border-box', background: 'rgba(15,23,42,0.45)' }}
    >
      <div role="dialog" aria-modal="true" style={{
        width, maxWidth: '100%', maxHeight: '72vh', display: 'flex', flexDirection: 'column',
        background: 'var(--color-surface-raised)', borderRadius: 8,
        boxShadow: 'inset 0 0 0 1px var(--color-border-subtle), 0px 6px 16px 0px rgba(0,20,51,0.12)',
        overflow: 'hidden', ...style,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', borderBottom: '1px solid var(--color-border-default)', flexShrink: 0 }}>
          <span style={{ display: 'inline-flex', width: 16, height: 16, color: 'var(--color-icon-secondary)', flexShrink: 0 }}><IconSearch style={{ width: 16, height: 16 }} /></span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--color-text-primary)' }}
          />
          <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>ESC</span>
        </div>
        <div style={{ overflowY: 'auto', padding: 6, flex: 1, minHeight: 0 }}>
          {flatRows.length === 0 ? (
            <div style={{ padding: '28px 16px', textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--color-text-muted)' }}>{emptyLabel}</div>
          ) : sections.map((sec, si) => (
            <div key={si} style={{ marginBottom: 4 }}>
              {sec.header ? (
                <div style={{ padding: '8px 10px 4px', fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontFamily: 'var(--font-sans)' }}>{sec.header}</div>
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
                      border: 'none', borderRadius: 6, background: active ? 'var(--color-surface-selected)' : 'transparent',
                      cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500,
                      color: active ? 'var(--color-text-link)' : 'var(--color-text-primary)',
                    }}
                  >
                    {it.icon ? <span style={{ display: 'inline-flex', width: 16, height: 16, flexShrink: 0, color: active ? 'var(--color-text-link)' : 'var(--color-icon-secondary)' }}>{it.icon}</span> : null}
                    <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.label}</span>
                    {it.shortcut ? <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>{it.shortcut}</span> : null}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '9px 16px', borderTop: '1px solid var(--color-border-default)', background: 'var(--color-surface-subtle)', fontSize: 11, color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>
          <span>↑↓ navegar</span><span>↵ selecionar</span><span>esc fechar</span>
        </div>
      </div>
    </div>
  );
}
export default NavigationCommandPalette;
