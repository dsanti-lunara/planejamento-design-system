import { IllustrationSystem403 } from './IllustrationSystem403.jsx';

// figma node: 7435:13113 __State/Illustration Slot
export function StateIllustrationSlot(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 260,
      height: 190,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 260,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.illustration ?? <IllustrationSystem403 />}</div>
    </div>
  );
}
export default StateIllustrationSlot;
