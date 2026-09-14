import * as React from 'react';

export interface DonutChartDatum {
  label: string;
  value: number;
  /** Semantic tone — use when this category IS a status (e.g. jobs by outcome). */
  tone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral';
  /** Raw CSS colour override (hex/var), takes priority over `tone`. */
  color?: string;
}

/**
 * Categorical share chart (donut/ring). Geometry (arc angles) is computed with D3's
 * `d3.pie`/`d3.arc` — requires the D3 CDN script loaded on the page (see prompt.md). Every pixel
 * drawn is still plain inline SVG using design tokens, so colour/dark-mode work exactly like the
 * rest of the data-viz components.
 */
export interface DonutChartProps {
  data: DonutChartDatum[];
  /** Outer diameter in px. Default 180. */
  size?: number;
  /** Ring thickness in px. Default ~32% of radius. Set close to `size/2` for a solid pie instead of a ring. */
  thickness?: number;
  /** Gap between slices, in degrees. Default 2. */
  padAngle?: number;
  /** Corner rounding on each slice's outer/inner edges. Default 3. */
  cornerRadius?: number;
  /** Big number shown in the center hole (e.g. the total). Replaced by the hovered slice's own value while hovering. */
  centerValue?: React.ReactNode;
  /** Caption under `centerValue` (e.g. "Backlog total"). Replaced by the hovered slice's label while hovering. */
  centerLabel?: React.ReactNode;
  /** Render a value+percentage legend beside the ring, with hover synced to the slices. Default false. */
  legend?: boolean;
  /** Format a value for the center label and legend. Default: pt-BR grouped integer. */
  valueFormat?: (value: number) => string;
  style?: React.CSSProperties;
}

export function ChartDonut(props: DonutChartProps): JSX.Element;
export default ChartDonut;
