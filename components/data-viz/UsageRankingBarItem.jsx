import { BrandProductLogoTile } from '../data-display/BrandProductLogoTile.jsx';

// figma node: 7411:10891 Usage/Ranking Bar Item (2 variants) — refactored to a single prop-driven
// component: `state` toggles the row background, and the fill bar width is now driven by the
// numeric `percentage` prop instead of a fixed pixel value.
export function UsageRankingBarItem(_p = {}) {
  const props = { logoVisible: true, rank: "1", state: "default", percentageVisible: true, rankVisible: true, label: "Claro Brasil", percentage: "38%", value: "8.492 acessos", ..._p };
  const pct = Math.max(0, Math.min(100, parseFloat(String(props.percentage)) || 0));
  return (
    <div className={props.className} style={{
      width: 720,
      borderRadius: 8,
      backgroundColor: props.state === "highlighted" ? "var(--color-surface-subtle)" : "var(--color-surface-card)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: 10,
      alignItems: "flex-start",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ display: "flex", flexDirection: "row", gap: 10, alignItems: "center", flexWrap: "nowrap", alignSelf: "stretch" }}>
        {props.rankVisible && (
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 12, whiteSpace: "nowrap", color: "var(--color-text-secondary)", flexShrink: 0 }}>{props.rank}</span>
        )}
        {props.logoVisible && (
        <div style={{ width: 32, height: 32, flexShrink: 0 }}>{props.productLogo ?? <BrandProductLogoTile size="sm" shape="rounded" background="subtle" />}</div>
        )}
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13, color: "var(--color-text-primary)", flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{props.label}</span>
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 12, whiteSpace: "nowrap", color: "var(--color-text-primary)", flexShrink: 0 }}>{props.value}</span>
        {props.percentageVisible && (
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 11, whiteSpace: "nowrap", color: "var(--color-text-brand)", flexShrink: 0, minWidth: 32, textAlign: "right" }}>{props.percentage}</span>
        )}
      </div>
      <div style={{ width: "100%", height: 8, overflow: "hidden", borderRadius: 4, backgroundColor: "var(--color-surface-subtle)", boxSizing: "border-box" }}>
        <div style={{ width: pct + "%", height: "100%", borderRadius: 4, backgroundColor: "var(--color-data-actual)" }} />
      </div>
    </div>
  );
}
export default UsageRankingBarItem;
