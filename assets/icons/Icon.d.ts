import * as React from 'react';
export type IconName =
  | "IconCalendar"
  | "IconChevronDown"
  | "IconChevronLeft"
  | "IconChevronRight"
  | "IconDataStateTypeEmpty"
  | "IconDataStateTypeError"
  | "IconDataStateTypeLoading"
  | "IconDataStateTypeNoPlan"
  | "IconDataStateTypePartial"
  | "IconDataStateTypeRestricted"
  | "IconNavBankHours"
  | "IconNavCapacity"
  | "IconNavCollapse"
  | "IconNavDemand"
  | "IconNavFinance"
  | "IconNavForecast"
  | "IconNavGlossary"
  | "IconNavGovernance"
  | "IconNavHome"
  | "IconNavIntraday"
  | "IconNavPortal"
  | "IconNavSaved"
  | "IconNavStructure"
  | "IconNavTimes"
  | "IconPlay"
  | "IconSearch";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
