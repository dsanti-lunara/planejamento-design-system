import * as React from 'react';
export interface ActionIconButtonSecondaryProps {
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
export declare const ActionIconButtonSecondary: React.FC<ActionIconButtonSecondaryProps>;
export default ActionIconButtonSecondary;
