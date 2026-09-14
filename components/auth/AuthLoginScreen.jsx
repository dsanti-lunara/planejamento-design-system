import React from 'react';
import { InputText } from '../forms/InputText.jsx';
import { InputPassword } from '../forms/InputPassword.jsx';
import { Button } from '../actions/Button.jsx';
import { FeedbackAlert } from '../feedback/FeedbackAlert.jsx';
import { AuthSplitScreen } from './AuthSplitScreen.jsx';
import { AuthBenefitItem } from './AuthBenefitItem.jsx';

// New: complete login screen assembled from real form atoms + AuthSplitScreen.
function IconShieldCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L19 6V11C19 16 15.5 19.5 12 21C8.5 19.5 5 16 5 11V6L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9.5 12L11.5 14L15 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12H21M12 3C14.5 5.5 15.5 8.5 15.5 12C15.5 15.5 14.5 18.5 12 21C9.5 18.5 8.5 15.5 8.5 12C8.5 8.5 9.5 5.5 12 3Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconChevronDown14() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const DEFAULT_BENEFITS = [
  { variant: 'access', title: 'Acesso centralizado', description: 'Encontre todos os relatórios e análises da sua operação em um só lugar.' },
  { variant: 'insights', title: 'Informações que geram valor', description: 'Dados confiáveis e atualizados para decisões mais rápidas e estratégicas.' },
  { variant: 'security', title: 'Segurança e governança', description: 'Controle de acesso, rastreabilidade e conformidade para proteger o que importa.' },
];

export function AuthLoginScreen(_p = {}) {
  const props = {
    ..._p,
    username: _p.username ?? '',
    password: _p.password ?? '',
    language: _p.language ?? 'Português (Brasil)',
    state: _p.state ?? 'default',
    usernameError: _p.usernameError ?? false,
    passwordError: _p.passwordError ?? false,
    credentialsError: _p.credentialsError ?? '',
    languages: _p.languages ?? ['Português (Brasil)', 'English (US)', 'Español'],
  };
  const loading = props.state === 'loading';
  const success = props.state === 'success';
  const busy = loading || success;

  const languageSelector = (
    <label style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 10px', borderRadius: 8, color: 'var(--color-text-secondary)', boxShadow: 'inset 0 0 0 1px var(--color-border-subtle)', backgroundColor: 'var(--color-surface-card)' }}>
      <span style={{ display: 'flex', color: 'var(--color-text-muted)' }}><IconGlobe /></span>
      <select value={props.language} onChange={props.onLanguageChange} aria-label="Idioma" style={{ appearance: 'none', WebkitAppearance: 'none', border: 'none', background: 'transparent', paddingRight: 16, fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 500, fontSize: 12, lineHeight: '16px', color: 'var(--color-text-secondary)', cursor: 'pointer', outline: 'none' }}>
        {props.languages.map((l) => <option key={l} value={l}>{l}</option>)}
      </select>
      <span aria-hidden="true" style={{ display: 'flex', position: 'absolute', right: 8, color: 'var(--color-text-muted)', pointerEvents: 'none' }}><IconChevronDown14 /></span>
    </label>
  );

  return (
    <div className={props.className} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', ...props.style }}>
      <AuthSplitScreen
        style={{ flex: '1 1 auto', minHeight: 0 }}
        rightPanelFooter={languageSelector}
        benefits={(props.benefits ?? DEFAULT_BENEFITS).map((b, i) => (
          <AuthBenefitItem key={i} variant={b.variant} title={b.title} description={b.description} />
        ))}
      >
        <div style={{
          width: '100%', maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 2.4vh, 24px)',
          padding: 'clamp(20px, 3.2vh, 32px)', borderRadius: 16, backgroundColor: 'var(--color-surface-card)',
          boxShadow: 'inset 0 0 0 1px var(--color-border-subtle), 0 8px 24px rgba(7,25,77,0.06)',
          boxSizing: 'border-box',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(8px, 1.2vh, 12px)' }}>
            <img src="../../assets/logos/nexo-icon.svg" alt="" style={{ width: 64, height: 64, display: 'block' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 700, fontSize: 22, color: 'var(--color-text-primary)' }}>Entrar no Nexo</h2>
              <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 500, fontSize: 13, color: 'var(--color-text-link)' }}>Planejamento Analytics</span>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); props.onSubmit && props.onSubmit({ username: props.username, password: props.password }); }} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1.8vh, 16px)' }}>
            {props.credentialsError && !success && (
              <div role="alert" aria-live="assertive">
                <FeedbackAlert presentation="alert" tone="error" showTitle={false} dismiss description={props.credentialsError} onDismiss={props.onDismissCredentialsError} style={{ maxWidth: 'none' }} />
              </div>
            )}
            {success && (
              <div role="status" aria-live="polite">
                <FeedbackAlert presentation="alert" tone="success" showTitle={false} dismiss={false} description={props.successMessage ?? 'Autenticado com sucesso. Redirecionando…'} style={{ maxWidth: 'none' }} />
              </div>
            )}
            <InputText
              label="Usuário" placeholder="Digite seu usuário" value={props.username}
              onChange={props.onUsernameChange} onBlur={props.onUsernameBlur} leadingIcon
              icon={<span style={{ display: 'flex' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" /><path d="M4 20C4 16.5 7.5 14 12 14C16.5 14 20 16.5 20 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>}
              state={props.usernameError ? 'error' : busy ? 'disabled' : 'default'}
              showHelperText={props.usernameError} helperText="Informe seu usuário."
            />
            <InputPassword
              text1="Senha" value={props.password} onChange={props.onPasswordChange} onBlur={props.onPasswordBlur}
              showHelperText={props.passwordError} helperText="Informe sua senha."
              state={props.passwordError ? 'error' : busy ? 'disabled' : 'default'}
            />

            <Button type="submit" label={busy ? 'Entrando…' : 'Entrar'} style2="primary" size="default" state={busy ? 'loading' : 'default'} style={{ width: '100%' }} />
          </form>

          <div style={{ height: 1, backgroundColor: 'var(--color-border-subtle)' }} />

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, justifyContent: 'center' }}>
            <span style={{ color: 'var(--color-text-muted)', flexShrink: 0, marginTop: 1 }}><IconShieldCheck /></span>
            <span style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)', fontWeight: 400, fontSize: 12, lineHeight: '17px', color: 'var(--color-text-muted)', textAlign: 'center' }}>
              Após o login, você retornará automaticamente para a página solicitada, quando aplicável.
            </span>
          </div>
        </div>
      </AuthSplitScreen>
    </div>
  );
}
export default AuthLoginScreen;
