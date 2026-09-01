import { ReviewCard } from './ReviewCard.jsx';
import { TextHeading } from './TextHeading.jsx';

// figma node: 10:387 Card Grid Reviews (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "platform=" + __venc(p.platform);

export function CardGridReviews(_p = {}) {
  const props = { ..._p, platform: _p.platform ?? "desktop" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--device-width) * 1px)",
      backgroundColor: "var(--background-default-default)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-1200) * 1px)",
      padding: "64px 64px 64px 64px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-1600) * 1px)",
      paddingTop: "calc(var(--space-1600) * 1px)",
      paddingRight: "calc(var(--space-1600) * 1px)",
      paddingBottom: "calc(var(--space-1600) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <TextHeading
        style={{ position: "relative", width: 163, flexShrink: 0 }}
        text={"Latest reviews"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-1200) * 1px)",
        alignItems: "flex-start",
        flexWrap: "wrap",
        alignContent: "space-between",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ReviewCard style={{ position: "relative", flexGrow: 1, width: "auto" }} />
        <ReviewCard style={{ position: "relative", flexGrow: 1, width: "auto" }} />
        <ReviewCard style={{ position: "relative", flexGrow: 1, width: "auto" }} />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--device-width) * 1px)",
      backgroundColor: "var(--background-default-default)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-600) * 1px)",
      padding: "24px 24px 24px 24px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-600) * 1px)",
      paddingTop: "calc(var(--space-600) * 1px)",
      paddingRight: "calc(var(--space-600) * 1px)",
      paddingBottom: "calc(var(--space-600) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <TextHeading
        style={{
          position: "relative",
          width: 113,
          height: 61,
          flexShrink: 0,
        }}
        text={"Latest reviews"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-600) * 1px)",
        alignItems: "flex-start",
        flexWrap: "wrap",
        alignContent: "space-between",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ReviewCard style={{ position: "relative", flexGrow: 1, width: "auto" }} />
        <ReviewCard style={{ position: "relative", flexGrow: 1, width: "auto" }} />
        <ReviewCard style={{ position: "relative", flexGrow: 1, width: "auto" }} />
      </div>
    </div>
  );
  const __impls = {
    // figma: Platform=Desktop
    "platform=desktop": __body0,
    // figma: Platform=Mobile
    "platform=mobile": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default CardGridReviews;
