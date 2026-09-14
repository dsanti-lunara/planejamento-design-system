import React from 'react';

// figma node: 6647:13 Segmented Control — consolidated: one real 2-option
// switch (click + keyboard + real hover/focus) instead of 6 duplicated bodies.
export function SegmentedControl(_p = {}) {
  const props = { ..._p, active: _p.active ?? "dia" };
  const options = [
    { value: 'dia', label: props.text1 ?? 'Modo Dia' },
    { value: 'período', label: props.text2 ?? 'Modo Período' },
  ];
  const isControlled = _p.active !== undefined && !!_p.onChange;
  const [innerActive, setInnerActive] = React.useState(props.active);
  const active = isControlled ? props.active : innerActive;
  const disabled = props.state === 'disabled';
  const [focusedIdx, setFocusedIdx] = React.useState(null);
  const [hoverIdx, setHoverIdx] = React.useState(null);

  const select = (value) => {
    if (disabled) return;
    if (!isControlled) setInnerActive(value);
    props.onChange && props.onChange(value);
  };

  return (
    <div className={props.className} role="tablist" style={{
      width: 'fit-content', height: 36, borderRadius: 8, backgroundColor: 'var(--color-surface-subtle)',
      boxShadow: 'inset 0 0 0 1px var(--color-border-default)', display: 'flex', padding: 2, boxSizing: 'border-box',
      opacity: disabled ? 0.45 : 1, ...props.style,
    }}>
      {options.map((opt, i) => {
        const selected = active === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={selected}
            disabled={disabled}
            onClick={() => select(opt.value)}
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(null)}
            onFocus={() => setFocusedIdx(i)}
            onBlur={() => setFocusedIdx(null)}
            style={{
              border: 'none', borderRadius: 6, padding: '7px 14px', cursor: disabled ? 'not-allowed' : 'pointer',
              fontFamily: 'var(--font-sans, Inter, sans-serif)', fontSize: 13, whiteSpace: 'nowrap', lineHeight: '100%',
              fontWeight: selected ? 600 : 500,
              color: selected ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
              backgroundColor: selected ? 'var(--color-action-primary)' : hoverIdx === i ? 'var(--color-action-hover)' : 'transparent',
              boxShadow: focusedIdx === i ? '0 0 0 2px var(--color-action-focus)' : 'none',
              transition: 'background-color var(--dur-fast,120ms), color var(--dur-fast,120ms)',
            }}
          >{opt.label}</button>
        );
      })}
    </div>
  );
}
export default SegmentedControl;
