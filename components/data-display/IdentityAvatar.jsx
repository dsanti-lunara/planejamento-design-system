// figma node: 7232:7166 Identity/Avatar (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "content=" + __venc(p.content) + '|' + "size=" + __venc(p.size);

export function IdentityAvatar(_p = {}) {
  const props = { ..._p, initials: _p.initials ?? "RS", content: _p.content ?? "initials", size: _p.size ?? "xs" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-action-primary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 6,
        top: 6.5,
        width: 12,
        height: 11,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 9,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-inverse)",
      }}>{props.initials}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--color-action-primary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 8,
        top: 8.5,
        width: 16,
        height: 15,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-inverse)",
      }}>{props.initials}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "var(--color-action-primary)",
      position: "relative",
      ...props.style,
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
        color: "var(--color-text-inverse)",
      }}>{props.initials}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 28,
      backgroundColor: "var(--color-action-primary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 17.5,
        top: 18.5,
        width: 21,
        height: 19,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-inverse)",
      }}>{props.initials}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 3,
        top: 6.5,
        width: 12,
        height: 11,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 9,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
      }}>{props.initials}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--color-surface-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 4,
        top: 8.5,
        width: 16,
        height: 15,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
      }}>{props.initials}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "var(--color-surface-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 8,
        top: 12.5,
        width: 16,
        height: 15,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
      }}>{props.initials}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 28,
      backgroundColor: "var(--color-surface-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 12.5,
        top: 18.5,
        width: 21,
        height: 19,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
      }}>{props.initials}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-action-primary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 7.5,
        top: 6.5,
        width: 12,
        height: 11,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 9,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-inverse)",
      }}>{props.initials}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--color-action-primary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 10.5,
        top: 8.5,
        width: 16,
        height: 15,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-inverse)",
      }}>{props.initials}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "var(--color-action-primary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 14.5,
        top: 12.5,
        width: 16,
        height: 15,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-inverse)",
      }}>{props.initials}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      overflow: "hidden",
      borderRadius: 28,
      backgroundColor: "var(--color-action-primary)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20.5,
        top: 18.5,
        width: 21,
        height: 19,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-inverse)",
      }}>{props.initials}</span>
    </div>
  );
  const __impls = {
    // figma: Content=Initials, Size=XS
    "content=initials|size=xs": __body0,
    // figma: Content=Initials, Size=SM
    "content=initials|size=sm": __body1,
    // figma: Content=Initials, Size=MD
    "content=initials|size=md": __body2,
    // figma: Content=Initials, Size=LG
    "content=initials|size=lg": __body3,
    // figma: Content=Image, Size=XS
    "content=image|size=xs": __body4,
    // figma: Content=Image, Size=SM
    "content=image|size=sm": __body5,
    // figma: Content=Image, Size=MD
    "content=image|size=md": __body6,
    // figma: Content=Image, Size=LG
    "content=image|size=lg": __body7,
    // figma: Content=Icon, Size=XS
    "content=icon|size=xs": __body8,
    // figma: Content=Icon, Size=SM
    "content=icon|size=sm": __body9,
    // figma: Content=Icon, Size=MD
    "content=icon|size=md": __body10,
    // figma: Content=Icon, Size=LG
    "content=icon|size=lg": __body11,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default IdentityAvatar;
