import { IconNavHome } from "../icons/IconNavHome.jsx";

// figma node: 6681:43 Navigation/Nav Item (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function NavigationNavItem(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Visão Geral", state: _p.state ?? "default", showIcon: _p.showIcon ?? true, showLabel: _p.showLabel ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 260,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-sidebar)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-12-3) * 1px)",
      paddingRight: "calc(var(--space-12-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.iconAsset ?? <IconNavHome />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--color-text-secondary)",
        flexGrow: 1,
      }}>{props.label}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 260,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--color-action-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-12-3) * 1px)",
      paddingRight: "calc(var(--space-12-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.iconAsset ?? <IconNavHome />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--color-text-link)",
        flexGrow: 1,
      }}>{props.label}</span>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 260,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-selected)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-12-3) * 1px)",
      paddingRight: "calc(var(--space-12-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 10,
        width: 3,
        height: 20,
        borderRadius: 2,
        backgroundColor: "var(--color-action-primary)",
      }} />
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.iconAsset ?? <IconNavHome />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--color-text-link)",
        flexGrow: 1,
      }}>{props.label}</span>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 260,
      height: 40,
      opacity: 0.5,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-sidebar)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-12-3) * 1px)",
      paddingRight: "calc(var(--space-12-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.iconAsset ?? <IconNavHome />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--color-text-muted)",
        flexGrow: 1,
      }}>{props.label}</span>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 260,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-sidebar)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-12-3) * 1px)",
      paddingRight: "calc(var(--space-12-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.iconAsset ?? <IconNavHome />}</div>
      )}
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--color-text-link)",
        flexGrow: 1,
      }}>{props.label}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Hover
    "state=hover": __body1,
    // figma: State=Active
    "state=active": __body2,
    // figma: State=Disabled
    "state=disabled": __body3,
    // figma: State=Focus
    "state=focus": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default NavigationNavItem;
