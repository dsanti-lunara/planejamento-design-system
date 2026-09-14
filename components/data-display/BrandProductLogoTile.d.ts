import * as React from 'react';
export interface BrandProductLogoTileProps {
  className?: string;
  style?: React.CSSProperties;
  fallback?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "rounded" | "square";
  background?: "subtle" | "brand";
  /** Text content; defaults to "NX". */
  text1?: string;
}
export declare const BrandProductLogoTile: React.FC<BrandProductLogoTileProps>;
export default BrandProductLogoTile;
