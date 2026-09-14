import * as React from 'react';
export interface AuthSplitScreenProps {
  className?: string;
  style?: React.CSSProperties;
  /** Right panel content (the actual form). */
  children?: React.ReactNode;
  /** Left panel brand mark; defaults to the Nexo lockup. */
  logo?: React.ReactNode;
  productName?: string;
  /** First (plain) line of the headline. */
  title?: string;
  /** Second, brand-colored line of the headline. */
  highlight?: string;
  description?: string;
  /** AuthBenefitItem instances (or any nodes) for the marketing list. */
  benefits?: React.ReactNode;
  /** Mini chart collage on the left panel. */
  showDecoration?: boolean;
  /** Partner-logo row on the left panel; defaults to the AeC mark. */
  footer?: React.ReactNode;
  /** Bottom-right slot of the right panel (language selector, legal links). */
  rightPanelFooter?: React.ReactNode;
}
export declare const AuthSplitScreen: React.FC<AuthSplitScreenProps>;
export default AuthSplitScreen;
