// figma node: 7421:11876 Illustration/System/Restricted
export function IllustrationSystemRestricted(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 260,
      height: 190,
      position: "relative",
      color: "var(--color-surface-brand)",
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
      <svg width={112} height={128} viewBox="0 0 112 128" fill="none" style={{
        position: "absolute",
        left: 74,
        top: 25,
        width: 112,
        height: 128,
      }}>
        <path d={"M 56 0 L 109.259 44.223 L 88.916 115.777 L 23.084 115.777 L 2.741 44.223 L 56 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 108,
        top: 78,
        width: 44,
        height: 38,
        borderRadius: 8,
        backgroundColor: "var(--color-surface-card)",
      }} />
      <div style={{
        position: "absolute",
        left: 114,
        top: 60,
        width: 6,
        height: 22,
        borderRadius: 3,
        backgroundColor: "var(--color-surface-card)",
      }} />
      <div style={{
        position: "absolute",
        left: 140,
        top: 60,
        width: 6,
        height: 22,
        borderRadius: 3,
        backgroundColor: "var(--color-surface-card)",
      }} />
      <div style={{
        position: "absolute",
        left: 118,
        top: 58,
        width: 26,
        height: 6,
        borderRadius: 3,
        backgroundColor: "var(--color-surface-card)",
      }} />
      <span style={{
        position: "absolute",
        left: 82,
        top: 156,
        width: 66,
        height: 19,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "ACESSO"}</span>
    </div>
  );
}
export default IllustrationSystemRestricted;
