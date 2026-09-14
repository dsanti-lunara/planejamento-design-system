import React from 'react';
import { IconSearch } from "../icons/IconSearch.jsx";

// figma node: 7258:7424 Search/Global Search — rebuilt as one functional trigger
// (was 4 near-duplicate static bodies with an 8px placeholder <span>, no real
// <input>, and a hardcoded "filled" value; none of it could be typed into).
// This now opens the real NavigationCommandPalette (see NavigationCommandPalette.jsx)
// instead of duplicating a fake search box next to it.
export function SearchGlobalSearch(_p = {}) {
  const props = { ..._p, placeholder: _p.placeholder ?? "Buscar produtos, relatórios, análises e conteúdos", showShortcut: _p.showShortcut ?? true, state: _p.state ?? "default" };
  const disabled = props.state === "disabled";
  const [hover, setHover] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const active = (props.state === "focus" || focused) && !disabled;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={disabled ? undefined : props.onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={props.className}
      style={{
        width: "100%",
        maxWidth: 460,
        minWidth: 0,
        height: 38,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        padding: "0 12px",
        boxSizing: "border-box",
        borderRadius: 8,
        border: "none",
        backgroundColor: "var(--color-surface-sidebar)",
        boxShadow: active ? "inset 0 0 0 2px var(--color-action-focus)" : hover && !disabled ? "inset 0 0 0 1px var(--color-border-brand)" : "inset 0 0 0 1px var(--color-border-default)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "box-shadow var(--duration-fast) var(--ease-standard)",
        overflow: "hidden",
        textAlign: "left",
        ...props.style,
      }}
    >
      <span style={{ width: 16, height: 16, flexShrink: 0, display: "inline-flex", color: "var(--color-icon-secondary)" }}>
        <IconSearch style={{ width: 16, height: 16 }} />
      </span>
      <span style={{
        flex: 1,
        minWidth: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        color: props.value ? "var(--color-text-primary)" : "var(--color-text-subtle)",
      }}>{props.value || props.placeholder}</span>
      {props.showShortcut && (
        <span style={{
          borderRadius: 6,
          backgroundColor: "var(--color-surface-selected)",
          padding: "4px 8px",
          flexShrink: 0,
          fontFamily: "var(--font-mono)",
          fontWeight: 500,
          fontSize: 11,
          color: "var(--color-text-secondary)",
        }}>{props.shortcutLabel ?? "Ctrl + M"}</span>
      )}
    </button>
  );
}
export default SearchGlobalSearch;
