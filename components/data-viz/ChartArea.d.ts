import * as React from 'react';

export interface AreaChartSeries {
  /** Legend label (only shown if `legend` is on, or the consumer builds its own legend). */
  name?: string;
  /** Values aligned to `categories`. `null`/`undefined` renders as a gap (e.g. a series that
   *  only has data up to "now"). */
  data: (number | null | undefined)[];
  tone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral';
  /** Dashed stroke (e.g. a plan/projection series, OR a flat target/reference line — pair with
   *  `fill: false` and a value repeated across every category, see `refLines` for its label). Default false (solid). */
  dashed?: boolean;
  /** Gradient fill under the line. Default true — set false for an unfilled overlay line
   *  (e.g. the dashed "plano" series while the solid "real" series carries the fill). */
  fill?: boolean;
  strokeWidth?: number;
}

/**
 * Trend-over-time chart WITH axes — gridlines, numeric y ticks, category x ticks — and one or
 * more series. Use instead of `<Sparkline>` once the number needs a scale to be read correctly
 * (a plan-vs-actual comparison, a full-day volume curve), not just a glance-trend.
 */
export interface AreaChartProps {
  series: AreaChartSeries[];
  /** X-axis category labels (e.g. hours), same length as each series' `data`. */
  categories: string[];
  /** Plot height in px (width is always responsive/100%). Default 220. */
  height?: number;
  /** Number of gridline intervals (yTicks+1 labels, from `yMin` to `yMax`/a "nice" rounded max). Default 4. */
  yTicks?: number;
  /** Axis floor. Default 0. Set a non-zero floor to "zoom in" on a tight-band series (e.g. an SLA
   *  chart that only ever moves between 60–100%) — same idea a real dashboard uses, just opt-in
   *  per chart since it can mislead if the reader expects a 0 baseline. */
  yMin?: number;
  /** Explicit axis ceiling. Default null — auto-computed from the data via a "nice" rounded max.
   *  Set alongside `yMin` when you need exact round-number ticks (e.g. `yMin={60} yMax={100}`). */
  yMax?: number;
  /** Format a y-axis tick value. Default: pt-BR grouped integer. */
  yFormat?: (value: number) => string;
  /** Show only every Nth category label (avoids crowding on dense axes, e.g. hourly data). Default 1 (all). */
  xLabelEvery?: number;
  /** Render a built-in legend row above the chart from each series' `name`. Default false — omit
   *  and build your own if the legend needs to live elsewhere (e.g. inline in a `<Card>` header). */
  legend?: boolean;
  /** Hover crosshair + a dark tooltip chip (category label + each series' value at that point).
   *  Disabled automatically when there's only one category (nothing to scrub across). Default true. */
  tooltip?: boolean;
  /** Category index to mark as "now" — a vertical dashed line + a small pill (`nowLabel`) at the
   *  top, e.g. an intraday chart's current-time marker. Default null (off). */
  nowIndex?: number;
  /** Label shown in the `nowIndex` pill, e.g. `"08:42"`. */
  nowLabel?: string;
  /** Category index to draw a plain "before/after" divider — a dashed line (no pill), with two
   *  small labels via `splitLabels`. For one chart that narrates two states side by side (e.g.
   *  today's schedule left of the divider, a proposed schedule to the right) instead of two
   *  separate charts. Independent of `nowIndex` — both may be set at once. Default null (off). */
  splitIndex?: number;
  /** `[beforeLabel, afterLabel]` shown left/right of the `splitIndex` line, e.g. `['Antes',
   *  'Depois']`. The divider still draws without this — only the labels are skipped. */
  splitLabels?: [string, string];
  /** Horizontal target/reference lines — draws only a small floating value label at the right
   *  edge, positioned by value on the same `yMin`/`yMax` scale (e.g. `{ value: 90, label: 'Meta
   *  (90%)' }`). The line itself is just a flat series you pass in `series` (`dashed`, `fill:
   *  false`) — this only adds the label so it doesn't have to be hand-positioned. */
  refLines?: { value: number; label?: string }[];
  /** Smooth (Catmull-Rom) curve through every point instead of straight polyline segments.
   *  Default false (evolution guide §8.3) — a straight line reads as precise/operational. Set
   *  true only for an aggregated trend with many points, where the curve reads as pattern rather
   *  than misleading precision between real samples. */
  smooth?: boolean;
  /** Shades the region between two series by sign — green where the second ≥ the first
   *  (sobra/surplus), red where it's below (déficit). Pass `[indexA, indexB]` into `series`
   *  (typically `[reference/plan, actual/result]`) — or an array of such pairs (`[[a,b],[c,d]]`)
   *  to diff several (often null-gapped) series against the same reference in one chart, e.g. an
   *  "antes" series covering the first half of the categories and a "depois" series covering the
   *  second half, both diffed against one continuous forecast line (pairs with `splitIndex`).
   *  Default null (off). */
  bandBetween?: [number, number] | [number, number][] | null;
  /** Tones for the `bandBetween` fill. Default `{ positive: 'success', negative: 'critical' }`. */
  bandTones?: { positive?: string; negative?: string };
  /** Opacity of the `bandBetween` fill. Default 0.16. */
  bandOpacity?: number;
  /** Event annotations — vertical markers for things that explain the data but aren't part of a
   *  series (an incident, a scale/capacity change, a training session, another operational
   *  event). A thin dashed line + a small tone-coloured dot above the plot; hover shows `label`.
   *  Default `[]`. */
  annotations?: { index: number; type: 'incident' | 'scaleChange' | 'training' | 'operational'; label: string }[];
  /** Shaded vertical range(s) marking a fixed period as noteworthy \u2014 a historical "critical
   *  window", a maintenance blackout, business hours \u2014 distinct from `bandBetween` (shades
   *  between two SERIES by sign) and `annotations` (single-point markers): this shades a fixed
   *  x-range on its own, with an optional pill label above it (e.g. "07:00 - 09:00"). `from`/`to`
   *  are category indices (inclusive). Default `[]` (off). */
  xBands?: { from: number; to: number; label?: string; tone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral' }[];
  style?: React.CSSProperties;
}

export function ChartArea(props: AreaChartProps): JSX.Element;
export default ChartArea;
