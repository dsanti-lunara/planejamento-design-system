import * as React from 'react';
export interface InputTimeProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "empty" | "filled" | "focus" | "disabled" | "error";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export declare const InputTime: React.FC<InputTimeProps>;
export default InputTime;
