import { AccessStatus } from './AccessStatus.jsx';
import { ActionFavorite } from "../actions/ActionFavorite.jsx";
import { ActionIconButtonSecondary } from "../actions/ActionIconButtonSecondary.jsx";
import { BrandProductLogoTile } from './BrandProductLogoTile.jsx';
import { Button } from "../actions/Button.jsx";
import { IconChevronRight } from "../icons/IconChevronRight.jsx";
import { TagCategoryChip } from './TagCategoryChip.jsx';
import { TagTagChip } from "../forms/TagTagChip.jsx";

// figma node: 7327:8043 Product/Card (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "context=" + __venc(p.context);
const __CAT_LABELS = { operacional: "Operacional", planejamento: "Planejamento", financeiro: "Financeiro", "gestão": "Gestão", clientes: "Clientes", "dados & inteligência": "Dados & Inteligência" };
const __catLabel = (k) => __CAT_LABELS[String(k ?? "").toLowerCase()] ?? k;
const __tagList = (p) => Array.isArray(p.tags) ? p.tags : (typeof p.tags === "string" && p.tags.trim() ? p.tags.split(",").map((t) => t.trim()).filter(Boolean) : null);

export function ProductCard(_p = {}) {
  const props = { ..._p, category: _p.category ?? "operacional", categoryLabel: _p.categoryLabel ?? __catLabel(_p.category ?? "operacional"), showCategory: _p.showCategory ?? true, name: _p.name ?? "Claro Brasil", context: _p.context ?? "featured", showTags: _p.showTags ?? true, showFavorite: _p.showFavorite ?? true, showCTA: _p.showCTA ?? true, showAccess: _p.showAccess ?? false, showSecondaryInfo: _p.showSecondaryInfo ?? true, description: _p.description ?? "Visão integrada de operação, receita e desempenho comercial.", secondaryInfo: _p.secondaryInfo ?? "Atualizado há 12 minutos", showDescription: _p.showDescription ?? true, showAction: _p.showAction ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "100%",
      height: 210,
      borderRadius: 16,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.productLogo ?? <BrandProductLogoTile size={"md"} shape={"rounded"} background={"subtle"} />}</div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          minWidth: 0,
        }}>
          <span style={{
            position: "relative",
            width: "100%",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: 1.35,
            color: "var(--color-text-primary)",
            flexShrink: 0,
            minHeight: "2.7em",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordBreak: "normal",
            overflowWrap: "normal",
          }}>{props.name}</span>
          {props.showDescription && (
          <span style={{
            position: "relative",
            width: "100%",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.4,
            color: "var(--color-text-secondary)",
            flexShrink: 0,
            minHeight: "2.8em",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordBreak: "normal",
            overflowWrap: "normal",
          }}>{props.description}</span>
          )}
        </div>
        {props.showFavorite && (
        <div style={{
            position: "relative",
            width: 28,
            height: 28,
            flexShrink: 0,
          }}>{props.favorite ?? <ActionFavorite size={"sm"} state={"not favorite"} />}</div>
        )}
      </div>
      {props.showTags && (
      <div style={{
        position: "relative",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        {(__tagList(props) ?? ["Claro", "Intraday", "+2"]).map((t, i) => (
        <div key={i} style={{ position: "relative", flexShrink: 0, maxWidth: "100%" }}>{[props.icon1, props.icon2, props.icon3][i] ?? <TagTagChip label={t} state={"default"} />}</div>
        ))}
      </div>
      )}
      {props.showCTA && (
      <div style={{
          position: "relative",
          height: 36,
          width: 107,
          flexShrink: 0,
        }}>{props.cTA ?? <Button size={"compact"} style2={"secondary"} state={"default"} />}</div>
      )}
      <div style={{
        position: "relative",
        height: 27,
        overflow: "hidden",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
        marginTop: "auto",
      }}>
        {props.showCategory && (
        <TagCategoryChip
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          category={props.category}
          label={props.categoryLabel}
        />
        )}
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.access ?? <AccessStatus state={"authorized"} />}</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "100%",
      height: 250,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        minHeight: 40,
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 40,
            flexShrink: 0,
            height: 40,
          }}>{props.productLogo ?? <BrandProductLogoTile size={"md"} shape={"rounded"} background={"subtle"} />}</div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          minWidth: 0,
        }}>
          <span style={{
            position: "relative",
            width: "100%",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: 1.35,
            color: "var(--color-text-primary)",
            flexShrink: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>{props.name}</span>
          {props.showCategory && (
          <TagCategoryChip
            style={{ position: "relative", flexShrink: 0 }}
            category={props.category}
          label={props.categoryLabel}
          />
          )}
        </div>
        {props.showFavorite && (
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.favorite ?? <ActionFavorite state={"not favorite"} />}</div>
        )}
      </div>
      {props.showDescription && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 1.35,
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}>{props.description}</span>
      )}
      {props.showTags && (
      <div style={{
        position: "relative",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        rowGap: 5,
        alignItems: "flex-start",
        flexWrap: "wrap",
        flexShrink: 0,
        alignSelf: "stretch",
        minWidth: 0,
      }}>
        {(__tagList(props) ?? ["Claro", "Intraday", "+2"]).map((t, i) => (
        <div key={i} style={{ position: "relative", flexShrink: 0, maxWidth: "100%" }}>{[props.icon1, props.icon2, props.icon3][i] ?? <TagTagChip label={t} state={"default"} />}</div>
        ))}
      </div>
      )}
      <div style={{
        position: "relative",
        minHeight: 36,
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
        minWidth: 0,
        marginTop: "auto",
      }}>
        <div style={{ position: "relative", flexShrink: 1, minWidth: 0 }}>{props.access ?? <AccessStatus state={"authorized"} />}</div>
        {props.showCTA && (
        <div style={{
            position: "relative",
            width: "auto",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.cTA ?? <Button label={"Abrir"} size={"compact"} style2={"secondary"} state={"default"} />}</div>
        )}
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "100%",
      height: 64,
      borderRadius: 12,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          height: 40,
          flexShrink: 0,
        }}>{props.productLogo ?? <BrandProductLogoTile size={"md"} shape={"rounded"} background={"subtle"} />}</div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
          minWidth: 0,
      }}>
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 14,
          lineHeight: 1.35,
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>{props.name}</span>
        {props.showSecondaryInfo && (
        <span style={{
          position: "relative",
          width: "100%",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 1.35,
          color: "var(--color-text-secondary)",
          flexShrink: 0,
        }}>{props.secondaryInfo}</span>
        )}
      </div>
      {props.showAccess && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.access ?? <AccessStatus state={"authorized"} />}</div>
      )}
      {props.showFavorite && (
      <div style={{
          position: "relative",
          width: 28,
          height: 28,
          flexShrink: 0,
        }}>{props.favorite ?? <ActionFavorite size={"sm"} state={"not favorite"} />}</div>
      )}
      {props.showAction && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.action ?? <ActionIconButtonSecondary icon={<IconChevronRight />} size={"sm"} state={"default"} />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: Context=Featured
    "context=featured": __body0,
    // figma: Context=Catalog
    "context=catalog": __body1,
    // figma: Context=Compact
    "context=compact": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ProductCard;
