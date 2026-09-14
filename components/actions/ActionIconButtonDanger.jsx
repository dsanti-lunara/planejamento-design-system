import React from 'react';
import { IconTrash } from "../icons/IconTrash.jsx";

// figma node: 7228:7325 Action/Icon Button/Danger (15 variants)
// Rebuilt: default is visually neutral (no permanent red border/bg/icon) — the destructive
// treatment (subtle danger surface + danger icon) only shows on hover/pressed, and the focus
// ring comes solely from `.ds-interactive:focus-visible` (keyboard), never a hardcoded border.
const sizeCfg = {
  sm: { box: 32, icon: 18 },
  md: { box: 40, icon: 18 },
  lg: { box: 48, icon: 20 },
};

export function ActionIconButtonDanger(_p = {}) {
  const props = { ..._p, badge: _p.badge ?? false, size: _p.size ?? "sm", state: _p.state ?? "default" };
  const cfg = sizeCfg[props.size] || sizeCfg.sm;
  const forced = _p.state;
  const isDisabled = props.state === 'disabled';
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const showHover = (forced === 'hover' || (hover && !forced)) && !isDisabled;
  const showPressed = (forced === 'pressed' || (pressed && !forced)) && !isDisabled;
  const danger = (showHover || showPressed) && !isDisabled;

  const iconEl = props.icon ?? <IconTrash />;
  const styledIcon = React.cloneElement(iconEl, {
    style: { color: danger ? 'var(--color-text-negative)' : 'var(--color-icon-secondary)', ...iconEl.props.style },
  });

  return (
    <div
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      aria-disabled={isDisabled || undefined}
      aria-pressed={props.pressed || undefined}
      aria-label={props['aria-label']}
      onClick={isDisabled ? undefined : props.onClick}
      onKeyDown={isDisabled ? undefined : (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); props.onClick && props.onClick(e); } }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className={"ds-interactive" + (props.className ? " " + props.className : "")}
      style={{
        width: cfg.box,
        height: cfg.box,
        borderRadius: 8,
        backgroundColor: showPressed ? 'var(--color-state-negative-subtle)' : showHover ? 'var(--color-state-negative-subtle)' : 'transparent',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        position: "relative",
        cursor: isDisabled ? 'default' : 'pointer',
        opacity: isDisabled ? 0.45 : 1,
        ...props.style,
      }}
    >
      <div style={{ position: "relative", width: cfg.icon, height: cfg.icon, flexShrink: 0 }}>{styledIcon}</div>
      {props.badge && (
      <div style={{
        position: "relative",
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "var(--color-data-negative)",
        flexShrink: 0,
      }} />
      )}
    </div>
  );
}
export default ActionIconButtonDanger;
