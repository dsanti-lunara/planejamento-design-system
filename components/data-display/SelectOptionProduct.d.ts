import * as React from 'react';
export interface SelectOptionProductProps {
  className?: string;
  style?: React.CSSProperties;
  primary?: string;
  state?: "default" | "selected" | "disabled";
  showCategory?: boolean;
  productLogo?: React.ReactNode;
  showLogo?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const SelectOptionProduct: React.FC<SelectOptionProductProps>;
export default SelectOptionProduct;
