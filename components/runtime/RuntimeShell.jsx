import { FeedbackSystemBanner } from '../feedback/FeedbackSystemBanner.jsx';
import { RuntimeHeader } from './RuntimeHeader.jsx';

// figma node: 7429:11957 Runtime/Shell
export function RuntimeShell(_p = {}) {
  const props = { ..._p, header: _p.header ?? true, banner: _p.banner ?? false, runtimeContent: _p.runtimeContent ?? "" };
  return (
    <div className={props.className} style={{
      width: 1440,
      height: 900,
      backgroundColor: "rgb(251,252,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.header && (
      <RuntimeHeader style={{
          position: "relative",
          height: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
      )}
      {props.banner && (
      <FeedbackSystemBanner
        style={{
          position: "relative",
          height: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        message={"Este produto será descontinuado em 30/09/2026. Consulte o produto substituto antes dessa data."}
        cTA={"Saiba mais"}
        dismiss={true}
        tone={"deprecated"}
      />
      )}
      {props.children}
    </div>
  );
}
export default RuntimeShell;
