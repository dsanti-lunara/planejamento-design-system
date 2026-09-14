// figma node: 5946:22 SEC_Status_Badge (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function SECStatusBadge(_p = {}) {
  const props = { ..._p, state: _p.state ?? "neutral" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 14,
      backgroundColor: "var(--color-surface-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Neutro"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 14,
      backgroundColor: "var(--color-red-600)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-inverse)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Ativo"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 14,
      backgroundColor: "var(--color-state-positive-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-positive)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Favorável"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 14,
      backgroundColor: "var(--color-state-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Atenção"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 14,
      backgroundColor: "var(--color-state-negative-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-negative)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Crítico"}</span>
    </div>
  );
  const __impls = {
    // figma: State=Neutral
    "state=neutral": __body0,
    // figma: State=Active
    "state=active": __body1,
    // figma: State=Positive
    "state=positive": __body2,
    // figma: State=Attention
    "state=attention": __body3,
    // figma: State=Negative
    "state=negative": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SECStatusBadge;
