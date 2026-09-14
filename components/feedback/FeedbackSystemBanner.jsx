import React from 'react';
// Improved: the "×" and CTA were rendered but inert — now the × really dismisses (self-hides, or calls `onDismiss` when `open` is controlled) and `onCtaClick` fires the CTA.
// figma node: 7241:7364 Feedback/System Banner (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tone=" + __venc(p.tone);

export function FeedbackSystemBanner(_p = {}) {
  const props = { ..._p, message: _p.message ?? "Mensagem de sistema", tone: _p.tone ?? "info", cTA: _p.cTA ?? "Saiba mais", dismiss: _p.dismiss ?? true };
  const isControlled = props.open !== undefined;
  const [innerOpen, setInnerOpen] = React.useState(true);
  const open = isControlled ? props.open : innerOpen;
  const close = () => { if (!isControlled) setInnerOpen(false); props.onDismiss && props.onDismiss(); };
  if (!open) return null;
  const __body0 = () => (
    <div className={props.className} style={{
      width: "100%",
      minWidth: 280,
      minHeight: 56,
      borderRadius: 8,
      backgroundColor: "var(--color-state-info-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 24,
        height: 24,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-surface-card)",
        boxShadow: "inset 0 0 0 1.5px var(--color-text-brand)",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{"i"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        lineHeight: "140%",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.message}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-link)",
        flexShrink: 0,
        cursor: "pointer",
      }} role="button" tabIndex={0} onClick={props.onCtaClick} onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && props.onCtaClick) { e.preventDefault(); props.onCtaClick(); } }}>{props.cTA}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        cursor: props.dismiss ? "pointer" : "default",
      }} role="button" tabIndex={props.dismiss ? 0 : -1} aria-label="Fechar" onClick={props.dismiss ? close : undefined} onKeyDown={props.dismiss ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); close(); } } : undefined}>{props.text1 ?? "×"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "100%",
      minWidth: 280,
      minHeight: 56,
      borderRadius: 8,
      backgroundColor: "var(--color-state-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 24,
        height: 24,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-surface-card)",
        boxShadow: "inset 0 0 0 1.5px var(--color-text-warning)",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        lineHeight: "100%",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{"!"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        lineHeight: "140%",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.message}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-link)",
        flexShrink: 0,
        cursor: "pointer",
      }} role="button" tabIndex={0} onClick={props.onCtaClick} onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && props.onCtaClick) { e.preventDefault(); props.onCtaClick(); } }}>{props.cTA}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        cursor: props.dismiss ? "pointer" : "default",
      }} role="button" tabIndex={props.dismiss ? 0 : -1} aria-label="Fechar" onClick={props.dismiss ? close : undefined} onKeyDown={props.dismiss ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); close(); } } : undefined}>{props.text1 ?? "×"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "100%",
      minWidth: 280,
      minHeight: 56,
      borderRadius: 8,
      backgroundColor: "var(--color-state-negative-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 24,
        height: 24,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-surface-card)",
        boxShadow: "inset 0 0 0 1.5px var(--color-text-negative)",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        lineHeight: "100%",
        color: "var(--color-text-negative)",
        flexShrink: 0,
      }}>{"×"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        lineHeight: "140%",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.message}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-link)",
        flexShrink: 0,
        cursor: "pointer",
      }} role="button" tabIndex={0} onClick={props.onCtaClick} onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && props.onCtaClick) { e.preventDefault(); props.onCtaClick(); } }}>{props.cTA}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        cursor: props.dismiss ? "pointer" : "default",
      }} role="button" tabIndex={props.dismiss ? 0 : -1} aria-label="Fechar" onClick={props.dismiss ? close : undefined} onKeyDown={props.dismiss ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); close(); } } : undefined}>{props.text1 ?? "×"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "100%",
      minWidth: 280,
      minHeight: 56,
      borderRadius: 8,
      backgroundColor: "var(--color-state-positive-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 24,
        height: 24,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-surface-card)",
        boxShadow: "inset 0 0 0 1.5px var(--color-text-positive)",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 12,
        lineHeight: "100%",
        color: "var(--color-text-positive)",
        flexShrink: 0,
      }}>{"✓"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        lineHeight: "140%",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.message}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-link)",
        flexShrink: 0,
        cursor: "pointer",
      }} role="button" tabIndex={0} onClick={props.onCtaClick} onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && props.onCtaClick) { e.preventDefault(); props.onCtaClick(); } }}>{props.cTA}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        cursor: props.dismiss ? "pointer" : "default",
      }} role="button" tabIndex={props.dismiss ? 0 : -1} aria-label="Fechar" onClick={props.dismiss ? close : undefined} onKeyDown={props.dismiss ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); close(); } } : undefined}>{props.text1 ?? "×"}</span>
    </div>
  );
  const __impls = {
    // figma: Tone=Info
    "tone=info": __body0,
    // figma: Tone=Warning
    "tone=warning": __body1,
    // figma: Tone=Error
    "tone=error": __body2,
    // figma: Tone=Maintenance
    "tone=maintenance": __body1,
    // figma: Tone=Deprecated
    "tone=deprecated": __body1,
    // figma: Tone=Success
    "tone=success": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default FeedbackSystemBanner;
