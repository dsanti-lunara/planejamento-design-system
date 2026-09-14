// figma node: 7398:10058 Deployment/Timeline Item (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);
const __stateLabel = { completed: "concluído", current: "em andamento", upcoming: "a fazer", failed: "falhou", waiting: "aguardando" };

export function DeploymentTimelineItem(_p = {}) {
  const props = { ..._p, connector: _p.connector ?? true, title: _p.title ?? "Implantação em HML", state: _p.state ?? "completed", progressCTA: _p.progressCTA ?? true, description: _p.description ?? "Conectando aos servidores de homologação.", descriptionVisible: _p.descriptionVisible ?? true, timestamp: _p.timestamp ?? "15/08/2026 10:50" };
  const __body0 = () => (
    <div className={props.className} role="listitem" aria-label={`${props.title} — ${__stateLabel[props.state] ?? props.state}`} style={{
      width: "100%",
      maxWidth: 560,
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 0px 12px 0px",
      alignItems: "stretch",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 28,
          overflow: "hidden",
          borderRadius: 14,
          backgroundColor: "var(--color-state-positive-subtle)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-positive)",
            flexShrink: 0,
          }} aria-hidden="true">{props.text1 ?? "✓"}</span>
        </div>
        {props.connector && (
        <div style={{
          position: "relative",
          width: 2,
          flexGrow: 1,
          minHeight: 24,
          backgroundColor: "var(--color-state-positive-subtle)",
          flexShrink: 0,
        }} />
        )}
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
        {props.descriptionVisible && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.timestamp}</span>
        {props.progressCTA && (
        <button type="button" onClick={props.onProgressClick} style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-link)",
          flexShrink: 0,
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}>{props.text2 ?? "60% concluído  ·  Ver detalhes"}</button>
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} role="listitem" aria-label={`${props.title} — ${__stateLabel[props.state] ?? props.state}`} style={{
      width: "100%",
      maxWidth: 560,
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 0px 12px 0px",
      alignItems: "stretch",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 28,
          overflow: "hidden",
          borderRadius: 14,
          backgroundColor: "var(--color-state-info-subtle)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-link)",
            flexShrink: 0,
          }} aria-hidden="true">{props.text1 ?? "●"}</span>
        </div>
        {props.connector && (
        <div style={{
          position: "relative",
          width: 2,
          flexGrow: 1,
          minHeight: 24,
          backgroundColor: "var(--color-border-default)",
          flexShrink: 0,
        }} />
        )}
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
        {props.descriptionVisible && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.timestamp}</span>
        {props.progressCTA && (
        <button type="button" onClick={props.onProgressClick} style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-link)",
          flexShrink: 0,
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}>{props.text2 ?? "60% concluído  ·  Ver detalhes"}</button>
        )}
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} role="listitem" aria-label={`${props.title} — ${__stateLabel[props.state] ?? props.state}`} style={{
      width: "100%",
      maxWidth: 560,
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 0px 12px 0px",
      alignItems: "stretch",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 28,
          overflow: "hidden",
          borderRadius: 14,
          backgroundColor: "var(--color-surface-subtle)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }} aria-hidden="true">{props.text1 ?? "○"}</span>
        </div>
        {props.connector && (
        <div style={{
          position: "relative",
          width: 2,
          flexGrow: 1,
          minHeight: 24,
          backgroundColor: "var(--color-border-default)",
          flexShrink: 0,
        }} />
        )}
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
        {props.descriptionVisible && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.timestamp}</span>
        {props.progressCTA && (
        <button type="button" onClick={props.onProgressClick} style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-link)",
          flexShrink: 0,
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}>{props.text2 ?? "60% concluído  ·  Ver detalhes"}</button>
        )}
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} role="listitem" aria-label={`${props.title} — ${__stateLabel[props.state] ?? props.state}`} style={{
      width: "100%",
      maxWidth: 560,
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 0px 12px 0px",
      alignItems: "stretch",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 28,
          overflow: "hidden",
          borderRadius: 14,
          backgroundColor: "var(--color-state-negative-subtle)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-negative)",
            flexShrink: 0,
          }} aria-hidden="true">{props.text1 ?? "!"}</span>
        </div>
        {props.connector && (
        <div style={{
          position: "relative",
          width: 2,
          flexGrow: 1,
          minHeight: 24,
          backgroundColor: "var(--color-state-negative-subtle)",
          flexShrink: 0,
        }} />
        )}
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
        {props.descriptionVisible && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.timestamp}</span>
        {props.progressCTA && (
        <button type="button" onClick={props.onProgressClick} style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-negative)",
          flexShrink: 0,
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}>{props.text2 ?? "60% concluído  ·  Ver detalhes"}</button>
        )}
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} role="listitem" aria-label={`${props.title} — ${__stateLabel[props.state] ?? props.state}`} style={{
      width: "100%",
      maxWidth: 560,
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 0px 12px 0px",
      alignItems: "stretch",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 28,
          overflow: "hidden",
          borderRadius: 14,
          backgroundColor: "var(--color-state-warning-subtle)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-warning)",
            flexShrink: 0,
          }} aria-hidden="true">{props.text1 ?? "…"}</span>
        </div>
        {props.connector && (
        <div style={{
          position: "relative",
          width: 2,
          flexGrow: 1,
          minHeight: 24,
          backgroundColor: "var(--color-border-default)",
          flexShrink: 0,
        }} />
        )}
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
        {props.descriptionVisible && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.description}</span>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.timestamp}</span>
        {props.progressCTA && (
        <button type="button" onClick={props.onProgressClick} style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 11,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-link)",
          flexShrink: 0,
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}>{props.text2 ?? "60% concluído  ·  Ver detalhes"}</button>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Completed
    "state=completed": __body0,
    // figma: State=Current
    "state=current": __body1,
    // figma: State=Upcoming
    "state=upcoming": __body2,
    // figma: State=Failed
    "state=failed": __body3,
    // figma: State=Waiting
    "state=waiting": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DeploymentTimelineItem;
