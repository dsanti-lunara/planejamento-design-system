import * as React from 'react';
export interface TabItemProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  /** Roving tabindex, set by NavigationTabGroup (0 for the active tab, -1 otherwise). */
  tabIndex?: number;
  /** Docs-only visual override ("hover" | "focus") — real interaction drives this normally. */
  state?: "hover" | "focus";
}
export declare const TabItem: React.FC<TabItemProps>;
export default TabItem;
