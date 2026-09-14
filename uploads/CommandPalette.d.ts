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
 * Global command palette — search-driven list of actions with arrow-key
 * navigation and Enter to run. Always listens for **⌘K / Ctrl+K** itself —
 * that binding is its defining behavior, not something the parent wires up.
 * `open`/`onOpenChange` are optional, like `<Popover>`: omit them and it
 * manages its own state (mount it once, anywhere, and ⌘K just works); pass
 * them to also open it from your own visible trigger button. Unlike
 * `<Dropdown>`/`<Popover>`, it has no anchor — it's a centered, top-aligned
 * overlay, not positioned relative to a trigger element.
 */
export interface CommandPaletteProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  items: CommandItem[];
  placeholder?: string;
  /** Shown when the query matches nothing. */
  emptyLabel?: string;
  width?: number;
  style?: React.CSSProperties;
}

export function CommandPalette(props: CommandPaletteProps): JSX.Element | null;
