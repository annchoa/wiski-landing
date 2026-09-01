import * as React from 'react';
export interface NavigationPillProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "default" | "active" | "hover";
}
export declare const NavigationPill: React.FC<NavigationPillProps>;
export default NavigationPill;
