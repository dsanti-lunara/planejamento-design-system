import * as React from 'react';

export interface ActionDropdownMenuItem {
  label: React.ReactNode;
  onClick?: () => void;
  tone?: 'default' | 'negative';
  disabled?: boolean;
}

/**
 * Improved from the Figma-literal recreation (which rendered 4 fixed, non-interactive text
 * rows): now accepts a real `items[]` — each row calls its own `onClick` and closes nothing by
 * itself (the trigger that opened it, e.g. `<ActionOverflowMenu>`, owns open/close). Omit `items`
 * to keep the original Figma demo rows (Editar / Copiar link / Selecionado / Indisponível /
 * Excluir) — text1..text4 props are still honored for that fallback so existing usages don't
 * break.
 */
export interface ActionDropdownMenuProps {
  className?: string;
  style?: React.CSSProperties;
  items?: ActionDropdownMenuItem[];
  /** Text content; defaults to "Editar". Only used when `items` is omitted. */
  text1?: string;
  /** Text content; defaults to "Copiar link". Only used when `items` is omitted. */
  text2?: string;
  /** Text content; defaults to "Selecionado". Only used when `items` is omitted. */
  text3?: string;
  /** Text content; defaults to "Indisponível". Only used when `items` is omitted. */
  text4?: string;
}
export declare const ActionDropdownMenu: React.FC<ActionDropdownMenuProps>;
export default ActionDropdownMenu;
