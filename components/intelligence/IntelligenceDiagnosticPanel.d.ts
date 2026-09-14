import * as React from 'react';
export interface IntelligenceDiagnosticItem {
  icon: string;
  severity: "Crítico" | "Alto" | "Atenção" | string;
  title: string;
  description: string;
}
export interface IntelligenceDiagnosticPanelProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  detailLabel?: string;
  items?: IntelligenceDiagnosticItem[];
  onDetailClick?: (item: IntelligenceDiagnosticItem, index: number) => void;
}
export declare const IntelligenceDiagnosticPanel: React.FC<IntelligenceDiagnosticPanelProps>;
export default IntelligenceDiagnosticPanel;
