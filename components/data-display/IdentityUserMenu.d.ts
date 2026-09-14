import * as React from 'react';
export interface IdentityUserMenuProps {
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  state?: "closed" | "open";
  role?: string;
  /** Text content; defaults to "⌄". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const IdentityUserMenu: React.FC<IdentityUserMenuProps>;
export default IdentityUserMenu;
