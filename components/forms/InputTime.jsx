import React from 'react';

// figma node: 7243:7422 Input/Time — consolidated: real <input type="time">
// with real hover/focus instead of 5 duplicated static bodies. Flexible width.
function borderFor({ disabled, error, focused, hover }) {
  if (disabled) return { width: 1, color: 'var(--color-border-default)' };
  if (error) return { width: 1, color: 'var(--color-border-negative)' };
  if (focused) return { width: 2, color: 'var(--color-border-brand)' };
  if (hover) return { width: 1, color: 'var(--color-border-strong)' };
  return { width: 1, color: 'var(--color-border-default)' };
}

export function InputTime(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Horário", value: _p.value ?? "" };
  const forced = ["disabled", "error"].includes(props.state) ? props.state : null;
  const disabled = forced === "disabled";
  const error = forced === "error";
  const [focused, setFocused] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const controlled = _p.onChange !== undefined && _p.value !== undefined;
  const border = borderFor({ disabled, error, focused, hover });

  return (
    <div className={props.className} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start', ...props.style }}>
      <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 500, fontSize: 12, lineHeight: '100%', color: 'var(--color-text-primary)' }}>{props.label}</span>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: '100%', height: 40, borderRadius: 8, backgroundColor: 'var(--color-surface-card)',
          boxShadow: `inset 0 0 0 ${border.width}px ${border.color}`,
          display: 'flex', alignItems: 'center', padding: '0 12px', boxSizing: 'border-box',
          opacity: disabled ? 0.5 : 1, transition: 'box-shadow var(--dur-fast,120ms)',
        }}
      >
        <input
          type="time"
          disabled={disabled}
          {...(controlled ? { value: props.value } : { defaultValue: props.value })}
          onChange={props.onChange}
          onFocus={(e) => { setFocused(true); props.onFocus && props.onFocus(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur && props.onBlur(e); }}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 13,
            color: 'var(--color-text-primary)',
          }}
        />
      </div>
    </div>
  );
}
export default InputTime;
