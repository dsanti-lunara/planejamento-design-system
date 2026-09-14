import React from 'react';
import { ChartDetailCard } from './ChartDetailCard';

const toneColor = {
  info: 'var(--nh-info)', success: 'var(--nh-success)', warning: 'var(--nh-warning)',
  critical: 'var(--nh-critical)', ai: 'var(--nh-ai)', neutral: 'var(--nh-neutral)',
};
const toneBg = {
  info: 'var(--nh-info-bg)', success: 'var(--nh-success-bg)', warning: 'var(--nh-warning-bg)',
  critical: 'var(--nh-critical-bg)', ai: 'var(--nh-ai-bg)', neutral: 'var(--nh-neutral-bg)',
};
const toneStrong = {
  info: 'var(--nh-blue-700)', success: 'var(--nh-success-strong)', warning: 'var(--nh-warning-strong)',
  critical: 'var(--nh-critical-strong)', ai: 'var(--nh-purple-700)', neutral: 'var(--nh-ink-700)',
};

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

function defaultValueFormat(v) {
  return `${v.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;
}

/** Small arrow glyph — stem + head, simple shapes only (as basic as a square/circle), drawn (not
 *  a font glyph) so it renders identically everywhere. Used as the delta pill's direction cue and
 *  as the hover card's default icon. */
function ArrowIcon({ up, color, size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      {up ? <path d="M12 19V5M5 12l7-7 7 7" /> : <path d="M12 5v14M19 12l-7 7-7-7" />}
    </svg>
  );
}

/**
 * WaterfallChart — a bridge/waterfall chart: fixed "total" bars connected by floating delta bars
 * that step a running value up or down, with a dashed line tracing the accumulated effect
 * through every step. Reach for it when a handful of named factors explain the
 * gap between a starting and ending total (an "esteira" impact breakdown), not a category
 * comparison (`BarChart`) or a trend over time (`AreaChart`).
 *
 * Plain inline SVG + CSS, no chart library — portable enough to reimplement in a non-React host
 * (Power BI custom visual, Power Apps canvas component, plain web dashboard) from the same
 * `items` contract; only the `var(--nh-*)` tokens need remapping to that host's palette.
 *
 * Hovering a bar shows a `<ChartDetailCard>` breakdown (impact, before/after running totals, and
 * each item's own optional `description`/`detailHref`) — see that component if another chart
 * needs the same rich hover card.
 */
export function WaterfallChart({
  items = [],
  height = 260,
  valueTicks = 5,
  valueFormat = defaultValueFormat,
  deltaFormat = (v) => `${v >= 0 ? '+' : ''}${valueFormat(v)}`,
  yAxisLabel = null,
  totalColor = 'var(--nh-blue-600)',
  increaseTone = 'success',
  decreaseTone = 'critical',
  increaseColor = null,
  decreaseColor = null,
  totalLabel = 'Total inicial / final',
  increaseLabel = 'Ganho (positivo)',
  decreaseLabel = 'Impacto negativo',
  positiveBadgeLabel = 'Positivo',
  negativeBadgeLabel = 'Negativo',
  detailLabels = {},
  showConnectors = true,
  showGroupLabels = false,
  driverGroupLabel = 'Fatores de impacto',
  legend = true,
  legendNote = 'Valores em %',
  barRadius = 8,
  barWidthRatio = 0.46,
  tooltip = true,
  style = {},
}) {
  const [hover, setHover] = React.useState(null);
  if (!items.length) return null;

  const labels = {
    impact: 'Impacto (p.p.)', before: 'Valor inicial (acumulado)', after: 'Valor final (acumulado)',
    description: 'Descrição', more: 'Detalhamento', moreCta: 'Ver mais', total: 'Valor',
    ...detailLabels,
  };

  const incColor = increaseColor || toneColor[increaseTone] || toneColor.success;
  const decColor = decreaseColor || toneColor[decreaseTone] || toneColor.critical;
  const incBg = increaseColor ? 'var(--nh-line-100)' : (toneBg[increaseTone] || toneBg.success);
  const decBg = decreaseColor ? 'var(--nh-line-100)' : (toneBg[decreaseTone] || toneBg.critical);
  const incStrong = increaseColor || (toneStrong[increaseTone] || toneStrong.success);
  const decStrong = decreaseColor || (toneStrong[decreaseTone] || toneStrong.critical);

  let running = 0;
  const bars = items.map((it) => {
    if (it.isTotal) {
      running = it.value;
      return { ...it, kind: 'total', barBottom: 0, barTop: it.value, runStart: it.value, running };
    }
    const prev = running;
    running = running + it.value;
    return {
      ...it, kind: it.value >= 0 ? 'increase' : 'decrease',
      barBottom: Math.min(prev, running), barTop: Math.max(prev, running), runStart: prev, running,
    };
  });

  const groups = [];
  { let runStart = null;
    bars.forEach((b, i) => {
      if (b.kind === 'total') { if (runStart !== null) { groups.push({ start: runStart, end: i - 1 }); runStart = null; } }
      else if (runStart === null) runStart = i;
    });
    if (runStart !== null) groups.push({ start: runStart, end: bars.length - 1 });
  }

  const maxVal = Math.max(...bars.map((b) => b.barTop), 0);
  const minVal = Math.min(...bars.map((b) => b.barBottom), 0);
  const vMax = niceMax(Math.max(1, maxVal));
  const vMin = minVal < 0 ? -niceMax(Math.max(1, -minVal)) : 0;
  const tickVals = Array.from({ length: valueTicks + 1 }, (_, i) => vMin + ((vMax - vMin) / valueTicks) * i);

  const W = 600;
  const H = height;
  const n = bars.length;
  const slotW = W / n;
  const barW = slotW * barWidthRatio;
  const valScale = (v) => H - ((v - vMin) / (vMax - vMin)) * H;
  const slotCenter = (i) => slotW * i + slotW / 2;
  const barX = (i) => slotCenter(i) - barW / 2;

  const yAxisWidth = Math.max(...tickVals.map((v) => String(valueFormat(v)).length)) * 6.5 + 8 + (yAxisLabel ? 20 : 0);
  const tracePoints = bars.map((b, i) => [slotCenter(i), valScale(b.running)]);
  const tracePath = tracePoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');

  function detailFor(b) {
    if (b.kind === 'total') {
      return { icon: <ArrowIcon up size={14} color={totalColor} />, iconTone: 'info', title: b.label, badge: null, rows: [{ label: labels.total, value: valueFormat(b.value) }] };
    }
    const isUp = b.kind === 'increase';
    const strong = isUp ? incStrong : decStrong;
    const rows = [
      { label: labels.impact, value: deltaFormat(b.value), tone: isUp ? 'success' : 'critical' },
      { label: labels.before, value: valueFormat(b.runStart) },
      { label: labels.after, value: valueFormat(b.running) },
    ];
    if (b.description) rows.push({ label: labels.description, value: b.description, full: true });
    if (b.detailHref) rows.push({ label: labels.more, value: <a href={b.detailHref} target="_blank" rel="noreferrer" style={{ color: 'var(--nh-blue-600)', fontWeight: 600, textDecoration: 'none' }}>{labels.moreCta} ↗</a>, divider: true });
    return {
      icon: b.icon || <ArrowIcon up={isUp} size={14} color={strong} />, iconTone: isUp ? 'success' : 'critical',
      title: b.label, badge: { label: isUp ? positiveBadgeLabel : negativeBadgeLabel, tone: isUp ? 'success' : 'critical' }, rows,
    };
  }

  return (
    <div style={{ fontFamily: 'var(--font-sans)', ...style }}>
      {showGroupLabels && groups.length ? (
        <div style={{ position: 'relative', height: 22, marginBottom: 2, marginLeft: yAxisWidth + 10 }}>
          {groups.map((g, gi) => {
            const leftPct = (slotW * g.start / W) * 100;
            const rightPct = (slotW * (g.end + 1) / W) * 100;
            return (
              <div key={gi} style={{ position: 'absolute', left: `${leftPct}%`, width: `${rightPct - leftPct}%`, top: 0, textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>{driverGroupLabel}</div>
                <div style={{ position: 'relative', height: 5 }}>
                  <div style={{ position: 'absolute', left: 0, right: 0, top: 0, borderTop: '1px solid var(--nh-line-300)' }} />
                  <div style={{ position: 'absolute', left: 0, top: 0, width: 1, height: 5, background: 'var(--nh-line-300)' }} />
                  <div style={{ position: 'absolute', right: 0, top: 0, width: 1, height: 5, background: 'var(--nh-line-300)' }} />
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
      <div style={{ display: 'flex', gap: 10 }}>
        <div style={{ position: 'relative', flexShrink: 0, width: yAxisWidth, height: H }}>
          {yAxisLabel ? (
            <span style={{ position: 'absolute', left: 0, top: '50%', transform: 'translate(0, -50%) rotate(-90deg)', transformOrigin: 'left center', fontSize: 11, fontWeight: 600, color: 'var(--text-faint)', whiteSpace: 'nowrap' }}>{yAxisLabel}</span>
          ) : null}
          {tickVals.map((v, i) => (
            <span key={i} style={{ position: 'absolute', right: 0, left: 0, top: `${(valScale(v) / H) * 100}%`, transform: 'translateY(-50%)', fontSize: 11, color: 'var(--text-faint)', textAlign: 'right', whiteSpace: 'nowrap' }}>
              {valueFormat(v)}
            </span>
          ))}
        </div>
        <div style={{ flex: 1, minWidth: 0, position: 'relative' }}>
          <div style={{ position: 'relative' }} onMouseLeave={tooltip ? () => setHover(null) : undefined}>
            <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ display: 'block', overflow: 'visible' }}>
              {tickVals.map((v, i) => <line key={i} x1={0} y1={valScale(v)} x2={W} y2={valScale(v)} stroke="var(--nh-line-100)" strokeWidth={1} strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />)}
              {vMin < 0 ? <line x1={0} y1={valScale(0)} x2={W} y2={valScale(0)} stroke="var(--nh-line-300)" strokeWidth={1.2} vectorEffect="non-scaling-stroke" /> : null}
              {tooltip ? bars.map((_, i) => (
                <rect key={`hl${i}`} x={slotW * i} y={0} width={slotW} height={H} fill={hover === i ? 'var(--nh-blue-50)' : 'transparent'} />
              )) : null}
              {bars.map((b, i) => {
                const y = valScale(b.barTop);
                const h = Math.max(0, valScale(b.barBottom) - valScale(b.barTop));
                const isHover = hover === i;
                const dim = hover !== null && !isHover;
                if (b.kind === 'total') {
                  return <rect key={i} x={barX(i)} y={y} width={barW} height={h} rx={barRadius} fill={totalColor} stroke={isHover ? 'var(--nh-blue-900)' : 'transparent'} strokeWidth={2} opacity={dim ? 0.82 : 1} style={{ transition: 'opacity 150ms ease, filter 150ms ease', filter: isHover ? 'drop-shadow(0 3px 6px rgba(15,23,42,.22))' : 'none' }} />;
                }
                const color = b.kind === 'increase' ? incStrong : decStrong;
                const hh = Math.max(9, h);
                const rx = Math.min(3, hh / 3, barW / 3);
                return <rect key={i} x={barX(i)} y={y} width={barW} height={hh} rx={rx} fill={color} stroke={isHover ? 'var(--nh-ink-900)' : 'transparent'} strokeWidth={1.5} opacity={dim ? 0.78 : 1} style={{ transition: 'opacity 150ms ease, filter 150ms ease', filter: isHover ? 'drop-shadow(0 3px 6px rgba(15,23,42,.22))' : 'none' }} />;
              })}
              {showConnectors ? (
                <>
                  <path d={tracePath} fill="none" stroke="var(--nh-ink-400)" strokeWidth={1.25} strokeDasharray="1 4" strokeLinecap="round" vectorEffect="non-scaling-stroke" opacity={0.85} />
                  {tracePoints.map((p, i) => <circle key={`tp${i}`} cx={p[0]} cy={p[1]} r={hover === i ? 3.5 : 2} fill={hover === i ? 'var(--nh-ink-900)' : 'var(--nh-ink-400)'} opacity={hover === i ? 1 : 0.85} style={{ transition: 'r 150ms ease, fill 150ms ease' }} />)}
                </>
              ) : null}
              {tooltip ? bars.map((_, i) => (
                <rect key={`hz${i}`} x={slotW * i} y={0} width={slotW} height={H} fill="transparent" style={{ cursor: 'pointer' }} onMouseEnter={() => setHover(i)} />
              )) : null}
            </svg>
            {bars.map((b, i) => {
              const leftPct = (slotCenter(i) / W) * 100;
              const topPct = (valScale(b.barTop) / H) * 100;
              const bottomPct = (valScale(b.barBottom) / H) * 100;
              return (
                <React.Fragment key={i}>
                  {b.kind === 'total' ? (
                    <div style={{ position: 'absolute', left: `${leftPct}%`, top: `${topPct}%`, transform: `translate(-50%, calc(-100% - 8px)) scale(${hover === i ? 1.06 : 1})`, transition: 'transform 150ms ease', fontSize: 16, fontWeight: 700, color: 'var(--text-heading)', letterSpacing: '-0.01em', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>
                      {valueFormat(b.value)}
                    </div>
                  ) : (
                    <div style={{ position: 'absolute', left: `${leftPct}%`, top: `${topPct}%`, transform: `translate(-50%, calc(-100% - 10px)) scale(${hover === i ? 1.08 : 1})`, transformOrigin: 'bottom center', transition: 'transform 150ms ease, box-shadow 150ms ease', display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 999, fontSize: 13, fontWeight: 700, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap', background: b.kind === 'increase' ? incBg : decBg, color: b.kind === 'increase' ? incStrong : decStrong, boxShadow: hover === i ? 'var(--shadow-md)' : 'var(--shadow-sm)' }}>
                      <ArrowIcon up={b.kind === 'increase'} color={b.kind === 'increase' ? incStrong : decStrong} size={13} />
                      {deltaFormat(b.value)}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
            {hover !== null ? (() => {
              const b = bars[hover];
              const d = detailFor(b);
              const leftPct = (slotCenter(hover) / W) * 100;
              const hAlign = leftPct < 22 ? 'start' : leftPct > 78 ? 'end' : 'center';
              const translateX = hAlign === 'start' ? '0%' : hAlign === 'end' ? '-100%' : '-50%';
              const pointerLeft = hAlign === 'start' ? 26 : hAlign === 'end' ? 'calc(100% - 26px)' : '50%';
              const cardWidth = b.description || b.detailHref ? 270 : 232;
              const estCardH = 74 + (b.kind === 'total' ? 26 : 78) + (b.description ? 44 : 0) + (b.detailHref ? 26 : 0) + 18;
              const spaceBelow = H - valScale(b.barBottom);
              const spaceAbove = valScale(b.barTop);
              const fitsBelow = spaceBelow >= estCardH;
              const fitsAbove = spaceAbove >= estCardH;
              const placeBelow = fitsBelow || (!fitsAbove && spaceBelow >= spaceAbove);
              const anchorPct = (placeBelow ? valScale(b.barBottom) : valScale(b.barTop)) / H * 100;
              const translateY = placeBelow ? '14px' : 'calc(-100% - 14px)';
              return (
                <div style={{ position: 'absolute', left: `${leftPct}%`, top: `${anchorPct}%`, transform: `translate(${translateX}, ${translateY})`, zIndex: 5 }}>
                  <ChartDetailCard icon={d.icon} iconTone={d.iconTone} title={d.title} badge={d.badge} rows={d.rows} width={cardWidth} pointerSide={placeBelow ? 'top' : 'bottom'} pointerLeft={pointerLeft} />
                </div>
              );
            })() : null}
          </div>
          <div style={{ position: 'relative', height: 40, marginTop: 8 }}>
            {bars.map((b, i) => (
              <span key={i} style={{ position: 'absolute', left: `${(slotCenter(i) / W) * 100}%`, top: 0, width: `${(slotW / W) * 92}%`, boxSizing: 'border-box', transform: 'translateX(-50%)', fontSize: 11, fontWeight: b.kind === 'total' ? 700 : 500, color: hover === i ? 'var(--text-heading)' : 'var(--text-body)', whiteSpace: 'normal', overflowWrap: 'break-word', wordBreak: 'normal', lineHeight: 1.3, textAlign: 'center' }}>
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      {legend ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginTop: 16, padding: '10px 14px', background: 'var(--surface-card-alt)', border: '1px solid var(--nh-line-100)', borderRadius: 'var(--r-md)', fontSize: 12, color: 'var(--text-muted)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span style={{ width: 12, height: 12, borderRadius: 4, background: totalColor, flexShrink: 0 }} />{totalLabel}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span style={{ width: 12, height: 12, borderRadius: 4, background: decStrong, flexShrink: 0 }} />{decreaseLabel}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span style={{ width: 12, height: 12, borderRadius: 4, background: incStrong, flexShrink: 0 }} />{increaseLabel}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span style={{ width: 16, height: 0, borderTop: '1.5px dotted var(--nh-ink-400)', flexShrink: 0 }} />Cálculo acumulado</span>
          {legendNote ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 'auto', color: 'var(--text-faint)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><line x1="12" y1="16" x2="12" y2="11" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
              {legendNote}
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
