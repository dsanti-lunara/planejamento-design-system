import * as React from 'react';
export interface NavigationStepperProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "completed" | "current" | "upcoming" | "error";
  number?: string;
  connector?: boolean;
}
export declare const NavigationStepper: React.FC<NavigationStepperProps>;
export default NavigationStepper;
