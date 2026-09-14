import { StatusBadge } from "../data-display/StatusBadge.jsx";

// figma node: 6649:1297 Intelligence/Diagnostic Panel — rebuilt: data-driven items, flex layout, StatusBadge + --color-data-* tokens (was hardcoded rgb() + absolute-positioned items)
const __severityTone = { "Crítico": "negative", "Alto": "negative", "Atenção": "warning" };
const __severityDot = { "Crítico": "var(--color-data-negative)", "Alto": "var(--color-data-attention)", "Atenção": "var(--color-data-attention)" };

const __defaultItems = [
  { icon: "↓", severity: "Crítico", title: "Desvios concentrados em 4 dias", description: "273 mil contatos negativos (76% do desvio total) concentrados em 08/07, 15/07, 22/07 e 27/07." },
  { icon: "⊙", severity: "Alto", title: "Padrão semanal recorrente", description: "Terças-feiras concentram 24% dos desvios negativos do período." },
  { icon: "◉", severity: "Atenção", title: "TMO elevado impacta NS em picos", description: "Dias com TMO ≥ 320 seg tiveram NS 0,6 p.p. acima do plano." },
  { icon: "∿", severity: "Alto", title: "ABS acima do plano em dias críticos", description: "ABS médio nos 4 dias críticos foi 0,8% (+2,8 p.p. vs plano)." },
  { icon: "Ⅱ", severity: "Atenção", title: "Pausas mais altas em blocos específicos", description: "% Pausa acima do plano entre 07–10 Jul e 24–28 Jul." },
];

export function IntelligenceDiagnosticPanel(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Diagnóstico rápido    ⓘ", items: _p.items ?? __defaultItems, detailLabel: _p.detailLabel ?? "Ver detalhe  →" };
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
      <span style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 600, fontSize: 11, color: "var(--color-text-primary)" }}>{props.title}</span>
      {props.items.map((item, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "flex-start", paddingTop: i === 0 ? 0 : 8, borderTop: i === 0 ? "none" : "1px solid var(--color-border-subtle)" }}>
          <div style={{ width: 24, height: 24, borderRadius: 12, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: __severityDot[item.severity] ?? "var(--color-data-plan)", color: "var(--color-icon-inverse)", fontWeight: 600, fontSize: 13 }}>{item.icon}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, flex: "1 1 auto" }}>
            <span style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 600, fontSize: 9, color: "var(--color-text-primary)" }}>{item.title}</span>
            <span style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 400, fontSize: 7, color: "var(--color-text-secondary)" }}>{item.description}</span>
          </div>
          <button type="button" onClick={props.onDetailClick ? () => props.onDetailClick(item, i) : undefined} className="ds-interactive" style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 600, fontSize: 7, color: "var(--color-text-link)", flexShrink: 0, whiteSpace: "nowrap", background: "none", border: "none", padding: 0, cursor: "pointer", borderRadius: 4 }}>{props.detailLabel}</button>
          <StatusBadge label={item.severity} tone={__severityTone[item.severity] ?? "neutral"} style={{ flexShrink: 0 }} />
        </div>
      ))}
    </div>
  );
}
export default IntelligenceDiagnosticPanel;
