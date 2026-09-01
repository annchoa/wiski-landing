// Breakpoint values shared by every component's CSS. CSS custom properties
// cannot be used inside @media queries, so this is the one place the raw
// numbers live — keep every stylesheet's media queries in sync with these.
//
//   mobile:  0–639px   (default styles, no query needed)
//   tablet:  640–1023px
//   desktop: 1024px+
export const BREAKPOINT_TABLET = "640px";
export const BREAKPOINT_DESKTOP = "1024px";
