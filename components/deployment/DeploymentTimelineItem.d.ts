import * as React from 'react';
export interface DeploymentTimelineItemProps {
  className?: string;
  style?: React.CSSProperties;
  connector?: boolean;
  title?: string;
  state?: "completed" | "current" | "upcoming" | "failed" | "waiting";
  progressCTA?: boolean;
  description?: string;
  descriptionVisible?: boolean;
  timestamp?: string;
  /** Text content; defaults to "✓". */
  text1?: string;
  /** Text content; defaults to "60% concluído  ·  Ver detalhes". */
  text2?: string;
  onProgressClick?: () => void;
}
export declare const DeploymentTimelineItem: React.FC<DeploymentTimelineItemProps>;
export default DeploymentTimelineItem;
