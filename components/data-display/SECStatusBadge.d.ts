import * as React from 'react';
export interface SECStatusBadgeProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "neutral" | "active" | "positive" | "attention" | "negative";
  /** Text content; defaults to "Neutro". */
  text1?: string;
}
export declare const SECStatusBadge: React.FC<SECStatusBadgeProps>;
export default SECStatusBadge;
