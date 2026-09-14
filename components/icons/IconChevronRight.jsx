import { Icon } from '../../assets/icons/Icon.jsx';

export function IconChevronRight(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      color: "var(--color-icon-secondary)",
      ...props.style,
    }}>
      <Icon name="IconChevronRight" width={16} height={16} />
    </div>
  );
}
export default IconChevronRight;
