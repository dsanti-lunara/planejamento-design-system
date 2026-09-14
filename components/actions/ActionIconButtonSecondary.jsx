import React from 'react';
import { IconNavHome } from "../icons/IconNavHome.jsx";

// Improved: added real onClick/keyboard support and fixed unresolved-variable placeholder colors (rgb(128,128,128)) to real tokens.
// figma node: 7228:7203 Action/Icon Button/Secondary (15 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state);

export function ActionIconButtonSecondary(_p = {}) {
  const props = { ..._p, badge: _p.badge ?? false, size: _p.size ?? "sm", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 8,
      backgroundColor: "var(--color-action-secondary)",
      boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome style={{ color: "var(--color-action-on-secondary)" }} />}</div>
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
  const __body1 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 8,
      backgroundColor: "var(--color-action-secondary)",
      boxShadow: "inset 0 0 0 2px var(--color-action-secondary-border)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome style={{ color: "var(--color-action-on-secondary)" }} />}</div>
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
  const __body2 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      opacity: 0.45,
      borderRadius: 8,
      backgroundColor: "var(--color-action-secondary)",
      boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome style={{ color: "var(--color-action-on-secondary)" }} />}</div>
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
  const __body3 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--color-action-secondary)",
      boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome style={{ color: "var(--color-action-on-secondary)" }} />}</div>
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
  const __body4 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--color-action-secondary)",
      boxShadow: "inset 0 0 0 2px var(--color-action-secondary-border)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome style={{ color: "var(--color-action-on-secondary)" }} />}</div>
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
  const __body5 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.45,
      borderRadius: 8,
      backgroundColor: "var(--color-action-secondary)",
      boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome style={{ color: "var(--color-action-on-secondary)" }} />}</div>
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
  const __body6 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--color-action-secondary)",
      boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome style={{ color: "var(--color-action-on-secondary)", transform: "scale(1.111, 1.111)", transformOrigin: "0 0" }} />}</div>
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
  const __body7 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--color-action-secondary)",
      boxShadow: "inset 0 0 0 2px var(--color-action-secondary-border)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome style={{ color: "var(--color-action-on-secondary)", transform: "scale(1.111, 1.111)", transformOrigin: "0 0" }} />}</div>
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
  const __body8 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      opacity: 0.45,
      borderRadius: 8,
      backgroundColor: "var(--color-action-secondary)",
      boxShadow: "inset 0 0 0 1px var(--color-action-secondary-border)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon ?? <IconNavHome style={{ color: "var(--color-action-on-secondary)", transform: "scale(1.111, 1.111)", transformOrigin: "0 0" }} />}</div>
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
  const __impls = {
    // figma: Size=Small, State=Default
    "size=sm|state=default": __body0,
    // figma: Size=Small, State=Hover
    "size=sm|state=hover": __body0,
    // figma: Size=Small, State=Pressed
    "size=sm|state=pressed": __body0,
    // figma: Size=Small, State=Focus
    "size=sm|state=focus": __body1,
    // figma: Size=Small, State=Disabled
    "size=sm|state=disabled": __body2,
    // figma: Size=Medium, State=Default
    "size=md|state=default": __body3,
    // figma: Size=Medium, State=Hover
    "size=md|state=hover": __body3,
    // figma: Size=Medium, State=Pressed
    "size=md|state=pressed": __body3,
    // figma: Size=Medium, State=Focus
    "size=md|state=focus": __body4,
    // figma: Size=Medium, State=Disabled
    "size=md|state=disabled": __body5,
    // figma: Size=Large, State=Default
    "size=lg|state=default": __body6,
    // figma: Size=Large, State=Hover
    "size=lg|state=hover": __body6,
    // figma: Size=Large, State=Pressed
    "size=lg|state=pressed": __body6,
    // figma: Size=Large, State=Focus
    "size=lg|state=focus": __body7,
    // figma: Size=Large, State=Disabled
    "size=lg|state=disabled": __body8,
  };
  const el = (__impls[__vkey(props)] ?? __body0)();
  const isDisabled = props.state === 'disabled';
  return React.cloneElement(el, {
    role: 'button',
    tabIndex: isDisabled ? -1 : 0,
    'aria-disabled': isDisabled || undefined,
    'aria-pressed': props.pressed || undefined,
    onClick: isDisabled ? undefined : props.onClick,
    onKeyDown: isDisabled ? undefined : (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); props.onClick && props.onClick(e); } },
    className: [el.props.className, 'ds-interactive'].filter(Boolean).join(' '),
    style: { ...el.props.style, cursor: isDisabled ? 'default' : 'pointer' },
  });
}
export default ActionIconButtonSecondary;
