import * as React from 'react';

export interface AnalyticalMeasure {
  /** Unique key, also the row accessor. */
  key: string;
  label: string;
  unit?: string;
  /** Renders the value green/red by its leading +/- sign, and is hidden when
   *  `showComparison` is false (Plano/Desvio columns). */
  deviation?: boolean;
}

export interface AnalyticalGroup {
  key: string;
  /** Group title spanning all of its measures (e.g. "Recebidas", "TMO (seg)"). */
  title: string;
  measures: AnalyticalMeasure[];
}

/**
 * Analytical structural table — a dimension × grouped-indicators grid used for
 * cockpit/BI comparisons (Realizado/Plano/Desvio per KPI group), wrapped in its
 * own toolbar (title, dimension level, density, plan/deviation toggle, column
 * config, export, search) and a server-driven footer (rows summary, pagination,
 * rows-per-page). Renders on top of `DataTable`'s columnGroups/stickyFirstColumn.
 */
export interface AnalyticalDataTableProps<Row = any> {
  title?: string;
  context?: string;
  dimensionLabel?: string;
  /** Labels for the two-option segmented control (e.g. Dia/Período). */
  dimensionOptions?: { text1?: string; text2?: string };
  groups: AnalyticalGroup[];
  rows: Row[];
  rowKey?: (row: Row, index: number) => string | number;
  /** Classifies a row for DataTable styling; defaults to `row.total` → 'total'. */
  rowVariant?: (row: Row, index: number) => 'section' | 'subtotal' | 'total' | null | undefined;
  density?: 'compact' | 'standard' | 'audit';
  onDensityChange?: (density: 'compact' | 'standard' | 'audit') => void;
  /** Shows Plano/Desvio columns and the "Exibir plano e desvio" toggle state. */
  showComparison?: boolean;
  onToggleComparison?: (next: boolean) => void;
  showColumnsAction?: boolean;
  showExportAction?: boolean;
  onConfigureColumns?: () => void;
  onExport?: () => void;
  search?: string;
  onSearchChange?: (value: string) => void;
  /** Replaces the grid with a full-width state slot (loading/empty/error/
   *  restricted/partial/noplan) while keeping the toolbar and footer visible. */
  dataState?: 'empty' | 'noresults' | 'error' | 'restricted' | 'loading' | 'partial' | 'noplan' | null;
  dataStateProps?: { text1?: string; text2?: string };
  /** Overrides the footer's left-aligned rows summary text. */
  rowsSummary?: React.ReactNode;
  page?: number;
  pageCount?: number;
  onPageChange?: (page: number) => void;
  rowsPerPage?: string;
  onRowsPerPageChange?: (value: string) => void;
  style?: React.CSSProperties;
}

export function AnalyticalDataTable<Row = any>(props: AnalyticalDataTableProps<Row>): JSX.Element;
export default AnalyticalDataTable;
