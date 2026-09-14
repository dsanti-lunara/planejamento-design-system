import * as React from 'react';

export interface DateRangeValue {
  preset: 'today' | '24h' | '7d' | '30d' | 'custom';
  /** ISO date (yyyy-mm-dd), used only when `preset` is `'custom'`. */
  start?: string;
  /** ISO date (yyyy-mm-dd), used only when `preset` is `'custom'`. */
  end?: string;
}

/**
 * Period filter — a button that opens a preset list (Hoje / Últimas 24h /
 * 7 dias / 30 dias) plus a custom start–end date pair. Used to scope logs,
 * execuções and health charts to a time window.
 */
export interface DateRangePickerProps {
  value: DateRangeValue;
  onChange?: (value: DateRangeValue) => void;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export function DateRangePicker(props: DateRangePickerProps): JSX.Element;
