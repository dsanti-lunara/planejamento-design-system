import * as React from 'react';
export interface DataContributionPlotProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "composition" | "deviation";
  /** Text content; defaults to "CG". */
  text1?: string;
  /** Text content; defaults to "SP". */
  text2?: string;
  /** Text content; defaults to "BH". */
  text3?: string;
  /** Text content; defaults to "Outros". */
  text4?: string;
}
export declare const DataContributionPlot: React.FC<DataContributionPlotProps>;
export default DataContributionPlot;
