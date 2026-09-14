import * as React from 'react';
export interface InputMultiSelectProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "empty" | "filled" | "open" | "disabled" | "error";
  value?: string[];
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  options?: string[];
  onChange?: (value: string[]) => void;
}
export declare const InputMultiSelect: React.FC<InputMultiSelectProps>;
export default InputMultiSelect;
