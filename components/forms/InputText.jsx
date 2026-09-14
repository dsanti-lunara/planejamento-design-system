import React from 'react';
import { IconSearch } from "../icons/IconSearch.jsx";

// figma node: 7235:7300 Input/Text — consolidated: real <input> + real hover/focus,
// flexible width (fills its container instead of a fixed 320px box).
const HEIGHT = { compact: 36, default: 40 };

function borderFor({ disabled, error, success, focused, hover }) {
  if (disabled) return { width: 1, color: 'var(--color-border-default)' };
  if (error) return { width: 1, color: 'var(--color-border-negative)' };
  if (success) return { width: 1, color: 'var(--color-border-positive)' };
  if (focused) return { width: 2, color: 'var(--color-border-brand)' };
  if (hover) return { width: 1, color: 'var(--color-border-strong)' };
  return { width: 1, color: 'var(--color-border-default)' };
}

export function InputText(_p = {}) {
  const fieldId = React.useId();
  const helperId = `${fieldId}-helper`;
  const props = {
    ..._p,
    leadingIcon: _p.leadingIcon ?? true,
    label: _p.label ?? "Label",
    size: _p.size ?? "compact",
    trailingAction: _p.trailingAction ?? false,
    required: _p.required ?? false,
    showHelperText: _p.showHelperText ?? true,
    value: _p.value ?? "Digite aqui",
    state: _p.state ?? "default",
    showLabel: _p.showLabel ?? true,
    helperText: _p.helperText ?? "Texto auxiliar",
  };
  const [focused, setFocused] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const forced = props.state !== "default" ? props.state : null;
  const disabled = forced === "disabled";
  const error = forced === "error";
  const success = forced === "success";
  const isFocused = forced ? forced === "focus" : focused;
  const border = borderFor({ disabled, error, success, focused: isFocused, hover });
  const controlled = _p.onChange !== undefined && _p.value !== undefined;

  return (
    <div className={props.className} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start', ...props.style }}>
      {props.showLabel && (
        <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 500, fontSize: 12, lineHeight: '100%', color: 'var(--color-text-primary)' }}>
          {props.label}{props.required ? ' *' : ''}
        </span>
      )}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: '100%', height: HEIGHT[props.size] || HEIGHT.compact, borderRadius: 8,
          backgroundColor: 'var(--color-surface-card)',
          boxShadow: `inset 0 0 0 ${border.width}px ${border.color}`,
          display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px', boxSizing: 'border-box',
          opacity: disabled ? 0.55 : 1,
          transition: 'box-shadow var(--dur-fast,120ms)',
        }}
      >
        {props.leadingIcon && <span style={{ width: 16, height: 16, flexShrink: 0, color: 'var(--color-text-muted)' }}>{props.icon ?? <IconSearch />}</span>}
        <input
          type="text"
          disabled={disabled}
          required={props.required}
          aria-invalid={error || undefined}
          aria-describedby={props.showHelperText ? helperId : undefined}
          placeholder={props.placeholder}
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
        {props.trailingAction && <span style={{ width: 16, height: 16, flexShrink: 0, color: 'var(--color-text-muted)' }}>{props.icon1 ?? <IconSearch />}</span>}
      </div>
      {props.showHelperText && (
        <span id={helperId} role={error ? 'alert' : undefined} aria-live={error ? 'assertive' : undefined} style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 11, lineHeight: '100%', color: error ? 'var(--color-text-negative)' : success ? 'var(--color-text-positive)' : 'var(--color-text-secondary)' }}>
          {props.helperText}
        </span>
      )}
    </div>
  );
}
export default InputText;
