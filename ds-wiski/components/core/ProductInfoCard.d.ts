import * as React from 'react';
/**
 * @startingPoint section="Wiski" subtitle="Product card grid — the Ruta / Momento shelf" viewport="700x520"
 */
export interface ProductInfoCardProps {
  className?: string;
  style?: React.CSSProperties;
  /** Product name, rendered through <Text>. */
  title?: string;
  /** Price line, rendered through <TextStrong>. */
  price?: string;
  /** Supporting line, 14px slate. */
  body?: string;
  /** Show the supporting line. */
  showDescription?: boolean;
  /** Image URL for the 247px-tall media slot; falls back to the kit's placeholder. */
  image?: string;
  /** Swappable nested instance in the price slot. */
  icon1?: React.ReactNode;
}
export declare const ProductInfoCard: React.FC<ProductInfoCardProps>;
export default ProductInfoCard;
