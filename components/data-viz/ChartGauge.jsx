import React from 'react';

const toneColor = {
  info: 'var(--color-data-actual)',
  success: 'var(--color-data-positive)',
  warning: 'var(--color-data-attention)',
  critical: 'var(--color-data-negative)',
  ai: 'var(--color-data-forecast)',
};

function autoTone(pct) {
  if (pct >= 85) return 'critical';
  if (pct >= 60) return 'warning';
  return 'success';
}

function polar(cx, cy, r, angleDeg) {
  const a = (angleDeg * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy - r * Math.sin(a)];
}

// A 180°(left) → 0°(right) arc through the top, standard math-angle convention (0°=east,
// 90°=north), with SVG's y flipped (via `polar`) so 90° draws upward. Every arc this component
// draws goes from a higher angle to a lower one (left-to-right through the top), so the sweep
// flag is always the same direction.
function arcPath(cx, cy, r, a0, a1) {
  const [x0, y0] = polar(cx, cy, r, a0);
  const [x1, y1] = polar(cx, cy, r, a1);
  const largeArc = Math.abs(a0 - a1) > 180 ? 1 : 0;
  return `M${x0.toFixed(2)},${y0.toFixed(2)} A${r},${r} 0 ${largeArc} 1 ${x1.toFixed(2)},${y1.toFixed(2)}`;
}

// ArcGauge — the `shape="arc"` half of <Gauge>: a 180° speedometer with three tinted zone bands
// (`zones`, left→right) and a needle, for a qualitative "where does this land" read (e.g.
// benefício líquido: Baixo/Médio/Alto) rather than a precise percentage. See <Gauge> below.
function ArcGauge({ pct, size, strokeWidth, zones, valueLabel, valueLabelColor, label, style }) {
  const r = (size - strokeWidth) / 2;
  const cx = size / 2;
  const h = r + strokeWidth + 8;
  const cy = h - strokeWidth / 2 - 2;
  const bands = [
    [180, 120, zones[0]],
    [120, 60, zones[1]],
    [60, 0, zones[2]],
  ];
  const angle = 180 - (pct / 100) * 180;
  const [nx, ny] = polar(cx, cy, r * 0.82, angle);
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 2, fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', ...style }}>
      <svg width={size} height={h} viewBox={`0 0 ${size} ${h}`}>
        {bands.map(([a0, a1, tone], i) => (
          <path key={i} d={arcPath(cx, cy, r, a0, a1)} fill="none" stroke={toneColor[tone] || tone} strokeWidth={strokeWidth} opacity={0.9} />
        ))}
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="var(--color-text-primary)" strokeWidth={2.5} strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={5} fill="var(--color-text-primary)" />
      </svg>
      {valueLabel ? <div style={{ fontSize: size * 0.16, fontWeight: 700, color: valueLabelColor, marginTop: 2 }}>{valueLabel}</div> : null}
      {label ? <span style={{ fontSize: 12, color: 'var(--color-text-muted)', textAlign: 'center', maxWidth: size + 30 }}>{label}</span> : null}
    </div>
  );
}

export function ChartGauge({
  value = 0,
  max = 100,
  size = 88,
  strokeWidth = 8,
  tone = 'info',
  auto = false,
  label = null,
  showValue = true,
  /** 'circle' (default — a full radial ring, for a precise point-in-time percentage like
   *  CPU/RAM/disk) or 'arc' (a 180° speedometer with a needle over three zone bands, for a
   *  qualitative read like a benefit/risk meter — pair with `valueLabel`, since `arc` ignores
   *  `showValue`). */
  shape = 'circle',
  /** `shape="arc"` only — the three zone tones painted left→right under the needle. Default
   *  low→high reading as bad→good (`['critical','warning','success']`); pass your own order/
   *  tones for a meter where low is good instead. */
  zones = ['critical', 'warning', 'success'],
  /** `shape="arc"` only — a prominent qualitative word under the arc (e.g. "Alto"), coloured by
   *  `tone`/`auto`. `label` still renders as a small caption beneath it. */
  valueLabel = null,
  style = {},
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const resolvedTone = auto ? autoTone(pct) : tone;
  const c = toneColor[resolvedTone] || toneColor.info;

  if (shape === 'arc') {
    return <ArcGauge pct={pct} size={size} strokeWidth={strokeWidth} zones={zones} valueLabel={valueLabel} valueLabelColor={c} label={label} style={style} />;
  }

  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct / 100);
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8, fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', ...style }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-border-subtle)" strokeWidth={strokeWidth} />
          <circle
            cx={size / 2} cy={size / 2} r={r} fill="none" stroke={c} strokeWidth={strokeWidth}
            strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset var(--duration-standard) var(--ease-out)' }}
          />
        </svg>
        {showValue ? (
          <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.22, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            {Math.round(pct)}%
          </span>
        ) : null}
      </div>
      {label ? <span style={{ fontSize: 12, color: 'var(--color-text-muted)', textAlign: 'center' }}>{label}</span> : null}
    </div>
  );
}

export default ChartGauge;
