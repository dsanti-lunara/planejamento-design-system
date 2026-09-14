import * as React from 'react';
export interface FeedbackNotificationBellProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "active";
  count?: "none" | "numeric";
  /** Real click handler — e.g. open a notifications panel. */
  onClick?: (e: React.SyntheticEvent) => void;
  /** Text content; defaults to "♧". */
  text1?: string;
  /** Text content; defaults to "3". */
  text2?: string;
}
export declare const FeedbackNotificationBell: React.FC<FeedbackNotificationBellProps>;
export default FeedbackNotificationBell;
