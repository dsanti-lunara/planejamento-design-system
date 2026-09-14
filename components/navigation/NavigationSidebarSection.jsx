// figma node: 7257:7383 Navigation/Sidebar Section
export function NavigationSidebarSection(_p = {}) {
  const props = { ..._p, label: _p.label ?? "CATÁLOGO" };
  return (
    <div className={props.className} style={{
      width: 360,
      height: 32,
      display: "flex",
      flexDirection: "column",
      padding: "8px 16px 8px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        lineHeight: "100%",
        color: "var(--color-text-muted)",
        borderWidth: "calc(var(--border-1-3) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
}
export default NavigationSidebarSection;
