import { BrandProductLogoTile } from './BrandProductLogoTile.jsx';
import { InputCheckbox } from "../forms/InputCheckbox.jsx";
import { TagTagChip } from "../forms/TagTagChip.jsx";

// figma node: 7380:8331 Select Option/Product (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function SelectOptionProduct(_p = {}) {
  const props = { ..._p, primary: _p.primary ?? "Claro Brasil", state: _p.state ?? "default", showCategory: _p.showCategory ?? true, showLogo: _p.showLogo ?? true };
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
      {props.showLogo && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.productLogo ?? <BrandProductLogoTile fallback={"CL"} size={"sm"} shape={"rounded"} background={"brand"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.primary}</span>
      {props.showCategory && (
      <TagTagChip
        style={{ position: "relative", width: 90, flexShrink: 0 }}
        label={"Operacional"}
        state={"default"}
      />
      )}
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
      {props.showLogo && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.productLogo ?? <BrandProductLogoTile fallback={"CL"} size={"sm"} shape={"rounded"} background={"brand"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.primary}</span>
      {props.showCategory && (
      <TagTagChip
        style={{ position: "relative", width: 90, flexShrink: 0 }}
        label={"Operacional"}
        state={"default"}
      />
      )}
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
      {props.showLogo && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.productLogo ?? <BrandProductLogoTile fallback={"CL"} size={"sm"} shape={"rounded"} background={"brand"} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexGrow: 1,
      }}>{props.primary}</span>
      {props.showCategory && (
      <TagTagChip
        style={{ position: "relative", width: 90, flexShrink: 0 }}
        label={"Operacional"}
        state={"default"}
      />
      )}
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
export default SelectOptionProduct;
