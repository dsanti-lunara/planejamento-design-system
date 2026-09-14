import * as React from 'react';
export interface InputCheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "unchecked" | "checked" | "indeterminate" | "disabled unchecked" | "disabled checked" | "error";
  showLabel?: boolean;
  /** Text content; defaults to "✓". */
  text1?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: (checked: boolean) => void;
}
export declare const InputCheckbox: React.FC<InputCheckboxProps>;
export default InputCheckbox;
