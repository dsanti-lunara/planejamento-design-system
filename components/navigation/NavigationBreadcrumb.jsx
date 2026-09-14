import React from 'react';
import { ActionDropdownMenu } from "../actions/ActionDropdownMenu.jsx";
import { IconChevronRight } from "../icons/IconChevronRight.jsx";
import { NavigationBreadcrumbItem } from './NavigationBreadcrumbItem.jsx';

// figma node: 7240:7278 Navigation/Breadcrumb (3 variants)
// Improved: the "•••" overflow trigger in the Overflow variant now actually opens/closes the
// hidden-crumbs menu (was a static, non-interactive frame before) — click to toggle, click
// outside to close. `showOverflowMenu` still seeds the initial state for a controlled use case.
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "path=" + __venc(p.path);

export function NavigationBreadcrumb(_p = {}) {
  const props = { ..._p, showOverflowMenu: _p.showOverflowMenu ?? false, path: _p.path ?? "short" };
  const [menuOpen, setMenuOpen] = React.useState(props.showOverflowMenu);

  // Content-driven path: `items` replaces the hardcoded Figma trails entirely.
  const renderItems = () => {
    const last = props.items.length - 1;
    return (
      <nav className={props.className} aria-label="Breadcrumb" style={{
        display: "flex", flexDirection: "row", gap: 6, alignItems: "center",
        flexWrap: "wrap", rowGap: 2, width: "100%", minWidth: 0, maxWidth: "100%",
        ...props.style,
      }}>
        {props.items.map((it, i) => {
          const current = it.current ?? i === last;
          const clickable = !current && typeof it.onClick === "function";
          return (
            <React.Fragment key={i}>
              <span
                onClick={clickable ? it.onClick : undefined}
                role={clickable ? "link" : undefined}
                tabIndex={clickable ? 0 : undefined}
                onKeyDown={clickable ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); it.onClick(); } } : undefined}
                style={{ display: "inline-flex", flexShrink: 0, cursor: clickable ? "pointer" : "default", borderRadius: 4 }}
              >
                <NavigationBreadcrumbItem label={it.label} icon={it.icon} showIcon={!!it.icon} state={current ? "current" : "default"} />
              </span>
              {i < last && (
                <span aria-hidden="true" style={{ display: "inline-flex", flexShrink: 0, color: "var(--color-text-muted)" }}>
                  <IconChevronRight style={{ transform: "scale(0.813, 0.813)", transformOrigin: "0 0" }} />
                </span>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    );
  };
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    if (!menuOpen) return undefined;
    const onDown = (e) => { if (rootRef.current && !rootRef.current.contains(e.target)) setMenuOpen(false); };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [menuOpen]);
  if (props.items && props.items.length) return renderItems();
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      maxWidth: "100%",
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: "auto",
          minWidth: 0,
          flexShrink: 1,
          overflow: "hidden",
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <NavigationBreadcrumbItem label={"Produtos"} showIcon={false} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 13,
          height: 13,
          flexShrink: 0,
        }}>{props.icon2 ?? <IconChevronRight style={{ transform: "scale(0.813, 0.813)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "relative",
          width: "auto",
          minWidth: 0,
          flexShrink: 1,
          overflow: "hidden",
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <NavigationBreadcrumbItem label={"Claro Brasil"} showIcon={false} state={"current"} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 420,
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 33,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <NavigationBreadcrumbItem label={"Início"} showIcon={false} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 13,
          height: 13,
          flexShrink: 0,
        }}>{props.icon2 ?? <IconChevronRight style={{ transform: "scale(0.813, 0.813)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "relative",
          width: 57,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <NavigationBreadcrumbItem label={"Catálogo"} showIcon={false} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 13,
          height: 13,
          flexShrink: 0,
        }}>{props.icon4 ?? <IconChevronRight style={{ transform: "scale(0.813, 0.813)", transformOrigin: "0 0" }} />}</div>
      <NavigationBreadcrumbItem
        style={{
          position: "relative",
          width: 57,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        label={"Produtos"}
        showIcon={false}
        state={"default"}
      />
      <div style={{
          position: "relative",
          width: 13,
          height: 13,
          flexShrink: 0,
        }}>
        <IconChevronRight style={{ transform: "scale(0.813, 0.813)", transformOrigin: "0 0" }} />
      </div>
      <NavigationBreadcrumbItem
        style={{
          position: "relative",
          width: 72,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        label={"Claro Brasil"}
        showIcon={false}
        state={"current"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 33,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <NavigationBreadcrumbItem label={"Início"} showIcon={false} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 13,
          height: 13,
          flexShrink: 0,
        }}>{props.icon2 ?? <IconChevronRight style={{ transform: "scale(0.813, 0.813)", transformOrigin: "0 0" }} />}</div>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setMenuOpen((v) => !v); } }}
        style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        padding: "3px 6px 3px 6px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        cursor: "pointer",
        backgroundColor: menuOpen ? "var(--color-surface-selected)" : "transparent",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "13px",
          letterSpacing: "1px",
          color: "var(--color-text-muted)",
          flexShrink: 0,
        }}>{props.text1 ?? "•••"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 13,
          height: 13,
          flexShrink: 0,
        }}>{props.icon3 ?? <IconChevronRight style={{ transform: "scale(0.813, 0.813)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "relative",
          width: 57,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <NavigationBreadcrumbItem label={"Produtos"} showIcon={false} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 13,
          height: 13,
          flexShrink: 0,
        }}>
        <IconChevronRight style={{ transform: "scale(0.813, 0.813)", transformOrigin: "0 0" }} />
      </div>
      <NavigationBreadcrumbItem
        style={{
          position: "relative",
          width: 72,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        label={"Claro Brasil"}
        showIcon={false}
        state={"current"}
      />
      {menuOpen && (
      <ActionDropdownMenu style={{
          position: "absolute",
          left: 145,
          top: 30,
          width: 280,
          height: 250,
        }} />
      )}
    </div>
  );
  const __impls = {
    // figma: Path=Short
    "path=short": __body0,
    // figma: Path=Long
    "path=long": __body1,
    // figma: Path=Overflow
    "path=overflow": __body2,
  };
  return <div ref={rootRef} style={{ display: "contents" }}>{(__impls[__vkey(props)] ?? __body0)()}</div>;
}
export default NavigationBreadcrumb;
