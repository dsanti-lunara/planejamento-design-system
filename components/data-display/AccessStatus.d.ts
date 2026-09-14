import * as React from 'react';
export interface AccessStatusProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "authorized" | "restricted" | "pending" | "archived" | "unavailable";
  /** Text content; defaults to "✓". */
  text1?: string;
}
export declare const AccessStatus: React.FC<AccessStatusProps>;
export default AccessStatus;
