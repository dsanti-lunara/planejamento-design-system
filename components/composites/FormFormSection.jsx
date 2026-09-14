import { Button } from "../actions/Button.jsx";
import { FormContentSlot } from './FormContentSlot.jsx';

// figma node: 7351:6928 Form/Form Section
export function FormFormSection(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Informações básicas", showAction: _p.showAction ?? false, description: _p.description ?? "Dados principais utilizados para identificar o produto.", showDivider: _p.showDivider ?? true, showDescription: _p.showDescription ?? true };
  return (
    <div className={props.className} style={{
      width: "100%",
      maxWidth: "100%",
      minWidth: 0,
      borderRadius: 14,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(209,219,237)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "24px 24px 24px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 60,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 20,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(20,36,79)",
            flexShrink: 0,
          }}>{props.title}</span>
          {props.showDescription && (
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(87,107,148)",
            flexShrink: 0,
          }}>{props.description}</span>
          )}
        </div>
        {props.showAction && (
        <Button
          style={{
            position: "relative",
            height: 40,
            width: 100,
            flexShrink: 0,
          }}
          label={"Editar"}
          size={"default"}
          style2={"secondary"}
          state={"default"}
        />
        )}
      </div>
      {props.showDivider && (
      <div style={{
        position: "relative",
        height: 1,
        backgroundColor: "rgb(219,227,240)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      )}
      <div style={{
          position: "relative",
          height: "auto",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "100%",
          minWidth: 0,
        }}>{props.contentSlot ?? <FormContentSlot />}</div>
    </div>
  );
}
export default FormFormSection;
