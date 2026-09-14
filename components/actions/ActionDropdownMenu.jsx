// figma node: 7238:7258 Action/Dropdown Menu
// Improved: now data-driven via `items[]` (label/onClick/tone/disabled) instead of 4 fixed,
// non-interactive text rows — falls back to the original Figma demo rows when `items` is omitted.
export function ActionDropdownMenu(_p = {}) {
  const props = _p;
  const items = props.items || [
    { label: props.text1 ?? "Editar" },
    { label: props.text2 ?? "Copiar link" },
    { label: props.text3 ?? "Selecionado", selected: true },
    { label: props.text4 ?? "Indisponível", disabled: true },
    { label: "Excluir", tone: "negative" },
  ];
  return (
    <div className={props.className} style={{
      width: 280,
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
      {items.map((it, i) => (
        <div
          key={i}
          role="menuitem"
          tabIndex={it.disabled ? -1 : 0}
          onClick={it.disabled ? undefined : it.onClick}
          onKeyDown={it.disabled ? undefined : (e) => { if ((e.key === 'Enter' || e.key === ' ') && it.onClick) { e.preventDefault(); it.onClick(); } }}
          style={{
            position: "relative",
            height: 40,
            opacity: it.disabled ? 0.55 : 1,
            overflow: "hidden",
            borderRadius: 6,
            backgroundColor: it.selected ? "var(--color-surface-selected)" : "var(--color-surface-raised)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "0px 10px 0px 10px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
            cursor: it.disabled ? "default" : "pointer",
          }}
        >
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: it.disabled ? "var(--color-text-muted)" : it.tone === "negative" ? "var(--color-text-negative)" : "var(--color-text-primary)",
            flexShrink: 0,
          }}>{it.label}</span>
        </div>
      ))}
    </div>
  );
}
export default ActionDropdownMenu;
