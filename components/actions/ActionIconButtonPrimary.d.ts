import * as React from 'react';
export interface ActionIconButtonPrimaryProps {
  className?: string;
  style?: React.CSSProperties;
  badge?: boolean;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  state?: "default" | "hover" | "pressed" | "focus" | "disabled";
  /** Real click handler — ignored while `state` is "disabled". */
  onClick?: (e: React.SyntheticEvent) => void;
  /** Marks the button as toggled on (aria-pressed) for icon-toggle use cases. */
  pressed?: boolean;
}
export declare const ActionIconButtonPrimary: React.FC<ActionIconButtonPrimaryProps>;
export default ActionIconButtonPrimary;
