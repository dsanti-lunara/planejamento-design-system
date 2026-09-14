// figma node: 6730:132 Navigation/Context Chip
export function NavigationContextChip(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Período: 01–31 jul", showStatus: _p.showStatus ?? false };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 16,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 7,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showStatus && (
      <div style={{
        position: "relative",
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "var(--status-success)",
        flexShrink: 0,
      }} />
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
}
export default NavigationContextChip;
