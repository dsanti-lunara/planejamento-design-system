// figma node: 7242:7376 Access/Status (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function AccessStatus(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Autorizado", state: _p.state ?? "authorized" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "var(--color-state-positive-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-positive)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "✓"}</span>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
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
      gap: 6,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-negative)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "▣"}</span>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
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
      gap: 6,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-warning)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "◷"}</span>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
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
      backgroundColor: "var(--color-state-neutral-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "□"}</span>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "var(--color-state-negative-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 10px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-negative)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "!"}</span>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-negative)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: State=Authorized
    "state=authorized": __body0,
    // figma: State=Restricted
    "state=restricted": __body1,
    // figma: State=Pending
    "state=pending": __body2,
    // figma: State=Archived
    "state=archived": __body3,
    // figma: State=Unavailable
    "state=unavailable": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AccessStatus;
