import * as React from 'react';
export interface DataContributionChartProps {
  className?: string;
  style?: React.CSSProperties;
  action?: string;
  mode?: "composition" | "deviation";
  showSelector?: boolean;
  state?: "default" | "loading" | "empty" | "error" | "partial" | "restricted" | "no comparable plan";
  /** Text content; defaults to "Composição do realizado por dimensão". */
  text1?: string;
  /** Text content; defaults to "Realizado • 100% por linha • Segmento". */
  text2?: string;
  /** Text content; defaults to "Controle". */
  text3?: string;
  /** Text content; defaults to "Pré". */
  text4?: string;
}
export declare const DataContributionChart: React.FC<DataContributionChartProps>;
export default DataContributionChart;
