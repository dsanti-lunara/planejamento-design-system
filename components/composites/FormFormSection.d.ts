import * as React from 'react';
export interface FormFormSectionProps {
  className?: string;
  style?: React.CSSProperties;
  contentSlot?: React.ReactNode;
  title?: string;
  showAction?: boolean;
  description?: string;
  showDivider?: boolean;
  showDescription?: boolean;
}
export declare const FormFormSection: React.FC<FormFormSectionProps>;
export default FormFormSection;
