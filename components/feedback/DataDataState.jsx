import { IconDataState } from "../icons/IconDataState.jsx";
import { IconSearch } from "../icons/IconSearch.jsx";

// Improved: fixed unresolved-variable placeholder colors (rgb(0,0,0)) to real text/border tokens.
// figma node: 6650:80 Data/Data State (7 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function DataDataState(_p = {}) {
  const props = { ..._p, type: _p.type ?? "empty" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 420,
      height: 190,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconDataState type={"empty"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "Sem dados no recorte"}</span>
      <span style={{
        position: "relative",
        width: 320,
        whiteSpace: "normal",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "140%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.text2 ?? "Revise o período, os filtros ou a disponibilidade da fonte."}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 420,
      height: 190,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconSearch style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "Nenhum resultado encontrado"}</span>
      <span style={{
        position: "relative",
        width: 320,
        whiteSpace: "normal",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "140%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.text2 ?? "Ajuste a busca ou amplie o recorte selecionado."}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 420,
      height: 190,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-negative)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconDataState type={"error"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "Não foi possível carregar"}</span>
      <span style={{
        position: "relative",
        width: 320,
        whiteSpace: "normal",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "140%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.text2 ?? "Tente novamente. Os dados já carregados permanecem disponíveis."}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 420,
      height: 190,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconDataState type={"restricted"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "Acesso restrito"}</span>
      <span style={{
        position: "relative",
        width: 320,
        whiteSpace: "normal",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "140%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.text2 ?? "O detalhe não está disponível para o perfil atual."}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 420,
      height: 190,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconDataState type={"loading"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "Carregando análise"}</span>
      <span style={{
        position: "relative",
        width: 320,
        whiteSpace: "normal",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "140%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.text2 ?? "O contexto permanece visível enquanto os dados são processados."}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 420,
      height: 190,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-warning)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconDataState type={"partial"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "Dados parciais"}</span>
      <span style={{
        position: "relative",
        width: 320,
        whiteSpace: "normal",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "140%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.text2 ?? "Parte das fontes ainda não concluiu a atualização."}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 420,
      height: 190,
      borderRadius: 8,
      backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-warning)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-8-3) * 1px)",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconDataState type={"noplan"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "Sem plano comparável"}</span>
      <span style={{
        position: "relative",
        width: 320,
        whiteSpace: "normal",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "140%",
        color: "var(--color-text-secondary)",
        flexShrink: 0,
      }}>{props.text2 ?? "O realizado e o histórico compatível continuam disponíveis."}</span>
    </div>
  );
  const __impls = {
    // figma: Type=Empty
    "type=empty": __body0,
    // figma: Type=NoResults
    "type=noresults": __body1,
    // figma: Type=Error
    "type=error": __body2,
    // figma: Type=Restricted
    "type=restricted": __body3,
    // figma: Type=Loading
    "type=loading": __body4,
    // figma: Type=Partial
    "type=partial": __body5,
    // figma: Type=NoPlan
    "type=noplan": __body6,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DataDataState;
