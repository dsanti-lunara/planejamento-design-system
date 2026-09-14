import { ActionIconButtonGhost } from "../actions/ActionIconButtonGhost.jsx";
import { TagTagChip } from "../forms/TagTagChip.jsx";

// figma node: 7371:8296 Access/Permission Chip (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "removable=" + __venc(p.removable);

export function AccessPermissionChip(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", removable: _p.removable ?? false, label: _p.label ?? "Visualizar" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 120,
      height: 36,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 4px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <TagTagChip
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        label={props.label}
        state={"default"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 170,
      height: 36,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 2px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <TagTagChip
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        label={props.label}
        state={"default"}
      />
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.icon1 ?? <ActionIconButtonGhost size={"sm"} state={"default"} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 120,
      height: 36,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 4px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <TagTagChip
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        label={props.label}
        state={"hover"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 170,
      height: 36,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 2px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <TagTagChip
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        label={props.label}
        state={"hover"}
      />
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.icon1 ?? <ActionIconButtonGhost size={"sm"} state={"default"} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 120,
      height: 36,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 4px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <TagTagChip
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        label={props.label}
        state={"selected"}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 170,
      height: 36,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 2px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <TagTagChip
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        label={props.label}
        state={"selected"}
      />
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.icon1 ?? <ActionIconButtonGhost size={"sm"} state={"default"} />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 120,
      height: 36,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 4px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <TagTagChip
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        label={props.label}
        state={"disabled"}
      />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 170,
      height: 36,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 2px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <TagTagChip
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        label={props.label}
        state={"disabled"}
      />
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.icon1 ?? <ActionIconButtonGhost size={"sm"} state={"default"} />}</div>
    </div>
  );
  const __impls = {
    // figma: State=Default, Removable=False
    "state=default|removable=false": __body0,
    // figma: State=Default, Removable=True
    "state=default|removable=true": __body1,
    // figma: State=Hover, Removable=False
    "state=hover|removable=false": __body2,
    // figma: State=Hover, Removable=True
    "state=hover|removable=true": __body3,
    // figma: State=Selected, Removable=False
    "state=selected|removable=false": __body4,
    // figma: State=Selected, Removable=True
    "state=selected|removable=true": __body5,
    // figma: State=Disabled, Removable=False
    "state=disabled|removable=false": __body6,
    // figma: State=Disabled, Removable=True
    "state=disabled|removable=true": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AccessPermissionChip;
