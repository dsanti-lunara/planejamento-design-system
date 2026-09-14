// figma node: 5945:15 SEC_Header
export function SECHeader(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Título da seção" };
  return (
    <div className={props.className} style={{
      width: 640,
      height: 32,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 4,
        height: 24,
        borderRadius: 2,
        backgroundColor: "var(--brand-institutional)",
        flexShrink: 0,
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.title}</span>
    </div>
  );
}
export default SECHeader;
