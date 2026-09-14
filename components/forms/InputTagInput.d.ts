import * as React from 'react';
export interface InputTagInputProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "empty" | "typing" | "filled" | "overflow" | "disabled" | "error";
  value?: string;
  /** @deprecated unused — use `tags` instead. */
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  tags?: string[];
  placeholder?: string;
  maxLength?: number;
  /** Helper/error text shown when state="error" is forced externally. */
  helperText?: string;
  onChange?: (tags: string[]) => void;
}
export declare const InputTagInput: React.FC<InputTagInputProps>;
export default InputTagInput;
