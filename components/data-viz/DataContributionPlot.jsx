// figma node: 6866:1381 __Data/Contribution Plot (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode);

export function DataContributionPlot(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "composition" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 480,
      height: 210,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 480,
        height: 210,
        borderRadius: 8,
        backgroundColor: "var(--color-surface-subtle)",
      }} />
      <span style={{
        position: "absolute",
        left: 12,
        top: 31,
        width: 82,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "CG"}</span>
      <div style={{
        position: "absolute",
        left: 104,
        top: 26,
        width: 350,
        height: 24,
        borderRadius: 4,
        backgroundColor: "var(--color-surface-subtle)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      }} />
      <div style={{
        position: "absolute",
        left: 104,
        top: 26,
        width: 147,
        height: 24,
        borderRadius: "4px 0px 0px 4px",
        backgroundColor: "var(--color-data-series-1)",
      }} />
      <div style={{
        position: "absolute",
        left: 251,
        top: 26,
        width: 115.5,
        height: 24,
        backgroundColor: "var(--color-data-series-2)",
      }} />
      <div style={{
        position: "absolute",
        left: 366.5,
        top: 26,
        width: 87.5,
        height: 24,
        borderRadius: "0px 4px 4px 0px",
        backgroundColor: "var(--color-data-series-3)",
      }} />
      <span style={{
        position: "absolute",
        left: 12,
        top: 73,
        width: 82,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>{props.text2 ?? "SP"}</span>
      <div style={{
        position: "absolute",
        left: 104,
        top: 68,
        width: 350,
        height: 24,
        borderRadius: 4,
        backgroundColor: "var(--color-surface-subtle)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      }} />
      <div style={{
        position: "absolute",
        left: 104,
        top: 68,
        width: 126,
        height: 24,
        borderRadius: "4px 0px 0px 4px",
        backgroundColor: "var(--color-data-series-1)",
      }} />
      <div style={{
        position: "absolute",
        left: 230,
        top: 68,
        width: 143.5,
        height: 24,
        backgroundColor: "var(--color-data-series-2)",
      }} />
      <div style={{
        position: "absolute",
        left: 373.5,
        top: 68,
        width: 80.5,
        height: 24,
        borderRadius: "0px 4px 4px 0px",
        backgroundColor: "var(--color-data-series-3)",
      }} />
      <span style={{
        position: "absolute",
        left: 12,
        top: 115,
        width: 82,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>{props.text3 ?? "BH"}</span>
      <div style={{
        position: "absolute",
        left: 104,
        top: 110,
        width: 350,
        height: 24,
        borderRadius: 4,
        backgroundColor: "var(--color-surface-subtle)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      }} />
      <div style={{
        position: "absolute",
        left: 104,
        top: 110,
        width: 168,
        height: 24,
        borderRadius: "4px 0px 0px 4px",
        backgroundColor: "var(--color-data-series-1)",
      }} />
      <div style={{
        position: "absolute",
        left: 272,
        top: 110,
        width: 101.5,
        height: 24,
        backgroundColor: "var(--color-data-series-2)",
      }} />
      <div style={{
        position: "absolute",
        left: 373.5,
        top: 110,
        width: 80.5,
        height: 24,
        borderRadius: "0px 4px 4px 0px",
        backgroundColor: "var(--color-data-series-3)",
      }} />
      <span style={{
        position: "absolute",
        left: 12,
        top: 157,
        width: 82,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>{props.text4 ?? "Outros"}</span>
      <div style={{
        position: "absolute",
        left: 104,
        top: 152,
        width: 350,
        height: 24,
        borderRadius: 4,
        backgroundColor: "var(--color-surface-subtle)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      }} />
      <div style={{
        position: "absolute",
        left: 104,
        top: 152,
        width: 108.5,
        height: 24,
        borderRadius: "4px 0px 0px 4px",
        backgroundColor: "var(--color-data-series-1)",
      }} />
      <div style={{
        position: "absolute",
        left: 212.5,
        top: 152,
        width: 129.5,
        height: 24,
        backgroundColor: "var(--color-data-series-2)",
      }} />
      <div style={{
        position: "absolute",
        left: 342,
        top: 152,
        width: 112,
        height: 24,
        borderRadius: "0px 4px 4px 0px",
        backgroundColor: "var(--color-data-series-3)",
      }} />
      <span style={{
        position: "absolute",
        left: 104,
        top: 188,
        width: 350,
        height: 16,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "100%",
        color: "var(--color-text-muted)",
      }}>0%                                                        100%</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 480,
      height: 210,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 480,
        height: 210,
        borderRadius: 8,
        backgroundColor: "var(--color-surface-subtle)",
      }} />
      <div style={{
        position: "absolute",
        left: 286,
        top: 18,
        width: 1,
        height: 160,
        backgroundColor: "var(--color-border-subtle)",
      }} />
      <span style={{
        position: "absolute",
        left: 12,
        top: 24,
        width: 82,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "S2S"}</span>
      <span style={{
        position: "absolute",
        left: 98,
        top: 24,
        width: 76,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-data-negative)",
      }}>{props.text2 ?? "−1,2 p.p."}</span>
      <div style={{
        position: "absolute",
        left: 166,
        top: 22,
        width: 120,
        height: 18,
        borderRadius: 3,
        backgroundColor: "var(--color-data-negative)",
      }} />
      <span style={{
        position: "absolute",
        left: 12,
        top: 56,
        width: 82,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>{props.text3 ?? "Retenção"}</span>
      <span style={{
        position: "absolute",
        left: 98,
        top: 56,
        width: 76,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-data-negative)",
      }}>{props.text4 ?? "−0,7 p.p."}</span>
      <div style={{
        position: "absolute",
        left: 214,
        top: 54,
        width: 72,
        height: 18,
        borderRadius: 3,
        backgroundColor: "var(--color-data-negative)",
      }} />
      <span style={{
        position: "absolute",
        left: 12,
        top: 88,
        width: 82,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>Chat</span>
      <span style={{
        position: "absolute",
        left: 98,
        top: 88,
        width: 76,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-data-positive)",
      }}>+0,5 p.p.</span>
      <div style={{
        position: "absolute",
        left: 287,
        top: 86,
        width: 52,
        height: 18,
        borderRadius: 3,
        backgroundColor: "var(--color-data-positive)",
      }} />
      <span style={{
        position: "absolute",
        left: 12,
        top: 120,
        width: 82,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>Pós</span>
      <span style={{
        position: "absolute",
        left: 98,
        top: 120,
        width: 76,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-data-positive)",
      }}>+0,3 p.p.</span>
      <div style={{
        position: "absolute",
        left: 287,
        top: 118,
        width: 34,
        height: 18,
        borderRadius: 3,
        backgroundColor: "var(--color-data-positive)",
      }} />
      <span style={{
        position: "absolute",
        left: 12,
        top: 152,
        width: 82,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>Outros</span>
      <span style={{
        position: "absolute",
        left: 98,
        top: 152,
        width: 76,
        height: 18,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-data-negative)",
      }}>−0,2 p.p.</span>
      <div style={{
        position: "absolute",
        left: 262,
        top: 150,
        width: 24,
        height: 18,
        borderRadius: 3,
        backgroundColor: "var(--color-data-negative)",
      }} />
      <span style={{
        position: "absolute",
        left: 142,
        top: 186,
        width: 326,
        height: 16,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "100%",
        color: "var(--color-text-muted)",
      }}>Impacto                                    0                              Ganho</span>
    </div>
  );
  const __impls = {
    // figma: Mode=Composition
    "mode=composition": __body0,
    // figma: Mode=Deviation
    "mode=deviation": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DataContributionPlot;
