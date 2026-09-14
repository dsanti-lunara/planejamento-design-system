import * as React from 'react';
export interface DataStatCardProps {
  className?: string;
  style?: React.CSSProperties;
  showSparkline?: boolean;
  title?: string;
  state?: "default" | "hover" | "focus" | "loading" | "no data" | "error" | "not comparable";
  showIcon?: boolean;
  context?: string;
  unit?: string;
  value?: string;
  tone?: "neutral" | "favorable" | "unfavorable";
  delta?: string;
  iconAsset?: React.ReactNode;
  reference?: string;
  /** Text content; defaults to "Sem dados". */
  text1?: string;
  /** Text content; defaults to "Ajuste os filtros". */
  text2?: string;
}
export declare const DataStatCard: React.FC<DataStatCardProps>;
export default DataStatCard;
