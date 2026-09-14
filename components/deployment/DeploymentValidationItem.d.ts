import * as React from 'react';
export interface DeploymentValidationItemProps {
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  state?: "success" | "warning" | "error" | "pending" | "running";
  description?: string;
  descriptionVisible?: boolean;
  /** Text content; defaults to "✓". */
  text1?: string;
}
export declare const DeploymentValidationItem: React.FC<DeploymentValidationItemProps>;
export default DeploymentValidationItem;
