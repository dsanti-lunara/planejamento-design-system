import React from 'react';
import { IconSearch } from "../icons/IconSearch.jsx";
import { IconEye } from "../icons/IconEye.jsx";
import { IconEyeOff } from "../icons/IconEyeOff.jsx";

// figma node: 7235:7455 Input/Password — consolidated: real <input type=password>
// with a working show/hide toggle, real hover/focus, flexible width.
const HEIGHT = { compact: 36, default: 40 };

function borderFor({ disabled, error, success, focused, hover }) {
  if (disabled) return { width: 1, color: 'var(--color-border-default)' };
  if (error) return { width: 1, color: 'var(--color-border-negative)' };
  if (success) return { width: 1, color: 'var(--color-border-positive)' };
  if (focused) return { width: 2, color: 'var(--color-border-brand)' };
  if (hover) return { width: 1, color: 'var(--color-border-strong)' };
  return { width: 1, color: 'var(--color-border-default)' };
}

export function InputPassword(_p = {}) {
  const fieldId = React.useId();
  const helperId = `${fieldId}-helper`;
  const isControlledVisibility = _p.visibility !== undefined && !!_p.onToggleVisibility;
  const [innerVisible, setInnerVisible] = React.useState(_p.visibility === "visible");
  const visible = isControlledVisibility ? _p.visibility === "visible" : innerVisible;
  const toggleVisibility = () => {
    if (_p.onToggleVisibility) _p.onToggleVisibility(visible ? "hidden" : "visible");
    if (!isControlledVisibility) setInnerVisible(v => !v);
  };
  const props = {
    ..._p,
    leadingIcon: _p.leadingIcon ?? false,
    label: _p.text1 ?? _p.label ?? "Senha",
    size: _p.size ?? "compact",
    trailingAction: _p.trailingAction ?? true,
    required: _p.required ?? false,
    showHelperText: _p.showHelperText ?? true,
    value: _p.text2 ?? _p.value ?? "senha1234",
    state: _p.state ?? "default",
    showLabel: _p.showLabel ?? true,
    helperText: _p.text3 ?? _p.helperText ?? "Texto auxiliar",
  };
  const [focused, setFocused] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const forced = props.state !== "default" ? props.state : null;
  const disabled = forced === "disabled";
  const error = forced === "error";
  const success = forced === "success";
  const isFocused = forced ? forced === "focus" : focused;
  const border = borderFor({ disabled, error, success, focused: isFocused, hover });
  const controlled = _p.onChange !== undefined && props.value !== undefined;

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
        {props.leadingIcon && <span style={{ width: 16, height: 16, flexShrink: 0, color: 'var(--color-text-muted)' }}>{props.icon1 ?? <IconSearch />}</span>}
        <input
          type={visible ? 'text' : 'password'}
          disabled={disabled}
          required={props.required}
          aria-invalid={error || undefined}
          aria-describedby={props.showHelperText ? helperId : undefined}
          {...(controlled ? { value: props.value } : { defaultValue: props.value })}
          onChange={props.onChange}
          onFocus={(e) => { setFocused(true); props.onFocus && props.onFocus(e); }}
          onBlur={(e) => { setFocused(false); props.onBlur && props.onBlur(e); }}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 13,
            color: 'var(--color-text-primary)',
          }}
          className="ds-input-password-field"
        />
        <style>{".ds-input-password-field::-ms-reveal,.ds-input-password-field::-ms-clear{display:none}.ds-input-password-field::-webkit-credentials-auto-fill-button,.ds-input-password-field::-webkit-textfield-decoration-container{visibility:hidden;pointer-events:none}"}</style>
        {props.trailingAction && (
          <span
            role="button" tabIndex={0}
            aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
            onMouseDown={(e) => e.preventDefault()}
            onClick={toggleVisibility}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleVisibility(); } }}
            style={{ width: 28, height: 28, flexShrink: 0, color: 'var(--color-text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 -6px 0 0' }}
          >{visible ? <IconEyeOff /> : <IconEye />}</span>
        )}
      </div>
      {props.showHelperText && (
        <span id={helperId} role={error ? 'alert' : undefined} aria-live={error ? 'assertive' : undefined} style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 11, lineHeight: '100%', color: error ? 'var(--color-text-negative)' : success ? 'var(--color-text-positive)' : 'var(--color-text-secondary)' }}>
          {error && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }} aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 7.5V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="16.2" r="1" fill="currentColor" />
            </svg>
          )}
          {props.helperText}
        </span>
      )}
    </div>
  );
}
export default InputPassword;
