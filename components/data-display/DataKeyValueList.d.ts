import * as React from 'react';
export interface DataKeyValueListProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  orientation?: "horizontal" | "vertical";
  value?: string;
  valueType?: "text" | "status" | "link" | "copy";
}
export declare const DataKeyValueList: React.FC<DataKeyValueListProps>;
export default DataKeyValueList;
