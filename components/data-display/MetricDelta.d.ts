import * as React from 'react';
export interface MetricDeltaProps {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  tone?: "positive" | "negative" | "neutral";
}
export declare const MetricDelta: React.FC<MetricDeltaProps>;
export default MetricDelta;
