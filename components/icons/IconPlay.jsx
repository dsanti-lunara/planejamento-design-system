import { Icon } from '../../assets/icons/Icon.jsx';

export function IconPlay(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--color-action-on-primary)",
      ...props.style,
    }}>
      <Icon name="IconPlay" width={16} height={16} />
    </div>
  );
}
export default IconPlay;
