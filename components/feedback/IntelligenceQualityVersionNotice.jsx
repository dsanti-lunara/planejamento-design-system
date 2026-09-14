// figma node: 6650:58 Intelligence/Quality Version Notice (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tone=" + __venc(p.tone);

export function IntelligenceQualityVersionNotice(_p = {}) {
  const props = { ..._p, tone: _p.tone ?? "info" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 650,
      height: 80,
      borderRadius: 8,
      backgroundColor: "var(--color-state-info-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "14px 16px 14px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-link)",
        flexShrink: 0,
      }}>{props.text1 ?? "ⓘ"}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--color-surface-card)",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 9,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text2 ?? "Versão Vigente aplicada"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 7,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.text3 ?? "Dados reconciliados e comparáveis."}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 650,
      height: 80,
      borderRadius: 8,
      backgroundColor: "var(--color-state-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "14px 16px 14px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.text1 ?? "!"}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--color-surface-card)",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 9,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text2 ?? "D1 difere da versão oficial"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 7,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.text3 ?? "A investigação salva pode estar desatualizada."}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 650,
      height: 80,
      borderRadius: 8,
      backgroundColor: "var(--color-state-negative-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "14px 16px 14px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-negative)",
        flexShrink: 0,
      }}>{props.text1 ?? "×"}</span>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--color-surface-card)",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 9,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text2 ?? "Evidência insuficiente"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 7,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.text3 ?? "Correlação e recomendação ficam bloqueadas."}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Tone=Info
    "tone=info": __body0,
    // figma: Tone=Warning
    "tone=warning": __body1,
    // figma: Tone=Blocked
    "tone=blocked": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default IntelligenceQualityVersionNotice;
