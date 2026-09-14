import * as React from 'react';
export interface InputPasswordProps {
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
  visibility?: "hidden" | "visible";
  /** Text content; defaults to "Senha". */
  text1?: string;
  /** Text content; defaults to "Digite sua senha". */
  text2?: string;
  /** Text content; defaults to "Texto auxiliar". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onToggleVisibility?: (visibility: "hidden" | "visible") => void;
}
export declare const InputPassword: React.FC<InputPasswordProps>;
export default InputPassword;
