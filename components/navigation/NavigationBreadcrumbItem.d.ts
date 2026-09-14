import * as React from 'react';
export interface NavigationBreadcrumbItemProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "default" | "hover" | "current";
  showIcon?: boolean;
  icon?: React.ReactNode;
}
export declare const NavigationBreadcrumbItem: React.FC<NavigationBreadcrumbItemProps>;
export default NavigationBreadcrumbItem;
