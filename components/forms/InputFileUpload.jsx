import React from 'react';

// figma node: 7402:10156 Input/File Upload — consolidated: real drag&drop +
// click-to-browse (hidden <input type="file">) instead of 5 duplicated static
// bodies. `state` kept for demo-only overrides (uploading/uploaded/error/disabled).
function fmtSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

export function InputFileUpload(_p = {}) {
  const props = { ..._p, fileTitle: _p.fileTitle ?? "Selecione ou arraste o pacote", supportingText: _p.supportingText ?? "ZIP de publicação, até 500 MB" };
  const forced = ["uploading", "uploaded", "error", "disabled"].includes(props.state) ? props.state : null;
  const disabled = forced === "disabled";
  const inputRef = React.useRef(null);
  const [file, setFile] = React.useState(null);
  const [dragOver, setDragOver] = React.useState(false);

  const status = forced === "uploading" || forced === "uploaded" || forced === "error" ? forced : file ? "uploaded" : "empty";

  const setSelected = (f) => { setFile(f); props.onFileSelected && props.onFileSelected(f); };
  const clear = (e) => { e.stopPropagation(); setSelected(null); };

  const bg = status === "uploaded" ? 'var(--color-state-positive-subtle)' : status === "error" ? 'var(--color-state-negative-subtle)' : 'var(--color-surface-subtle)';
  const border = status === "error" ? 'var(--color-state-negative-subtle)' : dragOver ? 'var(--color-border-brand)' : 'var(--color-border-default)';
  const title = status === "uploaded" && file ? file.name : props.fileTitle;
  const supporting = status === "uploaded" && file ? fmtSize(file.size) : status === "uploading" ? "Enviando…" : status === "error" ? (props.errorText ?? "Falha no envio. Tente novamente.") : props.supportingText;

  return (
    <div
      className={props.className}
      onClick={() => !disabled && inputRef.current && inputRef.current.click()}
      onDragOver={(e) => { if (disabled) return; e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => { if (disabled) return; e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files && e.dataTransfer.files[0]; if (f) setSelected(f); }}
      style={{
        width: '100%', minHeight: 150, borderRadius: 12, backgroundColor: bg,
        outline: `1px dashed ${border}`, outlineOffset: -1,
        display: 'flex', flexDirection: 'column', gap: 8, padding: 20, justifyContent: 'center', alignItems: 'center',
        boxSizing: 'border-box', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
        transition: 'outline-color var(--dur-fast,120ms), background-color var(--dur-fast,120ms)',
        ...props.style,
      }}
    >
      <input ref={inputRef} type="file" accept={props.accept} disabled={disabled} onChange={(e) => e.target.files[0] && setSelected(e.target.files[0])} style={{ display: 'none' }} />
      <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 600, fontSize: 22, lineHeight: '100%', color: status === "uploaded" ? 'var(--color-text-positive)' : status === "error" ? 'var(--color-text-negative)' : 'var(--color-text-brand)' }}>
        {status === "uploaded" ? "✓" : status === "error" ? "!" : "↑"}
      </span>
      <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 600, fontSize: 14, lineHeight: '100%', color: 'var(--color-text-primary)' }}>{title}</span>
      <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 11, lineHeight: '100%', color: status === "error" ? 'var(--color-text-negative)' : 'var(--color-text-secondary)' }}>{supporting}</span>
      {status === "uploaded" && !disabled && (
        <span role="button" tabIndex={0} onClick={clear} onKeyDown={(e) => { if (e.key === 'Enter') clear(e); }}
          style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 500, fontSize: 11, color: 'var(--color-text-muted)', textDecoration: 'underline', cursor: 'pointer' }}
        >Remover arquivo</span>
      )}
    </div>
  );
}
export default InputFileUpload;
