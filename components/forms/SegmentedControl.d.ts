import * as React from 'react';
export interface SegmentedControlProps {
  className?: string;
  style?: React.CSSProperties;
  active?: "dia" | "período";
  state?: "default" | "focus" | "disabled";
  /** Text content; defaults to "Modo Dia". */
  text1?: string;
  /** Text content; defaults to "Modo Período". */
  text2?: string;
  onChange?: (value: "dia" | "período") => void;
}
export declare const SegmentedControl: React.FC<SegmentedControlProps>;
export default SegmentedControl;
