// figma node: 7242:7360 Data/Key Value List (8 variants)
// Audit (detalhe-produto consolidation): typography now reads --font-sans / --font-mono tokens
// instead of a hardcoded Inter stack; `copy` values render tabular/mono; values wrap instead of
// forcing horizontal overflow inside page columns; fixed 420px width is a max, not a floor.
const FONT = 'var(--font-sans, "Plus Jakarta Sans", sans-serif)';
const MONO = 'var(--font-mono, "JetBrains Mono", ui-monospace, monospace)';
const VALUE_COLOR = { text: "var(--color-text-primary)", status: "var(--color-text-brand)", link: "var(--color-text-link)", copy: "var(--color-text-primary)" };

export function DataKeyValueList(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Produto", orientation: _p.orientation ?? "horizontal", value: _p.value ?? "Claro móvel", valueType: _p.valueType ?? "text" };
  const vertical = props.orientation === "vertical";
  const type = VALUE_COLOR[props.valueType] ? props.valueType : "text";
  return (
    <div className={props.className} style={{
      width: 420, maxWidth: "100%", minWidth: 0, boxSizing: "border-box", position: "relative",
      display: "flex", flexDirection: vertical ? "column" : "row",
      gap: vertical ? 4 : 20, padding: "8px 0",
      alignItems: vertical ? "flex-start" : "baseline",
      justifyContent: vertical ? "flex-start" : "space-between",
      ...props.style,
    }}>
      <span style={{
        fontFamily: FONT, fontWeight: 400, fontSize: 12, lineHeight: "150%",
        color: "var(--color-text-secondary)", minWidth: 0,
        flex: vertical ? "0 0 auto" : "0 1 auto",
      }}>{props.label}</span>
      <span style={{
        fontFamily: type === "copy" ? MONO : FONT, fontWeight: 500, fontSize: 12, lineHeight: "150%",
        color: VALUE_COLOR[type], minWidth: 0, textWrap: "pretty", overflowWrap: "anywhere",
        textAlign: vertical ? "left" : "right",
        flex: vertical ? "0 0 auto" : "0 1 auto",
      }}>{props.value}</span>
    </div>
  );
}
export default DataKeyValueList;
