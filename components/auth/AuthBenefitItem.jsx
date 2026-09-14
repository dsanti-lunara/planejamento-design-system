import React from 'react';

// New: benefit-list item for auth marketing panels (icon chip + title + description).
const VARIANTS = {
  access: { path: 'M4 20V13M10 20V8M16 20V4', color: 'var(--blue-600-2)' },
  insights: { path: 'M3 17L8.5 11.5L12.5 15.5L21 7', color: 'var(--blue-600-2)' },
  security: { path: 'M12 3L19 6V11C19 16 15.5 19.5 12 21C8.5 19.5 5 16 5 11V6L12 3Z M9.5 12L11.5 14L15 10', color: 'var(--blue-600-2)' },
};

export function AuthBenefitItem(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? 'access',
    title: _p.title ?? 'Acesso centralizado',
    description: _p.description ?? 'Encontre todos os relatórios e análises da sua operação em um só lugar.',
  };
  const v = VARIANTS[props.variant] || VARIANTS.access;

  return (
    <div className={props.className} style={{
      width: '100%', display: 'flex', flexDirection: 'row', gap: 'clamp(8px, 1.4vh, 14px)', alignItems: 'flex-start',
      padding: 'clamp(8px, 1.4vh, 16px)', borderRadius: 12, backgroundColor: 'var(--color-surface-card)',
      boxShadow: 'inset 0 0 0 1px var(--color-border-subtle)', boxSizing: 'border-box',
      ...props.style,
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
        backgroundColor: 'var(--blue-50-2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {props.icon ?? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d={v.path} stroke={v.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2px, 0.6vh, 4px)', minWidth: 0 }}>
        <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 600, fontSize: 14, lineHeight: '18px', color: 'var(--color-text-primary)' }}>
          {props.title}
        </span>
        <span style={{
          fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 13, lineHeight: '18px', color: 'var(--color-text-secondary)',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {props.description}
        </span>
      </div>
    </div>
  );
}
export default AuthBenefitItem;
