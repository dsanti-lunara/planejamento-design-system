import * as React from 'react';
export interface NavigationPageContextProps {
  className?: string;
  style?: React.CSSProperties;
  breadcrumb1?: string;
  pageDescription?: string;
  breadcrumb2?: string;
  pageTitle?: string;
  breadcrumbCurrent?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const NavigationPageContext: React.FC<NavigationPageContextProps>;
export default NavigationPageContext;
