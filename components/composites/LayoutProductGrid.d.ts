import * as React from 'react';
export interface LayoutProductGridProps {
  className?: string;
  style?: React.CSSProperties;
  /** ProductCard (or similar) instances to lay out in the grid. */
  children?: React.ReactNode;
}
export declare const LayoutProductGrid: React.FC<LayoutProductGridProps>;
export default LayoutProductGrid;
