import * as React from 'react';
import type { NavSidebarItem } from '../navigation/NavSidebar';
export interface ShellPortalProps {
  className?: string;
  style?: React.CSSProperties;
  topbar?: boolean;
  sidebarState?: "expanded" | "collapsed";
  breadcrumb?: boolean;
  contentWidth?: "fluid" | "constrained";
  /** Makes the shell fill the viewport (100% × 100vh) instead of the fixed 1440×900 spec frame. Use for real pages. */
  fill?: boolean;
  /** Page content. When present it replaces the "MAIN CONTENT SLOT" placeholder. */
  children?: React.ReactNode;
  /** Replaces the default breadcrumb with a content-driven one. */
  breadcrumbSlot?: React.ReactNode;
  sidebarItems?: NavSidebarItem[];
  sidebarLogo?: React.ReactNode;
  onToggleSidebar?: () => void;
  showUtility?: boolean;
  showBackToPortal?: boolean;
  user?: { name?: string; role?: string };
}
export declare const ShellPortal: React.FC<ShellPortalProps>;
export default ShellPortal;
