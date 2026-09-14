import * as React from 'react';
export interface TagCategoryChipProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  category?: "operacional" | "planejamento" | "financeiro" | "gestão" | "clientes" | "dados & inteligência";
}
export declare const TagCategoryChip: React.FC<TagCategoryChipProps>;
export default TagCategoryChip;
