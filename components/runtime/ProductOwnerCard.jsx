import { ActionIconButtonSecondary } from '../actions/ActionIconButtonSecondary.jsx';
import { IconNavGovernance } from '../icons/IconNavGovernance.jsx';
import { IdentityAvatar } from '../data-display/IdentityAvatar.jsx';

// figma node: 7348:6816 Product/Owner Card — made fluid (was a fixed 520×112 box that
// forced horizontal scroll inside page columns), tokenized (was raw rgb() literals) and
// content-driven (avatar initials now derive from `name`, contact action is clickable).
const FONT = 'var(--font-sans, "Plus Jakarta Sans", sans-serif)';
const initialsOf = (name) => String(name || "").trim().split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase() || "NX";

export function ProductOwnerCard(_p = {}) {
  const props = { ..._p, showContactAction: _p.showContactAction ?? true, role: _p.role ?? "Product Owner", showAvatar: _p.showAvatar ?? true, name: _p.name ?? "Ana Ferreira", showSecondaryInfo: _p.showSecondaryInfo ?? true, secondaryInfo: _p.secondaryInfo ?? "Planejamento Analytics" };
  return (
    <div className={props.className} style={{
      width: "100%", maxWidth: "100%", minWidth: 0, boxSizing: "border-box",
      borderRadius: 12, backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex", flexDirection: "row", gap: 16, padding: 16,
      alignItems: "center", position: "relative",
      ...props.style,
    }}>
      {props.showAvatar && (
        <div style={{ width: 32, height: 32, flexShrink: 0 }}>
          {props.icon1 ?? <IdentityAvatar initials={props.initials ?? initialsOf(props.name)} content={"initials"} size={"sm"} />}
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-start", flexGrow: 1, minWidth: 0 }}>
        <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 12, lineHeight: "130%", color: "var(--color-text-brand)", width: "100%", overflowWrap: "anywhere" }}>{props.role}</span>
        <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 15, lineHeight: "130%", color: "var(--color-text-primary)", width: "100%", overflowWrap: "anywhere" }}>{props.name}</span>
        {props.showSecondaryInfo && (
          <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 12, lineHeight: "130%", color: "var(--color-text-secondary)", width: "100%", overflowWrap: "anywhere" }}>{props.secondaryInfo}</span>
        )}
      </div>
      {props.showContactAction && (
        <div style={{ width: 32, height: 32, flexShrink: 0 }} onClick={props.onContact}>
          {props.icon2 ?? <ActionIconButtonSecondary icon={<IconNavGovernance />} size={"sm"} state={"default"} />}
        </div>
      )}
    </div>
  );
}
export default ProductOwnerCard;
