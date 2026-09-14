import React from 'react';
import { IconChevronRight } from "../icons/IconChevronRight.jsx";
import { IconPlay } from "../icons/IconPlay.jsx";

// figma node: 6646:2094 Button (60 variants) — consolidated into one component:
// real hover/focus/press state via React, variant/size styling via lookup tables,
// flexible (fit-content) width instead of fixed pixels.
const SIZES = {
  compact: { height: 'var(--size-control-compact)', padding: '0 12px', fontSize: 13, gap: 6 },
  default: { height: 'var(--size-control-default)', padding: '0 14px', fontSize: 13, gap: 6 },
};

const VARIANTS = {
  primary: {
    bg: 'var(--color-action-primary)', bgHover: 'var(--color-action-primary-hover)', bgPressed: 'var(--color-action-primary-pressed)',
    color: 'var(--color-action-on-primary)', border: 'transparent',
  },
  secondary: {
    bg: 'var(--color-action-secondary)', bgHover: 'var(--color-action-hover)', bgPressed: 'var(--color-action-pressed)',
    color: 'var(--color-action-on-secondary)', border: 'var(--color-action-secondary-border)',
  },
  tertiary: {
    bg: 'transparent', bgHover: 'var(--blue-50-2)', bgPressed: 'var(--blue-100-2)',
    color: 'var(--blue-600-2)', border: 'transparent',
  },
  destructive: {
    bg: 'var(--color-action-secondary)', bgHover: 'var(--red-50)', bgPressed: 'var(--red-50)',
    color: 'var(--red-600-2)', border: 'var(--red-600-2)',
  },
  ai: {
    bg: 'var(--purple-600)', bgHover: 'var(--purple-500)', bgPressed: 'var(--purple-500)',
    color: 'var(--color-action-on-primary)', border: 'transparent',
  },
};

export function Button(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? "Aplicar",
    size: _p.size ?? "compact",
    showLeadingIcon: _p.showLeadingIcon ?? false,
    style2: _p.style2 ?? "primary",
    showTrailingIcon: _p.showTrailingIcon ?? false,
    state: _p.state ?? "default",
  };
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const forced = props.state !== "default" ? props.state : null;
  const disabled = forced === "disabled" || forced === "loading";
  const isHover = forced ? forced === "hover" : hover;
  const isPressed = forced ? forced === "pressed" : pressed;
  const isFocused = forced ? forced === "focus" : focused;
  const isLoading = forced === "loading";

  const v = VARIANTS[props.style2] || VARIANTS.primary;
  const s = SIZES[props.size] || SIZES.compact;

  const bg = disabled ? 'var(--color-action-disabled)' : isPressed ? v.bgPressed : isHover ? v.bgHover : v.bg;
  const color = disabled ? 'var(--color-text-subtle)' : v.color;

  return (
    <button
      className={props.className}
      type={props.type ?? "button"}
      disabled={disabled}
      onClick={disabled ? undefined : props.onClick}
      onMouseEnter={() => !forced && setHover(true)}
      onMouseLeave={() => { if (!forced) { setHover(false); setPressed(false); } }}
      onMouseDown={() => !forced && setPressed(true)}
      onMouseUp={() => !forced && setPressed(false)}
      onFocus={() => !forced && setFocused(true)}
      onBlur={() => !forced && setFocused(false)}
      style={{
        width: 'fit-content',
        height: `calc(${s.height} * 1px)`,
        borderRadius: 8,
        backgroundColor: bg,
        boxShadow: v.border !== 'transparent' ? `inset 0 0 0 1px ${disabled ? 'var(--color-action-secondary-border)' : v.border}` : 'none',
        outline: isFocused && !disabled ? '3px solid rgba(37,99,235,0.28)' : 'none',
        outlineOffset: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        padding: s.padding,
        boxSizing: 'border-box',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transform: isPressed && !disabled ? 'scale(0.97)' : 'scale(1)',
        transition: 'background-color var(--dur-fast,120ms) var(--ease-out,ease-out), transform var(--dur-fast,120ms), outline var(--dur-fast,120ms)',
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: s.fontSize,
        lineHeight: '18px',
        color,
        whiteSpace: 'nowrap',
        ...props.style,
      }}
    >
      {isLoading ? (
        <span style={{
          width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
          border: `2px solid ${color}`, borderTopColor: 'transparent',
          opacity: 0.7, animation: 'ds-btn-spin 0.7s linear infinite',
        }} />
      ) : props.showLeadingIcon ? (
        <span style={{ width: 16, height: 16, flexShrink: 0 }}>{props.leadingIcon ?? <IconPlay />}</span>
      ) : null}
      <span>{props.label}</span>
      {!isLoading && props.showTrailingIcon && (
        <span style={{ width: 16, height: 16, flexShrink: 0 }}>{props.trailingIcon ?? <IconChevronRight />}</span>
      )}
      <style>{"@keyframes ds-btn-spin{to{transform:rotate(360deg)}}"}</style>
    </button>
  );
}

export default Button;
