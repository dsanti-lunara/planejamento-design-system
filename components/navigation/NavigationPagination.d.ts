import * as React from 'react';
export interface NavigationPaginationProps {
  className?: string;
  style?: React.CSSProperties;
  page?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}
/** New — real paginator (prev/next arrows + numbered pages with ellipsis) built on PaginationItem. */
export declare const NavigationPagination: React.FC<NavigationPaginationProps>;
export default NavigationPagination;
