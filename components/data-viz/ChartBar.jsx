import React from 'react';

const toneColor = {
  info: 'var(--color-data-actual)',
  success: 'var(--color-data-positive)',
  warning: 'var(--color-data-attention)',
  critical: 'var(--color-data-negative)',
  ai: 'var(--color-data-forecast)',
  neutral: 'var(--color-text-secondary)',
};

// See tokens/colors.css "Chart categorical accents" — deliberately not the same set as
// toneColor above (no inherent severity meaning for "series N" when a caller omits tone/color).
const CATEGORY_FALLBACK = [
  'var(--color-data-actual)', 'var(--color-data-forecast)', 'var(--color-data-series-1)',
  'var(--color-data-series-2)', 'var(--color-data-series-3)', 'var(--color-text-secondary)',
];

function seriesColor(s, i) {
  return s.color || toneColor[s.tone] || CATEGORY_FALLBACK[i % CATEGORY_FALLBACK.length];
}

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

function MissingD3Notice() {
  return (
    <div style={{ fontSize: 13, color: 'var(--color-text-negative)', background: 'var(--color-data-critical-band)', padding: '10px 14px', borderRadius: '8px', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      BarChart: biblioteca D3 não encontrada — inclua <code>d3.min.js</code> (CDN) na página antes do bundle do design system.
    </div>
  );
}

function LegendRow({ series }) {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
      {series.map((s, i) => s.name ? (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--color-text-muted)' }}>
          <span style={{ width: 9, height: 9, borderRadius: 3, background: seriesColor(s, i), flexShrink: 0 }} />
          {s.name}
        </span>
      ) : null)}
    </div>
  );
}

// Same dark inverse chip as <Tooltip>/<AreaChart>'s hover chip (var(--neutral-950) — "sempre
// escuro, independe do tema", see tokens/colors.css) — kept as its own local copy rather than a
// shared import, matching this file's existing toneColor/CATEGORY_FALLBACK duplication.
function ChartTooltip({ label, items, pos }) {
  return (
    <div
      style={{
        position: 'absolute', ...pos,
        background: 'var(--neutral-950)', color: '#fff', fontSize: 12, fontWeight: 500,
        padding: '8px 11px', borderRadius: '4px', boxShadow: 'var(--shadow-hover)',
        pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 5, lineHeight: 1.6,
      }}
    >
      <div style={{ fontWeight: 700, opacity: 0.65, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: items.length ? 4 : 0 }}>{label}</div>
      {items.map((it, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, borderTop: it.isTotal ? '1px solid rgba(255,255,255,0.2)' : 'none', marginTop: it.isTotal ? 4 : 0, paddingTop: it.isTotal ? 4 : 0 }}>
          <span style={{ width: 7, height: 7, borderRadius: 2, background: it.color, flexShrink: 0, visibility: it.isTotal ? 'hidden' : 'visible' }} />
          {it.name ? <span style={{ opacity: 0.8 }}>{it.name}</span> : null}
          <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums', marginLeft: it.name ? 'auto' : 0, paddingLeft: it.name ? 14 : 0 }}>{it.value}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * BarChart — categorical comparison chart, vertical or horizontal, grouped or stacked. D3
 * (`d3.scaleBand`/`d3.scaleLinear`/`d3.stack`) computes the layout math only; every pixel drawn is
 * still our own inline SVG built from design tokens (colour/dark-mode inherited for free, same as
 * `<AreaChart>`/`<DonutChart>`).
 */
export function ChartBar({
  categories = [],
  series = [],
  orientation = 'vertical',
  mode = 'grouped',
  height = 220,
  rowHeight = 34,
  valueTicks = 4,
  valueFormat = (v) => Math.round(v).toLocaleString('pt-BR'),
  showValue = false,
  legend = false,
  tooltip = true,
  barRadius = 3,
  /** Horizontal orientation only — overlays a cumulative-% Pareto line (dashed, right-side axis
   *  0–100%) across the (caller-sorted, descending) categories. Evolution guide §8.1: "onde está
   *  concentrado" prefers ordered horizontal bars or a Pareto read over a donut. Default false. */
  paretoLine = false,
  /** Show only every Nth category label — avoids crowded/overlapping labels on a dense axis
   *  (e.g. 144 ten-minute intervals). Default 1 (all labels), matching prior behaviour. */
  labelEvery = 1,
  style = {},
}) {
  const [hoverCat, setHoverCat] = React.useState(null);
  if (!window.d3) return <MissingD3Notice />;
  if (!categories.length || !series.length) return null;
  const d3 = window.d3;
  const n = categories.length;
  const isStacked = mode === 'stacked' && series.length > 1;

  const maxVal = isStacked
    ? d3.max(categories.map((_, ci) => d3.sum(series.map((s) => s.data[ci] || 0))))
    : d3.max(series.flatMap((s) => s.data.filter((v) => v !== null && v !== undefined)));
  const vMax = niceMax(Math.max(1, maxVal || 0));
  const tickVals = Array.from({ length: valueTicks + 1 }, (_, i) => (vMax / valueTicks) * i);

  const hoverItems = hoverCat !== null ? (() => {
    const items = series.map((s, si) => {
      const v = s.data[hoverCat];
      if (v === null || v === undefined) return null;
      return { name: s.name, value: valueFormat(v), color: seriesColor(s, si) };
    }).filter(Boolean);
    if (isStacked && items.length > 1) {
      items.push({ value: valueFormat(d3.sum(series.map((s) => s.data[hoverCat] || 0))), color: 'transparent', isTotal: true, name: 'Total' });
    }
    return items;
  })() : [];

  // ---- build per-bar geometry (shared shape for both orientations: index into categories (ci),
  // index into series (si), plus whichever of x/y/width/height that orientation's SVG needs) ----
  function buildBars(catScale, groupScale, valScale) {
    const bars = [];
    if (isStacked) {
      const rows = categories.map((_, ci) => {
        const row = {};
        series.forEach((s, si) => { row[si] = s.data[ci] || 0; });
        return row;
      });
      const layers = d3.stack().keys(d3.range(series.length))(rows);
      layers.forEach((layer, si) => {
        layer.forEach((seg, ci) => {
          const a = valScale(seg[0]);
          const b = valScale(seg[1]);
          bars.push({
            ci, si, value: series[si].data[ci],
            isCap: si === layers.length - 1,
            main: catScale(ci), mainSize: catScale.bandwidth(),
            crossStart: Math.min(a, b), crossSize: Math.abs(b - a),
          });
        });
      });
    } else {
      series.forEach((s, si) => {
        s.data.forEach((v, ci) => {
          if (v === null || v === undefined) return;
          const a = valScale(0);
          const b = valScale(v);
          bars.push({
            ci, si, value: v, isCap: true,
            main: catScale(ci) + groupScale(si), mainSize: groupScale.bandwidth(),
            crossStart: Math.min(a, b), crossSize: Math.abs(b - a),
          });
        });
      });
    }
    return bars;
  }

  if (orientation === 'horizontal' && mode === 'diverging') {
    const s0 = series[0] || { data: [] };
    const data = s0.data || [];
    const posColor = s0.positiveColor || toneColor[s0.positiveTone] || toneColor.success;
    const negColor = s0.negativeColor || toneColor[s0.negativeTone] || toneColor.critical;
    const posLabel = s0.positiveLabel || 'Sobra';
    const negLabel = s0.negativeLabel || 'Déficit';
    const vals = data.filter((v) => v !== null && v !== undefined);
    const posMax = niceMax(Math.max(1, 0, ...vals.map((v) => Math.max(0, v))));
    const negMax = niceMax(Math.max(1, 0, ...vals.map((v) => Math.max(0, -v))));
    const vMax = posMax;
    const vMin = -negMax;
    const W = 460;
    const H = n * rowHeight;
    const catScale = d3.scaleBand().domain(d3.range(n)).range([0, H]).paddingInner(0.32).paddingOuter(0.16);
    const valScale = d3.scaleLinear().domain([vMin, vMax]).range([0, W]);
    const x0 = valScale(0);
    const catAxisWidth = Math.min(160, Math.max(40, Math.max(...categories.map((c) => String(c).length)) * 6.4 + 8));
    const divTicks = [vMin, vMin / 2, 0, vMax / 2, vMax];
    const hoverRowPct = hoverCat !== null ? ((catScale(hoverCat) + catScale.bandwidth() / 2) / H) * 100 : null;
    const hoverRowTranslate = hoverRowPct === null ? '0%' : hoverRowPct < 15 ? '0%' : hoverRowPct > 85 ? '-100%' : '-50%';
    const hoverVal = hoverCat !== null ? data[hoverCat] : null;

    return (
      <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', ...style }}>
        {legend ? (
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--color-text-muted)' }}><span style={{ width: 9, height: 9, borderRadius: 3, background: posColor, flexShrink: 0 }} />{posLabel}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--color-text-muted)' }}><span style={{ width: 9, height: 9, borderRadius: 3, background: negColor, flexShrink: 0 }} />{negLabel}</span>
          </div>
        ) : null}
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ position: 'relative', flexShrink: 0, width: catAxisWidth, height: H }}>
            {categories.map((c, i) => (
              <span key={i} style={{ position: 'absolute', right: 0, left: 0, top: `${((catScale(i) + catScale.bandwidth() / 2) / H) * 100}%`, transform: 'translateY(-50%)', fontSize: 12, fontWeight: 600, color: hoverCat === i ? 'var(--color-text-primary)' : 'var(--color-text-primary)', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {c}
              </span>
            ))}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ position: 'relative' }} onMouseLeave={tooltip ? () => setHoverCat(null) : undefined}>
              <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ display: 'block', overflow: 'visible' }}>
                {divTicks.map((v, i) => { const x = valScale(v); return <line key={i} x1={x} y1={0} x2={x} y2={H} stroke="var(--color-border-subtle)" strokeWidth={1} vectorEffect="non-scaling-stroke" />; })}
                {tooltip ? categories.map((_, ci) => (
                  <rect key={`hl${ci}`} x={0} y={catScale(ci)} width={W} height={catScale.bandwidth()} fill={hoverCat === ci ? 'var(--color-surface-selected)' : 'transparent'} />
                )) : null}
                {data.map((v, ci) => {
                  if (v === null || v === undefined) return null;
                  const xStart = v >= 0 ? x0 : valScale(v);
                  const w2 = Math.abs(valScale(v) - x0);
                  return <rect key={ci} x={xStart} y={catScale(ci)} width={Math.max(0, w2)} height={Math.max(0, catScale.bandwidth())} rx={Math.min(barRadius, catScale.bandwidth() / 2)} fill={v >= 0 ? posColor : negColor} opacity={hoverCat !== null && hoverCat !== ci ? 0.45 : 1} style={{ transition: 'opacity 120ms ease' }} />;
                })}
                <line x1={x0} y1={0} x2={x0} y2={H} stroke="var(--color-border-strong)" strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
                {showValue ? data.map((v, ci) => {
                  if (v === null || v === undefined) return null;
                  const endX = valScale(v);
                  return <text key={`t${ci}`} x={v >= 0 ? endX + 6 : endX - 6} y={catScale(ci) + catScale.bandwidth() / 2} dominantBaseline="middle" textAnchor={v >= 0 ? 'start' : 'end'} fontSize="11" fill="var(--color-text-muted)" vectorEffect="non-scaling-stroke">{valueFormat(v)}</text>;
                }) : null}
                {tooltip ? categories.map((_, ci) => (
                  <rect key={`hz${ci}`} x={0} y={catScale(ci)} width={W} height={catScale.bandwidth()} fill="transparent" onMouseEnter={() => setHoverCat(ci)} />
                )) : null}
              </svg>
              {hoverCat !== null ? (
                <ChartTooltip
                  label={categories[hoverCat]}
                  items={hoverVal === null || hoverVal === undefined ? [] : [{ name: hoverVal >= 0 ? posLabel : negLabel, value: valueFormat(hoverVal), color: hoverVal >= 0 ? posColor : negColor }]}
                  pos={{ left: 8, top: `${hoverRowPct}%`, transform: `translateY(${hoverRowTranslate})` }}
                />
              ) : null}
            </div>
            <div style={{ position: 'relative', height: 14, marginTop: 6 }}>
              {divTicks.map((v, i) => {
                const pct = (valScale(v) / W) * 100;
                return <span key={i} style={{ position: 'absolute', left: `${pct}%`, top: 0, transform: 'translateX(-50%)', fontSize: 11, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>{valueFormat(v)}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (orientation === 'horizontal') {
    const W = 460;
    const H = n * rowHeight;
    const catScale = d3.scaleBand().domain(d3.range(n)).range([0, H]).paddingInner(0.32).paddingOuter(0.16);
    const groupScale = d3.scaleBand().domain(d3.range(series.length)).range([0, catScale.bandwidth()]).padding(0.16);
    const valScale = d3.scaleLinear().domain([0, vMax]).range([0, W]);
    const bars = buildBars(catScale, groupScale, valScale);
    const catAxisWidth = Math.min(160, Math.max(40, Math.max(...categories.map((c) => String(c).length)) * 6.4 + 8));
    const hoverRowPct = hoverCat !== null ? ((catScale(hoverCat) + catScale.bandwidth() / 2) / H) * 100 : null;
    const hoverRowTranslate = hoverRowPct === null ? '0%' : hoverRowPct < 15 ? '0%' : hoverRowPct > 85 ? '-100%' : '-50%';
    // Pareto: cumulative share of the first series' values, in the caller's given (presumably
    // sorted-descending) category order — its own right-side 0–100% scale, independent of vMax.
    const paretoPts = paretoLine && series[0] ? (() => {
      const vals = series[0].data.map((v) => v || 0);
      const total = d3.sum(vals) || 1;
      let acc = 0;
      return vals.map((v, ci) => { acc += v; return [(acc / total) * W, catScale(ci) + catScale.bandwidth() / 2]; });
    })() : null;

    return (
      <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', ...style }}>
        {legend && series.some((s) => s.name) ? <LegendRow series={series} /> : null}
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ position: 'relative', flexShrink: 0, width: catAxisWidth, height: H }}>
            {categories.map((c, i) => (
              <span key={i} style={{ position: 'absolute', right: 0, left: 0, top: `${((catScale(i) + catScale.bandwidth() / 2) / H) * 100}%`, transform: 'translateY(-50%)', fontSize: 12, fontWeight: 600, color: hoverCat === i ? 'var(--color-text-primary)' : 'var(--color-text-primary)', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {c}
              </span>
            ))}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ position: 'relative' }} onMouseLeave={tooltip ? () => setHoverCat(null) : undefined}>
            <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ display: 'block', overflow: 'visible' }}>
              {tickVals.map((v, i) => { const x = valScale(v); return <line key={i} x1={x} y1={0} x2={x} y2={H} stroke="var(--color-border-subtle)" strokeWidth={1} vectorEffect="non-scaling-stroke" />; })}
              {tooltip ? categories.map((_, ci) => (
                <rect key={`hl${ci}`} x={0} y={catScale(ci)} width={W} height={catScale.bandwidth()} fill={hoverCat === ci ? 'var(--color-surface-selected)' : 'transparent'} />
              )) : null}
              {bars.map((b, i) => (
                <rect key={i} x={b.crossStart} y={b.main} width={Math.max(0, b.crossSize)} height={Math.max(0, b.mainSize)} rx={b.isCap ? barRadius : 0} fill={seriesColor(series[b.si], b.si)} opacity={hoverCat !== null && hoverCat !== b.ci ? 0.4 : 1} style={{ transition: 'opacity 120ms ease' }} />
              ))}
              {showValue && !isStacked ? bars.map((b, i) => (
                <text key={`t${i}`} x={b.crossStart + b.crossSize + 6} y={b.main + b.mainSize / 2} dominantBaseline="middle" fontSize="11" fill="var(--color-text-muted)" vectorEffect="non-scaling-stroke">{valueFormat(b.value)}</text>
              )) : null}
              {paretoPts ? <path d={paretoPts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')} fill="none" stroke="var(--color-data-forecast)" strokeWidth={1.5} strokeDasharray="4 3" vectorEffect="non-scaling-stroke" /> : null}
              {paretoPts ? paretoPts.map((p, i) => <circle key={`pp${i}`} cx={p[0]} cy={p[1]} r={2.5} fill="var(--color-data-forecast)" vectorEffect="non-scaling-stroke" />) : null}
              {tooltip ? categories.map((_, ci) => (
                <rect key={`hz${ci}`} x={0} y={catScale(ci)} width={W} height={catScale.bandwidth()} fill="transparent" onMouseEnter={() => setHoverCat(ci)} />
              )) : null}
            </svg>
            {hoverCat !== null ? (
              <ChartTooltip label={categories[hoverCat]} items={hoverItems} pos={{ left: 8, top: `${hoverRowPct}%`, transform: `translateY(${hoverRowTranslate})` }} />
            ) : null}
            </div>
            <div style={{ position: 'relative', height: 14, marginTop: 6 }}>
              {tickVals.map((v, i) => {
                const pct = (valScale(v) / W) * 100;
                return <span key={i} style={{ position: 'absolute', left: `${pct}%`, top: 0, transform: i === 0 ? 'none' : 'translateX(-50%)', fontSize: 11, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>{valueFormat(v)}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---- diverging: a single signed series, bars growing from zero (up/right for positive, down/
  // left for negative), e.g. "saldo de horário" or "contribuição para o desvio". Vertical and
  // horizontal both handled (horizontal branch is above, before the grouped/stacked path) — this
  // is the vertical case; kept as its own self-contained path so the grouped/stacked geometry
  // below stays untouched. ----
  if (mode === 'diverging') {
    const s0 = series[0] || { data: [] };
    const data = s0.data || [];
    const posColor = s0.positiveColor || toneColor[s0.positiveTone] || toneColor.success;
    const negColor = s0.negativeColor || toneColor[s0.negativeTone] || toneColor.critical;
    const posLabel = s0.positiveLabel || 'Sobra';
    const negLabel = s0.negativeLabel || 'Déficit';
    const vals = data.filter((v) => v !== null && v !== undefined);
    const posMax = niceMax(Math.max(1, 0, ...vals.map((v) => Math.max(0, v))));
    const negMax = niceMax(Math.max(1, 0, ...vals.map((v) => Math.max(0, -v))));
    const vMax = posMax;
    const vMin = -negMax;
    const W = 600;
    const H = height;
    const catScale = d3.scaleBand().domain(d3.range(n)).range([0, W]).paddingInner(0.22).paddingOuter(0.08);
    const valScale = d3.scaleLinear().domain([vMin, vMax]).range([H, 0]);
    const y0 = valScale(0);
    const divTicks = [vMax, vMax / 2, 0, vMin / 2, vMin];
    const yAxisWidth = Math.max(...divTicks.map((v) => String(valueFormat(v)).length)) * 6.5 + 6;
    const hoverPct = hoverCat !== null ? ((catScale(hoverCat) + catScale.bandwidth() / 2) / W) * 100 : null;
    const hoverTranslate = hoverPct === null ? '-50%' : hoverPct < 12 ? '0%' : hoverPct > 88 ? '-100%' : '-50%';
    const hoverVal = hoverCat !== null ? data[hoverCat] : null;

    return (
      <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', ...style }}>
        {legend ? (
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--color-text-muted)' }}><span style={{ width: 9, height: 9, borderRadius: 3, background: posColor, flexShrink: 0 }} />{posLabel}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--color-text-muted)' }}><span style={{ width: 9, height: 9, borderRadius: 3, background: negColor, flexShrink: 0 }} />{negLabel}</span>
          </div>
        ) : null}
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ position: 'relative', flexShrink: 0, width: yAxisWidth, height: H }}>
            {divTicks.map((v, i) => (
              <span key={i} style={{ position: 'absolute', right: 0, left: 0, top: `${(valScale(v) / H) * 100}%`, transform: 'translateY(-50%)', fontSize: 11, color: 'var(--color-text-muted)', textAlign: 'right', whiteSpace: 'nowrap' }}>{valueFormat(v)}</span>
            ))}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ position: 'relative' }} onMouseLeave={tooltip ? () => setHoverCat(null) : undefined}>
              <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ display: 'block', overflow: 'visible' }}>
                {divTicks.map((v, i) => <line key={i} x1={0} y1={valScale(v)} x2={W} y2={valScale(v)} stroke="var(--color-border-subtle)" strokeWidth={1} vectorEffect="non-scaling-stroke" />)}
                {tooltip ? categories.map((_, ci) => (
                  <rect key={`hl${ci}`} x={catScale(ci)} y={0} width={catScale.bandwidth()} height={H} fill={hoverCat === ci ? 'var(--color-surface-selected)' : 'transparent'} />
                )) : null}
                {data.map((v, ci) => {
                  if (v === null || v === undefined) return null;
                  const yTop = v >= 0 ? valScale(v) : y0;
                  const h2 = Math.abs(valScale(v) - y0);
                  return <rect key={ci} x={catScale(ci)} y={yTop} width={catScale.bandwidth()} height={Math.max(0, h2)} rx={Math.min(barRadius, catScale.bandwidth() / 2)} fill={v >= 0 ? posColor : negColor} opacity={hoverCat !== null && hoverCat !== ci ? 0.45 : 1} style={{ transition: 'opacity 120ms ease' }} />;
                })}
                <line x1={0} y1={y0} x2={W} y2={y0} stroke="var(--color-border-strong)" strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
                {tooltip ? categories.map((_, ci) => (
                  <rect key={`hz${ci}`} x={catScale(ci)} y={0} width={catScale.bandwidth()} height={H} fill="transparent" onMouseEnter={() => setHoverCat(ci)} />
                )) : null}
              </svg>
              {hoverCat !== null ? (
                <ChartTooltip
                  label={categories[hoverCat]}
                  items={hoverVal === null || hoverVal === undefined ? [] : [{ name: hoverVal >= 0 ? posLabel : negLabel, value: valueFormat(hoverVal), color: hoverVal >= 0 ? posColor : negColor }]}
                  pos={{ left: `${hoverPct}%`, top: 6, transform: `translateX(${hoverTranslate})` }}
                />
              ) : null}
            </div>
            <div style={{ position: 'relative', height: 14, marginTop: 6 }}>
              {categories.map((c, i) => {
                if (i % labelEvery !== 0) return null;
                const pct = ((catScale(i) + catScale.bandwidth() / 2) / W) * 100;
                return <span key={i} style={{ position: 'absolute', left: `${pct}%`, top: 0, transform: 'translateX(-50%)', fontSize: 11, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>{c}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---- vertical ----
  const W = 600;
  const H = height;
  const catScale = d3.scaleBand().domain(d3.range(n)).range([0, W]).paddingInner(0.35).paddingOuter(0.2);
  const groupScale = d3.scaleBand().domain(d3.range(series.length)).range([0, catScale.bandwidth()]).padding(0.18);
  const valScale = d3.scaleLinear().domain([0, vMax]).range([H, 0]);
  const bars = buildBars(catScale, groupScale, valScale);
  const yAxisWidth = Math.max(...tickVals.map((v) => String(valueFormat(v)).length)) * 6.5 + 6;
  const hoverColPct = hoverCat !== null ? ((catScale(hoverCat) + catScale.bandwidth() / 2) / W) * 100 : null;
  const hoverColTranslate = hoverColPct === null ? '-50%' : hoverColPct < 12 ? '0%' : hoverColPct > 88 ? '-100%' : '-50%';

  return (
    <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', ...style }}>
      {legend && series.some((s) => s.name) ? <LegendRow series={series} /> : null}
      <div style={{ display: 'flex', gap: 10 }}>
        <div style={{ position: 'relative', flexShrink: 0, width: yAxisWidth, height: H }}>
          {tickVals.map((v, i) => (
            <span key={i} style={{ position: 'absolute', right: 0, left: 0, top: `${100 - (v / vMax) * 100}%`, transform: 'translateY(-50%)', fontSize: 11, color: 'var(--color-text-muted)', textAlign: 'right', whiteSpace: 'nowrap' }}>
              {valueFormat(v)}
            </span>
          ))}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ position: 'relative' }} onMouseLeave={tooltip ? () => setHoverCat(null) : undefined}>
          <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ display: 'block', overflow: 'visible' }}>
            {tickVals.map((v, i) => { const y = valScale(v); return <line key={i} x1={0} y1={y} x2={W} y2={y} stroke="var(--color-border-subtle)" strokeWidth={1} vectorEffect="non-scaling-stroke" />; })}
            {tooltip ? categories.map((_, ci) => (
              <rect key={`hl${ci}`} x={catScale(ci)} y={0} width={catScale.bandwidth()} height={H} fill={hoverCat === ci ? 'var(--color-surface-selected)' : 'transparent'} />
            )) : null}
            {bars.map((b, i) => (
              <rect key={i} x={b.main} y={b.crossStart} width={Math.max(0, b.mainSize)} height={Math.max(0, b.crossSize)} rx={b.isCap ? barRadius : 0} fill={seriesColor(series[b.si], b.si)} opacity={hoverCat !== null && hoverCat !== b.ci ? 0.4 : 1} style={{ transition: 'opacity 120ms ease' }} />
            ))}
            {showValue && !isStacked ? bars.map((b, i) => (
              <text key={`t${i}`} x={b.main + b.mainSize / 2} y={b.crossStart - 5} textAnchor="middle" fontSize="11" fill="var(--color-text-muted)" vectorEffect="non-scaling-stroke">{valueFormat(b.value)}</text>
            )) : null}
            {tooltip ? categories.map((_, ci) => (
              <rect key={`hz${ci}`} x={catScale(ci)} y={0} width={catScale.bandwidth()} height={H} fill="transparent" onMouseEnter={() => setHoverCat(ci)} />
            )) : null}
          </svg>
          {hoverCat !== null ? (
            <ChartTooltip label={categories[hoverCat]} items={hoverItems} pos={{ left: `${hoverColPct}%`, top: 6, transform: `translateX(${hoverColTranslate})` }} />
          ) : null}
          </div>
          <div style={{ position: 'relative', height: 14, marginTop: 6 }}>
            {categories.map((c, i) => {
              if (i % labelEvery !== 0) return null;
              const pct = ((catScale(i) + catScale.bandwidth() / 2) / W) * 100;
              return <span key={i} style={{ position: 'absolute', left: `${pct}%`, top: 0, transform: 'translateX(-50%)', fontSize: 11, color: hoverCat === i ? 'var(--color-text-primary)' : 'var(--color-text-muted)', whiteSpace: 'nowrap', maxWidth: `${(catScale.bandwidth() / W) * 140}%`, overflow: 'hidden', textOverflow: 'ellipsis' }}>{c}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartBar;
