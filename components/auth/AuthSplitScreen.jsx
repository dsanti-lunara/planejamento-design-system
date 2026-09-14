import React from 'react';

// New: two-column shell for auth flows (login/reset/etc.) — left marketing
// panel (brand, headline, benefits, decorative mini-chart collage, partner
// footer) and a right panel that hosts the actual form (children).
function MiniLineTile() {
  return (
    <div style={{ width: 168, padding: '12px 14px', borderRadius: 12, backgroundColor: 'var(--color-surface-card)', boxShadow: 'inset 0 0 0 1px var(--color-border-subtle)', boxSizing: 'border-box' }}>
      <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 600, fontSize: 11, color: 'var(--color-text-link)' }}>Indicadores</span>
      <svg width="100%" height="46" viewBox="0 0 140 46" style={{ marginTop: 6, display: 'block' }}>
        <polyline points="4,34 26,22 48,28 70,12 92,18 114,6 136,10" fill="none" stroke="var(--blue-600-2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
function MiniStatTile() {
  return (
    <div style={{ width: 148, padding: '12px 14px', borderRadius: 12, backgroundColor: 'var(--color-surface-card)', boxShadow: 'inset 0 0 0 1px var(--color-border-subtle)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 600, fontSize: 11, color: 'var(--color-text-secondary)' }}>Performance</span>
      <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 700, fontSize: 20, color: 'var(--color-data-positive)' }}>+18,4%</span>
      <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 10, color: 'var(--color-text-muted)' }}>vs. período anterior</span>
    </div>
  );
}
function MiniDonutTile() {
  return (
    <div style={{ width: 118, height: 118, borderRadius: '50%', backgroundColor: 'var(--color-surface-card)', boxShadow: 'inset 0 0 0 1px var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="86" height="86" viewBox="0 0 42 42">
        <circle cx="21" cy="21" r="16" fill="none" stroke="var(--color-border-subtle)" strokeWidth="6" />
        <circle cx="21" cy="21" r="16" fill="none" stroke="var(--blue-600-2)" strokeWidth="6" strokeDasharray="62 100" strokeLinecap="round" transform="rotate(-90 21 21)" />
      </svg>
    </div>
  );
}
function MiniBarTile() {
  const heights = [14, 26, 20, 36, 30, 40];
  return (
    <div style={{ width: 156, padding: '12px 14px', borderRadius: 12, backgroundColor: 'var(--color-surface-card)', boxShadow: 'inset 0 0 0 1px var(--color-border-subtle)', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 46 }}>
        {heights.map((h, i) => (
          <div key={i} style={{ width: 12, height: h, borderRadius: 3, backgroundColor: 'var(--blue-300)', opacity: 0.5 + (i / heights.length) * 0.5 }} />
        ))}
      </div>
    </div>
  );
}

export function AuthSplitScreen(_p = {}) {
  const props = {
    ..._p,
    productName: _p.productName ?? 'Planejamento Analytics',
    title: _p.title ?? 'Bem-vindo ao',
    highlight: _p.highlight ?? 'Nexo',
    description: _p.description ?? 'Centralize relatórios, acompanhe indicadores e tome decisões com mais confiança.',
    showDecoration: _p.showDecoration ?? true,
  };

  return (
    <div className={props.className} style={{
      width: '100%', height: '100%', display: 'flex',
      backgroundColor: 'var(--color-surface-page, var(--neutral-0))',
      fontFamily: 'var(--font-sans, Inter, sans-serif)',
      boxSizing: 'border-box',
      ...props.style,
    }}>
      <div style={{
        flex: '1 1 55%', minWidth: 0, height: '100%', position: 'relative', overflow: 'hidden',
        backgroundColor: 'var(--color-surface-canvas)',
        display: 'grid', gridTemplateRows: 'auto 1fr auto',
        padding: 'clamp(24px, 4vh, 48px) clamp(32px, 5vw, 56px)',
        boxSizing: 'border-box',
      }}>
        <div style={{ position: 'relative', zIndex: 1, alignSelf: 'flex-start', display: 'flex', alignItems: 'flex-end', gap: 8 }}>
          {props.logo ?? (
            <React.Fragment>
              <img src="../../assets/logos/nexo-logo-completa.svg" alt="Nexo" style={{ alignSelf: 'flex-start', height: 32, width: 'auto', display: 'block', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Quicksand, var(--font-sans, Inter, sans-serif)', fontWeight: 500, fontSize: 11, lineHeight: '14px', color: 'var(--neutral-600)', paddingBottom: 3 }}>by Planejamento Analytics</span>
            </React.Fragment>
          )}
        </div>

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(16px, 2.6vh, 32px)', maxWidth: 420 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 1.2vh, 12px)' }}>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display, "Plus Jakarta Sans", Inter, sans-serif)', fontWeight: 700, fontSize: 32, lineHeight: '38px', color: 'var(--color-text-primary)' }}>
              {props.title}<br /><span style={{ color: 'var(--color-text-link)' }}>{props.highlight}</span>
            </h1>
            <p style={{ margin: 0, fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 15, lineHeight: '22px', color: 'var(--color-text-secondary)' }}>
              {props.description}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 1.5vh, 12px)' }}>
            {props.benefits}
          </div>
        </div>

        {props.showDecoration && (
          <div aria-hidden="true" className="ds-auth-decor" style={{ position: 'absolute', right: -110, top: 96, width: 380, height: 420, zIndex: 0, opacity: 0.92, transformOrigin: 'top right' }}>
            <div style={{ position: 'absolute', left: 0, top: 0 }}><MiniLineTile /></div>
            <div style={{ position: 'absolute', left: 10, top: 150 }}><MiniDonutTile /></div>
            <div style={{ position: 'absolute', left: 150, top: 90 }}><MiniStatTile /></div>
            <div style={{ position: 'absolute', left: 170, top: 250 }}><MiniBarTile /></div>
            <style>{"@media (max-height:820px){.ds-auth-decor{transform:scale(.9) translate(10px,-10px)}}@media (max-height:700px){.ds-auth-decor{transform:scale(.85) translate(20px,-24px)}}"}</style>
          </div>
        )}

        <div style={{ position: 'relative', zIndex: 1, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 16 }}>
          {props.footer ?? (
            <img src="../../assets/logos/aec-white.svg" alt="AeC" style={{ height: 20, display: 'block', filter: 'invert(1)', opacity: 0.72 }} />
          )}
        </div>
      </div>

      <div style={{
        flex: '1 1 45%', minWidth: 0, height: '100%', display: 'flex', flexDirection: 'column',
        backgroundColor: 'var(--color-surface-page, var(--neutral-0))', padding: 'clamp(20px, 4vh, 40px)', boxSizing: 'border-box',
      }}>
        <div style={{ flex: '1 1 auto', minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{props.children}</div>
        {props.rightPanelFooter && (
          <div style={{ flexShrink: 0, display: 'flex', justifyContent: 'flex-end', paddingTop: 'clamp(12px, 1.6vh, 20px)' }}>{props.rightPanelFooter}</div>
        )}
      </div>
    </div>
  );
}
export default AuthSplitScreen;
