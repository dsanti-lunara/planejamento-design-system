import { IdentityAvatar } from "../data-display/IdentityAvatar.jsx";
import { StatusBadge } from "../data-display/StatusBadge.jsx";

// figma node: 7376:8287 Access/Recent Access Item
export function AccessRecentAccessItem(_p = {}) {
  const props = { ..._p, showStatus: _p.showStatus ?? true, userName: _p.userName ?? "Mariana Oliveira", showAvatar: _p.showAvatar ?? true, showSecondary: _p.showSecondary ?? true, secondary: _p.secondary ?? "mariana.oliveira@empresa.com", dateTime: _p.dateTime ?? "Hoje, 08:42", product: _p.product ?? "Claro Brasil" };
  return (
    <div className={props.className} style={{
      width: 720,
      height: 72,
      backgroundColor: "rgb(255,255,255)",
      borderBottom: "1px solid rgb(224,229,242)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showAvatar && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.icon1 ?? <IdentityAvatar initials={"MO"} content={"initials"} size={"sm"} />}</div>
      )}
      <div style={{
        position: "relative",
        width: 230,
        height: 44,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(15,41,92)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.userName}</span>
        {props.showSecondary && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(87,107,148)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.secondary}</span>
        )}
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(41,61,107)",
        flexShrink: 0,
      }}>{props.product}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(87,107,148)",
        flexShrink: 0,
      }}>{props.dateTime}</span>
      {props.showStatus && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <StatusBadge label={"Sucesso"} tone={"positive"} />}</div>
      )}
    </div>
  );
}
export default AccessRecentAccessItem;
