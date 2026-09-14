import React from 'react';

const toneVar = {
  info: '--color-data-actual',
  success: '--color-data-positive',
  warning: '--color-data-attention',
  critical: '--color-data-negative',
  ai: '--color-data-forecast',
  neutral: '--color-text-secondary',
};

function ChartTooltip({ label, value, pos }) {
  return (
    <div style={{ position: 'absolute', ...pos, background: 'var(--neutral-950)', color: '#fff', fontSize: 12, fontWeight: 500, padding: '8px 11px', borderRadius: '4px', boxShadow: 'var(--shadow-hover)', pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 5, lineHeight: 1.5 }}>
      <div style={{ fontWeight: 700, opacity: 0.65, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>{label}</div>
      <div style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{value}</div>
    </div>
  );
}

/**
 * Heatmap — matrix of rows × columns (day-of-week × hour, category × interval) shaded by value
 * intensity. Two scales:
 *  - `sequential` (default): a single tone, opacity ramps from 0 (min) to 1 (max) — for volume/
 *    counts with no positive/negative meaning.
 *  - `diverging`: two tones either side of a zero midpoint (default success/critical) — for
 *    signed deviation-from-plan data (e.g. NS desvio p.p.).
 * Colour is produced with `color-mix(in srgb, <tone-token> X%, var(--color-surface-card))` so it rides
 * the same CSS custom properties as every other chart here — no hardcoded hex, dark mode free.
 */
export function ChartHeatmap({
  rows = [],
  columns = [],
  data = [],
  scale = 'sequential',
  tone = 'info',
  positiveTone = 'success',
  negativeTone = 'critical',
  domain = null,
  valueFormat = (v) => Math.round(v * 10) / 10,
  labelEvery = 1,
  legend = true,
  legendLabels = null,
  rowLabelWidth = 84,
  cellHeight = 22,
  style = {},
}) {
  const [hover, setHover] = React.useState(null);
  if (!rows.length || !columns.length) return null;
  const flat = data.flat().filter((v) => v !== null && v !== undefined);
  const [dMin, dMax] = domain || (scale === 'diverging'
    ? (() => { const m = Math.max(1e-9, ...flat.map((v) => Math.abs(v))); return [-m, m]; })()
    : [Math.min(0, ...flat), Math.max(1, ...flat)]);
  const toneToken = toneVar[tone] || toneVar.info;
  const posToken = toneVar[positiveTone] || toneVar.success;
  const negToken = toneVar[negativeTone] || toneVar.critical;

  function cellBg(v) {
    if (v === null || v === undefined) return 'var(--color-surface-subtle)';
    if (scale === 'diverging') {
      const m = Math.max(Math.abs(dMin), Math.abs(dMax)) || 1;
      const pct = Math.min(1, Math.abs(v) / m) * 88 + (v !== 0 ? 6 : 0);
      const token = v >= 0 ? posToken : negToken;
      return `color-mix(in srgb, var(${token}) ${pct.toFixed(1)}%, var(--color-surface-card))`;
    }
    const span = dMax - dMin || 1;
    const pct = Math.min(1, Math.max(0, (v - dMin) / span)) * 88 + 6;
    return `color-mix(in srgb, var(${toneToken}) ${pct.toFixed(1)}%, var(--color-surface-card))`;
  }

  const legendStops = scale === 'diverging'
    ? [{ t: negToken, l: legendLabels?.min ?? valueFormat(dMin) }, { t: null, l: legendLabels?.mid ?? valueFormat(0) }, { t: posToken, l: legendLabels?.max ?? valueFormat(dMax) }]
    : [{ t: null, l: legendLabels?.min ?? 'Menor' }, { t: toneToken, l: legendLabels?.max ?? 'Maior' }];

  return (
    <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', ...style }}>
      <div style={{ display: 'grid', gridTemplateColumns: `${rowLabelWidth}px repeat(${columns.length}, 1fr)`, gap: 2 }}>
        <div />
        {columns.map((c, ci) => (
          <div key={ci} style={{ fontSize: 10.5, color: 'var(--color-text-muted)', textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {ci % labelEvery === 0 ? c : ''}
          </div>
        ))}
        {rows.map((r, ri) => (
          <React.Fragment key={ri}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', paddingRight: 8, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r}</div>
            {columns.map((c, ci) => {
              const v = (data[ri] || [])[ci];
              const isHover = hover && hover.ri === ri && hover.ci === ci;
              return (
                <div
                  key={ci}
                  onMouseEnter={() => setHover({ ri, ci })}
                  onMouseLeave={() => setHover(null)}
                  style={{
                    position: 'relative', height: cellHeight, borderRadius: 3, background: cellBg(v),
                    outline: isHover ? '1.5px solid var(--color-text-primary)' : 'none', outlineOffset: -1.5,
                    transition: 'outline-color 100ms ease', cursor: v === null || v === undefined ? 'default' : 'pointer',
                  }}
                >
                  {isHover && v !== null && v !== undefined ? (
                    <ChartTooltip label={`${r} · ${c}`} value={valueFormat(v)} pos={{ bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 6 }} />
                  ) : null}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      {legend ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, marginLeft: rowLabelWidth + 2, fontSize: 11, color: 'var(--color-text-muted)' }}>
          <span>{legendStops[0].l}</span>
          <div style={{ flex: 1, maxWidth: 160, height: 8, borderRadius: 4, background: scale === 'diverging'
            ? `linear-gradient(90deg, color-mix(in srgb, var(${negToken}) 88%, var(--color-surface-card)), var(--color-surface-subtle), color-mix(in srgb, var(${posToken}) 88%, var(--color-surface-card)))`
            : `linear-gradient(90deg, var(--color-surface-subtle), color-mix(in srgb, var(${toneToken}) 88%, var(--color-surface-card)))` }}
          />
          {scale === 'diverging' ? <span>{legendStops[1].l}</span> : null}
          <span>{legendStops[legendStops.length - 1].l}</span>
        </div>
      ) : null}
    </div>
  );
}

export default ChartHeatmap;
