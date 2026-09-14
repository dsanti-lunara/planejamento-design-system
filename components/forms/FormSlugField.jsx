import { ActionIconButtonSecondary } from "../actions/ActionIconButtonSecondary.jsx";
import { IconNavSaved } from "../icons/IconNavSaved.jsx";
import { InputText } from './InputText.jsx';
import { Button } from '../actions/Button.jsx';

// figma node: 7352:7019 Form/Slug Field (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "prefix2=" + __venc(p.prefix2);

export function FormSlugField(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Slug", state: _p.state ?? "editable", prefix: _p.prefix ?? "/nexo/r/", prefix2: _p.prefix2 ?? true, showCopy: _p.showCopy ?? true };
  const handleChange = (e) => props.onChange && props.onChange(e.target.value);
  const __body0 = () => (
    <div className={props.className} style={{
      width: "100%",
      maxWidth: "100%",
      minWidth: 0,
      boxSizing: "border-box",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(20,36,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      <div style={{
        position: "relative",
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(87,107,148)",
          flexShrink: 0,
        }}>{props.prefix}</span>
        <InputText
          style={{
            position: "relative",
            flex: "1 1 auto",
            minWidth: 0,
            alignSelf: "stretch",
            width: "100%",
            height: "auto",
          }}
          label={"Slug"}
          value={props.value ?? "claro-brasil"}
          onChange={handleChange}
          helperText={"Identificador único usado na URL."}
          showLabel={false}
          showHelperText={true}
          leadingIcon={false}
          trailingAction={false}
          required={true}
          size={"default"}
          state={"filled"}
        />
        {props.showCopy && (
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon1 ?? <ActionIconButtonSecondary icon={<IconNavSaved />} size={"sm"} state={"default"} />}</div>
        )}
      </div>
    </div>
  );
  const __body1 = () => {
    const [unlocked, setUnlocked] = React.useState(false);
    if (unlocked) {
      return (
        <div className={props.className} style={{
          width: "100%", maxWidth: "100%", minWidth: 0, boxSizing: "border-box", height: "auto",
          display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", flexWrap: "nowrap",
          position: "relative", ...props.style,
        }}>
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, whiteSpace: "nowrap", lineHeight: "100%", color: "rgb(20,36,79)", flexShrink: 0, alignSelf: "stretch" }}>{props.label}</span>
          <div style={{ width: "100%", minWidth: 0, boxSizing: "border-box", display: "flex", flexDirection: "row", gap: 8, alignItems: "center", flexWrap: "nowrap", flexShrink: 0, alignSelf: "stretch" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 14, whiteSpace: "nowrap", lineHeight: "100%", color: "rgb(87,107,148)", flexShrink: 0 }}>{props.prefix}</span>
            <InputText
              style={{ flex: "1 1 auto", minWidth: 0, alignSelf: "stretch", width: "100%", height: "auto" }}
              label={"Slug"}
              value={props.value ?? "claro-brasil"}
              onChange={handleChange}
              helperText={"Você está alterando o slug. Links publicados com o valor anterior deixarão de funcionar."}
              showLabel={false}
              showHelperText={true}
              leadingIcon={false}
              trailingAction={false}
              required={true}
              size={"default"}
              state={"filled"}
            />
          </div>
        </div>
      );
    }
    return (
      <div className={props.className} style={{
        width: "100%", maxWidth: "100%", minWidth: 0, boxSizing: "border-box", height: "auto",
        display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", flexWrap: "nowrap",
        position: "relative", ...props.style,
      }}>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, whiteSpace: "nowrap", lineHeight: "100%", color: "rgb(20,36,79)", flexShrink: 0, alignSelf: "stretch" }}>{props.label}</span>
        <div style={{ width: "100%", minWidth: 0, boxSizing: "border-box", display: "flex", flexDirection: "row", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 2, flex: "1 1 220px", minWidth: 0,
            height: "var(--size-control-default, 40px)", padding: "0 12px", borderRadius: 8,
            background: "var(--color-surface-muted, rgb(244,246,250))",
            boxShadow: "inset 0 0 0 1px var(--color-border-subtle)", boxSizing: "border-box", overflow: "hidden",
          }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text-tertiary, rgb(120,135,165))", whiteSpace: "nowrap", flexShrink: 0 }}>{props.prefix}</span>
            <span style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)", fontSize: 14, color: "var(--color-text-primary, rgb(20,36,79))", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{props.value ?? "claro-brasil"}</span>
          </div>
          <Button label={"Alterar"} style2={"tertiary"} size={"compact"} onClick={() => setUnlocked(true)} style={{ flexShrink: 0 }} />
        </div>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, lineHeight: "16px", color: "var(--color-text-secondary, rgb(87,107,148))", width: "100%", minWidth: 0, textWrap: "pretty" }}>{"Alterar o slug pode quebrar links já publicados."}</span>
      </div>
    );
  };
  const __body2 = () => (
    <div className={props.className} style={{
      width: "100%",
      maxWidth: "100%",
      minWidth: 0,
      boxSizing: "border-box",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(20,36,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      <div style={{
        position: "relative",
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(87,107,148)",
          flexShrink: 0,
        }}>{props.prefix}</span>
        <InputText
          style={{
            position: "relative",
            flex: "1 1 auto",
            minWidth: 0,
            alignSelf: "stretch",
            width: "100%",
            height: "auto",
          }}
          label={"Slug"}
          value={"claro brasil"}
          helperText={"Use apenas letras minúsculas, números e hífen."}
          showLabel={false}
          showHelperText={true}
          leadingIcon={false}
          trailingAction={false}
          required={true}
          size={"default"}
          state={"error"}
        />
        {props.showCopy && (
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon1 ?? <ActionIconButtonSecondary icon={<IconNavSaved />} size={"sm"} state={"default"} />}</div>
        )}
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "100%",
      maxWidth: "100%",
      minWidth: 0,
      boxSizing: "border-box",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <InputText
          style={{
            position: "relative",
            flex: "1 1 auto",
            minWidth: 0,
            alignSelf: "stretch",
            width: "100%",
            height: "auto",
          }}
          label={"Slug"}
          value={props.value ?? "claro-brasil"}
          onChange={handleChange}
          helperText={"Identificador único usado na URL."}
          showLabel={false}
          showHelperText={true}
          leadingIcon={false}
          trailingAction={false}
          required={true}
          size={"default"}
          state={"filled"}
        />
        {props.showCopy && (
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon1 ?? <ActionIconButtonSecondary icon={<IconNavSaved />} size={"sm"} state={"default"} />}</div>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Editable, Prefix=True
    "state=editable|prefix2=true": __body0,
    // figma: State=Readonly, Prefix=True
    "state=readonly|prefix2=true": __body1,
    // figma: State=Error, Prefix=True
    "state=error|prefix2=true": __body2,
    // figma: State=Editable, Prefix=False
    "state=editable|prefix2=false": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default FormSlugField;
