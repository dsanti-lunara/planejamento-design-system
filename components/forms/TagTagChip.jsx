// figma node: 7234:7167 Tag/Tag Chip — consolidated into one render path;
// added an optional onRemove (renders a real × button) without touching
// existing decorative usages that don't pass it.
export function TagTagChip(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Claro", state: _p.state ?? "default" };
  const selected = props.state === "selected";
  const disabled = props.state === "disabled";
  return (
    <div className={props.className} style={{
      width: "fit-content", borderRadius: 999,
      backgroundColor: selected ? "var(--color-surface-selected)" : "var(--color-surface-subtle)",
      boxShadow: `inset 0 0 0 1px ${selected ? "var(--color-border-brand)" : "var(--color-border-subtle)"}`,
      display: "flex", gap: 6, padding: "6px 10px", alignItems: "center", boxSizing: "border-box",
      opacity: disabled ? 0.5 : 1,
      ...props.style,
    }}>
      <span style={{
        fontFamily: "var(--font-sans, Inter, sans-serif)", fontWeight: 500, fontSize: 12, whiteSpace: "nowrap",
        lineHeight: "100%", color: selected ? "var(--color-text-brand)" : "var(--color-text-primary)",
      }}>{props.label}</span>
      {props.onRemove && !disabled && (
        <span
          role="button" aria-label={`Remover ${props.label}`} tabIndex={0}
          onClick={(e) => { e.stopPropagation(); props.onRemove(); }}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); props.onRemove(); } }}
          style={{ cursor: "pointer", fontSize: 12, lineHeight: "100%", color: "var(--color-text-muted)" }}
        >×</span>
      )}
    </div>
  );
}
export default TagTagChip;
