import * as React from 'react';
export interface ProductResourceLinkRowProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  state?: "default" | "disabled";
  showTrailingAction?: boolean;
  description?: string;
  external?: boolean;
  showLeadingIcon?: boolean;
  showDescription?: boolean;
  /** Row click handler — ignored while `state` is "disabled". */
  onClick?: (e: React.SyntheticEvent) => void;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const ProductResourceLinkRow: React.FC<ProductResourceLinkRowProps>;
export default ProductResourceLinkRow;
