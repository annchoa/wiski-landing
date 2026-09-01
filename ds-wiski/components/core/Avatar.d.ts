import * as React from 'react';
export interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
  initials?: string;
  type?: "initial" | "image";
  size?: "lg" | "sm" | "md";
  shape?: "circle" | "square";
}
export declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
