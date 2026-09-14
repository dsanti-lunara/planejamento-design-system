import React from 'react';
import { NavBrand } from './NavBrand.jsx';
import { NavigationSidebarItem } from './NavigationSidebarItem.jsx';
import { NavigationSidebarSection } from './NavigationSidebarSection.jsx';
import { IconNavHome } from '../icons/IconNavHome.jsx';
import { IconNavIntraday } from '../icons/IconNavIntraday.jsx';
import { IconNavDemand } from '../icons/IconNavDemand.jsx';
import { IconNavCapacity } from '../icons/IconNavCapacity.jsx';
import { IconNavTimes } from '../icons/IconNavTimes.jsx';
import { IconNavStructure } from '../icons/IconNavStructure.jsx';
import { IconNavGovernance } from '../icons/IconNavGovernance.jsx';
import { IconNavGlossary } from '../icons/IconNavGlossary.jsx';
import { IconNavSaved } from '../icons/IconNavSaved.jsx';
import { IconNavPortal } from '../icons/IconNavPortal.jsx';
import { IconNavCollapse } from '../icons/IconNavCollapse.jsx';
import { IconChevronRight } from '../icons/IconChevronRight.jsx';

// figma node: 6685:127 Navigation/Sidebar (4 variants: Layout x Environment)
// Sourced from the Claro-branded "Planejamento Analytics" sidebar design —
// the canonical NavSidebar for this system. Replaces the earlier
// NEXO-portal/admin-branded sidebar (fictional variant, no Figma source);
// that structure is retired in favor of this one, per the real design.
// `logo` (added): swappable brand-mark slot — defaults to the Claro lockup
// (NavBrand) per the Figma source, but lets a host product (e.g. the NEXO
// portal home/catalog templates) supply its own mark instead. When a custom
// logo is passed, the sidebar's own "Planejamento Analytics" caption span is
// suppressed so the consumer's mark fully owns that header row.
const DEFAULT_ITEMS = [
  { section: "RESUMO" },
  { label: "Visão Geral", icon: <IconNavHome />, active: true },
  { section: "OPERAÇÃO" },
  { label: "Intraday e Intrahora", icon: <IconNavIntraday /> },
  { label: "Demanda e Serviço", icon: <IconNavDemand /> },
  { label: "Capacidade e HC", icon: <IconNavCapacity /> },
  { label: "Produtividade e Tempos", icon: <IconNavTimes /> },
  { section: "ANÁLISE" },
  { label: "Análise Estrutural", icon: <IconNavStructure /> },
  { section: "FUTURO" },
  { label: "Análise Estrutural", icon: <IconNavStructure /> },
  { section: "RESULTADO" },
  { label: "Análise Estrutural", icon: <IconNavStructure /> },
  { section: "PLANEJAMENTO" },
  { label: "Análise Estrutural", icon: <IconNavStructure /> },
];

const UTILITY_ITEMS = [
  { label: "Qualidade e Versões", icon: <IconNavGovernance /> },
  { label: "Glossário e Regras", icon: <IconNavGlossary /> },
  { label: "Investigações Salvas", icon: <IconNavSaved /> },
];

export function NavSidebar(_p = {}) {
  const props = {
    ..._p,
    collapsed: _p.collapsed ?? false,
    embedded: _p.embedded ?? false,
    showBackToPortal: _p.showBackToPortal ?? !_p.embedded,
    showUtility: _p.showUtility ?? true,
    productName: _p.productName ?? "Planejamento Analytics",
    bordered: _p.bordered ?? true,
    showPartnerLogo: _p.showPartnerLogo ?? true,
  };
  const collapsed = props.collapsed;
  const embedded = props.embedded;
  const items = props.items ?? DEFAULT_ITEMS;

  const [activeLabel, setActiveLabel] = React.useState(() => (items.find(i => i.active) || {}).label);
  const propActiveLabel = (items.find(i => i.active) || {}).label;
  React.useEffect(() => { if (propActiveLabel !== undefined) setActiveLabel(propActiveLabel); }, [propActiveLabel]);

  return (
    <div className={props.className} style={{
      width: collapsed ? 72 : 222,
      overflow: "hidden",
      borderRadius: props.bordered ? "0px 12px 12px 0px" : 0,
      backgroundColor: "var(--color-surface-sidebar)",
      boxShadow: props.bordered ? "inset 0 0 0 1px var(--color-border-subtle)" : "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      height: "100%",
      maxHeight: "100%",
      boxSizing: "border-box",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: !collapsed && !embedded ? 52 : 44,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "0px 16px",
        justifyContent: collapsed ? "center" : "flex-start",
        alignItems: "center",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {embedded ? (
          <span style={{
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: collapsed ? 600 : 500,
            fontSize: collapsed ? 13 : 12,
            whiteSpace: "nowrap",
            lineHeight: collapsed ? "18px" : "16px",
            color: collapsed ? "var(--color-action-primary)" : "var(--color-text-muted)",
          }}>{collapsed ? "PA" : props.productName}</span>
        ) : (
          <>
            {props.logo ?? <NavBrand variant={collapsed ? "icon" : "full"} style={{ flexShrink: 0, width: collapsed ? 32 : 68, height: collapsed ? 11 : 24 }} />}
            {!collapsed && !props.logo && (
              <span style={{
                fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "16px",
                color: "var(--color-text-muted)",
                whiteSpace: "pre-line",
              }}>{"Planejamento\nAnalytics"}</span>
            )}
          </>
        )}
      </div>
      <div style={{
        position: "relative",
        overflowY: "auto",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: collapsed ? 4 : 2,
        padding: collapsed ? "14px 12px 0px" : "18px 12px 0px",
        alignItems: "flex-start",
        boxSizing: "border-box",
        flexGrow: 1,
        flexShrink: 1,
        minHeight: 0,
        alignSelf: "stretch",
      }}>
        {items.map((item, i) => item.section ? (
          collapsed ? (
            <div key={i} style={{ height: item.divider ? 9 : 8, flexShrink: 0, alignSelf: "stretch", display: "flex", alignItems: "center" }}>
              {item.divider && <div style={{ height: 1, backgroundColor: "var(--color-border-subtle)", flexGrow: 1 }} />}
            </div>
          ) : (
            <div key={i} style={{ flexShrink: 0, alignSelf: "stretch", marginTop: i === 0 ? 0 : (item.divider ? 12 : 14) }}>
              {item.divider && <div style={{ height: 1, backgroundColor: "var(--color-border-subtle)", margin: "0 4px 10px" }} />}
              <NavigationSidebarSection style={{ height: 26, flexShrink: 0, alignSelf: "stretch", width: "auto", opacity: 0.75 }} label={item.section} />
            </div>
          )
        ) : (
          <div key={i} onClick={() => { setActiveLabel(item.label); item.onClick && item.onClick(); }} style={{ flexShrink: 0, alignSelf: "stretch", cursor: "pointer" }}>
            <NavigationSidebarItem
              style={activeLabel === item.label ? { height: 40, width: "auto", backgroundColor: "color-mix(in srgb, var(--color-surface-selected) 38%, var(--color-surface-sidebar))" } : { height: 40, width: "auto" }}
              label={collapsed ? "" : item.label}
              icon={item.icon}
              state={activeLabel === item.label ? "active" : "default"}
            />
          </div>
        ))}
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexShrink: 0,
        height: 8,
        alignSelf: "stretch",
      }} />
      {props.showUtility && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "0px 12px",
        alignItems: "flex-start",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{ height: 1, backgroundColor: "color-mix(in srgb, var(--color-border-subtle) 65%, transparent)", flexShrink: 0, alignSelf: "stretch", margin: "0 4px 8px" }} />
        {!collapsed && (
          <span style={{
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--color-text-muted)",
            opacity: 0.75,
            padding: "0 4px 4px",
          }}>UTILITÁRIOS</span>
        )}
        {UTILITY_ITEMS.map((item, i) => (
          <div key={i} style={{ flexShrink: 0, alignSelf: "stretch" }}>
            <NavigationSidebarItem style={{ height: 40, width: "auto" }} label={collapsed ? "" : item.label} icon={item.icon} />
          </div>
        ))}
      </div>
      )}
      <div style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "0px 12px 8px",
        marginTop: "auto",
        alignItems: "flex-start",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showPartnerLogo && (
        <div style={{ flexShrink: 0, alignSelf: "stretch", display: "flex", alignItems: "center", justifyContent: collapsed ? "center" : "flex-start", padding: collapsed ? "10px 0 12px" : "14px 4px 12px 16px", boxSizing: "border-box", pointerEvents: "none" }}>
          {props.partnerLogo ?? <img src={props.partnerLogoSrc ?? "../../assets/logos/aec-white.svg"} alt="AeC" style={{ display: "block", height: collapsed ? 12 : 15, width: "auto", objectFit: "contain", opacity: 0.85, filter: "var(--partner-logo-filter, none)" }} />}
        </div>
        )}
        <div style={{ height: 1, backgroundColor: "color-mix(in srgb, var(--color-border-subtle) 65%, transparent)", flexShrink: 0, alignSelf: "stretch", margin: "0 4px 8px" }} />
        {props.showBackToPortal && (
          <div style={{ flexShrink: 0, alignSelf: "stretch", opacity: 0.82 }}>
            <NavigationSidebarItem style={{ height: 40, width: "auto" }} label={collapsed ? "" : "Voltar ao Portal"} icon={<IconNavPortal />} />
          </div>
        )}
        <div onClick={props.onToggleCollapsed} style={{ flexShrink: 0, alignSelf: "stretch", cursor: props.onToggleCollapsed ? "pointer" : "default", opacity: 0.82 }}>
          <NavigationSidebarItem
            style={{ height: 40, width: "auto" }}
            label={collapsed ? "" : "Recolher navegação"}
            icon={collapsed ? <IconChevronRight /> : <IconNavCollapse />}
          />
        </div>
      </div>
    </div>
  );
}
export default NavSidebar;
