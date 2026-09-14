import * as React from 'react';
export interface UsageRankingBarItemProps {
  className?: string;
  style?: React.CSSProperties;
  logoVisible?: boolean;
  rank?: string;
  state?: "default" | "highlighted";
  percentageVisible?: boolean;
  rankVisible?: boolean;
  label?: string;
  percentage?: string;
  value?: string;
  productLogo?: React.ReactNode;
}
export declare const UsageRankingBarItem: React.FC<UsageRankingBarItemProps>;
export default UsageRankingBarItem;
