// figma node: 6650:81 Loading Skeleton
export function LoadingSkeleton(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 508,
      height: 220,
      borderRadius: 10,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 180,
        height: 12,
        borderRadius: 6,
        backgroundColor: "var(--color-state-neutral-subtle)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        width: 560,
        height: 12,
        borderRadius: 6,
        backgroundColor: "var(--color-state-neutral-subtle)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        width: 500,
        height: 12,
        borderRadius: 6,
        backgroundColor: "var(--color-state-neutral-subtle)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        width: 540,
        height: 12,
        borderRadius: 6,
        backgroundColor: "var(--color-state-neutral-subtle)",
        flexShrink: 0,
      }} />
      <div style={{
        position: "relative",
        width: 360,
        height: 12,
        borderRadius: 6,
        backgroundColor: "var(--color-state-neutral-subtle)",
        flexShrink: 0,
      }} />
    </div>
  );
}
export default LoadingSkeleton;
