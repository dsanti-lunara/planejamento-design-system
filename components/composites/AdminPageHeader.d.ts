import * as React from 'react';
export interface AdminPageHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  secondaryAction?: boolean;
  title?: string;
  overflow?: boolean;
  status?: boolean;
  primaryAction?: boolean;
  description?: string;
  breadcrumb?: boolean;
  descriptionVisible?: boolean;
  primaryLabel?: string;
  primaryState?: 'default' | 'hover' | 'disabled' | 'focus' | 'pressed' | 'loading';
  onPrimaryAction?: (e: React.SyntheticEvent) => void;
  secondaryLabel?: string;
  secondaryState?: 'default' | 'hover' | 'disabled' | 'focus' | 'pressed' | 'loading';
  onSecondaryAction?: (e: React.SyntheticEvent) => void;
  overflowItems?: { label: React.ReactNode; onClick?: () => void; tone?: 'default' | 'negative'; disabled?: boolean }[];
}
export declare const AdminPageHeader: React.FC<AdminPageHeaderProps>;
export default AdminPageHeader;
