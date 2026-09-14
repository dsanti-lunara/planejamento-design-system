import * as React from 'react';
export interface StateFullPageProps {
  className?: string;
  style?: React.CSSProperties;
  technicalInfo?: string;
  secondaryAction?: boolean;
  /** Called when the primary action button is clicked. */
  onPrimaryAction?: () => void;
  /** Called when the secondary action button is clicked. */
  onSecondaryAction?: () => void;
  technicalInfoVisible?: boolean;
  title?: string;
  type?: "forbidden" | "not found" | "error" | "restricted" | "archived" | "maintenance";
  description?: string;
  supportingInfo?: string;
  supportingInfoVisible?: boolean;
  eyebrowVisible?: boolean;
  code?: string;
  eyebrow?: string;
  primaryAction?: boolean;
  codeVisible?: boolean;
  /** Overrides the type's default primary button label. */
  primaryActionLabel?: string;
  /** Overrides the type's default secondary button label. */
  secondaryActionLabel?: string;
  /** When set, renders a "Ver detalhes técnicos" toggle above the technical info line for every type. */
  onToggleTechnicalInfo?: () => void;
  /** Overrides the toggle's collapsed-state label; defaults to "Ver detalhes técnicos". */
  technicalInfoToggleLabel?: string;
}
export declare const StateFullPage: React.FC<StateFullPageProps>;
export default StateFullPage;
