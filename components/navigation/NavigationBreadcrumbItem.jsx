import { IconNavHome } from "../icons/IconNavHome.jsx";

// figma node: 7456:13614 Navigation/Breadcrumb Item (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function NavigationBreadcrumbItem(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Breadcrumb", state: _p.state ?? "default", showIcon: _p.showIcon ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome style={{ transform: "scale(0.778, 0.778)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome style={{ transform: "scale(0.778, 0.778)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--blue-600-2)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 14,
          height: 14,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome style={{ transform: "scale(0.778, 0.778)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Hover
    "state=hover": __body1,
    // figma: State=Current
    "state=current": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default NavigationBreadcrumbItem;
