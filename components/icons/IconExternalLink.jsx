// Simple arrow-up-right glyph for "opens externally" — no dedicated icon existed in the kit for this.
export function IconExternalLink(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{ width: 16, height: 16, position: "relative", color: "var(--color-icon-secondary)", ...props.style }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 3.5H12.5V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5 3.5L3.5 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
export default IconExternalLink;
