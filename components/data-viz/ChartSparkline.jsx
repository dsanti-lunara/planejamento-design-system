import React from 'react';

const toneColor = {
  info: 'var(--color-data-actual)',
  success: 'var(--color-data-positive)',
  warning: 'var(--color-data-attention)',
  critical: 'var(--color-data-negative)',
  ai: 'var(--color-data-forecast)',
  neutral: 'var(--color-text-muted)',
};

// Container-measured width for `width="100%"` — keeps the coordinate space equal to real
// rendered pixels (unlike a viewBox+preserveAspectRatio stretch trick) so the stroke and the
// end-point dot never distort. Falls back to a sane default until the first measurement lands.
function useMeasuredWidth(enabled, fallback) {
  const ref = React.useRef(null);
  const [w, setW] = React.useState(fallback);
  React.useEffect(() => {
    if (!enabled || !ref.current) return undefined;
    const el = ref.current;
    const ro = new ResizeObserver((entries) => {
      const cw = entries[0].contentRect.width;
      if (cw > 0) setW(cw);
    });
    ro.observe(el);
    if (el.clientWidth) setW(el.clientWidth);
    return () => ro.disconnect();
  }, [enabled]);
  return [ref, w];
}

// Same Catmull-Rom → cubic Bezier smoothing as <AreaChart> (kept as its own local copy, same
// reasoning as this file's other small chart helpers duplicated across components/data/*.jsx —
// still passes through every real value, just curves the interpolation between them).
function smoothPath(points) {
  if (points.length < 2) return points.length === 1 ? `M${points[0][0].toFixed(1)},${points[0][1].toFixed(1)}` : '';
  if (points.length === 2) return `M${points[0][0].toFixed(1)},${points[0][1].toFixed(1)} L${points[1][0].toFixed(1)},${points[1][1].toFixed(1)}`;
  let d = `M${points[0][0].toFixed(1)},${points[0][1].toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

function straightPath(points) {
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
}

// Same sign-coloured diff-band idea as <AreaChart bandBetween> (own copy — Sparkline is a small,
// dependency-free primitive by design), condensed for a short array with no crossing-precision
// need at this size: split into runs at each sign change, splicing in a linearly-interpolated
// zero-crossing point so the band edge still meets where the two lines actually cross.
function diffRuns(dataVals, refVals, toPoint) {
  const n = Math.min(dataVals.length, refVals.length);
  const runs = [];
  let cur = null;
  for (let i = 0; i < n; i++) {
    const a = refVals[i];
    const b = dataVals[i];
    const positive = b >= a;
    if (!cur) {
      cur = { positive, top: [], bottom: [] };
    } else if (cur.positive !== positive) {
      const pa = refVals[i - 1];
      const pb = dataVals[i - 1];
      const d0 = pb - pa;
      const d1 = b - a;
      const t = d0 / ((d0 - d1) || 1e-6);
      const ca = pa + (a - pa) * t;
      const cb = pb + (b - pb) * t;
      const cx = i - 1 + t;
      cur.top.push(toPoint(cx, Math.max(ca, cb)));
      cur.bottom.push(toPoint(cx, Math.min(ca, cb)));
      runs.push(cur);
      cur = { positive, top: [toPoint(cx, Math.max(ca, cb))], bottom: [toPoint(cx, Math.min(ca, cb))] };
    }
    cur.top.push(toPoint(i, Math.max(a, b)));
    cur.bottom.push(toPoint(i, Math.min(a, b)));
  }
  if (cur) runs.push(cur);
  return runs;
}

/**
 * Sparkline — inline trend line, no axes. `reference` + `diffFill` upgrade it to a mini
 * forecast-vs-actual read (matching <AreaChart bandBetween>'s language) for spots like
 * <ScenarioCard>'s before/after pair, where a single flat line reads as too thin a signal.
 */
export function ChartSparkline({
  data = [],
  width = 120,
  height = 32,
  tone = 'info',
  area = true,
  strokeWidth = 1.75,
  smooth = true,
  /** Optional second series on the same scale (e.g. "necessidade") — renders as a thin dashed
   *  reference line behind the main one. */
  reference = null,
  referenceTone = 'neutral',
  /** Shades the gap between `data` and `reference` by sign — green where `data` ≥ `reference`
   *  (sobra), red where it's below (déficit). Requires `reference`. Default false. */
  diffFill = false,
  positiveTone = 'success',
  negativeTone = 'critical',
  style = {},
}) {
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const responsive = width === '100%';
  const [measureRef, measuredWidth] = useMeasuredWidth(responsive, 240);
  if (!data || data.length === 0) return null;
  const w = responsive ? measuredWidth : width;
  const color = toneColor[tone] || toneColor.info;
  const refColor = toneColor[referenceTone] || toneColor.neutral;
  const posColor = toneColor[positiveTone] || toneColor.success;
  const negColor = toneColor[negativeTone] || toneColor.critical;
  const hasRef = Array.isArray(reference) && reference.length === data.length;
  const allVals = hasRef ? data.concat(reference) : data;
  const min = Math.min(...allVals);
  const max = Math.max(...allVals);
  const span = max - min || 1;
  const stepX = data.length > 1 ? w / (data.length - 1) : 0;
  const pad = strokeWidth / 2;
  const toY = (v) => height - ((v - min) / span) * (height - strokeWidth) - pad;
  const pts = data.map((v, i) => [i * stepX, toY(v)]);
  const path = (smooth ? smoothPath : straightPath)(pts);
  const areaPath = `${path} L${w},${height} L0,${height} Z`;
  const last = pts[pts.length - 1];
  const refPts = hasRef ? reference.map((v, i) => [i * stepX, toY(v)]) : null;
  const refPath = refPts ? straightPath(refPts) : null;
  const bands = hasRef && diffFill ? diffRuns(data, reference, (i, v) => [i * stepX, toY(v)]) : [];

  const svg = (
    <svg width={w} height={height} viewBox={`0 0 ${w} ${height}`} style={{ display: 'block', overflow: 'visible', ...style }}>
      {bands.map((r, i) => (
        <path
          key={`band-${i}`}
          d={`${straightPath(r.top)} ${r.bottom.slice().reverse().map((p) => `L${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')} Z`}
          fill={r.positive ? posColor : negColor}
          opacity={0.22}
          stroke="none"
        />
      ))}
      {area && !diffFill ? (
        <React.Fragment>
          <defs>
            <linearGradient id={`nh-spk-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.22" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill={`url(#nh-spk-${uid})`} stroke="none" />
        </React.Fragment>
      ) : null}
      {refPath ? <path d={refPath} fill="none" stroke={refColor} strokeWidth={Math.max(1, strokeWidth - 0.5)} strokeDasharray="3.5 3" strokeLinecap="round" /> : null}
      <path d={path} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={last[0]} cy={last[1]} r={strokeWidth * 1.6} fill={color} />
    </svg>
  );
  if (!responsive) return svg;
  return <div ref={measureRef} style={{ width: '100%', lineHeight: 0 }}>{svg}</div>;
}

export default ChartSparkline;
