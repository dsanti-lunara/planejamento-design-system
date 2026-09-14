// figma node: 7401:10144 Deployment/Log Row (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "level=" + __venc(p.state ?? p.level);

export function DeploymentLogRow(_p = {}) {
  const props = { ..._p, timestamp: _p.timestamp ?? "10:42:13", level: _p.level ?? "info", state: _p.state ?? _p.level ?? "info", origin: _p.origin ?? "deploy", message: _p.message ?? "Pacote extraído com sucesso." };
  const __body0 = () => (
    <div className={props.className} role="row" aria-label={`${props.timestamp} ${props.state} ${props.origin}: ${props.message}`} style={{
      width: "100%",
      maxWidth: 900,
      height: 44,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 12px 10px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.timestamp}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.text1 ?? "INFO"}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.origin}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
        fontWeight: 400,
        fontSize: 11,
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.message}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} role="row" aria-label={`${props.timestamp} ${props.state} ${props.origin}: ${props.message}`} style={{
      width: "100%",
      maxWidth: 900,
      height: 44,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 12px 10px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.timestamp}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-positive)",
        flexShrink: 0,
      }}>{props.text1 ?? "SUCCESS"}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.origin}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
        fontWeight: 400,
        fontSize: 11,
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.message}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} role="row" aria-label={`${props.timestamp} ${props.state} ${props.origin}: ${props.message}`} style={{
      width: "100%",
      maxWidth: 900,
      height: 44,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 12px 10px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.timestamp}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-warning)",
        flexShrink: 0,
      }}>{props.text1 ?? "WARN"}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.origin}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
        fontWeight: 400,
        fontSize: 11,
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.message}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} role="row" aria-label={`${props.timestamp} ${props.state} ${props.origin}: ${props.message}`} style={{
      width: "100%",
      maxWidth: 900,
      height: 44,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "10px 12px 10px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.timestamp}</span>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-negative)",
        flexShrink: 0,
      }}>{props.text1 ?? "ERROR"}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.origin}</span>
      <span style={{
        position: "relative",
        fontFamily: "\"Roboto Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
        fontWeight: 400,
        fontSize: 11,
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.message}</span>
    </div>
  );
  const __impls = {
    // figma: Level=Info
    "level=info": __body0,
    // figma: Level=Success
    "level=success": __body1,
    // figma: Level=Warning
    "level=warning": __body2,
    // figma: Level=Error
    "level=error": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DeploymentLogRow;
