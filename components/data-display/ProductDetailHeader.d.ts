import * as React from 'react';
export interface ProductDetailHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  description?: string;
  showDescription?: boolean;
  /** Drives the status pill + the primary action's default label (statusMode="access" only). */
  access?: "authorized" | "restricted" | "archived";
  /** "access" (default): AccessStatus pill for product access. "lifecycle": StatusBadge for admin lifecycle (Draft/Homologação/Ativo/Manutenção/Deprecated/Archived) — never reuse `access` states for lifecycle. */
  statusMode?: "access" | "lifecycle";
  /** StatusBadge tone when statusMode="lifecycle". Default "neutral". */
  lifecycleTone?: "positive" | "warning" | "info" | "negative" | "neutral";
  /** Overrides the status pill label. */
  statusLabel?: string;
  /** Product mark node; defaults to a BrandProductLogoTile using `logoFallback`. */
  productLogo?: React.ReactNode;
  /** Initials for the default logo tile. Default "CL". */
  logoFallback?: string;
  showCategory?: boolean;
  /** Category token driving the chip's color. */
  category?: "operacional" | "planejamento" | "financeiro" | "gestão" | "clientes" | "dados & inteligência";
  categoryLabel?: string;
  showTags?: boolean;
  /** Tag chip labels. Default ["Claro","Intraday","Análises"]. */
  tags?: string[];
  showMetadata?: boolean;
  /** Metadata line; defaults to "Atualizado hoje às 07:30". */
  metadata?: string;
  /** Alias of `metadata` (legacy Figma text slot). */
  text1?: string;
  showFavorite?: boolean;
  favorite?: boolean;
  onFavoriteToggle?: (favorited: boolean) => void;
  showPrimaryAction?: boolean;
  /** For access="restricted" this must never be a request/approval CTA — access is granted via Hominum (CR + FUNCAORM), not requested in-product. */
  primaryLabel?: string;
  primaryState?: "default" | "hover" | "disabled" | "focus" | "pressed" | "loading";
  onPrimaryAction?: (e: React.SyntheticEvent) => void;
  showSecondaryAction?: boolean;
  secondaryLabel?: string;
  secondaryState?: "default" | "hover" | "disabled" | "focus" | "pressed" | "loading";
  onSecondaryAction?: (e: React.SyntheticEvent) => void;
  /** Legacy swappable slot: replaces the favorite action node. */
  icon1?: React.ReactNode;
  /** Legacy swappable tag slots — when provided they replace `tags`. */
  icon2?: React.ReactNode;
  icon3?: React.ReactNode;
  icon4?: React.ReactNode;
}
export declare const ProductDetailHeader: React.FC<ProductDetailHeaderProps>;
export default ProductDetailHeader;
