import * as React from 'react';
export interface FeedbackLinearProgressProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "normal" | "success" | "warning" | "error";
  showLabel?: boolean;
  size?: "sm" | "md";
  /** Fill amount — accepts "60%", "60", or 0.6 (0-1 range). The fill bar now actually scales with this instead of a fixed pixel width. */
  value?: string | number;
  percentage?: boolean;
}
export declare const FeedbackLinearProgress: React.FC<FeedbackLinearProgressProps>;
export default FeedbackLinearProgress;
