import * as React from 'react';
export interface FieldProps {
  className?: string;
  style?: React.CSSProperties;
  selectionCount?: string;
  value?: string;
  type?: "select" | "date" | "search";
  showSelectionCount?: boolean;
  label?: string;
  state?: "default" | "disabled" | "filled" | "open" | "focus" | "hover" | "error" | "loading" | "no results";
  trailingIcon?: React.ReactNode;
  showTrailingIcon?: boolean;
  /** Text content; defaults to "Todos". */
  text1?: string;
  /** Text content; defaults to "✓". */
  text2?: string;
  /** Text content; defaults to "Claro Móvel – Controle N1". */
  text3?: string;
  /** Text content; defaults to "Pós-pago". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  options?: string[];
  placeholder?: string;
  onChange?: (value: string) => void;
}
export declare const Field: React.FC<FieldProps>;
export default Field;
