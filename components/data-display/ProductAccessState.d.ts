import * as React from 'react';
export interface ProductAccessStateProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "restricted" | "archived";
  title?: string;
  description?: string;
  showStatus?: boolean;
  /** Overrides the access pill label. */
  statusLabel?: string;
  showAlert?: boolean;
  alertTitle?: string;
  alertDescription?: string;
  alertTone?: "info" | "success" | "warning" | "error";
  /** No request/approval CTA exists — when shown, this action must point to access rules/info, never to a request flow. */
  showAction?: boolean;
  actionLabel?: string;
  actionState?: "default" | "hover" | "disabled" | "focus" | "pressed" | "loading";
  onAction?: (e: React.SyntheticEvent) => void;
}
export declare const ProductAccessState: React.FC<ProductAccessStateProps>;
export default ProductAccessState;
