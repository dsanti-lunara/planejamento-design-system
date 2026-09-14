import * as React from 'react';
export interface HealthStatusCardProps {
  className?: string;
  style?: React.CSSProperties;
  actionVisible?: boolean;
  productLogoVisible?: boolean;
  productLogo?: React.ReactNode;
  metric2Value?: string;
  name?: string;
  state?: "healthy" | "attention" | "critical" | "unavailable";
  metric3Label?: string;
  metric3Value?: string;
  lastChecked?: string;
  metric2Label?: string;
  description?: string;
  metric1Value?: string;
  descriptionVisible?: boolean;
  metric1Label?: string;
  /** Text content; defaults to "✓". */
  text1?: string;
  /** Text content; defaults to "Saudável". */
  text2?: string;
  /** Text content; defaults to "Ver detalhes". */
  text3?: string;
}
export declare const HealthStatusCard: React.FC<HealthStatusCardProps>;
export default HealthStatusCard;
