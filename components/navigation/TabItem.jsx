import React from 'react';
import { IconChevronDown } from "../icons/IconChevronDown.jsx";

// figma node: 6647:23 Tab Item — was 5 static per-state demo bodies with no
// real interaction; rebuilt as one interactive tab (click, hover, focus,
// disabled all live) matching the uploaded reference's underline-tab pattern.
export function TabItem(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Recebidas", active: _p.active ?? false, disabled: _p.disabled ?? false };
  const forced = props.state;
  const [hover, setHover] = React.useState(false);
  const showHover = (forced === "hover" || hover) && !props.active && !props.disabled;
  // Real focus ring comes from the `.ds-interactive:focus-visible` utility (keyboard-only,
  // token-driven) — `forced === "focus"` only drives the style-guide demo swatch below.
  const showFocus = forced === "focus";

  const color = props.disabled ? "var(--color-text-muted)"
    : props.active ? "var(--color-text-primary)"
    : showHover ? "var(--color-text-link)"
    : "var(--color-text-secondary)";

  return (
    <button
      type="button"
      role="tab"
      aria-selected={props.active}
      aria-disabled={props.disabled}
      disabled={props.disabled}
      onClick={props.onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      tabIndex={props.tabIndex}
      className={"ds-interactive" + (props.className ? " " + props.className : "")}
      style={{
        width: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        padding: "7px 12px",
        alignItems: "center",
        boxSizing: "border-box",
        position: "relative",
        border: "none",
        background: showHover ? "var(--color-surface-subtle)" : "transparent",
        borderRadius: showHover ? 8 : 0,
        boxShadow: showFocus ? "inset 0 0 0 2px var(--color-action-focus)" : "none",
        cursor: props.disabled ? "not-allowed" : "pointer",
        opacity: props.disabled ? 0.45 : 1,
        transition: "color var(--duration-fast) var(--ease-standard), background var(--duration-fast) var(--ease-standard)",
        ...props.style,
      }}
    >
      <span style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-sans)",
        fontWeight: props.active ? 600 : 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color,
      }}>
        {props.icon && <span style={{ width: 16, height: 16, flexShrink: 0, display: "inline-flex" }}>{props.icon}</span>}
        {props.label}
      </span>
      <div style={{
        width: "100%",
        height: 2,
        borderRadius: 1,
        backgroundColor: props.active ? "var(--color-text-link)" : "transparent",
        flexShrink: 0,
        transition: "background var(--duration-fast) var(--ease-standard)",
      }} />
    </button>
  );
}
export default TabItem;
