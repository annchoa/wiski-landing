import * as React from 'react';
/**
 * @startingPoint section="Wiski" subtitle="Latest-reviews band, desktop or mobile" viewport="700x430"
 */
export interface CardGridReviewsProps {
  className?: string;
  style?: React.CSSProperties;
  platform?: "desktop" | "mobile";
}
export declare const CardGridReviews: React.FC<CardGridReviewsProps>;
export default CardGridReviews;
