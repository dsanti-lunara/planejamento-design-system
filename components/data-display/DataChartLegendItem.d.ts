import * as React from 'react';
export interface DataChartLegendItemProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  type?: "actual" | "plan" | "comparison" | "critical" | "target";
}
export declare const DataChartLegendItem: React.FC<DataChartLegendItemProps>;
export default DataChartLegendItem;
