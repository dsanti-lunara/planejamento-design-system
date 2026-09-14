import { AccessStatus } from './AccessStatus.jsx';
import { StatusBadge } from './StatusBadge.jsx';
import { ActionFavorite } from "../actions/ActionFavorite.jsx";
import { BrandProductLogoTile } from './BrandProductLogoTile.jsx';
import { Button } from "../actions/Button.jsx";
import { TagCategoryChip } from './TagCategoryChip.jsx';
import { TagTagChip } from "../forms/TagTagChip.jsx";

// figma node: 7346:6906 Product/Detail Header — rebuilt content-driven: one fluid
// implementation instead of 6 hardcoded access×favorite bodies (was 1131 lines).
// Every string (category, tags, status, action labels) is now a prop; the `access`
// variant only supplies defaults.
const ACCESS = {
  authorized: { statusLabel: "Acesso autorizado", primaryLabel: "Abrir produto" },
  restricted: { statusLabel: "Acesso restrito", primaryLabel: "Consultar regras de acesso" },
  archived: { statusLabel: "Produto arquivado", primaryLabel: "Ver produto substituto" },
};
const FONT = 'var(--font-sans, "Plus Jakarta Sans", sans-serif)';

export function ProductDetailHeader(_p = {}) {
  const props = {
    ..._p,
    name: _p.name ?? "Claro Brasil",
    access: _p.access ?? "authorized",
    description: _p.description ?? "Acompanhamento consolidado e diagnóstico operacional da operação Claro Brasil.",
    favorite: _p.favorite ?? false,
    showDescription: _p.showDescription ?? true,
    showCategory: _p.showCategory ?? true,
    showTags: _p.showTags ?? true,
    showMetadata: _p.showMetadata ?? true,
    showPrimaryAction: _p.showPrimaryAction ?? true,
    showSecondaryAction: _p.showSecondaryAction ?? true,
    showFavorite: _p.showFavorite ?? true,
    // "access" (default) = AccessStatus, for the user-facing product access pill.
    // "lifecycle" = StatusBadge, for the admin product lifecycle (Draft/Homologação/Ativo/…).
    // These are semantically distinct — access must never stand in for lifecycle.
    statusMode: _p.statusMode ?? "access",
    lifecycleTone: _p.lifecycleTone ?? "neutral",
  };
  const variant = ACCESS[props.access] ?? ACCESS.authorized;
  const tags = props.tags ?? ["Claro", "Intraday", "Análises"];
  const legacyTags = [props.icon2, props.icon3, props.icon4].filter(Boolean);

  return (
    <div className={props.className} style={{
      width: "100%", maxWidth: "100%", minWidth: 0, boxSizing: "border-box",
      borderRadius: 16, backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex", flexDirection: "column", gap: 16, padding: "22px 24px",
      alignItems: "flex-start", position: "relative",
      ...props.style,
    }}>
      <div style={{ display: "flex", flexDirection: "row", gap: 16, alignItems: "center", alignSelf: "stretch", width: "100%", minWidth: 0 }}>
        <div style={{ width: 56, height: 56, flexShrink: 0 }}>
          {props.productLogo ?? <BrandProductLogoTile fallback={props.logoFallback ?? "CL"} size={"lg"} shape={"rounded"} background={"brand"} />}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-start", flexGrow: 1, minWidth: 0 }}>
          <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 23, lineHeight: "130%", color: "var(--color-text-primary)", width: "100%", textWrap: "pretty", overflowWrap: "anywhere" }}>{props.name}</span>
          {props.showDescription && (
            <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 15, lineHeight: "140%", color: "var(--color-text-secondary)", width: "100%", textWrap: "pretty", overflowWrap: "anywhere" }}>{props.description}</span>
          )}
        </div>
        {props.showFavorite && (
          <div style={{ width: 40, height: 40, flexShrink: 0 }}>
            {props.icon1 ?? <ActionFavorite favorited={props.favorite} onToggle={props.onFavoriteToggle} />}
          </div>
        )}
      </div>

      {(props.showCategory || props.showTags) && (
        <div style={{ display: "flex", flexDirection: "row", gap: 8, alignItems: "center", flexWrap: "wrap", width: "100%", minWidth: 0 }}>
          {props.showCategory && (
            <TagCategoryChip style={{ flexShrink: 0 }} label={props.categoryLabel ?? "Operacional"} category={props.category ?? "operacional"} />
          )}
          {props.showTags && (legacyTags.length ? legacyTags.map((n, i) => (
            <div key={i} style={{ flexShrink: 0 }}>{n}</div>
          )) : tags.map((t) => (
            <TagTagChip key={t} style={{ flexShrink: 0 }} label={t} state={"default"} />
          )))}
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "row", gap: 12, rowGap: 8, alignItems: "center", flexWrap: "wrap", alignSelf: "stretch", width: "100%", minWidth: 0 }}>
        {props.statusMode === "lifecycle" ? (
          <StatusBadge style={{ flexShrink: 0 }} label={props.statusLabel ?? "Rascunho"} tone={props.lifecycleTone} />
        ) : (
          <AccessStatus style={{ flexShrink: 0 }} label={props.statusLabel ?? variant.statusLabel} state={props.access} />
        )}
        {props.showMetadata && (
          <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 13, lineHeight: "140%", color: "var(--color-text-secondary)", flexGrow: 1, minWidth: 0 }}>{props.text1 ?? props.metadata ?? "Atualizado hoje às 07:30"}</span>
        )}
        {props.showSecondaryAction && (
          <Button style={{ height: 40, flexShrink: 0 }} label={props.secondaryLabel ?? "Ver documentação"} size={"default"} style2={"secondary"} state={props.secondaryState ?? "default"} onClick={props.onSecondaryAction} />
        )}
        {props.showPrimaryAction && (
          <Button style={{ height: 40, flexShrink: 0 }} label={props.primaryLabel ?? variant.primaryLabel} size={"default"} style2={"primary"} state={props.primaryState ?? "default"} onClick={props.onPrimaryAction} />
        )}
      </div>
    </div>
  );
}
export default ProductDetailHeader;
