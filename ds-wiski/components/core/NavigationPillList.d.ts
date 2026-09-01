import * as React from 'react';
export interface NavigationPillListProps {
  className?: string;
  style?: React.CSSProperties;
  link1?: boolean;
  link6?: boolean;
  slot?: string;
  link7?: boolean;
  slot2?: string;
  link3?: boolean;
  link2?: boolean;
  link4?: boolean;
  link5?: boolean;
  direction?: "row" | "column";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const NavigationPillList: React.FC<NavigationPillListProps>;
export default NavigationPillList;
