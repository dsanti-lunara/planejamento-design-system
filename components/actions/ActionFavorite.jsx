import React from 'react';

// figma node: 7238:7291 Action/Favorite (4 variants)
// Improved: clicking now really toggles favorited/not (was inert — `state` only changed the
// rendered variant, nothing responded to a click). `favorited`/`onToggle` optionally controlled.
// `size`: "sm" (28px, compact contexts — Featured Cards, Recently Published, Frequent Access)
// | "md" (40px, default). Not-favorited uses a low-contrast neutral so it never competes with
// content in dense lists; favorited uses the existing --color-data-attention semantic (never red).
const __DIMS = { sm: { box: 28, glyph: 15 }, md: { box: 40, glyph: 20 } };

export function ActionFavorite(_p = {}) {
  const props = _p;
  const disabled = props.state === 'disabled';
  const isControlled = props.favorited !== undefined;
  const [inner, setInner] = React.useState(props.state === 'favorite');
  const favorited = isControlled ? props.favorited : inner;
  const [hover, setHover] = React.useState(false);
  const { box, glyph: glyphSize } = __DIMS[props.size] ?? __DIMS.md;

  const toggle = () => {
    if (disabled) return;
    const next = !favorited;
    if (!isControlled) setInner(next);
    props.onToggle && props.onToggle(next);
  };

  const bg = disabled ? "var(--color-surface-card)" : hover ? "var(--color-action-hover)" : "var(--color-surface-card)";
  const color = favorited ? "var(--color-data-attention)" : "var(--color-text-muted)";
  const glyph = props.text1 ?? (favorited ? "★" : "☆");

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-pressed={favorited}
      aria-label={favorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      onClick={disabled ? undefined : toggle}
      onKeyDown={disabled ? undefined : (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={props.className}
      style={{
        width: box, height: box, borderRadius: 8, backgroundColor: bg,
        opacity: disabled ? 0.45 : 1, cursor: disabled ? "default" : "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
        ...props.style,
      }}
    >
      <span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: glyphSize, lineHeight: "100%", color }}>{glyph}</span>
    </div>
  );
}
export default ActionFavorite;
