import { InputText } from "../forms/InputText.jsx";

// figma node: 7351:6905 _Form/Content Slot
export function FormContentSlot(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1040,
      height: 144,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <InputText
        style={{
          position: "relative",
          width: 512,
          height: 72,
          flexShrink: 0,
        }}
        size={"default"}
        state={"default"}
      />
      <InputText
        style={{
          position: "relative",
          width: 512,
          height: 72,
          flexShrink: 0,
        }}
        size={"default"}
        state={"default"}
      />
    </div>
  );
}
export default FormContentSlot;
