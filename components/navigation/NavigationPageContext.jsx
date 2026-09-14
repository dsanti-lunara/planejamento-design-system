import { Button } from '../actions/Button.jsx';
import { IconChevronRight } from '../icons/IconChevronRight.jsx';
import { NavigationContextChip } from './NavigationContextChip.jsx';
import { NavigationTabGroup } from './NavigationTabGroup.jsx';

// figma node: 6728:129 Navigation/Page Context
export function NavigationPageContext(_p = {}) {
  const props = { ..._p, breadcrumb1: _p.breadcrumb1 ?? "Portal de Relatórios", pageDescription: _p.pageDescription ?? "Volume recebido, pressão da demanda e aderência ao plano.", breadcrumb2: _p.breadcrumb2 ?? "Demanda & Serviço", pageTitle: _p.pageTitle ?? "Recebidas", breadcrumbCurrent: _p.breadcrumbCurrent ?? "Recebidas" };
  return (
    <div className={props.className} style={{
      width: 1800,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-raised)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "24px 28px 24px 28px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 24,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.breadcrumb1}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconChevronRight />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.breadcrumb2}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <IconChevronRight />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 13,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-link)",
          flexShrink: 0,
        }}>{props.breadcrumbCurrent}</span>
      </div>
      <div style={{
        position: "relative",
        height: 72,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 24,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.pageTitle}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.pageDescription}</span>
        </div>
        <Button
          style={{
            position: "relative",
            height: 40,
            width: 98,
            flexShrink: 0,
          }}
          label={"Mais ações"}
          size={"default"}
          style2={"secondary"}
          state={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <NavigationContextChip
          style={{ position: "relative", height: 32, flexShrink: 0 }}
          label={"Período: 01–31 jul"}
          showStatus={false}
        />
        <NavigationContextChip
          style={{
            position: "relative",
            height: 32,
            width: 167,
            flexShrink: 0,
          }}
          label={"Operação: Controle N1"}
          showStatus={true}
        />
        <NavigationContextChip
          style={{
            position: "relative",
            height: 32,
            width: 93,
            flexShrink: 0,
          }}
          label={"Plano: Claro"}
          showStatus={false}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <NavigationTabGroup style={{
            position: "relative",
            width: 628,
            height: 45,
            flexShrink: 0,
          }} />
      </div>
    </div>
  );
}
export default NavigationPageContext;
