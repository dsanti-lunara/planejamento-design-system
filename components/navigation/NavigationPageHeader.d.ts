import * as React from 'react';
export interface NavigationPageHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Intraday & Intrahora". */
  text1?: string;
  /** Text content; defaults to "Como os indicadores se comportam ao longo do dia e onde ocorreram os principais desvios?". */
  text2?: string;
  /** Text content; defaults to "Atualizado às 08:42 (D-1)". */
  text3?: string;
}
export declare const NavigationPageHeader: React.FC<NavigationPageHeaderProps>;
export default NavigationPageHeader;
