import * as React from 'react';
export interface NavBrandProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "full" | "icon";
}
export declare const NavBrand: React.FC<NavBrandProps>;
export default NavBrand;
