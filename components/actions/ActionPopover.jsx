// figma node: 7238:7269 Action/Popover
export function ActionPopover(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Título do popover", description: _p.description ?? "Conteúdo contextual" };
  return (
    <div className={props.className} style={{
      width: 360,
      height: 170,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-raised)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle), 0px 6px 16px 0px rgba(0,20,51,0.12)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.title}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.description}</span>
    </div>
  );
}
export default ActionPopover;
