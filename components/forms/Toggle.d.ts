import * as React from 'react';
export interface ToggleProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "off" | "on" | "disabled";
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}
export declare const Toggle: React.FC<ToggleProps>;
export default Toggle;
