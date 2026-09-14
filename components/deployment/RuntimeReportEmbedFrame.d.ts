import * as React from 'react';
export interface RuntimeReportEmbedFrameProps {
  className?: string;
  style?: React.CSSProperties;
  productContent?: string;
  state?: "loaded" | "loading" | "empty" | "error" | "maintenance" | "restricted";
  /** Text content; defaults to "Área do produto carregado". */
  text1?: string;
}
export declare const RuntimeReportEmbedFrame: React.FC<RuntimeReportEmbedFrameProps>;
export default RuntimeReportEmbedFrame;
