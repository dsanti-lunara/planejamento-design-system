// figma node: 6649:46 Data/Chart Legend Item (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function DataChartLegendItem(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Série", type: _p.type ?? "actual" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 80,
      minWidth: 80,
      minHeight: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--color-data-actual)",
      ...props.style,
    }}>
      <svg width={20} height={2} viewBox="0 -1 20 2" fill="none" style={{
        position: "relative",
        width: 20,
        height: 2,
        flexShrink: 0,
      }}>
        <path d={"M 0 -1 L 0 0 L 20 0 L 20 -1 L 20 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
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
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 80,
      minWidth: 80,
      minHeight: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={2} viewBox="0 -1 20 2" fill="none" style={{
        position: "relative",
        width: 20,
        height: 2,
        flexShrink: 0,
      }}>
        <path d={"M 0 -1 L 0 0 L 1.905 0 L 1.905 -1 L 1.905 -2 L 0 -2 L 0 -1 Z M 4.762 -1 L 4.762 0 L 8.571 0 L 8.571 -1 L 8.571 -2 L 4.762 -2 L 4.762 -1 Z M 11.429 -1 L 11.429 0 L 15.238 0 L 15.238 -1 L 15.238 -2 L 11.429 -2 L 11.429 -1 Z M 18.095 -1 L 18.095 0 L 20 0 L 20 -1 L 20 -2 L 18.095 -2 L 18.095 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
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
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 80,
      minWidth: 80,
      minHeight: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <svg width={20} height={2} viewBox="0 -1 20 2" fill="none" style={{
        position: "relative",
        width: 20,
        height: 2,
        flexShrink: 0,
      }}>
        <path d={"M 0 -1 L 0 0 L 1 0 L 1 -1 L 1 -2 L 0 -2 L 0 -1 Z M 4 -1 L 4 0 L 6 0 L 6 -1 L 6 -2 L 4 -2 L 4 -1 Z M 9 -1 L 9 0 L 11 0 L 11 -1 L 11 -2 L 9 -2 L 9 -1 Z M 14 -1 L 14 0 L 16 0 L 16 -1 L 16 -2 L 14 -2 L 14 -1 Z M 19 -1 L 19 0 L 20 0 L 20 -1 L 20 -2 L 19 -2 L 19 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
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
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 80,
      minWidth: 80,
      minHeight: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 18,
        height: 8,
        borderRadius: 2,
        backgroundColor: "var(--color-data-critical-band)",
        flexShrink: 0,
      }} />
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
      }}>{props.label}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 80,
      minWidth: 80,
      minHeight: 24,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "4px 4px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--color-data-attention)",
      ...props.style,
    }}>
      <svg width={20} height={2} viewBox="0 -1 20 2" fill="none" style={{
        position: "relative",
        width: 20,
        height: 2,
        flexShrink: 0,
      }}>
        <path d={"M 0 -1 L 0 0 L 20 0 L 20 -1 L 20 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
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
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Type=Actual
    "type=actual": __body0,
    // figma: Type=Plan
    "type=plan": __body1,
    // figma: Type=Comparison
    "type=comparison": __body2,
    // figma: Type=Critical
    "type=critical": __body3,
    // figma: Type=Target
    "type=target": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DataChartLegendItem;
