import React from 'react';
import { TagTagChip } from './TagTagChip.jsx';

// figma node: 7243:7460 Input/Tag Input — consolidated: real typing + Enter/comma
// to add a tag, Backspace to remove the last, × to remove any (instead of 6
// duplicated static bodies showing fixed text). Flexible width.
function borderFor({ disabled, error, focused, hover }) {
  if (disabled) return { width: 1, color: 'var(--color-border-default)' };
  if (error) return { width: 1, color: 'var(--color-border-negative)' };
  if (focused) return { width: 2, color: 'var(--color-border-brand)' };
  if (hover) return { width: 1, color: 'var(--color-border-strong)' };
  return { width: 1, color: 'var(--color-border-default)' };
}

const MAX_TAG_LENGTH = 24;
const ALLOWED_CHARS = /^[\p{L}\p{N} _-]+$/u;

export function InputTagInput(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Tags", maxLength: _p.maxLength ?? MAX_TAG_LENGTH };
  const isControlled = _p.tags !== undefined && !!_p.onChange;
  const [innerTags, setInnerTags] = React.useState(Array.isArray(_p.tags) ? _p.tags : []);
  const tags = isControlled ? _p.tags : innerTags;
  const externalError = props.state === "error";
  const disabled = props.state === "disabled";
  const [draft, setDraft] = React.useState('');
  const [tagError, setTagError] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const inputRef = React.useRef(null);
  const error = externalError || !!tagError;

  const commit = (next) => { if (!isControlled) setInnerTags(next); props.onChange && props.onChange(next); };
  const validate = (raw) => {
    const t = raw.trim();
    if (!t) return null;
    if (t.length > props.maxLength) return `Tag muito longa (m\u00e1x. ${props.maxLength} caracteres).`;
    if (!ALLOWED_CHARS.test(t)) return 'Use apenas letras, n\u00fameros, espa\u00e7o ou h\u00edfen.';
    if (tags.some((existing) => existing.toLowerCase() === t.toLowerCase())) return 'Esta tag j\u00e1 foi adicionada.';
    return null;
  };
  const addTag = (raw) => {
    const t = raw.trim();
    if (!t) { setTagError(''); return; }
    const err = validate(raw);
    if (err) { setTagError(err); return; }
    commit([...tags, t]);
    setDraft('');
    setTagError('');
  };
  const removeAt = (t) => { commit(tags.filter(v => v !== t)); setTagError(''); inputRef.current && inputRef.current.focus(); };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag(draft); }
    else if (e.key === 'Backspace' && draft === '' && tags.length) removeAt(tags[tags.length - 1]);
  };
  const onDraftChange = (e) => { setDraft(e.target.value); if (tagError) setTagError(''); };

  const border = borderFor({ disabled, error, focused, hover });

  return (
    <div className={props.className} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 6, ...props.style }}>
      <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 500, fontSize: 12, lineHeight: '100%', color: 'var(--color-text-primary)' }}>{props.label}</span>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => inputRef.current && inputRef.current.focus()}
        style={{
          width: '100%', minHeight: 40, borderRadius: 8, backgroundColor: 'var(--color-surface-card)',
          boxShadow: `inset 0 0 0 ${border.width}px ${border.color}`,
          display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center', padding: '6px 12px', boxSizing: 'border-box',
          opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'text',
          transition: 'box-shadow var(--dur-fast,120ms)',
        }}
      >
        {tags.map(t => <TagTagChip key={t} label={t} onRemove={disabled ? undefined : () => removeAt(t)} />)}
        <input
          ref={inputRef}
          value={draft}
          disabled={disabled}
          onChange={onDraftChange}
          onKeyDown={onKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={error || undefined}
          placeholder={tags.length === 0 ? (props.placeholder ?? "Digite uma tag") : ""}
          style={{
            flex: 1, minWidth: 80, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 13,
            color: 'var(--color-text-primary)',
          }}
        />
      </div>
      {(tagError || (externalError && props.helperText)) && (
        <span role="alert" aria-live="assertive" style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 11, lineHeight: '140%', color: 'var(--color-text-negative)' }}>
          {tagError || props.helperText}
        </span>
      )}
    </div>
  );
}
export default InputTagInput;
