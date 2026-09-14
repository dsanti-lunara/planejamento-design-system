// figma node: 7331:8097 Layout/Product Grid — migrated from intelligence/ (assembles ProductCard instances, not intelligence-specific)
export function LayoutProductGrid(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 340px))",
      gap: 24,
      alignItems: "stretch",
      position: "relative",
      ...props.style,
    }}>
      {props.children}
    </div>
  );
}
export default LayoutProductGrid;
