// figma node: 6646:2148 Status Badge (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tone=" + __venc(p.tone);

export function StatusBadge(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Atenção", tone: _p.tone ?? "positive" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "var(--color-state-positive-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-8-3) * 1px)",
      paddingTop: "calc(var(--space-6) * 1px)",
      paddingRight: "calc(var(--space-8-3) * 1px)",
      paddingBottom: "calc(var(--space-6) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 7,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-positive)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "var(--color-state-negative-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-8-3) * 1px)",
      paddingTop: "calc(var(--space-6) * 1px)",
      paddingRight: "calc(var(--space-8-3) * 1px)",
      paddingBottom: "calc(var(--space-6) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 7,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-negative)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "var(--color-state-warning-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-8-3) * 1px)",
      paddingTop: "calc(var(--space-6) * 1px)",
      paddingRight: "calc(var(--space-8-3) * 1px)",
      paddingBottom: "calc(var(--space-6) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 7,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "var(--color-state-info-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-8-3) * 1px)",
      paddingTop: "calc(var(--space-6) * 1px)",
      paddingRight: "calc(var(--space-8-3) * 1px)",
      paddingBottom: "calc(var(--space-6) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 7,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-link)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "var(--color-state-neutral-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-8-3) * 1px)",
      paddingTop: "calc(var(--space-6) * 1px)",
      paddingRight: "calc(var(--space-8-3) * 1px)",
      paddingBottom: "calc(var(--space-6) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 7,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Tone=Positive
    "tone=positive": __body0,
    // figma: Tone=Negative
    "tone=negative": __body1,
    // figma: Tone=Warning
    "tone=warning": __body2,
    // figma: Tone=Info
    "tone=info": __body3,
    // figma: Tone=Neutral
    "tone=neutral": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default StatusBadge;
