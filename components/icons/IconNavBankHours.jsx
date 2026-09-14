import { Icon } from '../../assets/icons/Icon.jsx';

export function IconNavBankHours(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      position: "relative",
      color: "var(--color-icon-secondary)",
      ...props.style,
    }}>
      <Icon name="IconNavBankHours" width={18} height={18} />
    </div>
  );
}
export default IconNavBankHours;
