// figma node: 7234:7158 Tag/Category Chip (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "category=" + __venc(p.category);

export function TagCategoryChip(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Operacional", category: _p.category ?? "operacional" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "var(--color-state-negative-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 10px 6px 10px",
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
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "var(--color-state-info-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 10px 6px 10px",
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
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "var(--color-state-positive-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 10px 6px 10px",
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
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "var(--color-state-warning-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 10px 6px 10px",
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
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 999,
      backgroundColor: "var(--color-surface-selected)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 10px 6px 10px",
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
    </div>
  );
  const __impls = {
    // figma: Category=Operacional
    "category=operacional": __body0,
    // figma: Category=Planejamento
    "category=planejamento": __body1,
    // figma: Category=Financeiro
    "category=financeiro": __body1,
    // figma: Category=Gestão
    "category=gestão": __body2,
    // figma: Category=Clientes
    "category=clientes": __body3,
    // figma: Category=Dados & Inteligência
    "category=dados & inteligência": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TagCategoryChip;
