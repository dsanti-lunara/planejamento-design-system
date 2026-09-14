import * as React from 'react';
export interface ChartLegendItemProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  series?: "1" | "2" | "3" | "4" | "5";
  percentageVisible?: boolean;
  value?: string;
  valueVisible?: boolean;
  percentage?: string;
}
export declare const ChartLegendItem: React.FC<ChartLegendItemProps>;
export default ChartLegendItem;
