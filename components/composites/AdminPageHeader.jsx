import { AccessStatus } from "../data-display/AccessStatus.jsx";
import { NavigationBreadcrumb } from "../navigation/NavigationBreadcrumb.jsx";
import { Button } from "../actions/Button.jsx";
import { ActionOverflowMenu } from "../actions/ActionOverflowMenu.jsx";

// figma node: 7266:7571 Admin/Page Header — made content-driven: was a fixed
// 1320x150 frame that overflowed narrower admin viewports and clipped actions;
// now width:100%/height:auto, title/description flexes and wraps, the action
// cluster never gets overflow:hidden-clipped and wraps onto its own row instead
// of cutting "Novo produto" / "Editar produto" / overflow menu at narrow widths.
export function AdminPageHeader(_p = {}) {
  const props = { ..._p, secondaryAction: _p.secondaryAction ?? false, title: _p.title ?? "Produtos", overflow: _p.overflow ?? false, status: _p.status ?? false, primaryAction: _p.primaryAction ?? true, description: _p.description ?? "Gerencie os produtos disponíveis na plataforma Nexo.", breadcrumb: _p.breadcrumb ?? false, descriptionVisible: _p.descriptionVisible ?? true };
  return (
    <div className={props.className} style={{
      width: "100%",
      maxWidth: "100%",
      minWidth: 0,
      height: "auto",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      position: "relative",
      ...props.style,
    }}>
      {props.breadcrumb && (
      <NavigationBreadcrumb
        style={{ position: "relative", width: "auto", maxWidth: "100%", height: 28, flexShrink: 0 }}
        path={"short"}
      />
      )}
      <div style={{
        position: "relative",
        width: "100%",
        minWidth: 0,
        display: "flex",
        flexDirection: "row",
        gap: 20,
        rowGap: 12,
        alignItems: "center",
        flexWrap: "wrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "flex-start",
          flex: "1 1 240px",
          minWidth: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 28,
            lineHeight: "130%",
            color: "var(--color-text-primary)",
            width: "100%",
            textWrap: "pretty",
            overflowWrap: "anywhere",
          }}>{props.title}</span>
          {props.descriptionVisible && (
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "140%",
            color: "var(--color-text-secondary)",
            width: "100%",
            textWrap: "pretty",
            overflowWrap: "anywhere",
          }}>{props.description}</span>
          )}
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          flexShrink: 0,
        }}>
          {props.status && (
          <AccessStatus
            style={{ position: "relative", flexShrink: 0 }}
            state={"authorized"}
          />
          )}
          {props.secondaryAction && (
            <Button label={props.secondaryLabel ?? "Cancelar"} size="default" style2="secondary" state={props.secondaryState} onClick={props.onSecondaryAction} style={{ flexShrink: 0 }} />
          )}
          {props.primaryAction && (
            <Button label={props.primaryLabel ?? "Novo produto"} size="default" style2="primary" state={props.primaryState} onClick={props.onPrimaryAction} style={{ flexShrink: 0, minWidth: 120 }} />
          )}
          {props.overflow && (
            <ActionOverflowMenu items={props.overflowItems} style={{ flexShrink: 0 }} />
          )}
        </div>
      </div>
    </div>
  );
}
export default AdminPageHeader;
