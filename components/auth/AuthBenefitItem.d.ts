import * as React from 'react';
export interface AuthBenefitItemProps {
  className?: string;
  style?: React.CSSProperties;
  /** Picks the default icon + accent; ignored when `icon` is passed. */
  variant?: "access" | "insights" | "security";
  title?: string;
  description?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon?: React.ReactNode;
}
export declare const AuthBenefitItem: React.FC<AuthBenefitItemProps>;
export default AuthBenefitItem;
