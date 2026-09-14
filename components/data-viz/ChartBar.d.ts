import * as React from 'react';

export interface BarChartSeries {
  /** Legend label. */
  name?: string;
  /** Values aligned to `categories`. `null`/`undefined` renders as absent (skipped) for that category. */
  data: (number | null | undefined)[];
  tone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral';
  /** Raw CSS colour override, takes priority over `tone`. */
  color?: string;
  /** `mode="diverging"` only — tone/colour/legend-label for values ≥ 0. Default success/"Sobra". */
  positiveTone?: string;
  positiveColor?: string;
  positiveLabel?: string;
  /** `mode="diverging"` only — tone/colour/legend-label for values < 0. Default critical/"Déficit". */
  negativeTone?: string;
  negativeColor?: string;
  negativeLabel?: string;
}

/**
 * Categorical comparison chart. Layout math (`d3.scaleBand`/`d3.scaleLinear`/`d3.stack`) comes
 * from D3 — requires the D3 CDN script on the page (see prompt.md). Every pixel drawn is plain
 * inline SVG using design tokens, same as `<AreaChart>`/`<DonutChart>`.
 */
export interface BarChartProps {
  categories: string[];
  series: BarChartSeries[];
  /** `vertical` (columns, category axis along the bottom) or `horizontal` (rows, category axis on
   *  the left — best for ranked lists like "top filas by backlog"). Default 'vertical'. */
  orientation?: 'vertical' | 'horizontal';
  /** `grouped` (series side-by-side per category), `stacked` (series summed per category), or
   *  `diverging` (a single signed series — bars grow from zero toward positive/negative, each
   *  bar coloured by its own sign; see `BarChartSeries.positiveTone`/`negativeTone`).
   *  `grouped`/`stacked` ignore anything but the first series' sign (they assume non-negative
   *  values); use `diverging` for a signed metric like "saldo de horário" or a contribution/
   *  desvio breakdown. Works in both orientations — vertical rises above/hangs below a zero
   *  baseline, horizontal extends right/left of a vertical zero line (e.g. a ranked
   *  "contribuição para o desvio" chart). Default 'grouped'. */
  mode?: 'grouped' | 'stacked' | 'diverging';
  /** Plot extent along the value axis, in px — vertical: chart height. Default 220. */
  height?: number;
  /** Per-category row thickness in px — horizontal orientation only (total height = categories.length × rowHeight). Default 34. */
  rowHeight?: number;
  /** Number of gridline intervals on the value axis. Default 4. */
  valueTicks?: number;
  /** Format a value-axis tick / value label. Default: pt-BR grouped integer. */
  valueFormat?: (value: number) => string;
  /** Print each bar's value at its end. Only applies to grouped (non-stacked) charts, to avoid
   *  clutter on stacked segments. Default false. */
  showValue?: boolean;
  /** Render a legend row above the chart from each series' `name`. Default false. */
  legend?: boolean;
  /** Hover highlight + a dark tooltip chip (category label + every series' value, plus a "Total"
   *  row when stacked). Hovering anywhere in a category's column/row shows all its series at
   *  once, mirroring `<AreaChart>`'s hover behaviour. Default true. */
  tooltip?: boolean;
  /** Corner rounding on each bar's outward-facing end (the stack's outermost segment only, when stacked). Default 3. */
  barRadius?: number;
  /** Horizontal orientation, non-diverging only — overlays a dashed cumulative-% Pareto line (its
   *  own 0–100% scale) across the given category order, using the first series' values. Pass
   *  categories already sorted descending for a true Pareto read. Default false. */
  paretoLine?: boolean;
  /** Show only every Nth category label — avoids crowded/overlapping labels on a dense axis (e.g.
   *  144 ten-minute intervals). Vertical orientation only. Default 1 (all labels). */
  labelEvery?: number;
  style?: React.CSSProperties;
}

export function ChartBar(props: BarChartProps): JSX.Element;
export default ChartBar;
