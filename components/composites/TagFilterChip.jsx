// figma node: 7234:7168 Tag/Filter Chip
export function TagFilterChip(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Categorias:", value: _p.value ?? "Todas", removeAction: _p.removeAction ?? true };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-selected)",
      boxShadow: "inset 0 0 0 1px var(--color-action-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 8px 6px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.value}</span>
      {props.removeAction && (
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-action-primary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "×"}</span>
      )}
    </div>
  );
}
export default TagFilterChip;
