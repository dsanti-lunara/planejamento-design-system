import * as React from 'react';
export interface SearchGlobalSearchProps {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  /** Current query text to display; leave empty to show the placeholder. */
  value?: string;
  showShortcut?: boolean;
  /** Text shown in the shortcut chip; defaults to "Ctrl + M". */
  shortcutLabel?: string;
  state?: "default" | "focus" | "disabled";
  /** Fires on click/Enter — wire to NavigationCommandPalette's onOpenChange(true). */
  onClick?: () => void;
}
/** Real button-trigger for global search — opens NavigationCommandPalette; no longer a static box. */
export declare const SearchGlobalSearch: React.FC<SearchGlobalSearchProps>;
export default SearchGlobalSearch;
