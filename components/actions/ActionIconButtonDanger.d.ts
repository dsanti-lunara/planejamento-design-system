import * as React from 'react';
export interface ActionIconButtonDangerProps {
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
export declare const ActionIconButtonDanger: React.FC<ActionIconButtonDangerProps>;
export default ActionIconButtonDanger;
