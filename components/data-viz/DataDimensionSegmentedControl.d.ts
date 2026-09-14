import * as React from 'react';
export interface DataDimensionSegmentedControlProps {
  className?: string;
  style?: React.CSSProperties;
  active?: "todos" | "operação" | "segmento" | "site" | "turno";
  /** Text content; defaults to "Todos". */
  text1?: string;
  /** Text content; defaults to "Operação". */
  text2?: string;
  /** Text content; defaults to "Segmento". */
  text3?: string;
  /** Text content; defaults to "Site". */
  text4?: string;
}
export declare const DataDimensionSegmentedControl: React.FC<DataDimensionSegmentedControlProps>;
export default DataDimensionSegmentedControl;
