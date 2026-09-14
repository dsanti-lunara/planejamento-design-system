import { ActionIconButtonGhost } from "../actions/ActionIconButtonGhost.jsx";
import { IconChevronRight } from "../icons/IconChevronRight.jsx";
import { IconNavGlossary } from "../icons/IconNavGlossary.jsx";
import { IconExternalLink } from "../icons/IconExternalLink.jsx";

// figma node: 7349:6880 Product/Resource Link Row — made fluid and content-driven:
// one implementation (was 3 near-identical fixed 760×104 bodies), text wraps instead
// of being clipped by nowrap, `external` renders a real "↗" affordance, and the row
// is clickable via `onClick` (ignored while disabled).
const FONT = 'var(--font-sans, "Plus Jakarta Sans", sans-serif)';

export function ProductResourceLinkRow(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Documentação do produto", state: _p.state ?? "default", showTrailingAction: _p.showTrailingAction ?? true, description: _p.description ?? "Guia institucional, definições e orientações de uso.", external: _p.external ?? false, showLeadingIcon: _p.showLeadingIcon ?? true, showDescription: _p.showDescription ?? true };
  const disabled = props.state === "disabled";
  const clickable = !disabled && typeof props.onClick === "function";

  return (
    <div
      className={props.className}
      onClick={clickable ? props.onClick : undefined}
      role={clickable ? "link" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={clickable ? (e) => { if (e.key === "Enter") props.onClick(e); } : undefined}
      style={{
        width: "100%", maxWidth: "100%", minWidth: 0, boxSizing: "border-box",
        opacity: disabled ? 0.56 : 1, cursor: clickable ? "pointer" : "default",
        borderRadius: 10, backgroundColor: "var(--color-surface-card)",
        boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
        display: "flex", flexDirection: "row", gap: 14, padding: 16,
        alignItems: "center", position: "relative",
        ...props.style,
      }}
    >
      {props.showLeadingIcon && (
        <div style={{ width: 32, height: 32, flexShrink: 0 }}>
          {props.icon1 ?? <ActionIconButtonGhost icon={<IconNavGlossary />} size={"sm"} state={"default"} />}
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "flex-start", flexGrow: 1, minWidth: 0 }}>
        <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 15, lineHeight: "130%", color: "var(--color-text-primary)", width: "100%", textWrap: "pretty", overflowWrap: "anywhere" }}>
          {props.title}
          {props.external && <span aria-label="Abre em nova aba" style={{ display: "inline-flex", verticalAlign: "middle", marginLeft: 6, width: 12, height: 12, color: "var(--color-text-secondary)" }}><IconExternalLink style={{ width: 12, height: 12 }} /></span>}
        </span>
        {props.showDescription && (
          <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 13, lineHeight: "140%", color: "var(--color-text-secondary)", width: "100%", textWrap: "pretty", overflowWrap: "anywhere" }}>{props.description}</span>
        )}
      </div>
      {props.showTrailingAction && (
        <div style={{ width: 16, height: 16, flexShrink: 0 }}>{props.icon2 ?? <IconChevronRight />}</div>
      )}
    </div>
  );
}
export default ProductResourceLinkRow;
