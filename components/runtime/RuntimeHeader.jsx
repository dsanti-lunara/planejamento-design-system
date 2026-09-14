import { BrandProductLogoTile } from '../data-display/BrandProductLogoTile.jsx';

// figma node: 7427:11896 Runtime/Header
// Logo fixed: was a fictional "nexo" wordmark drawn from raw inline SVG paths
// (no such brand mark exists in source); replaced with the real NEXO lockup
// asset (assets/logos/nexo-logo-completa.svg) — the runtime/SEC report shell
// is NEXO's own product chrome, unlike NavSidebar/NavTopbar which carry the
// Claro partner mark.
export function RuntimeHeader(_p = {}) {
  const props = { ..._p, productName: _p.productName ?? "Claro Brasil • Visão Geral", productContext: _p.productContext ?? true, auxiliaryAction: _p.auxiliaryAction ?? false };
  return (
    <div className={props.className} style={{
      width: 1440,
      height: 64,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <img
          src="../../assets/logos/nexo-logo-completa.svg"
          alt="Nexo"
          style={{ display: "block", width: 74, height: 32, objectFit: "contain", flexShrink: 0 }}
        />
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-link)",
          flexShrink: 0,
        }}>{props.text2 ?? "←  Retornar ao Portal"}</span>
      </div>
      {props.productContext && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon1 ?? <BrandProductLogoTile fallback={"CB"} size={"sm"} shape={"rounded"} background={"subtle"} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.productName}</span>
        {props.auxiliaryAction && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-link)",
          flexShrink: 0,
        }}>{props.text3 ?? "Ajuda"}</span>
        )}
      </div>
      )}
    </div>
  );
}
export default RuntimeHeader;
