import * as React from 'react';
export interface NavigationNavItemProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "default" | "hover" | "active" | "disabled" | "focus";
  showIcon?: boolean;
  iconAsset?: React.ReactNode;
  showLabel?: boolean;
}
export declare const NavigationNavItem: React.FC<NavigationNavItemProps>;
export default NavigationNavItem;
