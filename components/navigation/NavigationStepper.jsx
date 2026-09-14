// figma node: 7240:7303 Navigation/Stepper (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function NavigationStepper(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Produto", state: _p.state ?? "completed", number: _p.number ?? "1", connector: _p.connector ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 14,
          backgroundColor: "var(--color-state-positive-subtle)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: 9,
            top: 5,
            width: 6,
            height: 15,
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
          }}>{props.number}</span>
        </div>
        {props.connector && (
        <div style={{
          position: "relative",
          width: 80,
          height: 2,
          backgroundColor: "var(--color-border-positive)",
          flexShrink: 0,
        }} />
        )}
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 14,
          backgroundColor: "var(--color-action-primary)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: 9,
            top: 5,
            width: 6,
            height: 15,
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-inverse)",
          }}>{props.number}</span>
        </div>
        {props.connector && (
        <div style={{
          position: "relative",
          width: 80,
          height: 2,
          backgroundColor: "var(--color-border-subtle)",
          flexShrink: 0,
        }} />
        )}
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 14,
          backgroundColor: "var(--color-surface-subtle)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: 9,
            top: 5,
            width: 6,
            height: 15,
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
          }}>{props.number}</span>
        </div>
        {props.connector && (
        <div style={{
          position: "relative",
          width: 80,
          height: 2,
          backgroundColor: "var(--color-border-subtle)",
          flexShrink: 0,
        }} />
        )}
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 28,
          height: 28,
          overflow: "hidden",
          borderRadius: 14,
          backgroundColor: "var(--color-state-negative-subtle)",
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: 9,
            top: 5,
            width: 6,
            height: 15,
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-negative)",
          }}>{props.number}</span>
        </div>
        {props.connector && (
        <div style={{
          position: "relative",
          width: 80,
          height: 2,
          backgroundColor: "var(--color-border-subtle)",
          flexShrink: 0,
        }} />
        )}
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-negative)",
        flexShrink: 0,
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: State=Completed
    "state=completed": __body0,
    // figma: State=Current
    "state=current": __body1,
    // figma: State=Upcoming
    "state=upcoming": __body2,
    // figma: State=Error
    "state=error": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default NavigationStepper;
