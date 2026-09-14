import * as React from 'react';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  size?: "compact" | "default";
  trailingIcon?: React.ReactNode;
  showLeadingIcon?: boolean;
  style2?: "primary" | "secondary" | "tertiary" | "destructive" | "ai";
  showTrailingIcon?: boolean;
  leadingIcon?: React.ReactNode;
  state?: "default" | "hover" | "disabled" | "focus" | "pressed" | "loading";
  /** HTML button type — set "submit" to trigger an enclosing form's onSubmit on click. */
  type?: "button" | "submit";
  /** Real click handler — ignored while `state` is "disabled" or "loading". */
  onClick?: (e: React.SyntheticEvent) => void;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
