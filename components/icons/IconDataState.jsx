import { Icon } from '../../assets/icons/Icon.jsx';

const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);
const MAP = {
  "type=empty": { name: "IconDataStateTypeEmpty", color: "var(--color-icon-secondary)" },
  "type=error": { name: "IconDataStateTypeError", color: "var(--color-data-negative)" },
  "type=restricted": { name: "IconDataStateTypeRestricted", color: "var(--color-icon-secondary)" },
  "type=loading": { name: "IconDataStateTypeLoading", color: "var(--color-icon-secondary)" },
  "type=partial": { name: "IconDataStateTypePartial", color: "var(--color-data-attention)" },
  "type=noplan": { name: "IconDataStateTypeNoPlan", color: "var(--color-data-attention)" },
};

export function IconDataState(_p = {}) {
  const props = { ..._p, type: _p.type ?? "empty" };
  const m = MAP[__vkey(props)] ?? MAP["type=empty"];
  return (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      color: m.color,
      ...props.style,
    }}>
      <Icon name={m.name} width={20} height={20} />
    </div>
  );
}
export default IconDataState;
