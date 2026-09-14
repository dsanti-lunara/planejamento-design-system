import React from 'react';

const toneColor = {
  info: 'var(--color-data-actual)',
  success: 'var(--color-data-positive)',
  warning: 'var(--color-data-attention)',
  critical: 'var(--color-data-negative)',
  ai: 'var(--color-data-forecast)',
  neutral: 'var(--color-text-muted)',
};

/** Rounds up to a "nice" axis max (1/2/2.5/5/10 × 10^n) so ticks land on round numbers. */
function niceMax(v) {
  if (!isFinite(v) || v <= 0) return 1;
  const exp = Math.floor(Math.log10(v));
  const base = Math.pow(10, exp);
  const norm = v / base;
  let n;
  if (norm <= 1) n = 1;
  else if (norm <= 2) n = 2;
  else if (norm <= 2.5) n = 2.5;
  else if (norm <= 5) n = 5;
  else n = 10;
  return n * base;
}

// Catmull-Rom → cubic Bezier (uniform, 1/6 tangent) through a point run — smooth, still passes
// through every real data point (unlike a fitted curve), and needs no extra config. This is what
// turns a many-point intraday series (e.g. 144 ten-minute samples) from a jagged polyline into a
// natural curve. Falls back to a straight segment for 0–2 points (nothing to smooth).
function smoothLinePath(points) {
  if (points.length === 0) return '';
  if (points.length === 1) return `M${points[0][0].toFixed(1)},${points[0][1].toFixed(1)}`;
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

// Straight-line-between-points path — used when `smooth={false}`, and always used for the diff
// band fill (see buildDiffBand) so a soft area wash never rides slightly outside its two edges.
function straightLinePath(points) {
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
}

// Splits a data array (which may hold null/undefined gaps — e.g. a series that only exists up
// to "now") into contiguous [x,y] point runs in SVG coordinate space (y=0 at top). `min` is the
// chart's y-axis floor (default 0, see `yMin` prop) — values scale within [min, max].
function toSegments(data, w, h, max, min) {
  const stepX = data.length > 1 ? w / (data.length - 1) : 0;
  const segments = [];
  let current = [];
  data.forEach((v, i) => {
    if (v === null || v === undefined) {
      if (current.length) segments.push(current);
      current = [];
      return;
    }
    current.push([i * stepX, h - ((v - min) / (max - min)) * h]);
  });
  if (current.length) segments.push(current);
  return segments;
}

// Index of a series' last non-gap value — used to draw a small end-cap dot when a series (e.g.
// "actual so far") stops before the chart's final category, same idea as the hover dot but static.
function lastDefinedIndex(data) {
  for (let i = data.length - 1; i >= 0; i--) { if (data[i] !== null && data[i] !== undefined) return i; }
  return -1;
}

function lineD(segments, smooth) {
  return segments.map((seg) => (smooth ? smoothLinePath(seg) : straightLinePath(seg))).join(' ');
}

function areaD(segments, h, smooth) {
  return segments
    .filter((seg) => seg.length > 1)
    .map((seg) => {
      const body = smooth ? smoothLinePath(seg) : straightLinePath(seg);
      const last = seg[seg.length - 1];
      const first = seg[0];
      return `${body} L${last[0].toFixed(1)},${h} L${first[0].toFixed(1)},${h} Z`;
    })
    .join(' ');
}

// Fills the region between two series with the reference/plan line (dataA) and the actual/result
// line (dataB), coloured by sign — green where B ≥ A (sobra/surplus), red where B < A (déficit).
// Splits into per-run polygons at each real data index, plus a linearly-interpolated crossing
// point wherever the sign flips between two indices, so the band edge meets the zero-crossing
// instead of jumping at the next sample. Deliberately straight-edged (not smoothed) even when the
// stroked lines above it are — a soft, low-opacity wash reads fine without matching the curve
// exactly, and staying linear keeps the fill always exactly between the two point sets.
function buildDiffBand(dataA, dataB, w, h, max, min) {
  const n = Math.min(dataA.length, dataB.length);
  const stepX = n > 1 ? w / (n - 1) : 0;
  const yOf = (v) => h - ((v - min) / (max - min)) * h;
  const xOf = (i) => i * stepX;
  const runs = [];
  let cur = null;
  for (let i = 0; i < n; i++) {
    const a = dataA[i];
    const b = dataB[i];
    if (a === null || a === undefined || b === null || b === undefined) {
      if (cur) { runs.push(cur); cur = null; }
      continue;
    }
    const positive = b >= a;
    if (!cur) {
      cur = { positive, top: [], bottom: [] };
    } else if (cur.positive !== positive) {
      const pa = dataA[i - 1];
      const pb = dataB[i - 1];
      if (pa !== null && pa !== undefined && pb !== null && pb !== undefined) {
        const d0 = pb - pa;
        const d1 = b - a;
        const t = d0 / ((d0 - d1) || 1e-6);
        const cx = xOf(i - 1) + (xOf(i) - xOf(i - 1)) * t;
        const ca = pa + (a - pa) * t;
        const cb = pb + (b - pb) * t;
        cur.top.push([cx, yOf(Math.max(ca, cb))]);
        cur.bottom.push([cx, yOf(Math.min(ca, cb))]);
        runs.push(cur);
        cur = { positive, top: [[cx, yOf(Math.max(ca, cb))]], bottom: [[cx, yOf(Math.min(ca, cb))]] };
      } else {
        runs.push(cur);
        cur = { positive, top: [], bottom: [] };
      }
    }
    cur.top.push([xOf(i), yOf(Math.max(a, b))]);
    cur.bottom.push([xOf(i), yOf(Math.min(a, b))]);
  }
  if (cur) runs.push(cur);
  return runs.filter((r) => r.top.length > 1).map((r) => ({
    positive: r.positive,
    d: `${straightLinePath(r.top)} ${r.bottom.slice().reverse().map((p) => `L${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')} Z`,
  }));
}

function LegendSwatch({ s }) {
  const color = toneColor[s.tone] || toneColor.info;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--color-text-muted)' }}>
      <svg width="14" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
        <line x1="0" y1="4" x2="14" y2="4" stroke={color} strokeWidth="2" strokeDasharray={s.dashed ? '4 2.5' : 'none'} strokeLinecap="round" />
      </svg>
      {s.name}
    </span>
  );
}

// Same dark inverse chip as <Tooltip> (var(--neutral-950) — "sempre escuro, independe do tema",
// see tokens/colors.css), adapted for a multi-row label+series readout instead of plain text.
function ChartTooltip({ label, items, leftPct }) {
  const translate = leftPct < 12 ? '0%' : leftPct > 88 ? '-100%' : '-50%';
  return (
    <div
      style={{
        position: 'absolute', top: 6, left: `${leftPct}%`, transform: `translateX(${translate})`,
        background: 'var(--neutral-950)', color: '#fff', fontSize: 12, fontWeight: 500,
        padding: '8px 11px', borderRadius: '4px', boxShadow: 'var(--shadow-hover)',
        pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 5, lineHeight: 1.6,
      }}
    >
      <div style={{ fontWeight: 700, opacity: 0.65, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: items.length ? 4 : 0 }}>{label}</div>
      {items.map((it, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <span style={{ width: 7, height: 7, borderRadius: 2, background: it.color, flexShrink: 0 }} />
          {it.name ? <span style={{ opacity: 0.8 }}>{it.name}</span> : null}
          <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums', marginLeft: it.name ? 'auto' : 0, paddingLeft: it.name ? 14 : 0 }}>{it.value}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * AreaChart — trend-over-time chart WITH axes (gridlines + numeric y ticks + category x ticks),
 * one or more series (solid/filled and/or dashed/unfilled), each series' data may contain
 * null/undefined gaps (e.g. an "actual" series that stops at "now" while a "plan" series
 * continues for the full period).
 *
 * Internally uses a fixed SVG coordinate space stretched via `preserveAspectRatio="none"` +
 * `vector-effect="non-scaling-stroke"` — this keeps stroke width and dash pattern crisp under
 * non-uniform (x≠y) scaling without needing a ResizeObserver. Axis labels are plain HTML,
 * absolutely positioned by percentage, so text itself is never stretched.
 */
export function ChartArea({
  series = [],
  categories = [],
  height = 220,
  yTicks = 4,
  yMin = 0,
  yMax = null,
  yFormat = (v) => Math.round(v).toLocaleString('pt-BR'),
  xLabelEvery = 1,
  legend = false,
  tooltip = true,
  nowIndex = null,
  nowLabel = null,
  /** Category index to draw a plain "before/after" divider — a dashed line (no pill) with two
   *  small labels, one on each side (`splitLabels`). For a single chart that narrates two states
   *  side by side (today's schedule left of the divider, a proposed one to the right) instead of
   *  two separate charts. Independent of `nowIndex` — both can be set at once. Default null (off). */
  splitIndex = null,
  /** `[beforeLabel, afterLabel]` shown left/right of the `splitIndex` divider, e.g. `['Antes',
   *  'Depois']`. The line still draws without this — only the labels are skipped. */
  splitLabels = null,
  refLines = [],
  /** Smooth (Catmull-Rom) curve through every point instead of straight polyline segments.
   *  Default OFF (evolution guide §8.3): a straight line reads as precise/operational and
   *  doesn't imply values between real samples. Turn on only for an aggregated trend with many
   *  points where the curve reads as pattern, not precision (e.g. a long daily/weekly series). */
  smooth = false,
  /** Shades the region between two series by sign — green where the second is ≥ the first
   *  (sobra/surplus), red where it's below (déficit/shortfall). Pass `[indexA, indexB]` into
   *  `series` (typically [reference/plan, actual/result]). Leave both series' own `fill` off
   *  (`fill={false}`) so this band is the only wash drawn. */
  bandBetween = null,
  bandTones = { positive: 'success', negative: 'critical' },
  bandOpacity = 0.16,
  /** Event annotations — vertical markers for things that explain a spike/drop but aren't part
   *  of the series itself: `{ index, type: 'incident'|'scaleChange'|'training'|'operational',
   *  label }`. A thin dashed line + a small tone-coloured dot above the plot; hover shows `label`
   *  via native title tooltip. Evolution guide §8.3. */
  annotations = [],
  /** Shaded vertical range(s) marking a fixed period as noteworthy — a historical "critical
   *  window", a maintenance blackout, business hours — distinct from `bandBetween` (which shades
   *  between two SERIES by sign) and `annotations` (single-point markers): this shades a fixed
   *  x-range on its own. `{ from, to, label, tone }` — `from`/`to` are category indices
   *  (inclusive), `label` shows in a small pill above the band (e.g. "07:00 - 09:00"), `tone`
   *  defaults to 'critical'. Default `[]` (off). */
  xBands = [],
  style = {},
}) {
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const plotRef = React.useRef(null);
  const [hoverIdx, setHoverIdx] = React.useState(null);
  const w = 600; // fixed internal coordinate width — see note above on non-uniform scaling
  const allVals = series.flatMap((s) => s.data.filter((v) => v !== null && v !== undefined));
  const max = yMax != null ? yMax : niceMax(Math.max(1, ...allVals));
  const tickVals = Array.from({ length: yTicks + 1 }, (_, i) => yMin + ((max - yMin) / yTicks) * (yTicks - i));
  const nowPct = nowIndex != null && categories.length > 1 ? (nowIndex / (categories.length - 1)) * 100 : null;
  const splitPct = splitIndex != null && categories.length > 1 ? (splitIndex / (categories.length - 1)) * 100 : null;
  const yAxisWidth = Math.max(...tickVals.map((v) => String(yFormat(v)).length)) * 6.5 + 6;
  const canHover = tooltip && categories.length > 1;

  function handleMouseMove(e) {
    const el = plotRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (!rect.width) return;
    const frac = (e.clientX - rect.left) / rect.width;
    const idx = Math.round(frac * (categories.length - 1));
    setHoverIdx(Math.max(0, Math.min(categories.length - 1, idx)));
  }
  function handleMouseLeave() { setHoverIdx(null); }

  const hoverX = hoverIdx !== null ? (hoverIdx / (categories.length - 1)) * w : null;
  const hoverItems = hoverIdx !== null
    ? series.map((s) => {
        const v = s.data[hoverIdx];
        if (v === null || v === undefined) return null;
        return { name: s.name, value: yFormat(v), color: toneColor[s.tone] || toneColor.info, y: height - ((v - yMin) / (max - yMin)) * height };
      }).filter(Boolean)
    : [];

  return (
    <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', ...style }}>
      {legend && series.some((s) => s.name) ? (
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
          {series.map((s, i) => (s.name ? <LegendSwatch key={i} s={s} /> : null))}
        </div>
      ) : null}
      {/* Reserves clearance above the plot so the nowIndex pill (which floats above the gridlines,
          see below) never overlaps the legend row or a card header sitting right above this chart. */}
      {nowPct !== null || splitPct !== null || xBands.some((b) => b.label) ? <div style={{ height: 26 }} /> : null}
      <div style={{ display: 'flex', gap: 10 }}>
        <div style={{ position: 'relative', flexShrink: 0, width: yAxisWidth, height }}>
          {tickVals.map((v, i) => (
            <span
              key={i}
              style={{ position: 'absolute', right: 0, left: 0, top: `${(i / yTicks) * 100}%`, transform: 'translateY(-50%)', fontSize: 11, color: 'var(--color-text-muted)', textAlign: 'right', whiteSpace: 'nowrap' }}
            >
              {yFormat(v)}
            </span>
          ))}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            ref={plotRef}
            style={{ position: 'relative' }}
            onMouseMove={canHover ? handleMouseMove : undefined}
            onMouseLeave={canHover ? handleMouseLeave : undefined}
          >
          <svg width="100%" height={height} viewBox={`0 0 ${w} ${height}`} preserveAspectRatio="none" style={{ display: 'block', overflow: 'visible', cursor: canHover ? 'crosshair' : 'default' }}>
            {tickVals.map((v, i) => {
              const y = height - ((v - yMin) / (max - yMin)) * height;
              return <line key={i} x1={0} y1={y} x2={w} y2={y} stroke="var(--color-border-subtle)" strokeWidth={1} vectorEffect="non-scaling-stroke" />;
            })}
            {xBands.map((b, bi) => {
              const x1 = categories.length > 1 ? (Math.max(0, b.from) / (categories.length - 1)) * w : 0;
              const x2 = categories.length > 1 ? (Math.min(categories.length - 1, b.to) / (categories.length - 1)) * w : w;
              const c = toneColor[b.tone] || toneColor.critical;
              return <rect key={`xb${bi}`} x={x1} y={0} width={Math.max(0, x2 - x1)} height={height} fill={c} opacity={0.09} stroke={c} strokeOpacity={0.35} strokeWidth={1} strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />;
            })}
            {bandBetween ? (() => {
              // Accepts a single pair `[a,b]` (original form) or an array of pairs
              // `[[a,b],[c,d],…]` — the latter lets several series each shade their own
              // (possibly null-gapped) range against the same reference without any of them
              // needing an extra redundant line just to feed the diff — e.g. an "antes" series
              // covering the first half of a chart and a "depois" series covering the second
              // half, each diffed against one continuous forecast line (see `splitIndex`).
              const pairs = Array.isArray(bandBetween[0]) ? bandBetween : [bandBetween];
              const posColor = toneColor[bandTones.positive] || toneColor.success;
              const negColor = toneColor[bandTones.negative] || toneColor.critical;
              return pairs.flatMap((pair, pi) => {
                const A = series[pair[0]];
                const B = series[pair[1]];
                if (!A || !B) return [];
                const bands = buildDiffBand(A.data, B.data, w, height, max, yMin);
                return bands.map((bd, bi) => <path key={`band-${pi}-${bi}`} d={bd.d} fill={bd.positive ? posColor : negColor} opacity={bandOpacity} stroke="none" />);
              });
            })() : null}
            {series.map((s, si) => {
              const segs = toSegments(s.data, w, height, max, yMin);
              const color = toneColor[s.tone] || toneColor.info;
              const lastIdx = lastDefinedIndex(s.data);
              const endsEarly = lastIdx >= 0 && lastIdx < s.data.length - 1;
              const endPoint = endsEarly ? segs[segs.length - 1][segs[segs.length - 1].length - 1] : null;
              return (
                <React.Fragment key={si}>
                  {s.fill !== false ? (
                    <React.Fragment>
                      <defs>
                        <linearGradient id={`nh-ac-${uid}-${si}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={color} stopOpacity="0.20" />
                          <stop offset="100%" stopColor={color} stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d={areaD(segs, height, smooth)} fill={`url(#nh-ac-${uid}-${si})`} stroke="none" />
                    </React.Fragment>
                  ) : null}
                  <path
                    d={lineD(segs, smooth)}
                    fill="none"
                    stroke={color}
                    strokeWidth={s.strokeWidth || 2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={s.dashed ? '6 5' : 'none'}
                    vectorEffect="non-scaling-stroke"
                  />
                  {endPoint ? <circle cx={endPoint[0]} cy={endPoint[1]} r={4} fill={color} stroke="var(--color-surface-card)" strokeWidth={2} vectorEffect="non-scaling-stroke" /> : null}
                </React.Fragment>
              );
            })}
            {annotations.map((an, i) => {
              const pct = categories.length > 1 ? (an.index / (categories.length - 1)) * 100 : 0;
              const c = { incident: 'var(--color-data-negative)', scaleChange: 'var(--color-data-attention)', training: 'var(--color-data-actual)', operational: 'var(--color-text-muted)' }[an.type] || 'var(--color-text-muted)';
              return <line key={`an${i}`} x1={(pct / 100) * w} y1={0} x2={(pct / 100) * w} y2={height} stroke={c} strokeWidth={1} strokeDasharray="2 3" vectorEffect="non-scaling-stroke" opacity={0.7} />;
            })}
            {nowPct !== null ? <line x1={(nowPct / 100) * w} y1={0} x2={(nowPct / 100) * w} y2={height} stroke="var(--blue-300)" strokeWidth={1} strokeDasharray="3 3" vectorEffect="non-scaling-stroke" /> : null}
            {splitPct !== null ? <line x1={(splitPct / 100) * w} y1={0} x2={(splitPct / 100) * w} y2={height} stroke="var(--color-border-strong)" strokeWidth={1.5} strokeDasharray="5 4" vectorEffect="non-scaling-stroke" /> : null}
            {hoverX !== null ? (
              <React.Fragment>
                <line x1={hoverX} y1={0} x2={hoverX} y2={height} stroke="var(--color-text-muted)" strokeWidth={1} strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
                {hoverItems.map((it, i) => (
                  <circle key={i} cx={hoverX} cy={it.y} r={4} fill="var(--color-surface-card)" stroke={it.color} strokeWidth={2} vectorEffect="non-scaling-stroke" />
                ))}
              </React.Fragment>
            ) : null}
          </svg>
          {hoverIdx !== null ? (
            <ChartTooltip label={categories[hoverIdx]} items={hoverItems} leftPct={(hoverIdx / (categories.length - 1)) * 100} />
          ) : null}
          {nowPct !== null ? (
            <span style={{ position: 'absolute', top: -6, left: `${nowPct}%`, transform: 'translate(-50%, -100%)', background: 'var(--color-data-actual)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 7px', borderRadius: '4px', whiteSpace: 'nowrap', pointerEvents: 'none' }}>{nowLabel}</span>
          ) : null}
          {xBands.map((b, bi) => {
            if (!b.label) return null;
            const p1 = categories.length > 1 ? (Math.max(0, b.from) / (categories.length - 1)) * 100 : 0;
            const p2 = categories.length > 1 ? (Math.min(categories.length - 1, b.to) / (categories.length - 1)) * 100 : 100;
            const c = toneColor[b.tone] || toneColor.critical;
            return (
              <span key={`xbl${bi}`} style={{ position: 'absolute', top: -6, left: `${(p1 + p2) / 2}%`, transform: 'translate(-50%, -100%)', background: c, color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 7px', borderRadius: '4px', whiteSpace: 'nowrap', pointerEvents: 'none' }}>{b.label}</span>
            );
          })}
          {splitPct !== null && splitLabels ? (
            <React.Fragment>
              <span style={{ position: 'absolute', top: -6, left: `${splitPct}%`, transform: 'translate(calc(-100% - 7px), -100%)', fontSize: 12, fontWeight: 700, color: 'var(--color-text-muted)', whiteSpace: 'nowrap', pointerEvents: 'none' }}>{splitLabels[0]}</span>
              <span style={{ position: 'absolute', top: -6, left: `${splitPct}%`, transform: 'translate(7px, -100%)', fontSize: 12, fontWeight: 700, color: 'var(--color-text-muted)', whiteSpace: 'nowrap', pointerEvents: 'none' }}>{splitLabels[1]}</span>
            </React.Fragment>
          ) : null}
          {annotations.map((an, i) => {
            const pct = categories.length > 1 ? (an.index / (categories.length - 1)) * 100 : 0;
            const c = { incident: 'var(--color-data-negative)', scaleChange: 'var(--color-data-attention)', training: 'var(--color-data-actual)', operational: 'var(--color-text-muted)' }[an.type] || 'var(--color-text-muted)';
            return (
              <span key={`ando${i}`} title={an.label} style={{ position: 'absolute', top: -3, left: `${pct}%`, transform: 'translate(-50%, -100%)', width: 8, height: 8, borderRadius: '50%', background: c, border: '1.5px solid var(--color-surface-card)', cursor: 'default' }} />
            );
          })}
          {refLines.map((rl, i) => (
            <span key={i} style={{ position: 'absolute', right: 2, top: `${((max - rl.value) / (max - yMin)) * 100}%`, transform: 'translateY(-100%)', fontSize: 11, color: 'var(--color-text-muted)', background: 'var(--color-surface-card)', padding: '0 4px', pointerEvents: 'none' }}>{rl.label}</span>
          ))}
          </div>
          <div style={{ position: 'relative', height: 14, marginTop: 6 }}>
            {categories.map((c, i) => {
              if (i % xLabelEvery !== 0) return null;
              const pct = categories.length > 1 ? (i / (categories.length - 1)) * 100 : 0;
              const translate = i === 0 ? '0' : i === categories.length - 1 ? '-100%' : '-50%';
              return (
                <span key={i} style={{ position: 'absolute', left: `${pct}%`, top: 0, transform: `translateX(${translate})`, fontSize: 11, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>
                  {c}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartArea;
