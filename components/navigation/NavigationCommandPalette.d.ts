import * as React from 'react';

export interface CommandItem {
  id?: string;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  /** Right-aligned shortcut hint, mono (e.g. "G V", "⌘E"). */
  shortcut?: string;
  /** Extra text matched by search but never displayed (aliases/synonyms). */
  keywords?: string;
  onRun?: () => void;
  /** Render a small uppercase section header instead of a row. */
  header?: string;
  /** Render a divider, starting a new unlabeled section, instead of a row. */
  divider?: boolean;
}

/**
 * Global command palette — search-driven list of actions with arrow-key navigation and Enter to
 * run. Always listens for ⌘M / Ctrl+M itself (not Ctrl+K — Windows browsers reserve that for the
 * address bar — and not Ctrl+/, awkward on some keyboard layouts). `open`/`onOpenChange` are
 * optional: omit them and it manages its own state (mount it once, ⌘M just works); pass them to
 * also open it from a visible trigger (e.g. a header search button).
 *
 * Not part of the Figma component inventory — an intentional addition for portal-scale NEXO
 * navigation (see readme.md "Intentional additions"). Uses only this system's tokens.
 */
export interface NavigationCommandPaletteProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  items: CommandItem[];
  placeholder?: string;
  /** Shown when the query matches nothing. */
  emptyLabel?: string;
  width?: number;
  style?: React.CSSProperties;
}

export function NavigationCommandPalette(props: NavigationCommandPaletteProps): JSX.Element | null;
