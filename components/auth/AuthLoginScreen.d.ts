import * as React from 'react';
export interface AuthLoginScreenProps {
  className?: string;
  style?: React.CSSProperties;
  username?: string;
  password?: string;
  /** Currently selected interface language (label shown in the selector). */
  language?: string;
  /** Options offered by the language selector. */
  languages?: string[];
  state?: "default" | "typing" | "loading" | "success";
  errorMessage?: string;
  /** Field-level validation flags (empty required field after blur). */
  usernameError?: boolean;
  passwordError?: boolean;
  /** Form-level message for invalid credentials. */
  credentialsError?: string;
  successMessage?: string;
  /** Overrides the default 3-item benefit list on the marketing panel. */
  benefits?: Array<{ variant?: "access" | "insights" | "security"; title: string; description: string }>;
  onUsernameChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUsernameBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onPasswordBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onLanguageChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onDismissCredentialsError?: () => void;
  onSubmit?: (values: { username?: string; password?: string }) => void;
}
export declare const AuthLoginScreen: React.FC<AuthLoginScreenProps>;
export default AuthLoginScreen;
