import * as React from 'react';
export interface DeploymentLogRowProps {
  className?: string;
  style?: React.CSSProperties;
  timestamp?: string;
  /** @deprecated use `state` instead — kept for backward compatibility. */
  level?: "info" | "success" | "warning" | "error";
  state?: "info" | "success" | "warning" | "error";
  origin?: string;
  message?: string;
  /** Text content; defaults to "INFO". */
  text1?: string;
}
export declare const DeploymentLogRow: React.FC<DeploymentLogRowProps>;
export default DeploymentLogRow;
