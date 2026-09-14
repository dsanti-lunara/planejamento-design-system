import { IconNavPortal } from "../icons/IconNavPortal.jsx";

// figma node: 7260:7372 Navigation/Help Panel
export function NavigationHelpPanel(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Precisa de ajuda?", description: _p.description ?? "Acesse nossa central de ajuda ou fale com o suporte.", icon: _p.icon ?? true, visible: _p.visible ?? true };
  return (
    <div className={props.className} style={{
      width: 360,
      height: 180,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-sidebar)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-12-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.visible && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--color-surface-sidebar)",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "100%",
          color: "rgb(11,36,92)",
          borderWidth: "calc(var(--border-1-3) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "18px",
          color: "var(--color-text-secondary)",
          borderWidth: "calc(var(--border-1-3) * 1px)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.description}</span>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          {props.icon && (
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconNavPortal style={{ transform: "scale(0.889, 0.889)", transformOrigin: "0 0" }} />}</div>
          )}
          {props.icon && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            lineHeight: "100%",
            color: "rgb(82,105,143)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Abertura externa"}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          height: 36,
          borderRadius: 8,
          backgroundColor: "var(--color-surface-sidebar)",
          borderTop: "1px solid var(--color-border-default)",
          borderRight: "1px solid var(--color-border-default)",
          borderBottom: "1px solid var(--color-border-default)",
          borderLeft: "1px solid var(--color-border-default)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "0px 12px 0px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 7.5,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-action-on-secondary)",
            borderWidth: "calc(var(--border-1-3) * 1px)",
            flexShrink: 0,
          }}>Central de ajuda</span>
        </div>
      </div>
      )}
    </div>
  );
}
export default NavigationHelpPanel;
