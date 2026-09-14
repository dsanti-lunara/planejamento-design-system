import * as React from 'react';
export interface AccessGroupCardProps {
  className?: string;
  style?: React.CSSProperties;
  showPermissions?: boolean;
  name?: string;
  state?: "default" | "hover";
  showOverflow?: boolean;
  showProducts?: boolean;
  memberCount?: string;
  showDescription?: boolean;
  description?: string;
  /** Text content; defaults to "Produtos". */
  text1?: string;
  /** Text content; defaults to "Permissões principais". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const AccessGroupCard: React.FC<AccessGroupCardProps>;
export default AccessGroupCard;
