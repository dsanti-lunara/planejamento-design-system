import * as React from 'react';
export interface ChartHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  action?: string;
  showAction?: boolean;
}
export declare const ChartHeader: React.FC<ChartHeaderProps>;
export default ChartHeader;
