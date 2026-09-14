import * as React from 'react';
export interface FormSlugFieldProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "editable" | "readonly" | "error";
  prefix?: string;
  prefix2?: boolean;
  showCopy?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
}
export declare const FormSlugField: React.FC<FormSlugFieldProps>;
export default FormSlugField;
