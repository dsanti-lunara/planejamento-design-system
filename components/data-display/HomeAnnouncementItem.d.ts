import * as React from 'react';
export interface HomeAnnouncementItemProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  title?: string;
  type?: "info" | "warning" | "maintenance" | "release" | "important";
  cTA?: React.ReactNode;
  showCTA?: boolean;
  description?: string;
  showDate?: boolean;
  date?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const HomeAnnouncementItem: React.FC<HomeAnnouncementItemProps>;
export default HomeAnnouncementItem;
