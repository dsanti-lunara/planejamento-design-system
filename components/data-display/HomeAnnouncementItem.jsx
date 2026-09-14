import { Button } from "../actions/Button.jsx";
import { IconNavPortal } from "../icons/IconNavPortal.jsx";
import { StatusBadge } from './StatusBadge.jsx';

// figma node: 7331:6018 Home/Announcement Item (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function HomeAnnouncementItem(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Nova versão disponível", type: _p.type ?? "info", showCTA: _p.showCTA ?? false, description: _p.description ?? "O relatório Claro Brasil recebeu melhorias de diagnóstico e navegação.", showDate: _p.showDate ?? true, date: _p.date ?? "Hoje, 10:30" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "100%",
      minHeight: 112,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "4px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 14,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavPortal />}</div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        minWidth: 0,
      }}>
        <div style={{ position: "relative", width: 51, flexShrink: 0 }}>{props.icon1 ?? <StatusBadge label={"NOVO"} tone={"info"} />}</div>
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 1.4,
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 1.4,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
        {props.showDate && (
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: 1.4,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.date}</span>
        )}
      </div>
      {props.showCTA && (
      <div style={{ position: "relative", height: 36, flexShrink: 0 }}>{props.cTA ?? <Button label={"Ver detalhes"} size={"compact"} style2={"secondary"} state={"default"} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "100%",
      minHeight: 112,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "4px solid var(--color-border-warning)",
      display: "flex",
      flexDirection: "row",
      gap: 14,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavPortal />}</div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        minWidth: 0,
      }}>
        <div style={{ position: "relative", width: 53, flexShrink: 0 }}>{props.icon1 ?? <StatusBadge label={"AVISO"} tone={"warning"} />}</div>
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 1.4,
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 1.4,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
        {props.showDate && (
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: 1.4,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.date}</span>
        )}
      </div>
      {props.showCTA && (
      <div style={{ position: "relative", height: 36, flexShrink: 0 }}>{props.cTA ?? <Button label={"Ver detalhes"} size={"compact"} style2={"secondary"} state={"default"} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "100%",
      minHeight: 112,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "3px solid var(--color-border-warning)",
      display: "flex",
      flexDirection: "row",
      gap: 14,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavPortal />}</div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        minWidth: 0,
      }}>
        <StatusBadge
          style={{ position: "relative", width: 103, flexShrink: 0 }}
          label={"MANUTENÇÃO"}
          tone={"neutral"}
        />
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 1.4,
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 1.4,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
        {props.showDate && (
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: 1.4,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.date}</span>
        )}
      </div>
      {props.showCTA && (
      <div style={{ position: "relative", height: 36, flexShrink: 0 }}>{props.cTA ?? <Button label={"Ver detalhes"} size={"compact"} style2={"secondary"} state={"default"} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "100%",
      minHeight: 112,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "4px solid var(--color-border-positive)",
      display: "flex",
      flexDirection: "row",
      gap: 14,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavPortal />}</div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        minWidth: 0,
      }}>
        <div style={{ position: "relative", width: 51, flexShrink: 0 }}>{props.icon1 ?? <StatusBadge label={"NOVO"} tone={"positive"} />}</div>
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 1.4,
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 1.4,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
        {props.showDate && (
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: 1.4,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.date}</span>
        )}
      </div>
      {props.showCTA && (
      <div style={{ position: "relative", height: 36, flexShrink: 0 }}>{props.cTA ?? <Button label={"Ver detalhes"} size={"compact"} style2={"secondary"} state={"default"} />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "100%",
      minHeight: 112,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "4px solid var(--color-border-negative)",
      display: "flex",
      flexDirection: "row",
      gap: 14,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavPortal />}</div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        minWidth: 0,
      }}>
        <StatusBadge
          style={{ position: "relative", width: 94, flexShrink: 0 }}
          label={"IMPORTANTE"}
          tone={"negative"}
        />
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 1.4,
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.title}</span>
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 1.4,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
        {props.showDate && (
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: 1.4,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.date}</span>
        )}
      </div>
      {props.showCTA && (
      <div style={{ position: "relative", height: 36, flexShrink: 0 }}>{props.cTA ?? <Button label={"Ver detalhes"} size={"compact"} style2={"secondary"} state={"default"} />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: Type=Info
    "type=info": __body0,
    // figma: Type=Warning
    "type=warning": __body1,
    // figma: Type=Maintenance
    "type=maintenance": __body2,
    // figma: Type=Release
    "type=release": __body3,
    // figma: Type=Important
    "type=important": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default HomeAnnouncementItem;
