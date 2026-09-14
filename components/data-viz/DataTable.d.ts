import * as React from 'react';

export interface DataTableColumn<Row = any> {
  /** Unique column id (also the default row accessor). */
  key: string;
  header: React.ReactNode;
  /** Custom cell renderer; defaults to `row[key]`. */
  render?: (row: Row, index: number) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  width?: number | string;
  /** Floor the column's width so it never shrinks below this even when the table is squeezed
   *  (defaults to `width` when omitted). Give every essential column (state, date, actions) a
   *  `minWidth` so a flexible column (typically the first, left with no `width`) absorbs the
   *  deficit/surplus instead of squeezing them below legibility. */
  minWidth?: number;
  /** Locks the column to exactly `width`/`minWidth` (no grow, no shrink) — for icon-only action
   *  columns that must stay put regardless of available space. */
  lockWidth?: boolean;
  /** Render cell text in the mono font (IDs, codes). */
  mono?: boolean;
  /** Muted cell text colour. */
  muted?: boolean;
  /** Allow the cell to wrap (default: nowrap). */
  wrap?: boolean;
  /** Cap width and ellipsis-truncate long content. */
  maxWidth?: number;
  /** Show a sort caret: 'asc' | 'desc'. */
  sortDir?: 'asc' | 'desc';
  /** Right-aligns the column and renders tabular-nums; header gets right-aligned too. */
  numeric?: boolean;
  /** Unit shown once next to the header label — e.g. `unit="h"`, `unit="R$"` — never repeated
   *  per cell (evolution guide §7.3). */
  unit?: string;
  /** Pin this column during horizontal scroll — 'left' (after the selection checkbox and the
   *  first column, if `stickyFirstColumn`) or 'right' (e.g. a trailing "Ação" column). Give
   *  pinned columns an explicit `width` so multiple pinned columns stack without overlap
   *  (falls back to 120px). */
  pin?: 'left' | 'right';
}

/**
 * Data table — the workhorse behind every Hub list: an analytical experience, not a styled HTML
 * table (evolution guide §7.3). Config-driven columns, optional row selection (checkboxes), row
 * click, active-row highlight, sticky header/first column, numeric/tabular columns, section/
 * subtotal/total rows, adjustable density and an empty-state slot.
 */
export interface DataTableProps<Row = any> {
  columns: DataTableColumn<Row>[];
  rows: Row[];
  /** Stable key per row (default: index). */
  rowKey?: (row: Row, index: number) => string | number;
  /** @deprecated use `density="compact"` */
  dense?: boolean;
  /** Row density. Default 'standard'. 'compact' for operational tables; 'audit' is the densest
   *  (logs, filas, cockpit/intrahora). */
  density?: 'compact' | 'standard' | 'audit';
  stickyHeader?: boolean;
  /** Freezes the first column (+ the selection checkbox column, if present) during horizontal
   *  scroll — for wide tables with a long leading category/name column. */
  stickyFirstColumn?: boolean;
  hoverable?: boolean;
  selectable?: boolean;
  selectedKeys?: (string | number)[];
  onSelectionChange?: (keys: (string | number)[]) => void;
  onRowClick?: (row: Row, index: number) => void;
  /** Highlight predicate (e.g. the row shown in a side detail panel). */
  isRowActive?: (row: Row, index: number) => boolean;
  /** Classifies a row for styling: 'section' (full-width group label, uses the first column's
   *  value), 'subtotal' (bold + top rule) or 'total' (bold + heavier top rule). Return
   *  undefined/null for a plain row. */
  rowVariant?: (row: Row, index: number) => 'section' | 'subtotal' | 'total' | null | undefined;
  /** Rendered in place of rows when empty (e.g. an `<EmptyState>`). */
  empty?: React.ReactNode;
  /** Two-level header — a top row grouping several sub-columns under one shared label (e.g.
   *  "Recebidas" spanning Realizado/Plano/Desvio/%Desvio). Entries' `colSpan`s must sum to
   *  `columns.length`. Default null (single-level header, unchanged). */
  columnGroups?: { header: React.ReactNode; colSpan: number }[] | null;
  /** Turns the first column into an expand/collapse tree. A row may carry a `children` array of
   *  same-shape rows (recursive) — rows with children show a chevron; a child only renders once
   *  its parent's key is in `expandedKeys`. Pair with `onToggleExpand`. Default false. */
  expandable?: boolean;
  /** Keys (per `rowKey`) of currently-expanded rows. Default `[]` (all collapsed). */
  expandedKeys?: (string | number)[];
  onToggleExpand?: (key: string | number) => void;
  style?: React.CSSProperties;
}

export interface DataTableRow {
  /** Nested rows shown when this row is expanded (see `DataTableProps.expandable`). */
  children?: any[];
  [key: string]: any;
}

export function DataTable<Row = any>(props: DataTableProps<Row>): JSX.Element;
export default DataTable;
