import * as React from 'react';
export interface SelectOptionUserProps {
  className?: string;
  style?: React.CSSProperties;
  primary?: string;
  state?: "default" | "selected" | "disabled";
  secondary?: string;
  showAvatar?: boolean;
  showSecondary?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const SelectOptionUser: React.FC<SelectOptionUserProps>;
export default SelectOptionUser;
