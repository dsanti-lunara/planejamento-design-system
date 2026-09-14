import * as React from 'react';

export interface HeatmapProps {
  /** Row labels (left axis) — e.g. days of the week. */
  rows: string[];
  /** Column labels (top axis) — e.g. hour marks or intervals. */
  columns: string[];
  /** Values, `rows.length` arrays each `columns.length` long. `null`/`undefined` cells render as
   *  a flat neutral tile (no data) instead of being coerced to zero. */
  data: (number | null | undefined)[][];
  /** `sequential`: one tone, intensity ramps from `domain[0]` (0 opacity) to `domain[1]` (full) —
   *  for volume/counts with no sign. `diverging`: two tones either side of zero — for
   *  deviation-from-plan data. Default 'sequential'. */
  scale?: 'sequential' | 'diverging';
  /** Sequential-mode tone. Default 'info' (blue). */
  tone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral';
  /** Diverging-mode tone for values ≥ 0. Default 'success'. */
  positiveTone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral';
  /** Diverging-mode tone for values < 0. Default 'critical'. */
  negativeTone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral';
  /** Value range mapped to full intensity. Sequential default `[min(0,...data), max(1,...data)]`;
   *  diverging default `[-m, m]` where `m` is the largest absolute value in `data` (symmetric). */
  domain?: [number, number] | null;
  /** Formats a cell value for its hover tooltip and the legend end-labels. Default rounds to 1
   *  decimal. */
  valueFormat?: (v: number) => React.ReactNode;
  /** Show only every Nth column label — avoids crowded labels on a dense axis (e.g. 24 hourly
   *  columns). Default 1 (all labels). */
  labelEvery?: number;
  /** Show the intensity legend below the grid. Default true. */
  legend?: boolean;
  /** Override the legend's end-label text (and, diverging only, its midpoint label). Defaults to
   *  `valueFormat` of the domain bounds ('Menor'/'Maior' for sequential when no domain is given). */
  legendLabels?: { min?: React.ReactNode; mid?: React.ReactNode; max?: React.ReactNode };
  /** Width reserved for row labels, px. Default 84. */
  rowLabelWidth?: number;
  /** Height of each cell, px. Default 22. */
  cellHeight?: number;
  style?: React.CSSProperties;
}

/**
 * Heatmap — matrix shaded by value intensity (day × hour volume, day × hour deviation, category
 * × interval). Sequential or diverging colour scale, hover tooltip per cell, optional legend.
 */
export declare function ChartHeatmap(props: HeatmapProps): JSX.Element | null;
export default ChartHeatmap;
