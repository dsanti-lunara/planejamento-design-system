import * as React from 'react';
export interface NavSidebarItem {
  label?: string;
  section?: string;
  icon?: React.ReactNode;
  active?: boolean;
  /** Called (in addition to the built-in active-state highlight) when this item is clicked. */
  onClick?: () => void;
  /** On a `{ section }` entry only: draws a subtle divider above the group label, for a section that starts a new area of the nav (e.g. "ADMINISTRAÇÃO" after the catalog groups) rather than another peer group. */
  divider?: boolean;
}
export interface NavSidebarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Narrows to a 72px icon rail. Default false (288px expanded). */
  collapsed?: boolean;
  /** True when the sidebar is embedded inside a host portal shell (hides the Claro logo — shows the product name/mark only — and hides "Voltar ao Portal"). Default false (standalone). */
  embedded?: boolean;
  /** Overrides the default nav item list. Use `{ section }` entries as group headers. */
  items?: NavSidebarItem[];
  /** Shows the "Voltar ao Portal" footer link. Default `!embedded`. */
  showBackToPortal?: boolean;
  /** Draws the component's own rounded border/inset shadow. Default true. Turn off when composing NavSidebar as the top segment of a taller host panel (help panel, user menu below it) that already supplies its own outer border — leaving both on doubles the border and makes the sidebar look like stacked fragments instead of one panel. */
  bordered?: boolean;
  /** Shows the "UTILITÁRIOS" section (Qualidade e Versões / Glossário e Regras / Investigações Salvas) above the footer. Default true. Turn off for contexts (e.g. a portal/catalog home) that don't use those utility links, to keep the sidebar's height in check. */
  showUtility?: boolean;
  /** Header product name shown next to/instead of the logo. Default "Planejamento Analytics". */
  productName?: string;
  /** Overrides the default Claro brand mark (NavBrand) in the header — pass a product's own lockup (e.g. the NEXO wordmark) when this sidebar represents that product. Also suppresses the built-in "Planejamento Analytics" caption span. */
  logo?: React.ReactNode;
  /** Called when the collapse/expand footer action is clicked. */
  onToggleCollapsed?: () => void;
  /** Shows the AeC partner mark just above "Recolher navegação" in the footer. Default true. */
  showPartnerLogo?: boolean;
  /** Overrides the AeC partner mark's file path (default `../../assets/logos/aec-white.svg`, correct for pages two levels below the project root). */
  partnerLogoSrc?: string;
  /** Replaces the AeC partner mark node entirely. */
  partnerLogo?: React.ReactNode;
}
export declare const NavSidebar: React.FC<NavSidebarProps>;
export default NavSidebar;
