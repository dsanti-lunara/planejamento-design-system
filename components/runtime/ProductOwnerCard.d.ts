import * as React from 'react';
export interface ProductOwnerCardProps {
  className?: string;
  style?: React.CSSProperties;
  role?: string;
  name?: string;
  showAvatar?: boolean;
  /** Avatar initials; derived from `name` when omitted. */
  initials?: string;
  showSecondaryInfo?: boolean;
  secondaryInfo?: string;
  showContactAction?: boolean;
  onContact?: (e: React.SyntheticEvent) => void;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const ProductOwnerCard: React.FC<ProductOwnerCardProps>;
export default ProductOwnerCard;
