import * as React from 'react';
export interface IntelligenceCorrelationRow {
  label: string;
  r: string;
  direction: string;
  strength: string;
  tone: "positive" | "negative";
}
export interface IntelligenceCorrelationPanelProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  colLabel?: string;
  colR?: string;
  colDirection?: string;
  colStrength?: string;
  rows?: IntelligenceCorrelationRow[];
}
export declare const IntelligenceCorrelationPanel: React.FC<IntelligenceCorrelationPanelProps>;
export default IntelligenceCorrelationPanel;
