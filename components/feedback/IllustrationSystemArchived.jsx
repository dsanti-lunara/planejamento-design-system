// figma node: 7421:11884 Illustration/System/Archived
export function IllustrationSystemArchived(_p = {}) {
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
      <div style={{
        position: "absolute",
        left: 72,
        top: 62,
        width: 116,
        height: 84,
        borderRadius: 12,
        backgroundColor: "var(--color-surface-card)",
      }} />
      <div style={{
        position: "absolute",
        left: 62,
        top: 48,
        width: 136,
        height: 28,
        borderRadius: 8,
        backgroundColor: "var(--color-surface-brand)",
      }} />
      <div style={{
        position: "absolute",
        left: 105,
        top: 82,
        width: 50,
        height: 8,
        borderRadius: 4,
        backgroundColor: "var(--color-surface-brand)",
      }} />
      <span style={{
        position: "absolute",
        left: 84,
        top: 156,
        width: 74,
        height: 19,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "ARQUIVO"}</span>
    </div>
  );
}
export default IllustrationSystemArchived;
