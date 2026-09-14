import * as React from 'react';
export interface DeploymentEnvironmentStateCardProps {
  className?: string;
  style?: React.CSSProperties;
  environment?: string;
  state?: "deployed" | "deploying" | "waiting" | "failed" | "not-deployed" | "rollback";
  version?: string;
  authorCTA?: boolean;
  timestamp?: string;
  /** Text content; defaults to "✓  Deployed". */
  text1?: string;
  /** Text content; defaults to "Ana Ferreira  ·  Ver detalhes". */
  text2?: string;
  onViewDetails?: () => void;
}
export declare const DeploymentEnvironmentStateCard: React.FC<DeploymentEnvironmentStateCardProps>;
export default DeploymentEnvironmentStateCard;
