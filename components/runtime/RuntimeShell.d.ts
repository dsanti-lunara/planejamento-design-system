import * as React from 'react';
export interface RuntimeShellProps {
  className?: string;
  style?: React.CSSProperties;
  header?: boolean;
  banner?: boolean;
  runtimeContent?: string;
  /** Runtime content rendered below the header/banner chrome. */
  children?: React.ReactNode;
}
export declare const RuntimeShell: React.FC<RuntimeShellProps>;
export default RuntimeShell;
