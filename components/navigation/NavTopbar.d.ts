import * as React from 'react';
export interface NavTopbarProps {
  className?: string;
  style?: React.CSSProperties;
  /** "portal" (breadcrumb-led) or "admin" (search-led, optional environment selector). */
  variant?: "portal" | "admin";
  /** Portal only. Default true. */
  breadcrumb?: boolean;
  search?: boolean;
  /** Fires when the search bar is clicked — wire to open NavigationCommandPalette. */
  onSearchClick?: () => void;
  notifications?: boolean;
  /** Admin only. Default false. */
  environmentSelector?: boolean;
  /** Admin only. Default false. */
  primaryAction?: boolean;
  user?: { name?: string; role?: string };
}
export declare const NavTopbar: React.FC<NavTopbarProps>;
export default NavTopbar;
