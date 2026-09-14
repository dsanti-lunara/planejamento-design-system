import * as React from 'react';
export interface PaginationItemProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "current" | "default" | "disabled";
  onClick?: () => void;
}
export declare const PaginationItem: React.FC<PaginationItemProps>;
export default PaginationItem;
