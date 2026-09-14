import * as React from 'react';
export interface AccessPermissionChipProps {
  className?: string;
  style?: React.CSSProperties;
  /** Permission label shown in the chip. Default "Visualizar". */
  label?: string;
  state?: "default" | "hover" | "selected" | "disabled";
  removable?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const AccessPermissionChip: React.FC<AccessPermissionChipProps>;
export default AccessPermissionChip;
