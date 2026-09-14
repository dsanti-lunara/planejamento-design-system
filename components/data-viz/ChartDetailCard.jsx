import React from 'react';
import { StatusBadge } from '../data-display/StatusBadge.jsx';
const __statusTone = { success: 'positive', critical: 'negative', warning: 'warning', info: 'info', ai: 'neutral', neutral: 'neutral' };

/**
 * ChartDetailCard — rich hover/click detail panel for a single chart data point: an icon chip +
 * title + status badge header, then a set of label/value rows (any row's `value` may be a plain
 * string, a coloured number, a wrapped description sentence, or a link — the row list is the
 * whole content contract). Meant to be positioned by the calling chart (absolute/fixed, near the
 * hovered point) — this component only owns the card's own chrome, content layout, and optional
 * connector pointer.
 *
 * Factored out of `WaterfallChart`'s hover popover specifically so any other chart
 * (`BarChart`/`AreaChart`/`DonutChart`/…) that outgrows `<Tooltip>`'s plain text — needs a real
 * breakdown, not just a value — can reuse the same card instead of hand-rolling its own.
 */
const toneBg = {
  info: 'var(--blue-50)', success: 'var(--color-state-positive-subtle)', warning: 'var(--color-state-warning-subtle)',
  critical: 'var(--color-data-critical-band)', ai: 'var(--purple-50)', neutral: 'var(--color-surface-subtle)',
};
const toneStrong = {
  info: 'var(--color-text-link)', success: 'var(--color-text-positive)', warning: 'var(--color-text-warning)',
  critical: 'var(--color-text-negative)', ai: 'var(--color-data-forecast)', neutral: 'var(--color-text-primary)',
};
const pointerStyleBySide = {
  top: { top: -6, borderTop: '1px solid var(--color-border-default)', borderLeft: '1px solid var(--color-border-default)' },
  bottom: { bottom: -6, borderBottom: '1px solid var(--color-border-default)', borderRight: '1px solid var(--color-border-default)' },
};

export function ChartDetailCard({
  icon = null,
  iconTone = 'info',
  title,
  badge = null,
  rows = [],
  width = 250,
  /** 'top' draws the pointer on the card's top edge (card sits below its anchor); 'bottom' draws
   *  it on the bottom edge (card sits above its anchor). Omit for no pointer. */
  pointerSide = null,
  /** Pointer's horizontal position: a CSS left offset (px or %). Default '50%' (centered). */
  pointerLeft = '50%',
  style = {},
}) {
  const iconBg = toneBg[iconTone] || toneBg.info;
  const iconFg = toneStrong[iconTone] || toneStrong.info;
  return (
    <div style={{ position: 'relative', width, fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', background: 'var(--color-surface-card)', border: '1px solid var(--color-border-default)', borderRadius: '8px', boxShadow: 'var(--shadow-overlay)', padding: '12px 14px', ...style }}>
      {pointerSide ? (
        <span style={{ position: 'absolute', left: pointerLeft, width: 10, height: 10, background: 'var(--color-surface-card)', transform: 'translateX(-50%) rotate(45deg)', ...pointerStyleBySide[pointerSide] }} />
      ) : null}
      {(icon || title || badge) ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 9, paddingBottom: 9, borderBottom: '1px solid var(--color-border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
            {icon ? <span style={{ width: 24, height: 24, borderRadius: '6px', background: iconBg, color: iconFg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</span> : null}
            {title ? <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--color-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</span> : null}
          </div>
          {badge ? <StatusBadge tone={__statusTone[badge.tone] || 'neutral'} label={badge.label} style={{ flexShrink: 0 }} /> : null}
        </div>
      ) : null}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {rows.map((r, i) => r.full ? (
          <div key={i} style={{ paddingTop: r.divider ? 8 : 2, borderTop: r.divider ? '1px solid var(--color-border-subtle)' : 'none' }}>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 3 }}>{r.label}</div>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-text-primary)', lineHeight: 1.45 }}>{r.value}</div>
          </div>
        ) : (
          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, paddingTop: r.divider ? 8 : 0, borderTop: r.divider ? '1px solid var(--color-border-subtle)' : 'none' }}>
            <span style={{ fontSize: 12, color: 'var(--color-text-muted)', flexShrink: 0 }}>{r.label}</span>
            <span style={{ fontSize: 13, fontWeight: r.tone ? 700 : 600, color: r.tone ? (toneStrong[r.tone] || 'var(--color-text-primary)') : 'var(--color-text-primary)', textAlign: 'right', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>
              {r.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChartDetailCard;
