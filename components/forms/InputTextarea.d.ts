import * as React from 'react';
export interface InputTextareaProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "empty" | "filled" | "focus" | "disabled" | "error";
  value?: string;
  counter?: boolean;
  /** Text content; defaults to "0/500". */
  text1?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}
export declare const InputTextarea: React.FC<InputTextareaProps>;
export default InputTextarea;
