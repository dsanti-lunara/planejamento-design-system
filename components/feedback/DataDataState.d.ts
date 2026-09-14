import * as React from 'react';
export interface DataDataStateProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "empty" | "noresults" | "error" | "restricted" | "loading" | "partial" | "noplan";
  /** Text content; defaults to "Sem dados no recorte". */
  text1?: string;
  /** Text content; defaults to "Revise o período, os filtros ou a disponibilidade da fonte.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const DataDataState: React.FC<DataDataStateProps>;
export default DataDataState;
