import { AccessProductAccessList } from './AccessProductAccessList.jsx';
import { ActionOverflowMenu } from "../actions/ActionOverflowMenu.jsx";
import { TagTagChip } from "../forms/TagTagChip.jsx";

// figma node: 7373:8316 Access/Group Card (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function AccessGroupCard(_p = {}) {
  const props = { ..._p, showPermissions: _p.showPermissions ?? true, name: _p.name ?? "Planejamento", state: _p.state ?? "default", showOverflow: _p.showOverflow ?? true, showProducts: _p.showProducts ?? true, memberCount: _p.memberCount ?? "42 membros", showDescription: _p.showDescription ?? true, description: _p.description ?? "Acesso aos produtos e recursos da área de Planejamento." };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 550,
      height: 360,
      borderRadius: 14,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 48,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 12,
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
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 18,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.name}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.memberCount}</span>
        </div>
        {props.showOverflow && (
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ActionOverflowMenu state={"closed"} />}</div>
        )}
      </div>
      {props.showDescription && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.description}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Produtos"}</span>
      {props.showProducts && (
      <AccessProductAccessList
        style={{
          position: "relative",
          width: 180,
          height: 40,
          flexShrink: 0,
        }}
        size={"sm"}
      />
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Permissões principais"}</span>
      {props.showPermissions && (
      <div style={{
        position: "relative",
        height: 64,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "wrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <TagTagChip
          style={{ position: "relative", width: 76, flexShrink: 0 }}
          label={"Visualizar"}
          state={"default"}
        />
        <div style={{ position: "relative", width: 67, flexShrink: 0 }}>{props.icon2 ?? <TagTagChip label={"Analisar"} state={"default"} />}</div>
        <div style={{ position: "relative", width: 67, flexShrink: 0 }}>{props.icon3 ?? <TagTagChip label={"Publicar"} state={"default"} />}</div>
        <div style={{ position: "relative", width: 36, flexShrink: 0 }}>{props.icon4 ?? <TagTagChip label={"+3"} state={"default"} />}</div>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 550,
      height: 360,
      borderRadius: 14,
      backgroundColor: "var(--color-surface-subtle)",
      boxShadow: "inset 0 0 0 1px var(--color-border-brand)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 48,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 12,
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
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 18,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-primary)",
            flexShrink: 0,
          }}>{props.name}</span>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 13,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
          }}>{props.memberCount}</span>
        </div>
        {props.showOverflow && (
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <ActionOverflowMenu state={"closed"} />}</div>
        )}
      </div>
      {props.showDescription && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.description}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Produtos"}</span>
      {props.showProducts && (
      <AccessProductAccessList
        style={{
          position: "relative",
          width: 180,
          height: 40,
          flexShrink: 0,
        }}
        size={"sm"}
      />
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Permissões principais"}</span>
      {props.showPermissions && (
      <div style={{
        position: "relative",
        height: 64,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "wrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <TagTagChip
          style={{ position: "relative", width: 76, flexShrink: 0 }}
          label={"Visualizar"}
          state={"default"}
        />
        <div style={{ position: "relative", width: 67, flexShrink: 0 }}>{props.icon2 ?? <TagTagChip label={"Analisar"} state={"default"} />}</div>
        <div style={{ position: "relative", width: 67, flexShrink: 0 }}>{props.icon3 ?? <TagTagChip label={"Publicar"} state={"default"} />}</div>
        <div style={{ position: "relative", width: 36, flexShrink: 0 }}>{props.icon4 ?? <TagTagChip label={"+3"} state={"default"} />}</div>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Hover
    "state=hover": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default AccessGroupCard;
