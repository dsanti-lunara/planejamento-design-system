import { Button } from "../actions/Button.jsx";

// figma node: 7375:8286 Admin/Summary KPI Card — compacted from a fixed 280x150
// (much dead space) to a content-driven ~112px card; icon is now optional and
// contextual (no more mandatory IconNavHome on every KPI), and the secondary/
// trend line takes a `secondaryTone` instead of being hardcoded positive-green
// for any value.
const TONE_COLOR = {
  positive: "var(--color-text-positive)",
  warning: "var(--color-text-warning)",
  info: "var(--color-text-link)",
  negative: "var(--color-text-negative)",
  neutral: "var(--color-text-secondary)",
};

export function AdminSummaryKPICard(_p = {}) {
  const props = { ..._p, showAction: _p.showAction ?? false, label: _p.label ?? "Usuários ativos", showTrend: _p.showTrend ?? true, value: _p.value ?? "128", showSecondary: _p.showSecondary ?? true, secondary: _p.secondary ?? "↑ 12% vs. mês anterior", secondaryTone: _p.secondaryTone ?? "neutral", showIcon: _p.showIcon ?? !!_p.icon };
  return (
    <div className={props.className} style={{
      width: "100%",
      minWidth: 0,
      height: "auto",
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "14px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        width: "100%",
        minWidth: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: 13,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexGrow: 1,
          minWidth: 0,
        }}>{props.label}</span>
        {props.showIcon && props.icon && (
        <div style={{ position: "relative", width: 16, height: 16, flexShrink: 0, color: "var(--color-text-muted)" }}>{props.icon}</div>
        )}
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 26,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.value}</span>
      {props.showTrend && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        width: "100%",
        minWidth: 0,
      }}>
        {props.showSecondary && (
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "100%",
          color: TONE_COLOR[props.secondaryTone] ?? TONE_COLOR.neutral,
          flexGrow: 1,
          minWidth: 0,
        }}>{props.secondary}</span>
        )}
        {props.showAction && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Button label={"Ver"} size={"default"} style2={"secondary"} state={"default"} />}</div>
        )}
      </div>
      )}
    </div>
  );
}
export default AdminSummaryKPICard;
