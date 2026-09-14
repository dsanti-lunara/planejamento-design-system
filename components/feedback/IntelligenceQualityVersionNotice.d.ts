import * as React from 'react';
export interface IntelligenceQualityVersionNoticeProps {
  className?: string;
  style?: React.CSSProperties;
  tone?: "info" | "warning" | "blocked";
  /** Text content; defaults to "ⓘ". */
  text1?: string;
  /** Text content; defaults to "Versão Vigente aplicada". */
  text2?: string;
  /** Text content; defaults to "Dados reconciliados e comparáveis.". */
  text3?: string;
}
export declare const IntelligenceQualityVersionNotice: React.FC<IntelligenceQualityVersionNoticeProps>;
export default IntelligenceQualityVersionNotice;
