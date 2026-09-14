// Improved: the fill bar was hardcoded to 192px regardless of `value` — now computed as a real percentage of the track width from a numeric `value` (accepts "60%", "60", or 0.6).
function __pctOf(value) {
  if (typeof value === 'number') return value <= 1 ? value * 100 : value;
  const n = parseFloat(String(value).replace(',', '.'));
  return isFinite(n) ? n : 60;
}
// figma node: 7241:7397 Feedback/Linear Progress (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size);

export function FeedbackLinearProgress(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Publicação", state: _p.state ?? "normal", showLabel: _p.showLabel ?? true, size: _p.size ?? "sm", value: _p.value ?? "60%", percentage: _p.percentage ?? true };
  const fillPct = Math.max(0, Math.min(100, __pctOf(props.value)));
  const fillWidth = fillPct + "%";
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 42,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
      )}
      <div style={{
        position: "relative",
        height: 4,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: fillWidth,
          height: 4,
          borderRadius: 4,
          backgroundColor: "var(--color-action-primary)",
        }} />
      </div>
      {props.percentage && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.value}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 42,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
      )}
      <div style={{
        position: "relative",
        height: 8,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: fillWidth,
          height: 8,
          borderRadius: 4,
          backgroundColor: "var(--color-action-primary)",
        }} />
      </div>
      {props.percentage && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.value}</span>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 42,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
      )}
      <div style={{
        position: "relative",
        height: 4,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: fillWidth,
          height: 4,
          borderRadius: 4,
          backgroundColor: "var(--color-data-positive)",
        }} />
      </div>
      {props.percentage && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.value}</span>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 42,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
      )}
      <div style={{
        position: "relative",
        height: 8,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: fillWidth,
          height: 8,
          borderRadius: 4,
          backgroundColor: "var(--color-data-positive)",
        }} />
      </div>
      {props.percentage && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.value}</span>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 42,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
      )}
      <div style={{
        position: "relative",
        height: 4,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: fillWidth,
          height: 4,
          borderRadius: 4,
          backgroundColor: "var(--color-data-attention)",
        }} />
      </div>
      {props.percentage && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.value}</span>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 42,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
      )}
      <div style={{
        position: "relative",
        height: 8,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: fillWidth,
          height: 8,
          borderRadius: 4,
          backgroundColor: "var(--color-data-attention)",
        }} />
      </div>
      {props.percentage && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.value}</span>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 42,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
      )}
      <div style={{
        position: "relative",
        height: 4,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: fillWidth,
          height: 4,
          borderRadius: 4,
          backgroundColor: "var(--color-data-negative)",
        }} />
      </div>
      {props.percentage && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.value}</span>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 42,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.label}</span>
      )}
      <div style={{
        position: "relative",
        height: 8,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "var(--color-surface-subtle)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: fillWidth,
          height: 8,
          borderRadius: 4,
          backgroundColor: "var(--color-data-negative)",
        }} />
      </div>
      {props.percentage && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.value}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: State=Normal, Size=Small
    "state=normal|size=sm": __body0,
    // figma: State=Normal, Size=Medium
    "state=normal|size=md": __body1,
    // figma: State=Success, Size=Small
    "state=success|size=sm": __body2,
    // figma: State=Success, Size=Medium
    "state=success|size=md": __body3,
    // figma: State=Warning, Size=Small
    "state=warning|size=sm": __body4,
    // figma: State=Warning, Size=Medium
    "state=warning|size=md": __body5,
    // figma: State=Error, Size=Small
    "state=error|size=sm": __body6,
    // figma: State=Error, Size=Medium
    "state=error|size=md": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default FeedbackLinearProgress;
