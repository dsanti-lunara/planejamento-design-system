import React from 'react';

// figma node: 7230:7166 Input/Checkbox — consolidated: one real checkbox
// (click + keyboard + real hover/focus) instead of 6 duplicated static bodies.
// `state` is kept for back-compat (drives the initial checked/indeterminate/
// disabled/error) but real interaction now comes from checked/onChange.
function fromState(state) {
  return {
    checked: state === "checked" || state === "disabled checked",
    indeterminate: state === "indeterminate",
    disabled: state === "disabled unchecked" || state === "disabled checked",
    error: state === "error",
  };
}

export function InputCheckbox(_p = {}) {
  const derived = _p.state ? fromState(_p.state) : {};
  const props = { ..._p, label: _p.label ?? "Label do checkbox", showLabel: _p.showLabel ?? true };
  const isControlled = _p.checked !== undefined;
  const [innerChecked, setInnerChecked] = React.useState(derived.checked ?? _p.checked ?? false);
  const checked = isControlled ? _p.checked : innerChecked;
  const indeterminate = _p.indeterminate ?? derived.indeterminate ?? false;
  const disabled = _p.disabled ?? derived.disabled ?? false;
  const error = _p.error ?? derived.error ?? false;
  const [hover, setHover] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const toggle = () => {
    if (disabled) return;
    const next = !checked;
    if (!isControlled) setInnerChecked(next);
    props.onChange && props.onChange(next);
  };

  const active = checked || indeterminate;
  const border = error ? 'var(--color-border-negative)' : active ? 'var(--color-border-brand)' : hover ? 'var(--color-border-strong)' : 'var(--color-border-strong)';

  return (
    <div className={props.className} style={{ width: 'fit-content', display: 'flex', flexDirection: 'row', gap: 8, alignItems: 'center', opacity: disabled ? 0.55 : 1, ...props.style }}>
      <div
        role="checkbox"
        aria-checked={indeterminate ? 'mixed' : checked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={toggle}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          position: 'relative', width: 18, height: 18, borderRadius: 4, flexShrink: 0,
          backgroundColor: active ? 'var(--color-action-primary)' : 'var(--color-surface-card)',
          boxShadow: `inset 0 0 0 1px ${border}${focused ? ', 0 0 0 3px rgba(37,99,235,0.28)' : ''}`,
          cursor: disabled ? 'not-allowed' : 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background-color var(--dur-fast,120ms), box-shadow var(--dur-fast,120ms)',
        }}
      >
        {active && (
          <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 600, fontSize: 12, lineHeight: '100%', color: 'var(--color-text-inverse)' }}>
            {props.text1 ?? (indeterminate ? '−' : '✓')}
          </span>
        )}
      </div>
      {props.showLabel && (
        <span onClick={toggle} style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 13, lineHeight: '100%', color: 'var(--color-text-primary)', cursor: disabled ? 'not-allowed' : 'pointer' }}>
          {props.label}
        </span>
      )}
    </div>
  );
}
export default InputCheckbox;
