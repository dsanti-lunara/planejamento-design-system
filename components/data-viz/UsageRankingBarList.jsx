import { UsageRankingBarItem } from './UsageRankingBarItem.jsx';

// figma node: 7411:10892 Usage/Ranking Bar List — refactored to actually compose
// UsageRankingBarItem per entry in `items` instead of rendering a static blank rectangle.
const DEFAULT_ITEMS = [
  { rank: "1", label: "Claro Brasil", value: "8.492 acessos", percentage: "38%" },
  { rank: "2", label: "Claro Móvel", value: "5.120 acessos", percentage: "23%" },
  { rank: "3", label: "Estrutura", value: "3.014 acessos", percentage: "14%" },
];

export function UsageRankingBarList(_p = {}) {
  const props = { title: "Produtos mais usados", detailsLabel: "Ver detalhes", items: DEFAULT_ITEMS, ..._p };
  const items = Array.isArray(props.items) && props.items.length ? props.items : DEFAULT_ITEMS;
  return (
    <div className={props.className} style={{
      width: 760,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: 20,
      alignItems: "flex-start",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignSelf: "stretch" }}>
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 15, color: "var(--color-text-primary)" }}>{props.title}</span>
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 11, color: "var(--color-text-brand)", cursor: "pointer" }}>{props.detailsLabel}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, alignSelf: "stretch" }}>
        {items.map((item, i) => <UsageRankingBarItem key={i} {...item} />)}
      </div>
    </div>
  );
}
export default UsageRankingBarList;
