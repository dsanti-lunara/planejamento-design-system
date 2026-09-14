import * as React from 'react';
export interface NavigationHelpPanelProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  description?: string;
  icon?: boolean;
  visible?: boolean;
  /** Text content; defaults to "Abertura externa". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const NavigationHelpPanel: React.FC<NavigationHelpPanelProps>;
export default NavigationHelpPanel;
