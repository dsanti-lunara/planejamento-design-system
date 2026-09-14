import * as React from 'react';
import { UsageRankingBarItemProps } from './UsageRankingBarItem';
export interface UsageRankingBarListProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  /** Text content; defaults to "Ver detalhes". */
  detailsLabel?: string;
  items?: UsageRankingBarItemProps[];
}
export declare const UsageRankingBarList: React.FC<UsageRankingBarListProps>;
export default UsageRankingBarList;
