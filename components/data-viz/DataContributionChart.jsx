import { DataContributionPlot } from './DataContributionPlot.jsx';
import { DataDataState } from "../feedback/DataDataState.jsx";

// figma node: 6869:1592 Data/Contribution Chart (14 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function DataContributionChart(_p = {}) {
  const props = { ..._p, action: _p.action ?? "Abrir detalhe estrutural", mode: _p.mode ?? "composition", showSelector: _p.showSelector ?? true, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 360,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20,
        top: 13,
        width: 318,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Composição do realizado por dimensão"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 38,
        width: 318,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
      }}>{props.text2 ?? "Realizado • 100% por linha • Segmento"}</span>
      {props.showSelector && (
      <div style={{
        position: "absolute",
        left: 348,
        top: 12,
        width: 160,
        height: "calc(var(--size-control-touch) * 1px)",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        borderTop: "1px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--space-8-3) * 1px)",
        paddingLeft: "calc(var(--space-12-3) * 1px)",
        paddingTop: "calc(var(--space-0) * 1px)",
        paddingRight: "calc(var(--space-12-3) * 1px)",
        paddingBottom: "calc(var(--space-0) * 1px)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "calc(var(--space-0) * 1px)",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 7,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Dimensão</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Site</span>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
          <svg width={9} height={4.500} viewBox="0 0 9 4.500" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 5.75,
            width: 9,
            height: 4.5,
            color: "var(--color-icon-secondary)",
          }}>
            <path d={"M 0.619 -0.619 C 0.277 -0.96 -0.277 -0.96 -0.619 -0.619 C -0.96 -0.277 -0.96 0.277 -0.619 0.619 L 0 0 L 0.619 -0.619 Z M 4.5 4.5 L 3.881 5.119 C 4.223 5.46 4.777 5.46 5.119 5.119 L 4.5 4.5 Z M 9.619 0.619 C 9.96 0.277 9.96 -0.277 9.619 -0.619 C 9.277 -0.96 8.723 -0.96 8.381 -0.619 L 9 0 L 9.619 0.619 Z M 0 0 L -0.619 0.619 L 3.881 5.119 L 4.5 4.5 L 5.119 3.881 L 0.619 -0.619 L 0 0 Z M 4.5 4.5 L 5.119 5.119 L 9.619 0.619 L 9 0 L 8.381 -0.619 L 3.881 3.881 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "absolute",
        left: 20,
        top: 68,
        width: 138,
        height: 24,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 8,
          borderRadius: 2,
          backgroundColor: "var(--color-data-series-1)",
          flexShrink: 0,
        }} />
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
        }}>{props.text3 ?? "Controle"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 158,
        top: 68,
        width: 138,
        height: 24,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 8,
          borderRadius: 2,
          backgroundColor: "var(--color-data-series-2)",
          flexShrink: 0,
        }} />
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
        }}>{props.text4 ?? "Pré"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 296,
        top: 68,
        width: 138,
        height: 24,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 8,
          borderRadius: 2,
          backgroundColor: "var(--color-data-series-3)",
          flexShrink: 0,
        }} />
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
        }}>Pós</span>
      </div>
      <DataContributionPlot
        style={{
          position: "absolute",
          left: 24,
          top: 100,
          width: 480,
          height: 210,
        }}
        mode={"composition"}
      />
      <div style={{
        position: "absolute",
        left: 20,
        top: 322,
        width: 328,
        height: 24,
        borderRadius: 12,
        backgroundColor: "var(--color-surface-subtle)",
      }} />
      <span style={{
        position: "absolute",
        left: 32,
        top: 322,
        width: 304,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--color-text-primary)",
      }}>Controle representa 42% do realizado</span>
      <span style={{
        position: "absolute",
        left: 374,
        top: 322,
        width: 134,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--color-text-secondary)",
      }}>{props.action}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 360,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20,
        top: 13,
        width: 318,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Composição do realizado por dimensão"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 38,
        width: 318,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
      }}>{props.text2 ?? "Realizado • 100% por linha • Segmento"}</span>
      {props.showSelector && (
      <div style={{
        position: "absolute",
        left: 348,
        top: 12,
        width: 160,
        height: "calc(var(--size-control-touch) * 1px)",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        borderTop: "1px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--space-8-3) * 1px)",
        paddingLeft: "calc(var(--space-12-3) * 1px)",
        paddingTop: "calc(var(--space-0) * 1px)",
        paddingRight: "calc(var(--space-12-3) * 1px)",
        paddingBottom: "calc(var(--space-0) * 1px)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "calc(var(--space-0) * 1px)",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 7,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Dimensão</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Site</span>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
          <svg width={9} height={4.500} viewBox="0 0 9 4.500" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 5.75,
            width: 9,
            height: 4.5,
            color: "var(--color-icon-secondary)",
          }}>
            <path d={"M 0.619 -0.619 C 0.277 -0.96 -0.277 -0.96 -0.619 -0.619 C -0.96 -0.277 -0.96 0.277 -0.619 0.619 L 0 0 L 0.619 -0.619 Z M 4.5 4.5 L 3.881 5.119 C 4.223 5.46 4.777 5.46 5.119 5.119 L 4.5 4.5 Z M 9.619 0.619 C 9.96 0.277 9.96 -0.277 9.619 -0.619 C 9.277 -0.96 8.723 -0.96 8.381 -0.619 L 9 0 L 9.619 0.619 Z M 0 0 L -0.619 0.619 L 3.881 5.119 L 4.5 4.5 L 5.119 3.881 L 0.619 -0.619 L 0 0 Z M 4.5 4.5 L 5.119 5.119 L 9.619 0.619 L 9 0 L 8.381 -0.619 L 3.881 3.881 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <DataDataState
        style={{
          position: "absolute",
          left: 54,
          top: 112,
          width: 420,
          height: 190,
        }}
        type={"loading"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 360,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20,
        top: 13,
        width: 318,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Composição do realizado por dimensão"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 38,
        width: 318,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
      }}>{props.text2 ?? "Realizado • 100% por linha • Segmento"}</span>
      {props.showSelector && (
      <div style={{
        position: "absolute",
        left: 348,
        top: 12,
        width: 160,
        height: "calc(var(--size-control-touch) * 1px)",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        borderTop: "1px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--space-8-3) * 1px)",
        paddingLeft: "calc(var(--space-12-3) * 1px)",
        paddingTop: "calc(var(--space-0) * 1px)",
        paddingRight: "calc(var(--space-12-3) * 1px)",
        paddingBottom: "calc(var(--space-0) * 1px)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "calc(var(--space-0) * 1px)",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 7,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Dimensão</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Site</span>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
          <svg width={9} height={4.500} viewBox="0 0 9 4.500" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 5.75,
            width: 9,
            height: 4.5,
            color: "var(--color-icon-secondary)",
          }}>
            <path d={"M 0.619 -0.619 C 0.277 -0.96 -0.277 -0.96 -0.619 -0.619 C -0.96 -0.277 -0.96 0.277 -0.619 0.619 L 0 0 L 0.619 -0.619 Z M 4.5 4.5 L 3.881 5.119 C 4.223 5.46 4.777 5.46 5.119 5.119 L 4.5 4.5 Z M 9.619 0.619 C 9.96 0.277 9.96 -0.277 9.619 -0.619 C 9.277 -0.96 8.723 -0.96 8.381 -0.619 L 9 0 L 9.619 0.619 Z M 0 0 L -0.619 0.619 L 3.881 5.119 L 4.5 4.5 L 5.119 3.881 L 0.619 -0.619 L 0 0 Z M 4.5 4.5 L 5.119 5.119 L 9.619 0.619 L 9 0 L 8.381 -0.619 L 3.881 3.881 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <DataDataState
        style={{
          position: "absolute",
          left: 54,
          top: 112,
          width: 420,
          height: 190,
        }}
        type={"empty"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 360,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20,
        top: 13,
        width: 318,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Composição do realizado por dimensão"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 38,
        width: 318,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
      }}>{props.text2 ?? "Realizado • 100% por linha • Segmento"}</span>
      {props.showSelector && (
      <div style={{
        position: "absolute",
        left: 348,
        top: 12,
        width: 160,
        height: "calc(var(--size-control-touch) * 1px)",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        borderTop: "1px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--space-8-3) * 1px)",
        paddingLeft: "calc(var(--space-12-3) * 1px)",
        paddingTop: "calc(var(--space-0) * 1px)",
        paddingRight: "calc(var(--space-12-3) * 1px)",
        paddingBottom: "calc(var(--space-0) * 1px)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "calc(var(--space-0) * 1px)",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 7,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Dimensão</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Site</span>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
          <svg width={9} height={4.500} viewBox="0 0 9 4.500" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 5.75,
            width: 9,
            height: 4.5,
            color: "var(--color-icon-secondary)",
          }}>
            <path d={"M 0.619 -0.619 C 0.277 -0.96 -0.277 -0.96 -0.619 -0.619 C -0.96 -0.277 -0.96 0.277 -0.619 0.619 L 0 0 L 0.619 -0.619 Z M 4.5 4.5 L 3.881 5.119 C 4.223 5.46 4.777 5.46 5.119 5.119 L 4.5 4.5 Z M 9.619 0.619 C 9.96 0.277 9.96 -0.277 9.619 -0.619 C 9.277 -0.96 8.723 -0.96 8.381 -0.619 L 9 0 L 9.619 0.619 Z M 0 0 L -0.619 0.619 L 3.881 5.119 L 4.5 4.5 L 5.119 3.881 L 0.619 -0.619 L 0 0 Z M 4.5 4.5 L 5.119 5.119 L 9.619 0.619 L 9 0 L 8.381 -0.619 L 3.881 3.881 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <DataDataState
        style={{
          position: "absolute",
          left: 54,
          top: 112,
          width: 420,
          height: 190,
        }}
        type={"error"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 360,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20,
        top: 13,
        width: 318,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Composição do realizado por dimensão"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 38,
        width: 318,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
      }}>{props.text2 ?? "Realizado • 100% por linha • Segmento"}</span>
      {props.showSelector && (
      <div style={{
        position: "absolute",
        left: 348,
        top: 12,
        width: 160,
        height: "calc(var(--size-control-touch) * 1px)",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        borderTop: "1px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--space-8-3) * 1px)",
        paddingLeft: "calc(var(--space-12-3) * 1px)",
        paddingTop: "calc(var(--space-0) * 1px)",
        paddingRight: "calc(var(--space-12-3) * 1px)",
        paddingBottom: "calc(var(--space-0) * 1px)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "calc(var(--space-0) * 1px)",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 7,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Dimensão</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Site</span>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
          <svg width={9} height={4.500} viewBox="0 0 9 4.500" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 5.75,
            width: 9,
            height: 4.5,
            color: "var(--color-icon-secondary)",
          }}>
            <path d={"M 0.619 -0.619 C 0.277 -0.96 -0.277 -0.96 -0.619 -0.619 C -0.96 -0.277 -0.96 0.277 -0.619 0.619 L 0 0 L 0.619 -0.619 Z M 4.5 4.5 L 3.881 5.119 C 4.223 5.46 4.777 5.46 5.119 5.119 L 4.5 4.5 Z M 9.619 0.619 C 9.96 0.277 9.96 -0.277 9.619 -0.619 C 9.277 -0.96 8.723 -0.96 8.381 -0.619 L 9 0 L 9.619 0.619 Z M 0 0 L -0.619 0.619 L 3.881 5.119 L 4.5 4.5 L 5.119 3.881 L 0.619 -0.619 L 0 0 Z M 4.5 4.5 L 5.119 5.119 L 9.619 0.619 L 9 0 L 8.381 -0.619 L 3.881 3.881 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <DataDataState
        style={{
          position: "absolute",
          left: 54,
          top: 112,
          width: 420,
          height: 190,
        }}
        type={"partial"}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 360,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20,
        top: 13,
        width: 318,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Composição do realizado por dimensão"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 38,
        width: 318,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
      }}>{props.text2 ?? "Realizado • 100% por linha • Segmento"}</span>
      {props.showSelector && (
      <div style={{
        position: "absolute",
        left: 348,
        top: 12,
        width: 160,
        height: "calc(var(--size-control-touch) * 1px)",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        borderTop: "1px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--space-8-3) * 1px)",
        paddingLeft: "calc(var(--space-12-3) * 1px)",
        paddingTop: "calc(var(--space-0) * 1px)",
        paddingRight: "calc(var(--space-12-3) * 1px)",
        paddingBottom: "calc(var(--space-0) * 1px)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "calc(var(--space-0) * 1px)",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 7,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Dimensão</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Site</span>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
          <svg width={9} height={4.500} viewBox="0 0 9 4.500" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 5.75,
            width: 9,
            height: 4.5,
            color: "var(--color-icon-secondary)",
          }}>
            <path d={"M 0.619 -0.619 C 0.277 -0.96 -0.277 -0.96 -0.619 -0.619 C -0.96 -0.277 -0.96 0.277 -0.619 0.619 L 0 0 L 0.619 -0.619 Z M 4.5 4.5 L 3.881 5.119 C 4.223 5.46 4.777 5.46 5.119 5.119 L 4.5 4.5 Z M 9.619 0.619 C 9.96 0.277 9.96 -0.277 9.619 -0.619 C 9.277 -0.96 8.723 -0.96 8.381 -0.619 L 9 0 L 9.619 0.619 Z M 0 0 L -0.619 0.619 L 3.881 5.119 L 4.5 4.5 L 5.119 3.881 L 0.619 -0.619 L 0 0 Z M 4.5 4.5 L 5.119 5.119 L 9.619 0.619 L 9 0 L 8.381 -0.619 L 3.881 3.881 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <DataDataState
        style={{
          position: "absolute",
          left: 54,
          top: 112,
          width: 420,
          height: 190,
        }}
        type={"restricted"}
      />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 360,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20,
        top: 13,
        width: 318,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Composição do realizado por dimensão"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 38,
        width: 318,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
      }}>{props.text2 ?? "Realizado • 100% por linha • Segmento"}</span>
      {props.showSelector && (
      <div style={{
        position: "absolute",
        left: 348,
        top: 12,
        width: 160,
        height: "calc(var(--size-control-touch) * 1px)",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        borderTop: "1px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--space-8-3) * 1px)",
        paddingLeft: "calc(var(--space-12-3) * 1px)",
        paddingTop: "calc(var(--space-0) * 1px)",
        paddingRight: "calc(var(--space-12-3) * 1px)",
        paddingBottom: "calc(var(--space-0) * 1px)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "calc(var(--space-0) * 1px)",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 7,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Dimensão</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Site</span>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
          <svg width={9} height={4.500} viewBox="0 0 9 4.500" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 5.75,
            width: 9,
            height: 4.5,
            color: "var(--color-icon-secondary)",
          }}>
            <path d={"M 0.619 -0.619 C 0.277 -0.96 -0.277 -0.96 -0.619 -0.619 C -0.96 -0.277 -0.96 0.277 -0.619 0.619 L 0 0 L 0.619 -0.619 Z M 4.5 4.5 L 3.881 5.119 C 4.223 5.46 4.777 5.46 5.119 5.119 L 4.5 4.5 Z M 9.619 0.619 C 9.96 0.277 9.96 -0.277 9.619 -0.619 C 9.277 -0.96 8.723 -0.96 8.381 -0.619 L 9 0 L 9.619 0.619 Z M 0 0 L -0.619 0.619 L 3.881 5.119 L 4.5 4.5 L 5.119 3.881 L 0.619 -0.619 L 0 0 Z M 4.5 4.5 L 5.119 5.119 L 9.619 0.619 L 9 0 L 8.381 -0.619 L 3.881 3.881 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <DataDataState
        style={{
          position: "absolute",
          left: 54,
          top: 112,
          width: 420,
          height: 190,
        }}
        type={"noplan"}
      />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 360,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20,
        top: 13,
        width: 318,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Contribuição para o desvio"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 38,
        width: 318,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
      }}>{props.text2 ?? "Plano comparável • método validado • Segmento"}</span>
      {props.showSelector && (
      <div style={{
        position: "absolute",
        left: 348,
        top: 12,
        width: 160,
        height: "calc(var(--size-control-touch) * 1px)",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        borderTop: "1px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--space-8-3) * 1px)",
        paddingLeft: "calc(var(--space-12-3) * 1px)",
        paddingTop: "calc(var(--space-0) * 1px)",
        paddingRight: "calc(var(--space-12-3) * 1px)",
        paddingBottom: "calc(var(--space-0) * 1px)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "calc(var(--space-0) * 1px)",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 7,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Dimensão</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Segmento</span>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
          <svg width={9} height={4.500} viewBox="0 0 9 4.500" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 5.75,
            width: 9,
            height: 4.5,
            color: "var(--color-icon-secondary)",
          }}>
            <path d={"M 0.619 -0.619 C 0.277 -0.96 -0.277 -0.96 -0.619 -0.619 C -0.96 -0.277 -0.96 0.277 -0.619 0.619 L 0 0 L 0.619 -0.619 Z M 4.5 4.5 L 3.881 5.119 C 4.223 5.46 4.777 5.46 5.119 5.119 L 4.5 4.5 Z M 9.619 0.619 C 9.96 0.277 9.96 -0.277 9.619 -0.619 C 9.277 -0.96 8.723 -0.96 8.381 -0.619 L 9 0 L 9.619 0.619 Z M 0 0 L -0.619 0.619 L 3.881 5.119 L 4.5 4.5 L 5.119 3.881 L 0.619 -0.619 L 0 0 Z M 4.5 4.5 L 5.119 5.119 L 9.619 0.619 L 9 0 L 8.381 -0.619 L 3.881 3.881 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "absolute",
        left: 20,
        top: 68,
        width: 138,
        height: 24,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 8,
          borderRadius: 2,
          backgroundColor: "var(--color-data-negative)",
          flexShrink: 0,
        }} />
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
        }}>{props.text3 ?? "Desfavorável"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 158,
        top: 68,
        width: 138,
        height: 24,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 8,
          borderRadius: 2,
          backgroundColor: "var(--color-data-positive)",
          flexShrink: 0,
        }} />
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
        }}>{props.text4 ?? "Favorável"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 296,
        top: 68,
        width: 138,
        height: 24,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 8,
          borderRadius: 2,
          backgroundColor: "var(--color-border-strong)",
          flexShrink: 0,
        }} />
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
        }}>Zero</span>
      </div>
      <DataContributionPlot
        style={{
          position: "absolute",
          left: 24,
          top: 100,
          width: 480,
          height: 210,
        }}
        mode={"deviation"}
      />
      <div style={{
        position: "absolute",
        left: 20,
        top: 322,
        width: 328,
        height: 24,
        borderRadius: 12,
        backgroundColor: "var(--color-surface-subtle)",
      }} />
      <span style={{
        position: "absolute",
        left: 32,
        top: 322,
        width: 304,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--color-text-primary)",
      }}>S2S concentra 46% do impacto desfavorável</span>
      <span style={{
        position: "absolute",
        left: 374,
        top: 322,
        width: 134,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--color-text-secondary)",
      }}>{props.action}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 360,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20,
        top: 13,
        width: 318,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Contribuição para o desvio"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 38,
        width: 318,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
      }}>{props.text2 ?? "Plano comparável • método validado • Segmento"}</span>
      {props.showSelector && (
      <div style={{
        position: "absolute",
        left: 348,
        top: 12,
        width: 160,
        height: "calc(var(--size-control-touch) * 1px)",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        borderTop: "1px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--space-8-3) * 1px)",
        paddingLeft: "calc(var(--space-12-3) * 1px)",
        paddingTop: "calc(var(--space-0) * 1px)",
        paddingRight: "calc(var(--space-12-3) * 1px)",
        paddingBottom: "calc(var(--space-0) * 1px)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "calc(var(--space-0) * 1px)",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 7,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Dimensão</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Segmento</span>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
          <svg width={9} height={4.500} viewBox="0 0 9 4.500" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 5.75,
            width: 9,
            height: 4.5,
            color: "var(--color-icon-secondary)",
          }}>
            <path d={"M 0.619 -0.619 C 0.277 -0.96 -0.277 -0.96 -0.619 -0.619 C -0.96 -0.277 -0.96 0.277 -0.619 0.619 L 0 0 L 0.619 -0.619 Z M 4.5 4.5 L 3.881 5.119 C 4.223 5.46 4.777 5.46 5.119 5.119 L 4.5 4.5 Z M 9.619 0.619 C 9.96 0.277 9.96 -0.277 9.619 -0.619 C 9.277 -0.96 8.723 -0.96 8.381 -0.619 L 9 0 L 9.619 0.619 Z M 0 0 L -0.619 0.619 L 3.881 5.119 L 4.5 4.5 L 5.119 3.881 L 0.619 -0.619 L 0 0 Z M 4.5 4.5 L 5.119 5.119 L 9.619 0.619 L 9 0 L 8.381 -0.619 L 3.881 3.881 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <DataDataState
        style={{
          position: "absolute",
          left: 54,
          top: 112,
          width: 420,
          height: 190,
        }}
        type={"loading"}
      />
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 360,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20,
        top: 13,
        width: 318,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Contribuição para o desvio"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 38,
        width: 318,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
      }}>{props.text2 ?? "Plano comparável • método validado • Segmento"}</span>
      {props.showSelector && (
      <div style={{
        position: "absolute",
        left: 348,
        top: 12,
        width: 160,
        height: "calc(var(--size-control-touch) * 1px)",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        borderTop: "1px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--space-8-3) * 1px)",
        paddingLeft: "calc(var(--space-12-3) * 1px)",
        paddingTop: "calc(var(--space-0) * 1px)",
        paddingRight: "calc(var(--space-12-3) * 1px)",
        paddingBottom: "calc(var(--space-0) * 1px)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "calc(var(--space-0) * 1px)",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 7,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Dimensão</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Segmento</span>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
          <svg width={9} height={4.500} viewBox="0 0 9 4.500" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 5.75,
            width: 9,
            height: 4.5,
            color: "var(--color-icon-secondary)",
          }}>
            <path d={"M 0.619 -0.619 C 0.277 -0.96 -0.277 -0.96 -0.619 -0.619 C -0.96 -0.277 -0.96 0.277 -0.619 0.619 L 0 0 L 0.619 -0.619 Z M 4.5 4.5 L 3.881 5.119 C 4.223 5.46 4.777 5.46 5.119 5.119 L 4.5 4.5 Z M 9.619 0.619 C 9.96 0.277 9.96 -0.277 9.619 -0.619 C 9.277 -0.96 8.723 -0.96 8.381 -0.619 L 9 0 L 9.619 0.619 Z M 0 0 L -0.619 0.619 L 3.881 5.119 L 4.5 4.5 L 5.119 3.881 L 0.619 -0.619 L 0 0 Z M 4.5 4.5 L 5.119 5.119 L 9.619 0.619 L 9 0 L 8.381 -0.619 L 3.881 3.881 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <DataDataState
        style={{
          position: "absolute",
          left: 54,
          top: 112,
          width: 420,
          height: 190,
        }}
        type={"empty"}
      />
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 360,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20,
        top: 13,
        width: 318,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Contribuição para o desvio"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 38,
        width: 318,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
      }}>{props.text2 ?? "Plano comparável • método validado • Segmento"}</span>
      {props.showSelector && (
      <div style={{
        position: "absolute",
        left: 348,
        top: 12,
        width: 160,
        height: "calc(var(--size-control-touch) * 1px)",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        borderTop: "1px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--space-8-3) * 1px)",
        paddingLeft: "calc(var(--space-12-3) * 1px)",
        paddingTop: "calc(var(--space-0) * 1px)",
        paddingRight: "calc(var(--space-12-3) * 1px)",
        paddingBottom: "calc(var(--space-0) * 1px)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "calc(var(--space-0) * 1px)",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 7,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Dimensão</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Segmento</span>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
          <svg width={9} height={4.500} viewBox="0 0 9 4.500" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 5.75,
            width: 9,
            height: 4.5,
            color: "var(--color-icon-secondary)",
          }}>
            <path d={"M 0.619 -0.619 C 0.277 -0.96 -0.277 -0.96 -0.619 -0.619 C -0.96 -0.277 -0.96 0.277 -0.619 0.619 L 0 0 L 0.619 -0.619 Z M 4.5 4.5 L 3.881 5.119 C 4.223 5.46 4.777 5.46 5.119 5.119 L 4.5 4.5 Z M 9.619 0.619 C 9.96 0.277 9.96 -0.277 9.619 -0.619 C 9.277 -0.96 8.723 -0.96 8.381 -0.619 L 9 0 L 9.619 0.619 Z M 0 0 L -0.619 0.619 L 3.881 5.119 L 4.5 4.5 L 5.119 3.881 L 0.619 -0.619 L 0 0 Z M 4.5 4.5 L 5.119 5.119 L 9.619 0.619 L 9 0 L 8.381 -0.619 L 3.881 3.881 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <DataDataState
        style={{
          position: "absolute",
          left: 54,
          top: 112,
          width: 420,
          height: 190,
        }}
        type={"error"}
      />
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 360,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20,
        top: 13,
        width: 318,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Contribuição para o desvio"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 38,
        width: 318,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
      }}>{props.text2 ?? "Plano comparável • método validado • Segmento"}</span>
      {props.showSelector && (
      <div style={{
        position: "absolute",
        left: 348,
        top: 12,
        width: 160,
        height: "calc(var(--size-control-touch) * 1px)",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        borderTop: "1px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--space-8-3) * 1px)",
        paddingLeft: "calc(var(--space-12-3) * 1px)",
        paddingTop: "calc(var(--space-0) * 1px)",
        paddingRight: "calc(var(--space-12-3) * 1px)",
        paddingBottom: "calc(var(--space-0) * 1px)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "calc(var(--space-0) * 1px)",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 7,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Dimensão</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Segmento</span>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
          <svg width={9} height={4.500} viewBox="0 0 9 4.500" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 5.75,
            width: 9,
            height: 4.5,
            color: "var(--color-icon-secondary)",
          }}>
            <path d={"M 0.619 -0.619 C 0.277 -0.96 -0.277 -0.96 -0.619 -0.619 C -0.96 -0.277 -0.96 0.277 -0.619 0.619 L 0 0 L 0.619 -0.619 Z M 4.5 4.5 L 3.881 5.119 C 4.223 5.46 4.777 5.46 5.119 5.119 L 4.5 4.5 Z M 9.619 0.619 C 9.96 0.277 9.96 -0.277 9.619 -0.619 C 9.277 -0.96 8.723 -0.96 8.381 -0.619 L 9 0 L 9.619 0.619 Z M 0 0 L -0.619 0.619 L 3.881 5.119 L 4.5 4.5 L 5.119 3.881 L 0.619 -0.619 L 0 0 Z M 4.5 4.5 L 5.119 5.119 L 9.619 0.619 L 9 0 L 8.381 -0.619 L 3.881 3.881 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <DataDataState
        style={{
          position: "absolute",
          left: 54,
          top: 112,
          width: 420,
          height: 190,
        }}
        type={"partial"}
      />
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 360,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20,
        top: 13,
        width: 318,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Contribuição para o desvio"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 38,
        width: 318,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
      }}>{props.text2 ?? "Plano comparável • método validado • Segmento"}</span>
      {props.showSelector && (
      <div style={{
        position: "absolute",
        left: 348,
        top: 12,
        width: 160,
        height: "calc(var(--size-control-touch) * 1px)",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        borderTop: "1px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--space-8-3) * 1px)",
        paddingLeft: "calc(var(--space-12-3) * 1px)",
        paddingTop: "calc(var(--space-0) * 1px)",
        paddingRight: "calc(var(--space-12-3) * 1px)",
        paddingBottom: "calc(var(--space-0) * 1px)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "calc(var(--space-0) * 1px)",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 7,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Dimensão</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Segmento</span>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
          <svg width={9} height={4.500} viewBox="0 0 9 4.500" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 5.75,
            width: 9,
            height: 4.5,
            color: "var(--color-icon-secondary)",
          }}>
            <path d={"M 0.619 -0.619 C 0.277 -0.96 -0.277 -0.96 -0.619 -0.619 C -0.96 -0.277 -0.96 0.277 -0.619 0.619 L 0 0 L 0.619 -0.619 Z M 4.5 4.5 L 3.881 5.119 C 4.223 5.46 4.777 5.46 5.119 5.119 L 4.5 4.5 Z M 9.619 0.619 C 9.96 0.277 9.96 -0.277 9.619 -0.619 C 9.277 -0.96 8.723 -0.96 8.381 -0.619 L 9 0 L 9.619 0.619 Z M 0 0 L -0.619 0.619 L 3.881 5.119 L 4.5 4.5 L 5.119 3.881 L 0.619 -0.619 L 0 0 Z M 4.5 4.5 L 5.119 5.119 L 9.619 0.619 L 9 0 L 8.381 -0.619 L 3.881 3.881 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <DataDataState
        style={{
          position: "absolute",
          left: 54,
          top: 112,
          width: 420,
          height: 190,
        }}
        type={"restricted"}
      />
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 528,
      height: 360,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 20,
        top: 13,
        width: 318,
        height: 24,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Contribuição para o desvio"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 38,
        width: 318,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--color-text-secondary)",
      }}>{props.text2 ?? "Plano comparável • método validado • Segmento"}</span>
      {props.showSelector && (
      <div style={{
        position: "absolute",
        left: 348,
        top: 12,
        width: 160,
        height: "calc(var(--size-control-touch) * 1px)",
        borderRadius: 8,
        backgroundColor: "var(--color-surface-selected)",
        borderTop: "1px solid var(--color-border-brand)",
        borderRight: "1px solid var(--color-border-brand)",
        borderBottom: "1px solid var(--color-border-brand)",
        borderLeft: "1px solid var(--color-border-brand)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 12px 0px 12px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--space-8-3) * 1px)",
        paddingLeft: "calc(var(--space-12-3) * 1px)",
        paddingTop: "calc(var(--space-0) * 1px)",
        paddingRight: "calc(var(--space-12-3) * 1px)",
        paddingBottom: "calc(var(--space-0) * 1px)",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "var(--color-surface-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          gap: "calc(var(--space-0) * 1px)",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 7,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Dimensão</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 9,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
          }}>Segmento</span>
        </div>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
          <svg width={9} height={4.500} viewBox="0 0 9 4.500" fill="none" style={{
            position: "absolute",
            left: 3.5,
            top: 5.75,
            width: 9,
            height: 4.5,
            color: "var(--color-icon-secondary)",
          }}>
            <path d={"M 0.619 -0.619 C 0.277 -0.96 -0.277 -0.96 -0.619 -0.619 C -0.96 -0.277 -0.96 0.277 -0.619 0.619 L 0 0 L 0.619 -0.619 Z M 4.5 4.5 L 3.881 5.119 C 4.223 5.46 4.777 5.46 5.119 5.119 L 4.5 4.5 Z M 9.619 0.619 C 9.96 0.277 9.96 -0.277 9.619 -0.619 C 9.277 -0.96 8.723 -0.96 8.381 -0.619 L 9 0 L 9.619 0.619 Z M 0 0 L -0.619 0.619 L 3.881 5.119 L 4.5 4.5 L 5.119 3.881 L 0.619 -0.619 L 0 0 Z M 4.5 4.5 L 5.119 5.119 L 9.619 0.619 L 9 0 L 8.381 -0.619 L 3.881 3.881 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <DataDataState
        style={{
          position: "absolute",
          left: 54,
          top: 112,
          width: 420,
          height: 190,
        }}
        type={"noplan"}
      />
    </div>
  );
  const __impls = {
    // figma: Mode=Composition, State=Default
    "mode=composition|state=default": __body0,
    // figma: Mode=Composition, State=Loading
    "mode=composition|state=loading": __body1,
    // figma: Mode=Composition, State=Empty
    "mode=composition|state=empty": __body2,
    // figma: Mode=Composition, State=Error
    "mode=composition|state=error": __body3,
    // figma: Mode=Composition, State=Partial
    "mode=composition|state=partial": __body4,
    // figma: Mode=Composition, State=Restricted
    "mode=composition|state=restricted": __body5,
    // figma: Mode=Composition, State=No Comparable Plan
    "mode=composition|state=no comparable plan": __body6,
    // figma: Mode=Deviation, State=Default
    "mode=deviation|state=default": __body7,
    // figma: Mode=Deviation, State=Loading
    "mode=deviation|state=loading": __body8,
    // figma: Mode=Deviation, State=Empty
    "mode=deviation|state=empty": __body9,
    // figma: Mode=Deviation, State=Error
    "mode=deviation|state=error": __body10,
    // figma: Mode=Deviation, State=Partial
    "mode=deviation|state=partial": __body11,
    // figma: Mode=Deviation, State=Restricted
    "mode=deviation|state=restricted": __body12,
    // figma: Mode=Deviation, State=No Comparable Plan
    "mode=deviation|state=no comparable plan": __body13,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DataContributionChart;
