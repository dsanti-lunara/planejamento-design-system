import * as React from 'react';

export interface ChartDetailRow {
  label: React.ReactNode;
  /** Any content — a formatted number, a wrapped description sentence, or a link element. */
  value: React.ReactNode;
  /** Colours the value text (success/critical/etc.) — use for a signed impact row. */
  tone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral';
  /** Renders label above value as a standalone full-width block instead of a label/value line —
   *  use for a wrapped sentence (description) or anything else that shouldn't sit on one line
   *  with a right-aligned value. Default false. */
  full?: boolean;
  /** Draws a hairline divider above this row — use to set a trailing action (e.g. a "ver mais"
   *  link) apart from the data rows above it. Default false. */
  divider?: boolean;
}

/**
 * Rich hover/click detail panel for a single chart data point — an icon-chip + title + badge
 * header over a list of label/value rows. Reach for this instead of `<Tooltip>` once a chart's
 * hover needs a real breakdown (impact type, before/after values, a description, a "ver mais"
 * link) rather than one plain value; instead of `<Popover>` when the trigger is a hover on a
 * chart shape, not a click on a UI control. Purely presentational — the calling chart owns
 * positioning (absolute-position it near the hovered point) and open/close/hover state.
 */
export interface ChartDetailCardProps {
  icon?: React.ReactNode;
  /** Tint for the icon chip. Default 'info'. */
  iconTone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral';
  title?: React.ReactNode;
  /** Status pill in the header's top-right, e.g. `{ label: 'Positivo', tone: 'success' }`. */
  badge?: { label: React.ReactNode; tone?: 'info' | 'success' | 'warning' | 'critical' | 'ai' | 'neutral' };
  rows?: ChartDetailRow[];
  /** Card width in px. Default 250 — sized to sit close to a hovered chart point without
   *  crowding the surrounding chart. */
  width?: number;
  /** 'top' draws a small connector pointer on the card's top edge (use when the card sits below
   *  its anchor point); 'bottom' draws it on the bottom edge (card sits above its anchor). Omit
   *  for no pointer. */
  pointerSide?: 'top' | 'bottom' | null;
  /** Pointer's horizontal position as a CSS left offset (px or %), so it lines up with the
   *  anchor point even when the card itself is shifted to stay on-screen. Default '50%'. */
  pointerLeft?: number | string;
  style?: React.CSSProperties;
}

export function ChartDetailCard(props: ChartDetailCardProps): JSX.Element;
export default ChartDetailCard;
