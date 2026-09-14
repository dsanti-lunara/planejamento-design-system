import React from 'react';

export function Tabs({ tabs = [], activeId, onSelect, style = {} }) {
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 4, borderBottom: '1px solid var(--border-subtle)', ...style }}>
      {tabs.map((t) => {
        const id = typeof t === 'string' ? t : t.id;
        const label = typeof t === 'string' ? t : t.label;
        const icon = typeof t === 'string' ? null : t.icon;
        const active = id === activeId;
        return (
          <button
            key={id}
            onClick={() => onSelect && onSelect(id)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '11px 14px',
              marginBottom: -1,
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              fontWeight: active ? 700 : 500,
              color: active ? 'var(--color-primary)' : 'var(--text-muted)',
              borderBottom: `2px solid ${active ? 'var(--color-primary)' : 'transparent'}`,
              transition: 'color var(--dur-fast)',
              whiteSpace: 'nowrap',
            }}
          >
            {icon ? <span style={{ display: 'inline-flex', width: 16, height: 16 }}>{icon}</span> : null}
            {label}
          </button>
        );
      })}
    </div>
  );
}
