import { AccessStatus } from './AccessStatus.jsx';
import { Button } from "../actions/Button.jsx";
import { FeedbackAlert } from "../feedback/FeedbackAlert.jsx";

// figma node: 7347:6828 Product/Access State — rebuilt content-driven and fluid:
// one implementation, no fixed 640×420 box (which forced horizontal scroll inside
// page layouts) and no `whiteSpace: nowrap` on the copy.
const STATE = {
  restricted: {
    statusLabel: "Acesso restrito", title: "Acesso restrito",
    description: "Seu CR e FUNCAORM atuais não possuem acesso a este produto.",
    alertTitle: "Como o acesso é definido", alertDescription: "O acesso a este produto é definido pelas regras corporativas de CR e FUNCAORM vigentes em Hominum.",
    alertTone: "info", actionLabel: "Consultar regras de acesso",
  },
  archived: {
    statusLabel: "Produto arquivado", title: "Produto arquivado",
    description: "Este produto foi descontinuado e não está mais disponível para acesso.",
    alertTitle: "Informação histórica", alertDescription: "Consulte a documentação ou o produto substituto quando disponível.",
    alertTone: "warning", actionLabel: "Ver produto substituto",
  },
};
const FONT = 'var(--font-sans, "Plus Jakarta Sans", sans-serif)';

export function ProductAccessState(_p = {}) {
  const props = { ..._p, state: _p.state ?? "restricted", showAction: _p.showAction ?? true, showAlert: _p.showAlert ?? true, showStatus: _p.showStatus ?? true };
  const v = STATE[props.state] ?? STATE.restricted;

  return (
    <div className={props.className} style={{
      width: "100%", maxWidth: "100%", minWidth: 0, boxSizing: "border-box",
      borderRadius: 16, backgroundColor: "var(--color-surface-card)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex", flexDirection: "column", gap: 16, padding: 32,
      alignItems: "center", position: "relative",
      ...props.style,
    }}>
      {props.showStatus && (
        <AccessStatus style={{ flexShrink: 0 }} label={props.statusLabel ?? v.statusLabel} state={props.state} />
      )}
      <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 22, textAlign: "center", lineHeight: "130%", color: "var(--color-text-primary)", alignSelf: "stretch", textWrap: "pretty" }}>{props.title ?? v.title}</span>
      <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 15, textAlign: "center", lineHeight: "150%", color: "var(--color-text-secondary)", alignSelf: "stretch", maxWidth: 560, textWrap: "pretty" }}>{props.description ?? v.description}</span>
      {props.showAlert && (
        <FeedbackAlert
          style={{ flexShrink: 0, alignSelf: "stretch", width: "100%", height: "auto", boxSizing: "border-box", textAlign: "left" }}
          title={props.alertTitle ?? v.alertTitle}
          description={props.alertDescription ?? v.alertDescription}
          showTitle={true} action={false} dismiss={false}
          presentation={"callout"} tone={props.alertTone ?? v.alertTone}
        />
      )}
      {props.showAction && (
        <Button style={{ height: 40, flexShrink: 0 }} label={props.actionLabel ?? v.actionLabel} size={"default"} style2={"primary"} state={props.actionState ?? "default"} onClick={props.onAction} />
      )}
    </div>
  );
}
export default ProductAccessState;
