import * as React from 'react';
export interface DeploymentApprovalItemProps {
  className?: string;
  style?: React.CSSProperties;
  avatar?: React.ReactNode;
  name?: string;
  state?: "approved" | "rejected" | "pending";
  commentVisible?: boolean;
  roleContext?: string;
  comment?: string;
  timestamp?: string;
}
export declare const DeploymentApprovalItem: React.FC<DeploymentApprovalItemProps>;
export default DeploymentApprovalItem;
