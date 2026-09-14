import * as React from 'react';
export interface NavigationTabGroupItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}
export interface NavigationTabGroupProps {
  className?: string;
  style?: React.CSSProperties;
  /** Defaults to the Recebidas/Atendidas/NS/TMO/HC demo set. */
  tabs?: NavigationTabGroupItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
}
export declare const NavigationTabGroup: React.FC<NavigationTabGroupProps>;
export default NavigationTabGroup;
