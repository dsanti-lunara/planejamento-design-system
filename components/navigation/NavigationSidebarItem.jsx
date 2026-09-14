import { IconChevronDown } from "../icons/IconChevronDown.jsx";
import { IconNavHome } from "../icons/IconNavHome.jsx";

// figma node: 7257:7382 Navigation/Sidebar Item (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function NavigationSidebarItem(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Todos os produtos", state: _p.state ?? "default", nested: _p.nested ?? false, badge: _p.badge ?? "3", showChevron: _p.showChevron ?? false, showBadge: _p.showBadge ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 360,
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-sidebar)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-12-3) * 1px)",
      padding: "12px 12px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-12-3) * 1px)",
      paddingBottom: "calc(var(--space-12-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.nested && (
      <div style={{
        position: "relative",
        width: 16,
        height: 1,
        flexShrink: 0,
      }} />
      )}
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        borderWidth: "calc(var(--border-1-3) * 1px)",
        flexGrow: 1,
      }}>{props.label}</span>
      {props.showBadge && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(7,89,230)",
        borderWidth: "calc(var(--border-1-3) * 1px)",
        flexShrink: 0,
      }}>{props.badge}</span>
      )}
      {props.showChevron && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconChevronDown />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 360,
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-selected)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-12-3) * 1px)",
      padding: "12px 12px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-12-3) * 1px)",
      paddingBottom: "calc(var(--space-12-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.nested && (
      <div style={{
        position: "relative",
        width: 16,
        height: 1,
        flexShrink: 0,
      }} />
      )}
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        borderWidth: "calc(var(--border-1-3) * 1px)",
        flexGrow: 1,
      }}>{props.label}</span>
      {props.showBadge && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(7,89,230)",
        borderWidth: "calc(var(--border-1-3) * 1px)",
        flexShrink: 0,
      }}>{props.badge}</span>
      )}
      {props.showChevron && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconChevronDown />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 360,
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-selected)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-12-3) * 1px)",
      padding: "12px 12px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-12-3) * 1px)",
      paddingBottom: "calc(var(--space-12-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.nested && (
      <div style={{
        position: "relative",
        width: 16,
        height: 1,
        flexShrink: 0,
      }} />
      )}
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        lineHeight: "100%",
        color: "var(--color-action-primary)",
        borderWidth: "calc(var(--border-1-3) * 1px)",
        flexGrow: 1,
      }}>{props.label}</span>
      {props.showBadge && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(7,89,230)",
        borderWidth: "calc(var(--border-1-3) * 1px)",
        flexShrink: 0,
      }}>{props.badge}</span>
      )}
      {props.showChevron && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconChevronDown />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 360,
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-selected)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-12-3) * 1px)",
      padding: "12px 12px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-12-3) * 1px)",
      paddingBottom: "calc(var(--space-12-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.nested && (
      <div style={{
        position: "relative",
        width: 16,
        height: 1,
        flexShrink: 0,
      }} />
      )}
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        lineHeight: "100%",
        color: "var(--color-action-primary)",
        borderWidth: "calc(var(--border-1-3) * 1px)",
        flexGrow: 1,
      }}>{props.label}</span>
      {props.showBadge && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(7,89,230)",
        borderWidth: "calc(var(--border-1-3) * 1px)",
        flexShrink: 0,
      }}>{props.badge}</span>
      )}
      {props.showChevron && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          transform: "matrix(-1,0,0,-1,0,0)",
          flexShrink: 0,
        }}>{props.icon1 ?? <IconChevronDown />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 360,
      height: 48,
      opacity: 0.45,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-sidebar)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-12-3) * 1px)",
      padding: "12px 12px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-12-3) * 1px)",
      paddingBottom: "calc(var(--space-12-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.nested && (
      <div style={{
        position: "relative",
        width: 16,
        height: 1,
        flexShrink: 0,
      }} />
      )}
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        borderWidth: "calc(var(--border-1-3) * 1px)",
        flexGrow: 1,
      }}>{props.label}</span>
      {props.showBadge && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(7,89,230)",
        borderWidth: "calc(var(--border-1-3) * 1px)",
        flexShrink: 0,
      }}>{props.badge}</span>
      )}
      {props.showChevron && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconChevronDown />}</div>
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
    // figma: State=Expanded
    "state=expanded": __body3,
    // figma: State=Disabled
    "state=disabled": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default NavigationSidebarItem;
