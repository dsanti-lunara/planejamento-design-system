import * as React from 'react';
export interface IconDataStateProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "empty" | "error" | "restricted" | "loading" | "partial" | "noplan";
}
export declare const IconDataState: React.FC<IconDataStateProps>;
export default IconDataState;
