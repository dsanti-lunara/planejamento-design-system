import * as React from 'react';

/**
 * Improved from the Figma-literal recreation: `state` was previously decorative only (no click
 * handler existed). Now a real toggle button — click to flip favorited/not, with keyboard
 * support. `favorited`/`onToggle` are optional (self-managed if omitted); `state="disabled"`
 * still disables it, and passing `state` explicitly keeps it fully controlled for the Figma
 * hover/disabled demo states.
 */
export interface ActionFavoriteProps {
  className?: string;
  style?: React.CSSProperties;
  /** Controlled favorited value. Omit to let the component manage its own state. */
  favorited?: boolean;
  /** Called with the new favorited value after a click. */
  onToggle?: (favorited: boolean) => void;
  state?: "not favorite" | "favorite" | "hover" | "disabled";
  /** Text content; defaults to "☆"/"★" depending on state. */
  text1?: string;
  /** "sm" (28px) for compact contexts — Featured Cards, Recently Published, Frequent Access. "md" (40px, default) elsewhere. */
  size?: "sm" | "md";
}
export declare const ActionFavorite: React.FC<ActionFavoriteProps>;
export default ActionFavorite;
