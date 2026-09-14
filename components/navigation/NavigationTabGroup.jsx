import React from 'react';
import { TabItem } from './TabItem.jsx';

// figma node: 6727:119 Navigation/Tab Group — was 5 hardcoded TabItem
// instances with static state props (no real selection). Rebuilt as a real
// tab bar: click switches the active tab, controlled via activeId/onSelect
// or uncontrolled with an internal default, per the uploaded Tabs reference.
const DEFAULT_TABS = [
  { id: "recebidas", label: "Recebidas" },
  { id: "atendidas", label: "Atendidas" },
  { id: "ns", label: "NS" },
  { id: "tmo", label: "TMO" },
  { id: "hc", label: "HC" },
];

export function NavigationTabGroup(_p = {}) {
  const props = { ..._p, tabs: _p.tabs ?? DEFAULT_TABS };
  const isControlled = _p.activeId !== undefined && !!_p.onSelect;
  const [innerActive, setInnerActive] = React.useState(props.tabs[0] && props.tabs[0].id);
  const activeId = isControlled ? props.activeId : innerActive;
  const select = (id) => { if (!isControlled) setInnerActive(id); props.onSelect && props.onSelect(id); };
  const enabled = props.tabs.filter((t) => !t.disabled);
  const onKeyDown = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const idx = enabled.findIndex((t) => t.id === activeId);
    const dir = e.key === 'ArrowRight' ? 1 : -1;
    const next = enabled[(idx + dir + enabled.length) % enabled.length];
    if (next) select(next.id);
  };

  return (
    <div role="tablist" onKeyDown={onKeyDown} className={props.className} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        height: 44,
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "flex-start",
        flexShrink: 0,
        alignSelf: "stretch",
        overflowX: "auto",
      }}>
        {props.tabs.map((t) => (
          <TabItem
            key={t.id}
            label={t.label}
            icon={t.icon}
            active={t.id === activeId}
            disabled={t.disabled}
            tabIndex={t.id === activeId ? 0 : -1}
            onClick={() => !t.disabled && select(t.id)}
            style={{ flexShrink: 0, alignSelf: "stretch", height: "auto" }}
          />
        ))}
      </div>
      <div style={{ height: 1, backgroundColor: "var(--color-border-default)", flexShrink: 0, alignSelf: "stretch" }} />
    </div>
  );
}
export default NavigationTabGroup;
