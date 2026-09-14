import React from 'react';
import { NavSidebar } from "../navigation/NavSidebar.jsx";
import { NavTopbar } from "../navigation/NavTopbar.jsx";
import { NavigationBreadcrumb } from "../navigation/NavigationBreadcrumb.jsx";

// figma node: 7270:8257 Shell/Portal — composes the unified NavSidebar/NavTopbar
// instead of re-drawing them per variant. Now hosts real page content: pass
// `children` (the placeholder slot is only shown when there are none) and `fill`
// to make the shell take the viewport instead of a fixed 1440×900 frame.
export function ShellPortal(_p = {}) {
  const props = { ..._p, topbar: _p.topbar ?? true, sidebarState: _p.sidebarState ?? "expanded", breadcrumb: _p.breadcrumb ?? true, contentWidth: _p.contentWidth ?? "fluid", fill: _p.fill ?? false };
  const collapsed = props.sidebarState === "collapsed";
  const hasChildren = React.Children.count(props.children) > 0;
  const FONT = "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif";

  return (
    <div className={props.className} style={{
      width: props.fill ? "100%" : 1440, height: props.fill ? "100vh" : 900,
      maxWidth: "100%", minWidth: 0, overflow: "hidden",
      backgroundColor: "var(--color-surface-canvas)", fontFamily: FONT,
      display: "flex", flexDirection: "row", alignItems: "stretch",
      ...props.style,
    }}>
      <NavSidebar
        collapsed={collapsed}
        items={props.sidebarItems}
        logo={props.sidebarLogo}
        onToggleCollapsed={props.onToggleSidebar}
        showUtility={props.showUtility}
        showBackToPortal={props.showBackToPortal}
        style={{ flexShrink: 0, alignSelf: "stretch", height: "auto" }}
      />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", flexGrow: 1, alignSelf: "stretch", minWidth: 0, overflow: "hidden" }}>
        {props.topbar && <NavTopbar variant="portal" breadcrumb={false} user={props.user} style={{ flexShrink: 0, alignSelf: "stretch", width: "auto" }} />}
        <div style={{
          display: "flex", flexDirection: "column", gap: 20, padding: 24, alignItems: "flex-start",
          boxSizing: "border-box", flexGrow: 1, alignSelf: "stretch", minWidth: 0, overflowY: "auto", overflowX: "hidden",
        }}>
          {props.breadcrumb && (props.breadcrumbSlot ?? <NavigationBreadcrumb style={{ width: "auto", flexShrink: 0 }} path="short" />)}
          {hasChildren ? (
            <div style={{
              width: props.contentWidth === "constrained" ? "min(1080px, 100%)" : "100%",
              minWidth: 0, flexGrow: 1, alignSelf: props.contentWidth === "constrained" ? "flex-start" : "stretch",
              display: "flex", flexDirection: "column", gap: 20, boxSizing: "border-box",
            }}>{props.children}</div>
          ) : (
            <div style={{
              width: props.contentWidth === "constrained" ? "min(1080px, 100%)" : "100%", minWidth: 0, flexGrow: 1,
              alignSelf: props.contentWidth === "constrained" ? "flex-start" : "stretch",
              borderRadius: 8, backgroundColor: "var(--color-surface-canvas)",
              outline: "1px dashed var(--color-border-default)", outlineOffset: -1,
              display: "flex", flexDirection: "column", gap: 12, padding: 32, boxSizing: "border-box",
            }}>
              <span style={{ fontWeight: 600, fontSize: 14, color: "var(--color-text-secondary)" }}>MAIN CONTENT SLOT</span>
              <span style={{ fontWeight: 400, fontSize: 12, color: "var(--color-text-muted)" }}>Substitua por composição da página. Nenhum conteúdo final pertence ao Shell.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ShellPortal;
