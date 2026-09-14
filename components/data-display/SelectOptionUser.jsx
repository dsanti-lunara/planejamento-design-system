import { IdentityAvatar } from './IdentityAvatar.jsx';
import { InputCheckbox } from "../forms/InputCheckbox.jsx";

// figma node: 7379:8319 Select Option/User (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function SelectOptionUser(_p = {}) {
  const props = { ..._p, primary: _p.primary ?? "Mariana Oliveira", state: _p.state ?? "default", secondary: _p.secondary ?? "mariana.oliveira@empresa.com", showAvatar: _p.showAvatar ?? true, showSecondary: _p.showSecondary ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 520,
      height: 72,
      borderRadius: 10,
      backgroundColor: "var(--color-surface-card)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", width: 18, flexShrink: 0 }}>{props.icon1 ?? <InputCheckbox showLabel={false} state={"unchecked"} />}</div>
      {props.showAvatar && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.icon2 ?? <IdentityAvatar initials={"MO"} content={"initials"} size={"sm"} />}</div>
      )}
      <div style={{
        position: "relative",
        height: 44,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.primary}</span>
        {props.showSecondary && (
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.secondary}</span>
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 520,
      height: 72,
      borderRadius: 10,
      backgroundColor: "var(--color-surface-selected)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", width: 18, flexShrink: 0 }}>{props.icon1 ?? <InputCheckbox showLabel={false} state={"checked"} />}</div>
      {props.showAvatar && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.icon2 ?? <IdentityAvatar initials={"MO"} content={"initials"} size={"sm"} />}</div>
      )}
      <div style={{
        position: "relative",
        height: 44,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.primary}</span>
        {props.showSecondary && (
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.secondary}</span>
        )}
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 520,
      height: 72,
      opacity: 0.55,
      borderRadius: 10,
      backgroundColor: "var(--color-surface-card)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", width: 18, flexShrink: 0 }}>{props.icon1 ?? <InputCheckbox showLabel={false} state={"disabled unchecked"} />}</div>
      {props.showAvatar && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.icon2 ?? <IdentityAvatar initials={"MO"} content={"initials"} size={"sm"} />}</div>
      )}
      <div style={{
        position: "relative",
        height: 44,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.primary}</span>
        {props.showSecondary && (
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "var(--color-text-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.secondary}</span>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Selected
    "state=selected": __body1,
    // figma: State=Disabled
    "state=disabled": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SelectOptionUser;
