// figma node: 6962:6459 __Data/Dimension Segmented Control (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "active=" + __venc(p.active);

export function DataDimensionSegmentedControl(_p = {}) {
  const props = { ..._p, active: _p.active ?? "todos" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 344,
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(0,0,255)",
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-inverse)",
          flexShrink: 0,
        }}>{props.text1 ?? "Todos"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text2 ?? "Operação"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text3 ?? "Segmento"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text4 ?? "Site"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>Turno</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 344,
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text1 ?? "Todos"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(0,0,255)",
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-inverse)",
          flexShrink: 0,
        }}>{props.text2 ?? "Operação"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text3 ?? "Segmento"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text4 ?? "Site"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>Turno</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 344,
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text1 ?? "Todos"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text2 ?? "Operação"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(0,0,255)",
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-inverse)",
          flexShrink: 0,
        }}>{props.text3 ?? "Segmento"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text4 ?? "Site"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>Turno</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 344,
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text1 ?? "Todos"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text2 ?? "Operação"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text3 ?? "Segmento"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(0,0,255)",
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-inverse)",
          flexShrink: 0,
        }}>{props.text4 ?? "Site"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>Turno</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 344,
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text1 ?? "Todos"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text2 ?? "Operação"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text3 ?? "Segmento"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.text4 ?? "Site"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 68,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "rgb(0,0,255)",
        display: "flex",
        flexDirection: "row",
        padding: "7px 14px 7px 14px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 7.5,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-inverse)",
          flexShrink: 0,
        }}>Turno</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Active=Todos
    "active=todos": __body0,
    // figma: Active=Operação
    "active=operação": __body1,
    // figma: Active=Segmento
    "active=segmento": __body2,
    // figma: Active=Site
    "active=site": __body3,
    // figma: Active=Turno
    "active=turno": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DataDimensionSegmentedControl;
