import * as React from 'react';
export interface IdentityAvatarProps {
  className?: string;
  style?: React.CSSProperties;
  initials?: string;
  content?: "initials" | "image" | "icon";
  size?: "xs" | "sm" | "md" | "lg";
}
export declare const IdentityAvatar: React.FC<IdentityAvatarProps>;
export default IdentityAvatar;
