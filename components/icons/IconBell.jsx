import { Icon } from '../../assets/icons/Icon.jsx';

export function IconBell(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      color: "var(--color-text-brand)",
      ...props.style,
    }}>
      <Icon name="IconBell" width={20} height={20} />
    </div>
  );
}
export default IconBell;
