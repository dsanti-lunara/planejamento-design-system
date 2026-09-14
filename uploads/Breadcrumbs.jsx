import React from 'react';
import { Dropdown } from './Dropdown';

function ChevronRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
  );
}

export function Breadcrumbs({ items = [], maxItems, separator = null, style = {} }) {
  if (!items.length) return null;
  const sep = separator || <ChevronRight />;

  let visible = items;
  let hidden = null;
  if (maxItems && items.length > maxItems) {
    const tailCount = Math.max(maxItems - 1, 1);
    const tail = items.slice(items.length - tailCount);
    const middle = items.slice(1, items.length - tailCount);
    if (middle.length) {
      hidden = middle;
      visible = [items[0], null, ...tail];
    }
  }

  return (
    <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6, fontFamily: 'var(--font-sans)', fontSize: 13, ...style }}>
      {visible.map((it, i) => {
        const isLast = i === visible.length - 1;
        let node;
        if (it === null) {
          node = (
            <Dropdown
              trigger={
                <span style={{ display: 'inline-flex', alignItems: 'center', padding: '3px 6px', borderRadius: 'var(--r-xs)', color: 'var(--text-faint)', cursor: 'pointer', letterSpacing: '1px', lineHeight: 1 }}>
                  •••
                </span>
              }
              align="left"
              width={190}
              items={(hidden || []).map((h) => ({ label: h.label, icon: h.icon, onClick: h.onClick }))}
            />
          );
        } else {
          const clickable = !isLast && !!it.onClick;
          node = (
            <span
              onClick={clickable ? it.onClick : undefined}
              aria-current={isLast ? 'page' : undefined}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                color: isLast ? 'var(--text-heading)' : 'var(--text-muted)',
                fontWeight: isLast ? 600 : 500,
                cursor: clickable ? 'pointer' : 'default',
                transition: 'color var(--dur-fast)',
              }}
              onMouseEnter={(e) => { if (clickable) e.currentTarget.style.color = 'var(--color-primary)'; }}
              onMouseLeave={(e) => { if (clickable) e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              {it.icon ? <span style={{ display: 'inline-flex', width: 14, height: 14, flexShrink: 0 }}>{it.icon}</span> : null}
              {it.label}
            </span>
          );
        }
        return (
          <React.Fragment key={i}>
            {node}
            {!isLast ? <span style={{ display: 'inline-flex', color: 'var(--text-faint)', opacity: 0.7, flexShrink: 0 }}>{sep}</span> : null}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
