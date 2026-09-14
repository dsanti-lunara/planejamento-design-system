import React from 'react';
import { IconBell } from "../icons/IconBell.jsx";
// Improved: added real onClick/keyboard support (was a plain, non-interactive div despite hover/active states existing).
// figma node: 7241:7298 Feedback/Notification Bell (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "count=" + __venc(p.count);

export function FeedbackNotificationBell(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", count: _p.count ?? "none" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-card)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 10,
        top: 10,
        width: 20,
        height: 20,
      }}>{props.icon ?? <IconBell />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-card)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 10,
        top: 10,
        width: 20,
        height: 20,
      }}>{props.icon ?? <IconBell />}</div>
      <div style={{
        position: "absolute",
        left: 26,
        top: -5,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 9,
        backgroundColor: "var(--color-data-negative)",
      }}>
        <span style={{
          position: "absolute",
          left: 6,
          top: 3,
          width: 6,
          height: 11,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 9,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-inverse)",
        }}>{props.text2 ?? "3"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--color-action-hover)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 10,
        top: 10,
        width: 20,
        height: 20,
      }}>{props.icon ?? <IconBell />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--color-action-hover)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 10,
        top: 10,
        width: 20,
        height: 20,
      }}>{props.icon ?? <IconBell />}</div>
      <div style={{
        position: "absolute",
        left: 26,
        top: -5,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 9,
        backgroundColor: "var(--color-data-negative)",
      }}>
        <span style={{
          position: "absolute",
          left: 6,
          top: 3,
          width: 6,
          height: 11,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 9,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-inverse)",
        }}>{props.text2 ?? "3"}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-selected)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 10,
        top: 10,
        width: 20,
        height: 20,
      }}>{props.icon ?? <IconBell />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-selected)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 10,
        top: 10,
        width: 20,
        height: 20,
      }}>{props.icon ?? <IconBell />}</div>
      <div style={{
        position: "absolute",
        left: 26,
        top: -5,
        width: 18,
        height: 18,
        overflow: "hidden",
        borderRadius: 9,
        backgroundColor: "var(--color-data-negative)",
      }}>
        <span style={{
          position: "absolute",
          left: 6,
          top: 3,
          width: 6,
          height: 11,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 9,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-inverse)",
        }}>{props.text2 ?? "3"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default, Count=None
    "state=default|count=none": __body0,
    // figma: State=Default, Count=Numeric
    "state=default|count=numeric": __body1,
    // figma: State=Hover, Count=None
    "state=hover|count=none": __body2,
    // figma: State=Hover, Count=Numeric
    "state=hover|count=numeric": __body3,
    // figma: State=Active, Count=None
    "state=active|count=none": __body4,
    // figma: State=Active, Count=Numeric
    "state=active|count=numeric": __body5,
  };
  const el = (__impls[__vkey(props)] ?? __body0)();
  return React.cloneElement(el, {
    role: 'button', tabIndex: 0, 'aria-label': 'Notificações',
    onClick: props.onClick,
    onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); props.onClick && props.onClick(e); } },
    style: { ...el.props.style, cursor: 'pointer' },
  });
}
export default FeedbackNotificationBell;
