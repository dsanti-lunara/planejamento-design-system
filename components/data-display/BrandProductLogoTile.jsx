// figma node: 7232:7190 Brand/Product Logo Tile (20 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "shape=" + __venc(p.shape) + '|' + "background=" + __venc(p.background);

export function BrandProductLogoTile(_p = {}) {
  const props = { ..._p, fallback: _p.fallback ?? "NX", text1: _p.text1 ?? _p.fallback ?? "NX", size: _p.size ?? "xs", shape: _p.shape ?? "rounded", background: _p.background ?? "subtle" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 6,
        top: 7,
        width: 12,
        height: 10,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 8,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.fallback}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 7,
        top: 8.5,
        width: 18,
        height: 15,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.fallback}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 11,
        top: 12.5,
        width: 18,
        height: 15,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.fallback}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 19,
        top: 20.5,
        width: 18,
        height: 15,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.fallback}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 72,
      height: 72,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 23,
        top: 25,
        width: 26,
        height: 22,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.fallback}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 2,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 6,
        top: 7,
        width: 12,
        height: 10,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 8,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-selected)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 6,
        top: 7,
        width: 12,
        height: 10,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 8,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 2,
      backgroundColor: "var(--color-surface-selected)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 6,
        top: 7,
        width: 12,
        height: 10,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 8,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 2,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 7,
        top: 8.5,
        width: 18,
        height: 15,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-selected)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 7,
        top: 8.5,
        width: 18,
        height: 15,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 2,
      backgroundColor: "var(--color-surface-selected)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 7,
        top: 8.5,
        width: 18,
        height: 15,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 2,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 11,
        top: 12.5,
        width: 18,
        height: 15,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-selected)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 11,
        top: 12.5,
        width: 18,
        height: 15,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 2,
      backgroundColor: "var(--color-surface-selected)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 11,
        top: 12.5,
        width: 18,
        height: 15,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      borderRadius: 2,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 19,
        top: 20.5,
        width: 18,
        height: 15,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-selected)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 19,
        top: 20.5,
        width: 18,
        height: 15,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      borderRadius: 2,
      backgroundColor: "var(--color-surface-selected)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 19,
        top: 20.5,
        width: 18,
        height: 15,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 72,
      height: 72,
      borderRadius: 2,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 23,
        top: 25,
        width: 26,
        height: 22,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 72,
      height: 72,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-selected)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 23,
        top: 25,
        width: 26,
        height: 22,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 72,
      height: 72,
      borderRadius: 2,
      backgroundColor: "var(--color-surface-selected)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 23,
        top: 25,
        width: 26,
        height: 22,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
      }}>{props.text1 ?? "NX"}</span>
    </div>
  );
  const __impls = {
    // figma: Size=XS, Shape=Rounded, Background=Subtle
    "size=xs|shape=rounded|background=subtle": __body0,
    // figma: Size=SM, Shape=Rounded, Background=Subtle
    "size=sm|shape=rounded|background=subtle": __body1,
    // figma: Size=MD, Shape=Rounded, Background=Subtle
    "size=md|shape=rounded|background=subtle": __body2,
    // figma: Size=LG, Shape=Rounded, Background=Subtle
    "size=lg|shape=rounded|background=subtle": __body3,
    // figma: Size=XL, Shape=Rounded, Background=Subtle
    "size=xl|shape=rounded|background=subtle": __body4,
    // figma: Size=XS, Shape=Square, Background=Subtle
    "size=xs|shape=square|background=subtle": __body5,
    // figma: Size=XS, Shape=Rounded, Background=Brand
    "size=xs|shape=rounded|background=brand": __body6,
    // figma: Size=XS, Shape=Square, Background=Brand
    "size=xs|shape=square|background=brand": __body7,
    // figma: Size=SM, Shape=Square, Background=Subtle
    "size=sm|shape=square|background=subtle": __body8,
    // figma: Size=SM, Shape=Rounded, Background=Brand
    "size=sm|shape=rounded|background=brand": __body9,
    // figma: Size=SM, Shape=Square, Background=Brand
    "size=sm|shape=square|background=brand": __body10,
    // figma: Size=MD, Shape=Square, Background=Subtle
    "size=md|shape=square|background=subtle": __body11,
    // figma: Size=MD, Shape=Rounded, Background=Brand
    "size=md|shape=rounded|background=brand": __body12,
    // figma: Size=MD, Shape=Square, Background=Brand
    "size=md|shape=square|background=brand": __body13,
    // figma: Size=LG, Shape=Square, Background=Subtle
    "size=lg|shape=square|background=subtle": __body14,
    // figma: Size=LG, Shape=Rounded, Background=Brand
    "size=lg|shape=rounded|background=brand": __body15,
    // figma: Size=LG, Shape=Square, Background=Brand
    "size=lg|shape=square|background=brand": __body16,
    // figma: Size=XL, Shape=Square, Background=Subtle
    "size=xl|shape=square|background=subtle": __body17,
    // figma: Size=XL, Shape=Rounded, Background=Brand
    "size=xl|shape=rounded|background=brand": __body18,
    // figma: Size=XL, Shape=Square, Background=Brand
    "size=xl|shape=square|background=brand": __body19,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default BrandProductLogoTile;
