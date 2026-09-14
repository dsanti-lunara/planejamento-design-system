import * as React from 'react';

export interface BreadcrumbItem {
  label: React.ReactNode;
  icon?: React.ReactNode;
  /** Omit on the last item — it's the current page and is never interactive. */
  onClick?: () => void;
}

/**
 * Wayfinding trail for deep hierarchy (fleet → VM → processo, a job's folder
 * path). The last item is always the current page: bold, no hover, never
 * calls `onClick` even if one is provided.
 */
export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Collapse to first + "…" (a `Dropdown` of the hidden middle items) + the
   *  last `maxItems - 1` items, once `items.length` exceeds this. Omit to
   *  never collapse. */
  maxItems?: number;
  /** Custom separator between crumbs. Defaults to a small chevron. */
  separator?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Breadcrumbs(props: BreadcrumbsProps): JSX.Element | null;
