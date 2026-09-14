import { ActionIconButtonDanger } from "../actions/ActionIconButtonDanger.jsx";
import { IconTrash } from "../icons/IconTrash.jsx";
import { InputText } from './InputText.jsx';

// figma node: 7353:7076 Form/Dynamic Route Row — controlled row (name + path + remove)
export function FormDynamicRouteRow(_p = {}) {
  const props = { ..._p, showRemove: _p.showRemove ?? true, disabled: _p.disabled ?? false };
  const route = props.route ?? { id: '', name: '', path: '' };
  const nameError = props.nameError || '';
  const pathError = props.pathError || '';

  return (
    <div className={props.className} style={{
      width: "100%",
      minWidth: 0,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "wrap",
      position: "relative",
      boxSizing: "border-box",
      ...props.style,
    }}>
      <InputText
        style={{ position: "relative", flex: "1 1 260px", minWidth: 0 }}
        value={route.name}
        onChange={(e) => props.onNameChange && props.onNameChange(e.target.value)}
        onBlur={() => props.onNameBlur && props.onNameBlur()}
        placeholder={"Ex.: Visão Geral"}
        helperText={nameError}
        showLabel={false}
        showHelperText={!!nameError}
        required={true}
        size={"default"}
        state={props.disabled ? "disabled" : (nameError ? "error" : "default")}
      />
      <InputText
        style={{ position: "relative", flex: "1 1 260px", minWidth: 0 }}
        value={route.path}
        onChange={(e) => props.onPathChange && props.onPathChange(e.target.value)}
        onBlur={() => props.onPathBlur && props.onPathBlur()}
        placeholder={"Ex.: /visao-geral"}
        helperText={pathError}
        showLabel={false}
        showHelperText={!!pathError}
        required={true}
        size={"default"}
        state={props.disabled ? "disabled" : (pathError ? "error" : "default")}
      />
      {props.showRemove && (
      <div style={{ position: "relative", width: 40, height: 40, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <ActionIconButtonDanger
          icon={props.icon1 ?? <IconTrash />}
          size={"sm"}
          state={props.disabled ? "disabled" : "default"}
          onClick={props.disabled ? undefined : props.onRemove}
          aria-label={"Remover rota"}
        />
      </div>
      )}
    </div>
  );
}
export default FormDynamicRouteRow;
