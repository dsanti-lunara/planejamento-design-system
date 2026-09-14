// figma node: 6650:31 Intelligence/Recommendation Card — rebuilt: data-driven tag list (was 2 hardcoded, unconfigurable pills)
const __defaultTags = ["Benefício +0,8 p.p.", "Risco moderado", "Esforço médio", "Validar cenário"];

export function IntelligenceRecommendationCard(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Oportunidade de recuperação", description: _p.description ?? "Redistribuir HC nas janelas críticas pode recuperar 0,8 p.p. de NS no cenário base.", tags: _p.tags ?? __defaultTags };
  return (
    <div className={props.className} style={{
      width: 720,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: 16,
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 600, fontSize: 9, color: "var(--color-text-primary)" }}>{props.title}</span>
      <span style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 8, color: "var(--color-text-secondary)" }}>{props.description}</span>
      <div style={{ display: "flex", flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
        {props.tags.map((tag, i) => (
          <div key={i} style={{ borderRadius: 999, backgroundColor: "var(--color-surface-selected)", padding: "5px 8px" }}>
            <span style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 500, fontSize: 7, color: "var(--color-text-link)", whiteSpace: "nowrap" }}>{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default IntelligenceRecommendationCard;
