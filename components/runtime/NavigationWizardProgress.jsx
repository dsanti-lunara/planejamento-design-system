import { NavigationStepper } from '../navigation/NavigationStepper.jsx';

// figma node: 7240:7304 Navigation/Wizard Progress
export function NavigationWizardProgress(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <NavigationStepper
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"completed"}
      />
      <NavigationStepper
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"current"}
      />
      <NavigationStepper
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"upcoming"}
      />
      <NavigationStepper
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"upcoming"}
      />
    </div>
  );
}
export default NavigationWizardProgress;
