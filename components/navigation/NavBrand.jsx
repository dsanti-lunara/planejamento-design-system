// Shared brand mark for navigation shells — real Claro logo asset (the
// product's actual partner mark, per Figma "Navigation/Sidebar"), scaled
// down for the collapsed rail instead of swapped for a separate icon crop
// (the source design scales the same lockup at both sizes).
export function NavBrand(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "full" };
  const full = props.variant === "full";
  return (
    <img
      className={props.className}
      src="../../assets/logos/claro-logo.svg"
      alt="Claro"
      style={{
        display: "block",
        width: full ? 96 : 48,
        height: full ? 34 : 17,
        objectFit: "contain",
        ...props.style,
      }}
    />
  );
}
export default NavBrand;
