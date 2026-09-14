import { Field } from '../forms/Field.jsx';
import { DateRangePicker } from '../forms/DateRangePicker.jsx';

// figma node: 6648:65 Navigation/Context Bar — "Período" is a real
// DateRangePicker (presets + custom range) instead of a static Field.
export function NavigationContextBar(_p = {}) {
  const props = { ..._p, period: _p.period ?? { preset: 'custom', start: '2026-07-01', end: '2026-07-31' } };
  return (
    <div className={props.className} style={{
      width: 2324,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <DateRangePicker
        style={{
          position: "relative",
          width: 250,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        value={props.period}
        onChange={props.onPeriodChange}
      />
      <Field
        style={{
          position: "relative",
          width: 250,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        value={"Claro"}
        label={"Plano de referência"}
        showTrailingIcon={true}
        type={"select"}
        state={"default"}
      />
      <Field
        style={{
          position: "relative",
          width: 250,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        value={"Claro Móvel – Controle N1"}
        label={"Produto / Operação"}
        showTrailingIcon={true}
        type={"select"}
        state={"default"}
      />
      <Field
        style={{
          position: "relative",
          width: 250,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        value={"Todos"}
        label={"Segmento"}
        showTrailingIcon={true}
        type={"select"}
        state={"default"}
      />
      <Field
        style={{
          position: "relative",
          width: 250,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        value={"Todos"}
        label={"Site"}
        showTrailingIcon={true}
        type={"select"}
        state={"default"}
      />
      <Field
        style={{
          position: "relative",
          width: 250,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        value={"Todos"}
        label={"Turno"}
        showTrailingIcon={true}
        type={"select"}
        state={"default"}
      />
    </div>
  );
}
export default NavigationContextBar;
