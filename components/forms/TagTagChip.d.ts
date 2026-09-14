import * as React from 'react';
export interface TagTagChipProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "default" | "hover" | "selected" | "disabled";
  /** Renders a real × button when provided. */
  onRemove?: () => void;
}
export declare const TagTagChip: React.FC<TagTagChipProps>;
export default TagTagChip;
