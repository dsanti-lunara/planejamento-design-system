import * as React from 'react';
export interface DateRangeValue {
  preset: 'today' | '24h' | '7d' | '30d' | 'custom';
  /** ISO date (yyyy-mm-dd), used only when `preset` is `'custom'`. */
  start?: string;
  /** ISO date (yyyy-mm-dd), used only when `preset` is `'custom'`. */
  end?: string;
}
export interface DateRangePickerProps {
  className?: string;
  style?: React.CSSProperties;
  value?: DateRangeValue;
  onChange?: (value: DateRangeValue) => void;
  /** Field label shown above the value. Default "Período". */
  label?: string;
}
export declare const DateRangePicker: React.FC<DateRangePickerProps>;
export default DateRangePicker;
