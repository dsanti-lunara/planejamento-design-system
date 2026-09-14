import * as React from 'react';
export interface NavigationBreadcrumbItemSpec {
  label?: string;
  /** Leading icon node (typically only on the first crumb). */
  icon?: React.ReactNode;
  /** Marks this crumb as the current page (non-clickable). Defaults to the last item. */
  current?: boolean;
  onClick?: () => void;
}
export interface NavigationBreadcrumbProps {
  className?: string;
  style?: React.CSSProperties;
  /** Content-driven trail. When provided it replaces the `path` variants entirely: crumbs wrap, the last one renders as current, the others are clickable. */
  items?: NavigationBreadcrumbItemSpec[];
  showOverflowMenu?: boolean;
  path?: "short" | "long" | "overflow";
  /** Text content; defaults to "•••". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const NavigationBreadcrumb: React.FC<NavigationBreadcrumbProps>;
export default NavigationBreadcrumb;
