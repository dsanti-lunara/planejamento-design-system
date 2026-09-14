import React from 'react';
import { Button } from "../actions/Button.jsx";
import { FeedbackAlert } from "../feedback/FeedbackAlert.jsx";
import { FormDynamicRouteRow } from "../forms/FormDynamicRouteRow.jsx";

// figma node: 7354:7061 Form/Dynamic Route List — controlled dynamic list (add/edit/remove routes)
let __routeSeq = 0;
export function makeRouteId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  __routeSeq += 1;
  return 'route-' + Date.now().toString(36) + '-' + __routeSeq;
}
export function emptyRoute() { return { id: makeRouteId(), name: '', path: '' }; }

function normalizePath(v) { return String(v ?? '').trim(); }

// Pure validator: returns { [routeId]: { name?: string, path?: string } }
export function validateRoutes(routes) {
  const list = routes ?? [];
  const pathCounts = {};
  list.forEach((r) => {
    const p = normalizePath(r.path).toLowerCase();
    if (!p) return;
    pathCounts[p] = (pathCounts[p] || 0) + 1;
  });
  const errors = {};
  list.forEach((r) => {
    const rowErrors = {};
    const name = String(r.name ?? '').trim();
    const path = normalizePath(r.path);
    if (!name) rowErrors.name = 'Nome da rota é obrigatório.';
    if (!path) {
      rowErrors.path = 'Path é obrigatório.';
    } else if (!path.startsWith('/')) {
      rowErrors.path = 'Path deve começar com "/".';
    } else if (/\s/.test(path)) {
      rowErrors.path = 'Path não pode conter espaços.';
    } else if (pathCounts[path.toLowerCase()] > 1) {
      rowErrors.path = 'Já existe uma rota com esse path.';
    }
    if (rowErrors.name || rowErrors.path) errors[r.id] = rowErrors;
  });
  return errors;
}

export function FormDynamicRouteList(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Rotas adicionais", description: _p.description ?? "Deep links adicionais publicados dentro do produto. Ex.: /dashboard, /historico", showTitle: _p.showTitle ?? true, disabled: _p.disabled ?? false, showErrors: _p.showErrors ?? false };
  const routes = props.routes ?? [];
  const [touched, setTouched] = React.useState({});
  const [confirmId, setConfirmId] = React.useState(null);
  const errors = React.useMemo(() => validateRoutes(routes), [routes]);
  const isValid = Object.keys(errors).length === 0;

  React.useEffect(() => { props.onValidityChange && props.onValidityChange(isValid); }, [isValid]);

  const emitChange = (next) => props.onChange && props.onChange(next);

  const handleAdd = () => {
    if (props.disabled) return;
    emitChange([...routes, emptyRoute()]);
  };
  const handleFieldChange = (id, field, value) => {
    emitChange(routes.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };
  const handleBlur = (id, field) => {
    setTouched((t) => ({ ...t, [id]: { ...t[id], [field]: true } }));
  };
  const removeNow = (id) => {
    emitChange(routes.filter((r) => r.id !== id));
    setTouched((t) => { const next = { ...t }; delete next[id]; return next; });
  };
  // An empty, never-filled-in row has nothing to break — remove it immediately. A row that
  // carries a real name/path may back a published deep link, so confirm before removing it.
  const handleRemove = (id) => {
    const route = routes.find((r) => r.id === id);
    const isEmpty = route && !String(route.name ?? '').trim() && !String(route.path ?? '').trim();
    if (isEmpty) removeNow(id); else setConfirmId(id);
  };

  const shouldShow = (id, field) => props.showErrors || (touched[id] && touched[id][field]);

  return (
    <div className={props.className} style={{
      width: "100%",
      minWidth: 0,
      maxWidth: "100%",
      borderRadius: 14,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(209,219,237)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "24px 24px 24px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showTitle && (
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 20,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(20,36,79)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "100%",
        color: "rgb(87,107,148)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.description}</span>
      {routes.length > 0 && (
      <div style={{ position: "relative", display: "flex", flexDirection: "row", gap: 12, width: "100%", minWidth: 0, boxSizing: "border-box", flexShrink: 0, alignSelf: "stretch" }}>
        <span style={{ flex: "1 1 260px", minWidth: 0, fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.03em", color: "var(--color-text-tertiary, rgb(120,135,165))" }}>Nome da rota</span>
        <span style={{ flex: "1 1 260px", minWidth: 0, fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.03em", color: "var(--color-text-tertiary, rgb(120,135,165))" }}>Path</span>
        <span style={{ width: 40, flexShrink: 0, fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.03em", color: "var(--color-text-tertiary, rgb(120,135,165))", textAlign: "center" }}>Ações</span>
      </div>
      )}
      {routes.length > 0 && (
      <div style={{
        position: "relative",
        maxHeight: 420,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
      }}>
        {routes.map((route, i) => {
          const rowErrors = errors[route.id] || {};
          return (
            <FormDynamicRouteRow
              key={route.id}
              style={{ position: "relative", flexShrink: 0, alignSelf: "stretch", width: "auto" }}
              route={route}
              disabled={props.disabled}
              nameError={shouldShow(route.id, 'name') ? rowErrors.name : ''}
              pathError={shouldShow(route.id, 'path') ? rowErrors.path : ''}
              onNameChange={(v) => handleFieldChange(route.id, 'name', v)}
              onPathChange={(v) => handleFieldChange(route.id, 'path', v)}
              onNameBlur={() => handleBlur(route.id, 'name')}
              onPathBlur={() => handleBlur(route.id, 'path')}
              onRemove={() => handleRemove(route.id)}
            />
          );
        })}
      </div>
      )}
      {props.showErrors && !isValid && (
      <FeedbackAlert
        style={{ position: "relative", flexShrink: 0, alignSelf: "stretch", width: "auto", height: "auto" }}
        title={"Validação de rotas"}
        description={"Corrija paths duplicados, vazios ou inválidos antes de salvar."}
        showTitle={true}
        action={false}
        dismiss={false}
        presentation={"alert"}
        tone={"info"}
      />
      )}
      <Button
        style={{ position: "relative", height: 40, flexShrink: 0 }}
        label={"Adicionar rota"}
        size={"default"}
        style2={"secondary"}
        state={props.disabled ? "disabled" : "default"}
        onClick={props.disabled ? undefined : handleAdd}
      />
      {confirmId && (
      <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--color-surface-overlay)" }}>
        <div style={{ width: 380, maxWidth: "calc(100vw - 32px)", borderRadius: 14, backgroundColor: "var(--color-surface-raised)", boxShadow: "inset 0 0 0 1px var(--color-border-default), 0 12px 32px rgba(7,25,77,0.18)", padding: 24, display: "flex", flexDirection: "column", gap: 8, boxSizing: "border-box" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16, color: "var(--color-text-primary)" }}>Remover esta rota?</span>
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 14, color: "var(--color-text-secondary)", lineHeight: "20px" }}>Links publicados para este caminho deixarão de funcionar.</span>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 12 }}>
            <Button label={"Cancelar"} size={"default"} style2={"secondary"} onClick={() => setConfirmId(null)} />
            <Button label={"Remover rota"} size={"default"} style2={"destructive"} onClick={() => { removeNow(confirmId); setConfirmId(null); }} />
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
export default FormDynamicRouteList;
