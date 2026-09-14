// figma node: 6649:47 Chart Header
export function ChartHeader(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Evolução do indicador", action: _p.action ?? "Por operação", showAction: _p.showAction ?? true };
  return (
    <div className={props.className} style={{
      width: 500,
      height: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.title}</span>
      {props.showAction && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 7.5,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.action}</span>
      )}
    </div>
  );
}
export default ChartHeader;
