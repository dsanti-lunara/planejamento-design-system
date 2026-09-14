import * as React from 'react';
export interface AdminSummaryKPICardProps {
  className?: string;
  style?: React.CSSProperties;
  showAction?: boolean;
  label?: string;
  /** Shows the icon slot; defaults to true only when `icon` is provided — no mandatory fallback icon. */
  showIcon?: boolean;
  icon?: React.ReactNode;
  showTrend?: boolean;
  value?: string;
  showSecondary?: boolean;
  secondary?: string;
  /** Tone of the secondary/trend text. Default "neutral". */
  secondaryTone?: "positive" | "warning" | "info" | "negative" | "neutral";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const AdminSummaryKPICard: React.FC<AdminSummaryKPICardProps>;
export default AdminSummaryKPICard;
