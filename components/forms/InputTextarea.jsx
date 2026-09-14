import React from 'react';

// figma node: 7236:7283 Input/Textarea — consolidated: real <textarea>, live
// character counter, real hover/focus, flexible width.
function borderFor({ disabled, error, focused, hover }) {
  if (disabled) return { width: 1, color: 'var(--color-border-default)' };
  if (error) return { width: 1, color: 'var(--color-border-negative)' };
  if (focused) return { width: 2, color: 'var(--color-border-brand)' };
  if (hover) return { width: 1, color: 'var(--color-border-strong)' };
  return { width: 1, color: 'var(--color-border-default)' };
}

export function InputTextarea(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? "Descrição",
    state: _p.state ?? "empty",
    value: _p.value ?? "Digite uma descrição...",
    counter: _p.counter ?? true,
    maxLength: _p.maxLength ?? 500,
  };
  const [focused, setFocused] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const controlled = _p.onChange !== undefined && _p.value !== undefined;
  const [localVal, setLocalVal] = React.useState(props.value);
  const count = (controlled ? props.value : localVal)?.length ?? 0;

  const forced = props.state !== "empty" && props.state !== "filled" ? props.state : null;
  const disabled = forced === "disabled";
  const error = forced === "error";
  const isFocused = forced ? forced === "focus" : focused;
  const border = borderFor({ disabled, error, focused: isFocused, hover });

  return (
    <div className={props.className} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start', ...props.style }}>
      <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 500, fontSize: 12, lineHeight: '100%', color: 'var(--color-text-primary)' }}>{props.label}</span>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: '100%', minHeight: 112, borderRadius: 8, backgroundColor: 'var(--color-surface-card)',
          boxShadow: `inset 0 0 0 ${border.width}px ${border.color}`,
          display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 12px 10px', boxSizing: 'border-box',
          opacity: disabled ? 0.55 : 1,
          transition: 'box-shadow var(--dur-fast,120ms)',
        }}
      >
        <textarea
          disabled={disabled}
          maxLength={props.maxLength}
          {...(controlled ? { value: props.value } : { defaultValue: props.value })}
          onChange={(e) => { if (!controlled) setLocalVal(e.target.value); props.onChange && props.onChange(e); }}
          onFocus={(e) => { setFocused(true); props.onFocus && props.onFocus(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur && props.onBlur(e); }}
          rows={4}
          style={{
            flex: 1, width: '100%', resize: 'vertical', border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 13,
            color: 'var(--color-text-primary)',
          }}
        />
        {props.counter && (
          <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 10, lineHeight: '100%', color: 'var(--color-text-muted)', alignSelf: 'flex-end' }}>
            {count}/{props.maxLength}
          </span>
        )}
      </div>
    </div>
  );
}
export default InputTextarea;
