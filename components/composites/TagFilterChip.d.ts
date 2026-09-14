import * as React from 'react';
export interface TagFilterChipProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  value?: string;
  removeAction?: boolean;
  /** Text content; defaults to "×". */
  text1?: string;
}
export declare const TagFilterChip: React.FC<TagFilterChipProps>;
export default TagFilterChip;
