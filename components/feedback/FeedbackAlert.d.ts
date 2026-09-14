import * as React from 'react';
export interface FeedbackAlertProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  presentation?: "alert" | "callout";
  dismiss?: boolean;
  description?: string;
  tone?: "info" | "success" | "warning" | "error";
  action?: boolean;
  showTitle?: boolean;
  /** Controlled visibility — omit to let the alert manage its own (starts open, self-hides on dismiss). */
  open?: boolean;
  /** Called when the close button is clicked. */
  onDismiss?: () => void;
  /** Text content; defaults to "i". */
  text1?: string;
}
export declare const FeedbackAlert: React.FC<FeedbackAlertProps>;
export default FeedbackAlert;
