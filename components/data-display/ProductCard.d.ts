import * as React from 'react';
export interface ProductCardProps {
  className?: string;
  style?: React.CSSProperties;
  access?: React.ReactNode;
  favorite?: React.ReactNode;
  cTA?: React.ReactNode;
  showCategory?: boolean;
  name?: string;
  context?: "featured" | "catalog" | "compact";
  showTags?: boolean;
  showFavorite?: boolean;
  showCTA?: boolean;
  showAccess?: boolean;
  showSecondaryInfo?: boolean;
  description?: string;
  secondaryInfo?: string;
  productLogo?: React.ReactNode;
  showDescription?: boolean;
  showAction?: boolean;
  action?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const ProductCard: React.FC<ProductCardProps>;
export default ProductCard;
