import * as React from 'react';
export interface InputTextProps {
  className?: string;
  style?: React.CSSProperties;
  leadingIcon?: boolean;
  label?: string;
  size?: "compact" | "default";
  trailingAction?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  showHelperText?: boolean;
  value?: string;
  state?: "default" | "hover" | "focus" | "filled" | "disabled" | "error" | "success";
  showLabel?: boolean;
  helperText?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export declare const InputText: React.FC<InputTextProps>;
export default InputText;
