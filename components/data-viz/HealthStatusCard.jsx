import { BrandProductLogoTile } from '../data-display/BrandProductLogoTile.jsx';

// figma node: 7413:11042 Health/Status Card (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function HealthStatusCard(_p = {}) {
  const props = { ..._p, actionVisible: _p.actionVisible ?? true, productLogoVisible: _p.productLogoVisible ?? false, metric2Value: _p.metric2Value ?? "182 ms", name: _p.name ?? "Nexo Portal", state: _p.state ?? "healthy", metric3Label: _p.metric3Label ?? "Taxa de erro", metric3Value: _p.metric3Value ?? "0,02%", lastChecked: _p.lastChecked ?? "15/05/2026 10:24", metric2Label: _p.metric2Label ?? "Latência média", description: _p.description ?? "Camada principal da plataforma.", metric1Value: _p.metric1Value ?? "99,98%", descriptionVisible: _p.descriptionVisible ?? true, metric1Label: _p.metric1Label ?? "Disponibilidade" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 360,
      height: 270,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "18px 18px 18px 18px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.productLogoVisible && (
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.productLogo ?? <BrandProductLogoTile size={"sm"} shape={"rounded"} background={"subtle"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexGrow: 1,
        }}>{props.name}</span>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--color-state-positive-subtle)",
          display: "flex",
          flexDirection: "row",
          gap: 5,
          padding: "5px 8px 5px 8px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-positive)",
            flexShrink: 0,
          }}>{props.text1 ?? "✓"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-positive)",
            flexShrink: 0,
          }}>{props.text2 ?? "Saudável"}</span>
        </div>
      </div>
      {props.descriptionVisible && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.description}</span>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 22,
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.metric1Label}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.metric1Value}</span>
        </div>
        <div style={{
          position: "relative",
          height: 22,
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.metric2Label}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.metric2Value}</span>
        </div>
        <div style={{
          position: "relative",
          height: 22,
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.metric3Label}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.metric3Value}</span>
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.lastChecked}</span>
      {props.actionVisible && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.text3 ?? "Ver detalhes"}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 360,
      height: 270,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 2px var(--color-state-warning-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "18px 18px 18px 18px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.productLogoVisible && (
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.productLogo ?? <BrandProductLogoTile size={"sm"} shape={"rounded"} background={"subtle"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexGrow: 1,
        }}>{props.name}</span>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--color-state-warning-subtle)",
          display: "flex",
          flexDirection: "row",
          gap: 5,
          padding: "5px 8px 5px 8px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-warning)",
            flexShrink: 0,
          }}>{props.text1 ?? "!"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-warning)",
            flexShrink: 0,
          }}>{props.text2 ?? "Atenção"}</span>
        </div>
      </div>
      {props.descriptionVisible && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.description}</span>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 22,
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.metric1Label}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.metric1Value}</span>
        </div>
        <div style={{
          position: "relative",
          height: 22,
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.metric2Label}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.metric2Value}</span>
        </div>
        <div style={{
          position: "relative",
          height: 22,
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.metric3Label}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.metric3Value}</span>
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.lastChecked}</span>
      {props.actionVisible && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.text3 ?? "Ver detalhes"}</span>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 360,
      height: 270,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 2px var(--color-state-negative-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "18px 18px 18px 18px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.productLogoVisible && (
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.productLogo ?? <BrandProductLogoTile size={"sm"} shape={"rounded"} background={"subtle"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexGrow: 1,
        }}>{props.name}</span>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--color-state-negative-subtle)",
          display: "flex",
          flexDirection: "row",
          gap: 5,
          padding: "5px 8px 5px 8px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-negative)",
            flexShrink: 0,
          }}>{props.text1 ?? "×"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-negative)",
            flexShrink: 0,
          }}>{props.text2 ?? "Crítico"}</span>
        </div>
      </div>
      {props.descriptionVisible && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.description}</span>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 22,
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.metric1Label}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.metric1Value}</span>
        </div>
        <div style={{
          position: "relative",
          height: 22,
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.metric2Label}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.metric2Value}</span>
        </div>
        <div style={{
          position: "relative",
          height: 22,
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.metric3Label}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.metric3Value}</span>
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.lastChecked}</span>
      {props.actionVisible && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.text3 ?? "Ver detalhes"}</span>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 360,
      height: 270,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 2px var(--color-state-negative-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "18px 18px 18px 18px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.productLogoVisible && (
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.productLogo ?? <BrandProductLogoTile size={"sm"} shape={"rounded"} background={"subtle"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexGrow: 1,
        }}>{props.name}</span>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--color-state-negative-subtle)",
          display: "flex",
          flexDirection: "row",
          gap: 5,
          padding: "5px 8px 5px 8px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-negative)",
            flexShrink: 0,
          }}>{props.text1 ?? "⊘"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 10,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-negative)",
            flexShrink: 0,
          }}>{props.text2 ?? "Indisponível"}</span>
        </div>
      </div>
      {props.descriptionVisible && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.description}</span>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 22,
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.metric1Label}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.metric1Value}</span>
        </div>
        <div style={{
          position: "relative",
          height: 22,
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.metric2Label}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.metric2Value}</span>
        </div>
        <div style={{
          position: "relative",
          height: 22,
          overflow: "hidden",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.metric3Label}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.metric3Value}</span>
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.lastChecked}</span>
      {props.actionVisible && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-brand)",
        flexShrink: 0,
      }}>{props.text3 ?? "Ver detalhes"}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: State=Healthy
    "state=healthy": __body0,
    // figma: State=Attention
    "state=attention": __body1,
    // figma: State=Critical
    "state=critical": __body2,
    // figma: State=Unavailable
    "state=unavailable": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default HealthStatusCard;
