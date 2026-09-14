// figma node: 6649:1320 Intelligence/Correlation Panel — rebuilt: data-driven rows, flex layout, --color-data-* tokens (was hardcoded rgb() + absolute-positioned rows)
const __defaultRows = [
  { label: "Recebidas x TMO", r: "-0,72", direction: "↘", strength: "Forte", tone: "negative" },
  { label: "Recebidas x HC FTE", r: "0,61", direction: "↗", strength: "Moderada", tone: "positive" },
  { label: "Recebidas x ABS", r: "0,48", direction: "↗", strength: "Moderada", tone: "positive" },
  { label: "Recebidas x Abandono", r: "-0,57", direction: "↘", strength: "Moderada", tone: "negative" },
];

export function IntelligenceCorrelationPanel(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Correlações principais    ⓘ", rows: _p.rows ?? __defaultRows };
  const toneColor = (tone) => tone === "negative" ? "var(--color-data-negative)" : "var(--color-data-positive)";
  const cellStyle = { fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontSize: 7, lineHeight: "100%" };
  return (
    <div className={props.className} style={{
      width: 528,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      padding: "5px 14px 12px 14px",
      gap: 8,
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{ ...cellStyle, fontWeight: 600, fontSize: 11, color: "var(--color-text-primary)" }}>{props.title}</span>
      <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        <span style={{ ...cellStyle, fontWeight: 600, color: "var(--color-text-secondary)", flex: "1 1 200px" }}>{props.colLabel ?? "Relação"}</span>
        <span style={{ ...cellStyle, fontWeight: 600, color: "var(--color-text-secondary)", flex: "0 0 120px", textAlign: "center" }}>{props.colR ?? "Correlação (r)"}</span>
        <span style={{ ...cellStyle, fontWeight: 600, color: "var(--color-text-secondary)", flex: "0 0 70px", textAlign: "center" }}>{props.colDirection ?? "Direção"}</span>
        <span style={{ ...cellStyle, fontWeight: 600, color: "var(--color-text-secondary)", flex: "0 0 90px", textAlign: "center" }}>{props.colStrength ?? "Força"}</span>
      </div>
      {props.rows.map((row, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "row", gap: 8, paddingTop: 8, borderTop: "1px solid var(--color-border-subtle)" }}>
          <span style={{ ...cellStyle, fontWeight: 400, color: "var(--color-text-secondary)", flex: "1 1 200px" }}>{row.label}</span>
          <span style={{ ...cellStyle, fontWeight: 600, color: toneColor(row.tone), flex: "0 0 120px", textAlign: "center" }}>{row.r}</span>
          <span style={{ ...cellStyle, fontWeight: 600, color: toneColor(row.tone), flex: "0 0 70px", textAlign: "center" }}>{row.direction}</span>
          <span style={{ ...cellStyle, fontWeight: 400, color: "var(--color-text-secondary)", flex: "0 0 90px", textAlign: "center" }}>{row.strength}</span>
        </div>
      ))}
    </div>
  );
}
export default IntelligenceCorrelationPanel;
