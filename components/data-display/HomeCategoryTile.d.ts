import * as React from 'react';
export interface HomeCategoryTileProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  label?: string;
  state?: "default" | "hover" | "focus";
  showCount?: boolean;
  description?: string;
  showDescription?: boolean;
  count?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const HomeCategoryTile: React.FC<HomeCategoryTileProps>;
export default HomeCategoryTile;
