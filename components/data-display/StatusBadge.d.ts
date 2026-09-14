import * as React from 'react';
export interface StatusBadgeProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  tone?: "positive" | "negative" | "warning" | "info" | "neutral";
}
export declare const StatusBadge: React.FC<StatusBadgeProps>;
export default StatusBadge;
