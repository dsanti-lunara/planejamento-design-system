import * as React from 'react';
export interface AdminFilterBarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Contextual search — never the global Nexo search (no Ctrl+M). Default true. */
  showSearch?: boolean;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  showStatus?: boolean;
  statusLabel?: string;
  showProduct?: boolean;
  productLabel?: string;
  showPeriod?: boolean;
  periodLabel?: string;
  activeFilters?: boolean;
  /** Chips rendered in the active-filters row; falls back to a single placeholder chip when empty. */
  activeFilterChips?: { label: string; value: string; onRemove?: () => void }[];
  clearFilters?: boolean;
  viewControls?: boolean;
  statusOptions?: string[];
  productOptions?: string[];
  statusValue?: string[];
  productValue?: string[];
  onStatusChange?: (value: string[]) => void;
  onProductChange?: (value: string[]) => void;
  period?: { preset: string; start: string; end: string };
  onPeriodChange?: (value: { preset: string; start: string; end: string }) => void;
  onMoreFilters?: () => void;
  onClearFilters?: () => void;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const AdminFilterBar: React.FC<AdminFilterBarProps>;
export default AdminFilterBar;
