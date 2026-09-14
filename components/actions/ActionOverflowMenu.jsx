import React from 'react';
import ReactDOM from 'react-dom';
import { ActionDropdownMenu } from './ActionDropdownMenu.jsx';

// figma node: 7238:7282 Action/Overflow Menu (5 variants)
// Improved: the trigger now really opens/closes a real ActionDropdownMenu (was a static frame —
// "state=open" had no menu content before). `open`/`onOpenChange` optionally controlled.
export function ActionOverflowMenu(_p = {}) {
  const props = { ..._p, state: _p.state ?? "closed" };
  const isControlled = props.open !== undefined;
  const [innerOpen, setInnerOpen] = React.useState(props.state === 'open');
  const open = isControlled ? props.open : innerOpen;
  const setOpen = (v) => { if (!isControlled) setInnerOpen(v); props.onOpenChange && props.onOpenChange(v); };
  const rootRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const [menuPos, setMenuPos] = React.useState(null);
  const disabled = props.disabled || props.state === 'disabled';

  React.useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => { if (rootRef.current && !rootRef.current.contains(e.target) && !(menuRef.current && menuRef.current.contains(e.target))) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const reposition = () => { if (triggerRef.current) { const r = triggerRef.current.getBoundingClientRect(); setMenuPos({ top: r.bottom + 4, left: r.right }); } };
    reposition();
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', reposition, true);
    window.addEventListener('resize', reposition);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); window.removeEventListener('scroll', reposition, true); window.removeEventListener('resize', reposition); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  const menuRef = React.useRef(null);

  const bg = open || props.state === 'hover' ? "var(--color-action-hover)" : "var(--color-surface-card)";
  const boxShadow = props.state === 'focus' ? "inset 0 0 0 1px var(--color-border-brand)" : "none";

  const menu = open && !disabled && menuPos ? ReactDOM.createPortal(
    <div ref={menuRef} style={{ position: "fixed", top: menuPos.top, left: menuPos.left, transform: "translateX(-100%)", zIndex: 2000 }}>
      <ActionDropdownMenu items={props.items ? props.items.map((it) => ({ ...it, onClick: () => { it.onClick && it.onClick(); setOpen(false); } })) : undefined} />
    </div>,
    document.body
  ) : null;

  return (
    <div ref={rootRef} style={{ position: "relative", display: "inline-block" }}>
      <div
        ref={triggerRef}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={disabled ? undefined : () => setOpen(!open)}
        onKeyDown={disabled ? undefined : (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!open); } }}
        className={props.className}
        style={{
          width: 40, height: 40, borderRadius: 8, backgroundColor: bg, boxShadow,
          opacity: disabled ? 0.5 : 1, position: "relative", cursor: disabled ? "default" : "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          ...props.style,
        }}
      >
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 18, lineHeight: "100%", color: "var(--color-text-primary)" }}>{props.text1 ?? "⋮"}</span>
      </div>
      {menu}
    </div>
  );
}
export default ActionOverflowMenu;
