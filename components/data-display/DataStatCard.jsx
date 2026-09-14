import { DataSparklineActual } from './DataSparklineActual.jsx';
import { IconNavDemand } from "../icons/IconNavDemand.jsx";

// figma node: 6808:2809 Data/Stat Card (21 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "tone=" + __venc(p.tone);

export function DataStatCard(_p = {}) {
  const props = { ..._p, showSparkline: _p.showSparkline ?? true, title: _p.title ?? "Nível de serviço", state: _p.state ?? "default", showIcon: _p.showIcon ?? true, context: _p.context ?? "NS60 • realizado", unit: _p.unit ?? "%", value: _p.value ?? "63,4", tone: _p.tone ?? "neutral", delta: _p.delta ?? "+3,4 p.p.", reference: _p.reference ?? "Plano 60,0%" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "100%",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
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
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.value}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.unit}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.reference}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.delta}</span>
      </div>
      <div style={{
        position: "relative",
        height: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showSparkline && (
        <DataSparklineActual style={{
            position: "relative",
            width: 216,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-strong)",
      borderRight: "1px solid var(--color-border-strong)",
      borderBottom: "1px solid var(--color-border-strong)",
      borderLeft: "1px solid var(--color-border-strong)",
      boxShadow: "0px 1px 3px 0px rgba(8,26,41,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "18px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 28,
          whiteSpace: "nowrap",
          lineHeight: "36px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.value}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.unit}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.reference}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.delta}</span>
      </div>
      <div style={{
        position: "relative",
        height: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showSparkline && (
        <DataSparklineActual style={{
            position: "relative",
            width: 216,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        )}
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-action-focus)",
      borderRight: "1px solid var(--color-action-focus)",
      borderBottom: "1px solid var(--color-action-focus)",
      borderLeft: "1px solid var(--color-action-focus)",
      boxShadow: "0px 1px 3px 0px rgba(8,26,41,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "18px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 28,
          whiteSpace: "nowrap",
          lineHeight: "36px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.value}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.unit}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.reference}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.delta}</span>
      </div>
      <div style={{
        position: "relative",
        height: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showSparkline && (
        <DataSparklineActual style={{
            position: "relative",
            width: 216,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        )}
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      boxShadow: "0px 1px 3px 0px rgba(8,26,41,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 16,
        top: 16,
        width: 216,
        height: 120,
        overflow: "hidden",
        backgroundColor: "var(--color-surface-card)",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--space-8-3) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 120,
          height: 16,
          borderRadius: 4,
          backgroundColor: "var(--color-surface-subtle)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 168,
          height: 32,
          borderRadius: 4,
          backgroundColor: "var(--color-surface-subtle)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          height: 16,
          borderRadius: 4,
          backgroundColor: "var(--color-surface-subtle)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          height: 20,
          borderRadius: 4,
          backgroundColor: "var(--color-surface-subtle)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      boxShadow: "0px 1px 3px 0px rgba(8,26,41,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "18px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
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
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Sem dados"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Ajuste os filtros"}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-negative)",
      borderRight: "1px solid var(--color-border-negative)",
      borderBottom: "1px solid var(--color-border-negative)",
      borderLeft: "1px solid var(--color-border-negative)",
      boxShadow: "0px 1px 3px 0px rgba(8,26,41,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "18px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
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
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Erro ao carregar"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Tente novamente"}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-warning)",
      borderRight: "1px solid var(--color-border-warning)",
      borderBottom: "1px solid var(--color-border-warning)",
      borderLeft: "1px solid var(--color-border-warning)",
      boxShadow: "0px 1px 3px 0px rgba(8,26,41,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "18px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 28,
          whiteSpace: "nowrap",
          lineHeight: "36px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.value}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.unit}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-warning)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Plano não comparável"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showSparkline && (
        <DataSparklineActual style={{
            position: "relative",
            width: 216,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        )}
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      boxShadow: "0px 1px 3px 0px rgba(8,26,41,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "18px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 28,
          whiteSpace: "nowrap",
          lineHeight: "36px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.value}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.unit}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.reference}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-positive)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.delta}</span>
      </div>
      <div style={{
        position: "relative",
        height: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showSparkline && (
        <DataSparklineActual style={{
            position: "relative",
            width: 216,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        )}
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-strong)",
      borderRight: "1px solid var(--color-border-strong)",
      borderBottom: "1px solid var(--color-border-strong)",
      borderLeft: "1px solid var(--color-border-strong)",
      boxShadow: "0px 1px 4px 0px rgba(8,26,41,0.04), 0px 4px 12px -2px rgba(8,26,41,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "18px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 28,
          whiteSpace: "nowrap",
          lineHeight: "36px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.value}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.unit}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.reference}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-positive)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.delta}</span>
      </div>
      <div style={{
        position: "relative",
        height: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showSparkline && (
        <DataSparklineActual style={{
            position: "relative",
            width: 216,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        )}
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-action-focus)",
      borderRight: "1px solid var(--color-action-focus)",
      borderBottom: "1px solid var(--color-action-focus)",
      borderLeft: "1px solid var(--color-action-focus)",
      boxShadow: "0px 0px 0px 3px rgba(37,99,235,0.28)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "18px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 28,
          whiteSpace: "nowrap",
          lineHeight: "36px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.value}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.unit}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.reference}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-positive)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.delta}</span>
      </div>
      <div style={{
        position: "relative",
        height: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showSparkline && (
        <DataSparklineActual style={{
            position: "relative",
            width: 216,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        )}
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 16,
        top: 16,
        width: 216,
        height: 120,
        overflow: "hidden",
        backgroundColor: "var(--color-surface-card)",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--space-8-3) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 120,
          height: 16,
          borderRadius: 4,
          backgroundColor: "var(--color-surface-subtle)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 168,
          height: 32,
          borderRadius: 4,
          backgroundColor: "var(--color-surface-subtle)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          height: 16,
          borderRadius: 4,
          backgroundColor: "var(--color-surface-subtle)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          height: 20,
          borderRadius: 4,
          backgroundColor: "var(--color-surface-subtle)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-subtle)",
      borderRight: "1px solid var(--color-border-subtle)",
      borderBottom: "1px solid var(--color-border-subtle)",
      borderLeft: "1px solid var(--color-border-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "18px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 20,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Sem dados"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Ajuste os filtros"}</span>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-negative)",
      borderRight: "1px solid var(--color-border-negative)",
      borderBottom: "1px solid var(--color-border-negative)",
      borderLeft: "1px solid var(--color-border-negative)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "18px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 20,
          whiteSpace: "nowrap",
          lineHeight: "28px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.text1 ?? "Erro ao carregar"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Tente novamente"}</span>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-warning)",
      borderRight: "1px solid var(--color-border-warning)",
      borderBottom: "1px solid var(--color-border-warning)",
      borderLeft: "1px solid var(--color-border-warning)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "18px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 28,
          whiteSpace: "nowrap",
          lineHeight: "36px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.value}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.unit}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-warning)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Plano não comparável"}</span>
      </div>
      <div style={{
        position: "relative",
        height: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showSparkline && (
        <DataSparklineActual style={{
            position: "relative",
            width: 216,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        )}
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-default)",
      borderRight: "1px solid var(--color-border-default)",
      borderBottom: "1px solid var(--color-border-default)",
      borderLeft: "1px solid var(--color-border-default)",
      boxShadow: "0px 1px 3px 0px rgba(8,26,41,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "18px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 28,
          whiteSpace: "nowrap",
          lineHeight: "36px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.value}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.unit}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.reference}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-negative)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.delta}</span>
      </div>
      <div style={{
        position: "relative",
        height: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showSparkline && (
        <DataSparklineActual style={{
            position: "relative",
            width: 216,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        )}
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-border-strong)",
      borderRight: "1px solid var(--color-border-strong)",
      borderBottom: "1px solid var(--color-border-strong)",
      borderLeft: "1px solid var(--color-border-strong)",
      boxShadow: "0px 1px 4px 0px rgba(8,26,41,0.04), 0px 4px 12px -2px rgba(8,26,41,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "18px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 28,
          whiteSpace: "nowrap",
          lineHeight: "36px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.value}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.unit}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.reference}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-negative)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.delta}</span>
      </div>
      <div style={{
        position: "relative",
        height: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showSparkline && (
        <DataSparklineActual style={{
            position: "relative",
            width: 216,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        )}
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 248,
      height: 152,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      borderTop: "1px solid var(--color-action-focus)",
      borderRight: "1px solid var(--color-action-focus)",
      borderBottom: "1px solid var(--color-action-focus)",
      borderLeft: "1px solid var(--color-action-focus)",
      boxShadow: "0px 0px 0px 3px rgba(37,99,235,0.28)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-4-3) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-16-3) * 1px)",
      paddingTop: "calc(var(--space-16-3) * 1px)",
      paddingRight: "calc(var(--space-16-3) * 1px)",
      paddingBottom: "calc(var(--space-16-3) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 32,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-12-3) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showIcon && (
        <div style={{
          position: "relative",
          width: 32,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--color-surface-selected)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 18,
              height: 18,
              flexShrink: 0,
            }}>{props.iconAsset ?? <IconNavDemand />}</div>
        </div>
        )}
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "18px",
            color: "var(--color-text-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.title}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.context}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-4-3) * 1px)",
        alignItems: "baseline",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 28,
          whiteSpace: "nowrap",
          lineHeight: "36px",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.value}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.unit}</span>
      </div>
      <div style={{
        position: "relative",
        height: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.reference}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--color-text-negative)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.delta}</span>
      </div>
      <div style={{
        position: "relative",
        height: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showSparkline && (
        <DataSparklineActual style={{
            position: "relative",
            width: 216,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }} />
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default, Tone=Neutral
    "state=default|tone=neutral": __body0,
    // figma: State=Hover, Tone=Neutral
    "state=hover|tone=neutral": __body1,
    // figma: State=Focus, Tone=Neutral
    "state=focus|tone=neutral": __body2,
    // figma: State=Loading, Tone=Neutral
    "state=loading|tone=neutral": __body3,
    // figma: State=No Data, Tone=Neutral
    "state=no data|tone=neutral": __body4,
    // figma: State=Error, Tone=Neutral
    "state=error|tone=neutral": __body5,
    // figma: State=Not Comparable, Tone=Neutral
    "state=not comparable|tone=neutral": __body6,
    // figma: State=Default, Tone=Favorable
    "state=default|tone=favorable": __body7,
    // figma: State=Hover, Tone=Favorable
    "state=hover|tone=favorable": __body8,
    // figma: State=Focus, Tone=Favorable
    "state=focus|tone=favorable": __body9,
    // figma: State=Loading, Tone=Favorable
    "state=loading|tone=favorable": __body10,
    // figma: State=No Data, Tone=Favorable
    "state=no data|tone=favorable": __body11,
    // figma: State=Error, Tone=Favorable
    "state=error|tone=favorable": __body12,
    // figma: State=Not Comparable, Tone=Favorable
    "state=not comparable|tone=favorable": __body13,
    // figma: State=Default, Tone=Unfavorable
    "state=default|tone=unfavorable": __body14,
    // figma: State=Hover, Tone=Unfavorable
    "state=hover|tone=unfavorable": __body15,
    // figma: State=Focus, Tone=Unfavorable
    "state=focus|tone=unfavorable": __body16,
    // figma: State=Loading, Tone=Unfavorable
    "state=loading|tone=unfavorable": __body10,
    // figma: State=No Data, Tone=Unfavorable
    "state=no data|tone=unfavorable": __body11,
    // figma: State=Error, Tone=Unfavorable
    "state=error|tone=unfavorable": __body12,
    // figma: State=Not Comparable, Tone=Unfavorable
    "state=not comparable|tone=unfavorable": __body13,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DataStatCard;
