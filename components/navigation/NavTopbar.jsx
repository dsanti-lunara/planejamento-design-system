import { NavigationBreadcrumb } from './NavigationBreadcrumb.jsx';
import { SearchGlobalSearch } from './SearchGlobalSearch.jsx';
import { FeedbackNotificationBell } from '../feedback/FeedbackNotificationBell.jsx';
import { IdentityUserMenu } from '../data-display/IdentityUserMenu.jsx';
import { Field } from '../forms/Field.jsx';
import { Button } from '../actions/Button.jsx';

// Unified topbar shell — replaces the two previously-duplicated components
// (NavigationPortalTopbar, NavigationAdminTopbar), which each hand-drew their
// own search box, bell glyph and user-menu block instead of reusing
// SearchGlobalSearch / FeedbackNotificationBell / IdentityUserMenu.
export function NavTopbar(_p = {}) {
  const props = {
    ..._p,
    variant: _p.variant ?? "portal",
    breadcrumb: _p.breadcrumb ?? true,
    search: _p.search ?? true,
    notifications: _p.notifications ?? true,
    environmentSelector: _p.environmentSelector ?? false,
    primaryAction: _p.primaryAction ?? false,
    user: _p.user ?? { name: "Rafael Santos", role: "Administradora" },
  };
  const isAdmin = props.variant === "admin";

  return (
    <div className={props.className} style={{
      width: "100%", height: 56,
      backgroundColor: "var(--color-surface-sidebar)",
      boxShadow: "inset 0 0 0 1px var(--color-border-subtle)",
      display: "flex", flexDirection: "row", gap: isAdmin ? 16 : 20,
      padding: "8px 24px",
      alignItems: "center", boxSizing: "border-box",
      ...props.style,
    }}>
      {!isAdmin && props.breadcrumb && (
        <NavigationBreadcrumb style={{ width: 250, height: 32, flexShrink: 0 }} path="short" />
      )}
      {props.search && (
        <SearchGlobalSearch style={{ flex: "1 1 220px", minWidth: 0 }} onClick={props.onSearchClick} />
      )}
      {isAdmin && props.environmentSelector && (
        <Field style={{ width: 210, height: 40, flexShrink: 0 }} value="Ambiente interno" label="Ambiente" type="select" />
      )}
      <div style={{ display: "flex", flexDirection: "row", gap: 12, alignItems: "center", flexShrink: 0, alignSelf: "stretch", marginLeft: "auto" }}>
        {isAdmin && props.primaryAction && (
          <Button label="Nova ação" size="compact" style2="primary" />
        )}
        {props.notifications && <FeedbackNotificationBell />}
        <IdentityUserMenu style={{ width: 230, flexShrink: 0, padding: "4px 10px 4px 8px" }} name={props.user.name} role={props.user.role} />
      </div>
    </div>
  );
}
export default NavTopbar;
