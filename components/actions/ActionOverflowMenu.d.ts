import * as React from 'react';

/**
 * Improved from the Figma-literal recreation: the "state" prop was previously decorative only
 * (nothing rendered the menu). Now a real trigger — click to open/close a real
 * `<ActionDropdownMenu items={...}>`, close on outside click or Escape, close automatically when
 * an item runs. `open`/`onOpenChange` are optional (self-managed if omitted), matching
 * `<NavigationCommandPalette>`'s controlled/uncontrolled convention.
 */
export interface ActionOverflowMenuProps {
  className?: string;
  style?: React.CSSProperties;
  /** Rows for the opened menu — see `ActionDropdownMenuItem`. Omit to use the Figma demo rows. */
  items?: { label: React.ReactNode; onClick?: () => void; tone?: 'default' | 'negative'; disabled?: boolean }[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  /** Text content; defaults to "⋮". */
  text1?: string;
}
export declare const ActionOverflowMenu: React.FC<ActionOverflowMenuProps>;
export default ActionOverflowMenu;
