import React from 'react';
// Improved: real dismiss control (the `dismiss` prop existed but nothing rendered or handled it) — an actual close button now self-hides the alert, or calls `onDismiss` when `open` is controlled.
// figma node: 7241:7339 Feedback/Alert (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "presentation=" + __venc(p.presentation) + '|' + "tone=" + __venc(p.tone);

export function FeedbackAlert(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Título opcional", presentation: _p.presentation ?? "alert", dismiss: _p.dismiss ?? true, description: _p.description ?? "Descrição da mensagem", tone: _p.tone ?? "info", action: _p.action ?? false, showTitle: _p.showTitle ?? true };
  const isControlled = props.open !== undefined;
  const [innerOpen, setInnerOpen] = React.useState(true);
  const open = isControlled ? props.open : innerOpen;
  const close = () => { if (!isControlled) setInnerOpen(false); props.onDismiss && props.onDismiss(); };
  if (!open) return null;
  const CloseBtn = () => props.dismiss ? (
    <span role="button" tabIndex={0} aria-label="Fechar" onClick={close} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); close(); } }}
      style={{ position: "absolute", right: 12, top: 12, fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1, color: "var(--color-text-muted)", cursor: "pointer", flexShrink: 0 }}>×</span>
  ) : null;
  const __body0 = () => (
    <div className={props.className} style={{
      width: "100%",
      maxWidth: 640,
      minWidth: 280,
      borderRadius: 8,
      backgroundColor: "var(--color-state-info-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-surface-card)",
        boxShadow: "inset 0 0 0 1.5px var(--color-text-brand)",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.text1 ?? "i"}</span>
      <div style={{
        position: "relative",
        flex: "1 1 auto",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showTitle && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          lineHeight: "140%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
      </div>
      <CloseBtn />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "100%",
      maxWidth: 640,
      minWidth: 280,
      borderRadius: 8,
      backgroundColor: "var(--color-state-positive-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-positive)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-surface-card)",
        boxShadow: "inset 0 0 0 1.5px var(--color-text-positive)",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        lineHeight: "100%",
        color: "var(--color-text-positive)",
        flexShrink: 0,
      }}>{props.text1 ?? "✓"}</span>
      <div style={{
        position: "relative",
        flex: "1 1 auto",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showTitle && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          lineHeight: "140%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
      </div>
      <CloseBtn />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "100%",
      maxWidth: 640,
      minWidth: 280,
      borderRadius: 8,
      backgroundColor: "var(--color-state-warning-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-warning)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-surface-card)",
        boxShadow: "inset 0 0 0 1.5px var(--color-text-warning)",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        lineHeight: "100%",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.text1 ?? "!"}</span>
      <div style={{
        position: "relative",
        flex: "1 1 auto",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showTitle && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          lineHeight: "140%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
      </div>
      <CloseBtn />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "100%",
      maxWidth: 640,
      minWidth: 280,
      borderRadius: 8,
      backgroundColor: "var(--color-state-negative-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-negative)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-surface-card)",
        boxShadow: "inset 0 0 0 1.5px var(--color-text-negative)",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        lineHeight: "100%",
        color: "var(--color-text-negative)",
        flexShrink: 0,
      }}>{props.text1 ?? "×"}</span>
      <div style={{
        position: "relative",
        flex: "1 1 auto",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showTitle && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          lineHeight: "140%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
      </div>
      <CloseBtn />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "100%",
      maxWidth: 640,
      minWidth: 280,
      borderRadius: 8,
      backgroundColor: "var(--color-state-info-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-surface-card)",
        boxShadow: "inset 0 0 0 1.5px var(--color-text-brand)",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.text1 ?? "i"}</span>
      <div style={{
        position: "relative",
        flex: "1 1 auto",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showTitle && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          lineHeight: "140%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
      </div>
      <CloseBtn />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "100%",
      maxWidth: 640,
      minWidth: 280,
      borderRadius: 8,
      backgroundColor: "var(--color-state-positive-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-positive)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-surface-card)",
        boxShadow: "inset 0 0 0 1.5px var(--color-text-positive)",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        lineHeight: "100%",
        color: "var(--color-text-positive)",
        flexShrink: 0,
      }}>{props.text1 ?? "✓"}</span>
      <div style={{
        position: "relative",
        flex: "1 1 auto",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showTitle && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          lineHeight: "140%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
      </div>
      <CloseBtn />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "100%",
      maxWidth: 640,
      minWidth: 280,
      borderRadius: 8,
      backgroundColor: "var(--color-state-warning-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-warning)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-surface-card)",
        boxShadow: "inset 0 0 0 1.5px var(--color-text-warning)",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        lineHeight: "100%",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.text1 ?? "!"}</span>
      <div style={{
        position: "relative",
        flex: "1 1 auto",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showTitle && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          lineHeight: "140%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
      </div>
      <CloseBtn />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "100%",
      maxWidth: 640,
      minWidth: 280,
      borderRadius: 8,
      backgroundColor: "var(--color-state-negative-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-negative)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 28,
        height: 28,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-surface-card)",
        boxShadow: "inset 0 0 0 1.5px var(--color-text-negative)",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        lineHeight: "100%",
        color: "var(--color-text-negative)",
        flexShrink: 0,
      }}>{props.text1 ?? "×"}</span>
      <div style={{
        position: "relative",
        flex: "1 1 auto",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {props.showTitle && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 13,
          lineHeight: "140%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
      </div>
      <CloseBtn />
    </div>
  );
  const __impls = {
    // figma: Presentation=Alert, Tone=Info
    "presentation=alert|tone=info": __body0,
    // figma: Presentation=Alert, Tone=Success
    "presentation=alert|tone=success": __body1,
    // figma: Presentation=Alert, Tone=Warning
    "presentation=alert|tone=warning": __body2,
    // figma: Presentation=Alert, Tone=Error
    "presentation=alert|tone=error": __body3,
    // figma: Presentation=Callout, Tone=Info
    "presentation=callout|tone=info": __body4,
    // figma: Presentation=Callout, Tone=Success
    "presentation=callout|tone=success": __body5,
    // figma: Presentation=Callout, Tone=Warning
    "presentation=callout|tone=warning": __body6,
    // figma: Presentation=Callout, Tone=Error
    "presentation=callout|tone=error": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default FeedbackAlert;
