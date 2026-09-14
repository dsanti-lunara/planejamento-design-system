import * as React from 'react';
import type { DateRangeValue } from '../forms/DateRangePicker.d.ts';
export interface NavigationContextBarProps {
  className?: string;
  style?: React.CSSProperties;
  period?: DateRangeValue;
  onPeriodChange?: (value: DateRangeValue) => void;
}
export declare const NavigationContextBar: React.FC<NavigationContextBarProps>;
export default NavigationContextBar;
