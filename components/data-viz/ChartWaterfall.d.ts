import * as React from 'react';

export interface WaterfallItem {
  /** Wraps onto multiple lines automatically for a multi-word category name — no truncation. */
  label: string;
  /** For a total item: the absolute value. For a delta item: the signed change from the running
   *  total (positive rises, negative falls). */
  value: number;
  /** Marks this item as a fixed anchor (rendered full-height from 0, in `totalColor`) rather than
   *  a floating delta bar — the same "set as total" semantics Power BI's waterfall uses. The
   *  first and last items are almost always totals (e.g. "NS Forecast" / "NS Real"), but a total
   *  can also sit mid-sequence as a subtotal/checkpoint — it re-anchors the running value there
   *  and the deltas that follow build from it, not from the very first total. */
  isTotal?: boolean;
  /** Custom icon chip for this bar's hover `<ChartDetailCard>`. Default: an up/down arrow. */
  icon?: React.ReactNode;
  /** One-sentence explanation shown as a "Descrição" row in the hover card. Omit to skip the row. */
  description?: string;
  /** URL for a "Ver mais →" link row in the hover card. Omit to skip the row. */
  detailHref?: string;
}

/**
 * WaterfallChart — a bridge/waterfall chart: fixed "total" bars connected by floating,
 * pill-shaped delta bars that step a running value up or down, with a dashed line tracing the
 * accumulated effect through every step. Reach for it when a handful of named factors explain the
 * gap between a starting and ending total (an "esteira" impact breakdown), not a category
 * comparison (`BarChart`) or a trend over time (`AreaChart`).
 *
 * Hovering a bar shows a `<ChartDetailCard>` breakdown — see that component to reuse the same
 * rich hover card on another chart.
 *
 * Plain inline SVG + CSS, no chart library — portable enough to reimplement in a non-React host
 * (Power BI custom visual, Power Apps canvas component, plain web dashboard) from the same
 * `items` contract; only the `var(--nh-*)` tokens need remapping to that host's palette.
 */
export interface WaterfallChartProps {
  items: WaterfallItem[];
  /** Plot height in px. Default 260. */
  height?: number;
  /** Number of gridline intervals on the value axis. Default 5. */
  valueTicks?: number;
  /** Format a value-axis tick / total bar's value label. Default: pt-BR one-decimal percentage
   *  ("86,6%"). */
  valueFormat?: (value: number) => string;
  /** Format a delta bar's value label (shown next to the direction arrow). Default: signed
   *  `valueFormat` ("+4,2%" / "-7,2%"). */
  deltaFormat?: (value: number) => string;
  /** Rotated caption beside the value axis (e.g. "NS (%)"). Default none. */
  yAxisLabel?: string;
  /** Fill for total (anchor) bars. Default `var(--color-data-actual)` (brand blue). */
  totalColor?: string;
  /** Tone for positive delta bars. Default 'success'. */
  increaseTone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral';
  /** Tone for negative delta bars. Default 'critical'. */
  decreaseTone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral';
  /** Raw CSS colour override for positive delta bars, takes priority over `increaseTone`. */
  increaseColor?: string;
  /** Raw CSS colour override for negative delta bars, takes priority over `decreaseTone`. */
  decreaseColor?: string;
  /** Legend label for total bars. Default "Total inicial / final". */
  totalLabel?: string;
  /** Legend label for positive deltas. Default "Ganho (positivo)". */
  increaseLabel?: string;
  /** Legend label for negative deltas. Default "Impacto negativo". */
  decreaseLabel?: string;
  /** Hover-card badge text for a positive delta. Default "Positivo". */
  positiveBadgeLabel?: string;
  /** Hover-card badge text for a negative delta. Default "Negativo". */
  negativeBadgeLabel?: string;
  /** Row-label overrides for the hover `<ChartDetailCard>` — rename per indicator without
   *  touching component code. Keys: `impact`, `before`, `after`, `description`, `more`,
   *  `moreCta`, `total`. */
  detailLabels?: Partial<Record<'impact' | 'before' | 'after' | 'description' | 'more' | 'moreCta' | 'total', string>>;
  /** Dashed line tracing the running total through every step (with small vertex dots) — the
   *  "accumulated effect" read. Default true. */
  showConnectors?: boolean;
  /** Show an uppercase bracket + label above each contiguous run of delta bars between totals —
   *  an optional Forecast → Drivers → Real hierarchy cue. Default false. */
  showGroupLabels?: boolean;
  /** Text for the driver-group bracket (see `showGroupLabels`). Default "Fatores de impacto". */
  driverGroupLabel?: string;
  /** Standardized legend row (total / increase / decrease / accumulated-effect line) driven by
   *  `totalLabel`/`increaseLabel`/`decreaseLabel` — the same row works unmodified for any
   *  indicator. Default true. */
  legend?: boolean;
  /** Small right-aligned note in the legend row (e.g. "Valores em %"). Pass `null` to omit.
   *  Default "Valores em %". */
  legendNote?: string | null;
  /** Corner rounding on every bar (total and delta alike), in px. Default 6. */
  barRadius?: number;
  /** Bar width as a fraction of each item's slot. Default 0.44 (narrow bars, wide gaps — the
   *  waterfall's characteristic look). */
  barWidthRatio?: number;
  /** Hover highlight on each bar's column plus a `<ChartDetailCard>` breakdown. Default true. */
  tooltip?: boolean;
  style?: React.CSSProperties;
}

export function ChartWaterfall(props: WaterfallChartProps): JSX.Element;
export default ChartWaterfall;
