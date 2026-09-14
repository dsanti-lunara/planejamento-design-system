import * as React from 'react';
export interface DynamicRoute {
  id: string;
  name: string;
  path: string;
}
export interface FormDynamicRouteRowProps {
  className?: string;
  style?: React.CSSProperties;
  route: DynamicRoute;
  onNameChange?: (value: string) => void;
  onPathChange?: (value: string) => void;
  onNameBlur?: () => void;
  onPathBlur?: () => void;
  onRemove?: () => void;
  nameError?: string;
  pathError?: string;
  showRemove?: boolean;
  disabled?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const FormDynamicRouteRow: React.FC<FormDynamicRouteRowProps>;
export default FormDynamicRouteRow;
