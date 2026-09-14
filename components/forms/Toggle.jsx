import React from 'react';

// figma node: 6646:2155 Toggle — consolidated: one real switch (click + keyboard
// + real focus ring) instead of 3 duplicated static bodies. `state` kept for
// back-compat (initial checked/disabled); real interaction via checked/onChange.
export function Toggle(_p = {}) {
  const derivedChecked = _p.state === "on";
  const derivedDisabled = _p.state === "disabled";
  const props = { ..._p };
  const isControlled = _p.checked !== undefined;
  const [innerChecked, setInnerChecked] = React.useState(_p.checked ?? derivedChecked);
  const checked = isControlled ? _p.checked : innerChecked;
  const disabled = _p.disabled ?? derivedDisabled;
  const [focused, setFocused] = React.useState(false);

  const toggle = () => {
    if (disabled) return;
    const next = !checked;
    if (!isControlled) setInnerChecked(next);
    props.onChange && props.onChange(next);
  };

  return (
    <div
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={toggle}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={props.className}
      style={{
        width: 32, height: 18, borderRadius: 999, position: 'relative', flexShrink: 0,
        backgroundColor: disabled ? 'var(--color-action-disabled)' : checked ? 'var(--color-action-primary)' : 'var(--color-border-strong)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.55 : 1,
        boxShadow: focused ? '0 0 0 3px rgba(37,99,235,0.28)' : 'none',
        transition: 'background-color var(--dur-fast,120ms)',
        ...props.style,
      }}
    >
      <div style={{
        position: 'absolute', top: 2, left: checked ? 16 : 2, width: 14, height: 14, borderRadius: '50%',
        backgroundColor: 'var(--color-surface-card)',
        transition: 'left var(--dur-fast,120ms) var(--ease-out, ease-out)',
      }} />
    </div>
  );
}
export default Toggle;
