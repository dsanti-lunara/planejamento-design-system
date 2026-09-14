import * as React from 'react';

/**
 * Radial utilisation gauge — the circular counterpart to `<ProgressBar>`,
 * for a single point-in-time percentage (CPU/RAM/disk on an executor,
 * queue saturation). Same `auto` green→amber→red threshold behaviour.
 * Set `shape="arc"` for a qualitative half-circle speedometer read instead
 * (a benefit/cost meter) — see that prop's own doc below.
 */
export interface GaugeProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  tone?: 'info' | 'success' | 'warning' | 'critical' | 'ai';
  /** Derive tone from value instead of `tone`: green < 60, amber < 85, red ≥ 85. */
  auto?: boolean;
  label?: React.ReactNode;
  /** Show the "%" number centered in the ring (default true). Ignored by `shape="arc"` — use
   *  `valueLabel` there instead. */
  showValue?: boolean;
  /** 'circle' (default — a full radial ring for a precise percentage) or 'arc' (a 180°
   *  speedometer with a needle over three zone bands, for a qualitative "Alto/Médio/Baixo"
   *  benefit- or risk-style read). */
  shape?: 'circle' | 'arc';
  /** `shape="arc"` only — the three zone tones painted left→right under the needle. Default
   *  `['critical', 'warning', 'success']` (low value reads as worse); pass your own order for a
   *  meter where low is good instead. */
  zones?: [string, string, string];
  /** `shape="arc"` only — a prominent qualitative word under the arc (e.g. "Alto"), coloured by
   *  `tone`/`auto`. `label` still renders as a small caption beneath it. */
  valueLabel?: React.ReactNode;
  style?: React.CSSProperties;
}

export function ChartGauge(props: GaugeProps): JSX.Element;
export default ChartGauge;
