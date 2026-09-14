import * as React from 'react';
export interface NavigationSidebarItemProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  label?: string;
  state?: "default" | "hover" | "active" | "expanded" | "disabled";
  nested?: boolean;
  badge?: string;
  showChevron?: boolean;
  showBadge?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const NavigationSidebarItem: React.FC<NavigationSidebarItemProps>;
export default NavigationSidebarItem;
