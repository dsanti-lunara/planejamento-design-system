import * as React from 'react';

export type TabItem = string | { id: string; label: string; icon?: React.ReactNode };

/** Underline tab bar — job detail sections, "Fila atual / Histórico recente". */
export interface TabsProps {
  tabs: TabItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  style?: React.CSSProperties;
}

export function Tabs(props: TabsProps): JSX.Element;
