import { BrandProductLogoTile } from './BrandProductLogoTile.jsx';

// figma node: 7369:8252 Access/Product Access List (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function AccessProductAccessList(_p = {}) {
  const props = { ..._p, overflow: _p.overflow ?? "+3", size: _p.size ?? "sm", showOverflow: _p.showOverflow ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 180,
      height: 40,
      display: "flex",
      flexDirection: "row",
      gap: -8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.icon1 ?? <BrandProductLogoTile fallback={"CL"} size={"sm"} shape={"rounded"} background={"brand"} />}</div>
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.icon2 ?? <BrandProductLogoTile fallback={"SE"} size={"sm"} shape={"rounded"} background={"brand"} />}</div>
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.icon3 ?? <BrandProductLogoTile fallback={"BH"} size={"sm"} shape={"rounded"} background={"brand"} />}</div>
      {props.showOverflow && (
      <div style={{
        position: "relative",
        width: 32,
        height: 32,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 8.5,
          top: 9.5,
          width: 15,
          height: 13,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-brand)",
        }}>{props.overflow}</span>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 220,
      height: 48,
      display: "flex",
      flexDirection: "row",
      gap: -8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          height: 40,
          flexShrink: 0,
        }}>{props.icon1 ?? <BrandProductLogoTile fallback={"CL"} size={"md"} shape={"rounded"} background={"brand"} />}</div>
      <div style={{
          position: "relative",
          width: 40,
          height: 40,
          flexShrink: 0,
        }}>{props.icon2 ?? <BrandProductLogoTile fallback={"SE"} size={"md"} shape={"rounded"} background={"brand"} />}</div>
      <div style={{
          position: "relative",
          width: 40,
          height: 40,
          flexShrink: 0,
        }}>{props.icon3 ?? <BrandProductLogoTile fallback={"BH"} size={"md"} shape={"rounded"} background={"brand"} />}</div>
      {props.showOverflow && (
      <div style={{
        position: "relative",
        width: 40,
        height: 40,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "var(--color-surface-selected)",
        boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
        flexShrink: 0,
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 12.5,
          width: 16,
          height: 15,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-brand)",
        }}>{props.overflow}</span>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: Size=SM
    "size=sm": __body0,
    // figma: Size=MD
    "size=md": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AccessProductAccessList;
