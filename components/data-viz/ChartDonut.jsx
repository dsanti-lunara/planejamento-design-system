import React from 'react';

const toneColor = {
  info: 'var(--color-data-actual)',
  success: 'var(--color-data-positive)',
  warning: 'var(--color-data-attention)',
  critical: 'var(--color-data-negative)',
  ai: 'var(--color-data-forecast)',
  neutral: 'var(--color-text-secondary)',
};

// Default cycle for data with no explicit tone/color — see tokens/colors.css "Chart categorical
// accents" for why this is NOT the same set as toneColor above (no inherent severity meaning).
const CATEGORY_FALLBACK = [
  'var(--color-data-actual)', 'var(--color-data-forecast)', 'var(--color-data-series-1)',
  'var(--color-data-series-2)', 'var(--color-data-series-3)', 'var(--color-text-secondary)',
];

function sliceColor(d, i) {
  return d.color || toneColor[d.tone] || CATEGORY_FALLBACK[i % CATEGORY_FALLBACK.length];
}

function MissingD3Notice({ what }) {
  return (
    <div style={{ font: '400 12px/16px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', color: 'var(--color-text-negative)', background: 'var(--color-data-critical-band)', padding: '10px 14px', borderRadius: '8px', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {what}: biblioteca D3 não encontrada — inclua <code>d3.min.js</code> (CDN) na página antes do bundle do design system.
    </div>
  );
}

function Legend({ data, hovered, setHovered, valueFormat, total, showPct }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 9, minWidth: 0 }}>
      {data.map((d, i) => {
        const pct = total ? Math.round((d.value / total) * 100) : 0;
        const dim = hovered !== null && hovered !== i;
        return (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ display: 'flex', alignItems: 'center', gap: 8, font: '400 12px/16px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', opacity: dim ? 0.45 : 1, transition: 'opacity 150ms ease' }}
          >
            <span style={{ width: 9, height: 9, borderRadius: 3, background: sliceColor(d, i), flexShrink: 0 }} />
            <span style={{ color: 'var(--color-text-primary)', flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.label}</span>
            <span style={{ color: 'var(--color-text-muted)', fontVariantNumeric: 'tabular-nums', flexShrink: 0 }}>{valueFormat(d.value)}{showPct ? ` · ${pct}%` : ''}</span>
          </div>
        );
      })}
    </div>
  );
}

/**
 * DonutChart — categorical share chart (D3 computes the arc geometry via `d3.pie`/`d3.arc`;
 * every pixel drawn is still our own inline SVG/JSX, so it inherits design tokens — colour,
 * dark-mode — exactly like `<AreaChart>`/`<Sparkline>` do).
 */
export function ChartDonut({
  data = [],
  size = 180,
  thickness = null,
  padAngle = 2,
  cornerRadius = 3,
  centerLabel = null,
  centerValue = null,
  legend = false,
  // 'row' (default) sits the donut and legend side by side — fine when there's a wide card
  // to spare. 'column' stacks the legend below the donut so it gets the card's FULL width
  // instead of card-width-minus-donut, which matters once labels are more than a word or two.
  layout = 'row',
  // Legend shows "value · pct%" by default (raw counts + their share). Set false when `data`
  // values are themselves already percentages (e.g. an adherence/time-split donut) — showing
  // both would just repeat the same number twice ("78,6% · 79%").
  showPct = true,
  valueFormat = (v) => Math.round(v).toLocaleString('pt-BR'),
  style = {},
}) {
  const [hovered, setHovered] = React.useState(null);
  if (!window.d3) return <MissingD3Notice what="DonutChart" />;
  if (!data.length) return null;
  const d3 = window.d3;

  const radius = size / 2;
  const th = thickness || radius * 0.32;
  const total = data.reduce((s, d) => s + (d.value || 0), 0);
  const pieGen = d3.pie().value((d) => d.value).sort(null).padAngle((padAngle * Math.PI) / 180);
  const arcGen = d3.arc().innerRadius(radius - th).outerRadius(radius).cornerRadius(cornerRadius);
  const arcs = pieGen(data);

  const activeIdx = hovered;
  const centerTitle = activeIdx !== null ? data[activeIdx].label : centerLabel;
  const centerVal = activeIdx !== null ? valueFormat(data[activeIdx].value) : centerValue;
  const showCenter = Boolean(centerTitle || centerVal);

  const donut = (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block', overflow: 'visible' }}>
        <g transform={`translate(${radius},${radius})`}>
          {arcs.map((a, i) => {
            const isHover = activeIdx === i;
            const dim = activeIdx !== null && !isHover;
            return (
              <path
                key={i}
                d={arcGen(a)}
                fill={sliceColor(a.data, i)}
                opacity={dim ? 0.35 : 1}
                style={{ cursor: 'default', transformBox: 'fill-box', transformOrigin: 'center', transform: isHover ? 'scale(1.035)' : 'scale(1)', transition: 'opacity 150ms ease, transform 150ms ease' }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              />
            );
          })}
        </g>
      </svg>
      {showCenter ? (
        <div style={{ position: 'absolute', inset: th + 6, borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ fontSize: Math.max(13, size * 0.155), fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.15, letterSpacing: '-0.01em' }}>{centerVal}</div>
          {centerTitle ? <div style={{ fontSize: Math.max(11, size * 0.072), color: 'var(--color-text-muted)', marginTop: 3, maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{centerTitle}</div> : null}
        </div>
      ) : null}
    </div>
  );

  if (!legend) return <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', ...style }}>{donut}</div>;
  const isColumn = layout === 'column';
  return (
    <div style={{ display: 'flex', flexDirection: isColumn ? 'column' : 'row', alignItems: isColumn ? 'stretch' : 'center', gap: isColumn ? 14 : 22, fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', ...style }}>
      {donut}
      <Legend data={data} hovered={hovered} setHovered={setHovered} valueFormat={valueFormat} total={total} showPct={showPct} />
    </div>
  );
}

export default ChartDonut;
