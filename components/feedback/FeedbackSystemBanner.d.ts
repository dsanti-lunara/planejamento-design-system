import * as React from 'react';
export interface FeedbackSystemBannerProps {
  className?: string;
  style?: React.CSSProperties;
  message?: string;
  tone?: "info" | "warning" | "error" | "maintenance" | "deprecated" | "success";
  cTA?: string;
  dismiss?: boolean;
  /** Controlled visibility — omit to let the banner manage its own (starts open, self-hides on dismiss). */
  open?: boolean;
  /** Called when the close button is clicked. */
  onDismiss?: () => void;
  /** Called when the CTA text is clicked. */
  onCtaClick?: () => void;
  /** Text content; defaults to "×". */
  text1?: string;
}
export declare const FeedbackSystemBanner: React.FC<FeedbackSystemBannerProps>;
export default FeedbackSystemBanner;
