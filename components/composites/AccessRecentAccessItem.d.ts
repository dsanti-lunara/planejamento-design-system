import * as React from 'react';
export interface AccessRecentAccessItemProps {
  className?: string;
  style?: React.CSSProperties;
  showStatus?: boolean;
  userName?: string;
  showAvatar?: boolean;
  showSecondary?: boolean;
  secondary?: string;
  dateTime?: string;
  product?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const AccessRecentAccessItem: React.FC<AccessRecentAccessItemProps>;
export default AccessRecentAccessItem;
