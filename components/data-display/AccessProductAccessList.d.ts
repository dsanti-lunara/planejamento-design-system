import * as React from 'react';
export interface AccessProductAccessListProps {
  className?: string;
  style?: React.CSSProperties;
  overflow?: string;
  size?: "sm" | "md";
  showOverflow?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const AccessProductAccessList: React.FC<AccessProductAccessListProps>;
export default AccessProductAccessList;
