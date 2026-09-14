import * as React from 'react';
export interface RuntimeHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  productName?: string;
  productContext?: boolean;
  auxiliaryAction?: boolean;
  /** Text content; defaults to "nexo". */
  text1?: string;
  /** Text content; defaults to "←  Retornar ao Portal". */
  text2?: string;
  /** Text content; defaults to "Ajuda". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const RuntimeHeader: React.FC<RuntimeHeaderProps>;
export default RuntimeHeader;
