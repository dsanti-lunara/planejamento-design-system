import * as React from 'react';

/**
 * Inline mini trend chart — no axes/labels, just a line (+ optional fill)
 * and an end-point dot. Drop into a `<StatCard>`/`<Card>` to show a KPI's
 * recent trend at a glance.
 */
export interface SparklineProps {
  /** Series of numeric values, oldest first. */
  data: number[];
  /** Fixed pixel width, or `"100%"` to fill the parent (e.g. a full-bleed `<StatCard spark>` strip). */
  width?: number | '100%';
  height?: number;
  tone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral';
  /** Fill the area under the line with a fading tint (default true). Automatically suppressed
   *  when `diffFill` is on (the diff bands replace it). */
  area?: boolean;
  strokeWidth?: number;
  /** Smooth (Catmull-Rom) curve instead of straight segments. Default true. */
  smooth?: boolean;
  /** Optional second series on the same scale (e.g. "necessidade") — renders as a thin dashed
   *  reference line behind the main one. Must be the same length as `data`. */
  reference?: number[] | null;
  referenceTone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral';
  /** Shades the gap between `data` and `reference` by sign — green where `data` ≥ `reference`
   *  (sobra), red where it's below (déficit). Requires `reference`. Default false. */
  diffFill?: boolean;
  positiveTone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral';
  negativeTone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral';
  style?: React.CSSProperties;
}

export function ChartSparkline(props: SparklineProps): JSX.Element | null;
export default ChartSparkline;
