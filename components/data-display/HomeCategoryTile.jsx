import { IconChevronRight } from "../icons/IconChevronRight.jsx";
import { IconNavPortal } from "../icons/IconNavPortal.jsx";

// figma node: 7329:5986 Home/Category Tile (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function HomeCategoryTile(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Planejamento", state: _p.state ?? "default", showCount: _p.showCount ?? true, description: _p.description ?? "Capacidade, demanda e eficiência operacional.", showDescription: _p.showDescription ?? false, count: _p.count ?? "8 produtos" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "100%",
      minHeight: 80,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 36,
        height: 36,
        overflow: "hidden",
        borderRadius: 9,
        backgroundColor: "var(--color-surface-subtle)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon ?? <IconNavPortal />}</div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        minWidth: 0,
      }}>
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 1.25,
          color: "var(--color-text-primary)",
          flexShrink: 0,
          maxWidth: "100%",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          wordBreak: "break-word",
        }}>{props.label}</span>
        {props.showDescription && (
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 1.3,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
        )}
        {props.showCount && (
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: 1.3,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          maxWidth: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>{props.count}</span>
        )}
      </div>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconChevronRight />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "100%",
      minHeight: 80,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 36,
        height: 36,
        overflow: "hidden",
        borderRadius: 9,
        backgroundColor: "var(--color-surface-subtle)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon ?? <IconNavPortal />}</div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        minWidth: 0,
      }}>
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 1.25,
          color: "var(--color-text-primary)",
          flexShrink: 0,
          maxWidth: "100%",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          wordBreak: "break-word",
        }}>{props.label}</span>
        {props.showDescription && (
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 1.3,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
        )}
        {props.showCount && (
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: 1.3,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          maxWidth: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>{props.count}</span>
        )}
      </div>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconChevronRight />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "100%",
      minHeight: 80,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 2px var(--color-action-focus)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 36,
        height: 36,
        overflow: "hidden",
        borderRadius: 9,
        backgroundColor: "var(--color-surface-subtle)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon ?? <IconNavPortal />}</div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        minWidth: 0,
      }}>
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 1.25,
          color: "var(--color-text-primary)",
          flexShrink: 0,
          maxWidth: "100%",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          wordBreak: "break-word",
        }}>{props.label}</span>
        {props.showDescription && (
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 1.3,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
        )}
        {props.showCount && (
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: 1.3,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          maxWidth: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>{props.count}</span>
        )}
      </div>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconChevronRight />}</div>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Hover
    "state=hover": __body1,
    // figma: State=Focus
    "state=focus": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default HomeCategoryTile;
