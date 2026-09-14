import React from 'react';
// figma node: 6647:30 Pagination Item — rebuilt as a real, functional page number
// button (was 3 static decorative variants with an 8px label and no onClick).
export function PaginationItem(_p = {}) {
  const props = { ..._p, label: _p.label ?? "1", state: _p.state ?? "default" };
  const current = props.state === "current";
  const disabled = props.state === "disabled";
  const [hover, setHover] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  return (
    <button
      type="button"
      aria-current={current ? "page" : undefined}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={props.onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={props.className}
      style={{
        width: 36,
        height: 36,
        borderRadius: 7,
        border: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        position: "relative",
        backgroundColor: current ? "var(--color-action-primary)" : hover && !disabled ? "var(--color-surface-subtle)" : "var(--color-surface-card)",
        boxShadow: current ? "none" : focused ? "inset 0 0 0 2px var(--color-action-focus)" : "inset 0 0 0 1px var(--color-border-default)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "background var(--duration-fast) var(--ease-standard)",
        ...props.style,
      }}
    >
      <span style={{
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "16px",
        color: current ? "var(--color-action-on-primary)" : disabled ? "var(--color-text-subtle)" : "var(--color-text-secondary)",
      }}>{props.label}</span>
    </button>
  );
}
export default PaginationItem;
