import { DataDataState } from "../feedback/DataDataState.jsx";
import { StateFullPage } from "../feedback/StateFullPage.jsx";
import { IconDataState } from "../icons/IconDataState.jsx";

// figma node: 7428:11959 Runtime/Report Embed Frame (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function RuntimeReportEmbedFrame(_p = {}) {
  const props = { ..._p, productContent: _p.productContent ?? "", state: _p.state ?? "loaded" };
  const __body0 = () => (
    <div className={props.className} role="region" aria-label={`Área do relatório — ${props.state}`} style={{
      width: "100%",
      maxWidth: 1360,
      height: 760,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
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
        flex: 1,
        minHeight: 0,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "rgb(247,250,255)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(71,89,122)",
          flexShrink: 0,
        }}>{props.text1 ?? "Área do produto carregado"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} role="region" aria-label={`Área do relatório — ${props.state}`} style={{
      width: "100%",
      maxWidth: "none",
      height: "100%",
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "column",
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ width: 20, height: 20, flexShrink: 0 }}><IconDataState type={"loading"} /></div>
      <span style={{
        marginTop: 12,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 13,
        textAlign: "center",
        lineHeight: "100%",
        color: "var(--color-text-primary)",
      }}>{props.text1 ?? "Carregando análise"}</span>
      <span style={{
        marginTop: 6,
        maxWidth: 300,
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "140%",
        color: "var(--color-text-tertiary, var(--color-text-secondary))",
      }}>{props.text2 ?? "O contexto permanece visível enquanto os dados são processados."}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} role="region" aria-label={`Área do relatório — ${props.state}`} style={{
      width: "100%",
      maxWidth: 1360,
      height: 760,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <DataDataState
        style={{
          position: "relative",
          width: 420,
          height: 190,
          flexShrink: 0,
        }}
        type={"empty"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} role="region" aria-label={`Área do relatório — ${props.state}`} style={{
      width: "100%",
      maxWidth: 1360,
      height: 760,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <StateFullPage
        style={{
          position: "relative",
          width: 960,
          height: 700,
          flexShrink: 0,
        }}
        type={"error"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} role="region" aria-label={`Área do relatório — ${props.state}`} style={{
      width: "100%",
      maxWidth: 1360,
      height: 760,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <StateFullPage
        style={{
          position: "relative",
          width: 960,
          height: 700,
          flexShrink: 0,
        }}
        type={"maintenance"}
        eyebrow={"Estado do sistema"}
        eyebrowVisible={true}
        code={undefined}
        codeVisible={false}
        title={props.text1 ?? "Produto temporariamente indisponível"}
        description={props.text2 ?? "Este produto está em manutenção e ficará disponível novamente assim que o procedimento for concluído."}
        supportingInfo={props.supportingInfo}
        supportingInfoVisible={!!props.supportingInfo}
        primaryAction={true}
        secondaryAction={true}
        primaryActionLabel={"Voltar ao Nexo"}
        secondaryActionLabel={"Tentar novamente"}
        onPrimaryAction={props.onPrimaryAction}
        onSecondaryAction={props.onSecondaryAction}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} role="region" aria-label={`Área do relatório — ${props.state}`} style={{
      width: "100%",
      maxWidth: 1360,
      height: 760,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <DataDataState
        style={{
          position: "relative",
          width: 420,
          height: 190,
          flexShrink: 0,
        }}
        type={"restricted"}
      />
    </div>
  );
  const __impls = {
    // figma: State=Loaded
    "state=loaded": __body0,
    // figma: State=Loading
    "state=loading": __body1,
    // figma: State=Empty
    "state=empty": __body2,
    // figma: State=Error
    "state=error": __body3,
    // figma: State=Maintenance
    "state=maintenance": __body4,
    // Access-restricted (reuses DataDataState)
    "state=restricted": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default RuntimeReportEmbedFrame;
