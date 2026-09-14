// figma node: 7421:11852 Illustration/System/404
export function IllustrationSystem404(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 260,
      height: 190,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 30,
        top: 8,
        width: 200,
        height: 168,
        borderRadius: "50%",
        backgroundColor: "var(--color-surface-subtle)",
      }} />
      <span style={{
        position: "absolute",
        left: 58,
        top: 56,
        width: 116,
        height: 70,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 58,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "404"}</span>
      <div style={{
        position: "absolute",
        left: 145,
        top: 94,
        width: 48,
        height: 48,
        borderRadius: "50%",
        backgroundColor: "var(--color-surface-card)",
        boxShadow: "inset 0 0 0 8px var(--color-surface-brand)",
      }} />
      <div style={{
        position: "absolute",
        left: 184,
        top: 132,
        width: 48,
        height: 10,
        borderRadius: 5,
        backgroundColor: "var(--color-surface-brand)",
      }} />
      <div style={{
        position: "absolute",
        left: 40,
        top: 42,
        width: 22,
        height: 6,
        borderRadius: 3,
        backgroundColor: "var(--color-surface-brand)",
      }} />
    </div>
  );
}
export default IllustrationSystem404;
