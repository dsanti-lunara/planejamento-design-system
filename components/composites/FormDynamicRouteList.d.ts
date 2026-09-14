import * as React from 'react';
export interface DynamicRoute {
  id: string;
  name: string;
  path: string;
}
export interface FormDynamicRouteListProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  description?: string;
  showTitle?: boolean;
  routes: DynamicRoute[];
  onChange: (routes: DynamicRoute[]) => void;
  /** Force all row errors visible (e.g. after a failed save attempt), instead of only after blur. */
  showErrors?: boolean;
  onValidityChange?: (isValid: boolean) => void;
  disabled?: boolean;
}
export declare const FormDynamicRouteList: React.FC<FormDynamicRouteListProps>;
export declare function emptyRoute(): DynamicRoute;
export declare function validateRoutes(routes: DynamicRoute[]): Record<string, { name?: string; path?: string }>;
export default FormDynamicRouteList;
