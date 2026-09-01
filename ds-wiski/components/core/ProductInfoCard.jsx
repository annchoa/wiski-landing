import { Text } from './Text.jsx';
import { TextStrong } from './TextStrong.jsx';

// figma node: 2:131 Product Info Card
export function ProductInfoCard(_p = {}) {
  const props = { ..._p, showDescription: _p.showDescription ?? true, title: _p.title ?? "Text", price: _p.price ?? "$0", body: _p.body ?? "Body text." };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      minWidth: 240,
      borderRadius: 8,
      backgroundColor: "var(--background-default-default)",
      borderTop: "1px solid var(--border-default-default)",
      borderRight: "1px solid var(--border-default-default)",
      borderBottom: "1px solid var(--border-default-default)",
      borderLeft: "1px solid var(--border-default-default)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-400) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-400) * 1px)",
      paddingTop: "calc(var(--space-400) * 1px)",
      paddingRight: "calc(var(--space-400) * 1px)",
      paddingBottom: "calc(var(--space-400) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div className={props.image ? undefined : "fig-asset-0707e6b202246218-4e5656f1"} style={{
        position: "relative",
        background: props.image ? `url(${props.image}) center / cover no-repeat` : undefined,
        height: 247,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--space-200) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Text text={props.title} style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <TextStrong text={props.price} />}</div>
        {props.showDescription && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--body-font-family), system-ui, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 1.399999976158142,
            color: "rgb(48,48,48)",
            flexShrink: 0,
          }}>{props.body}</span>
        </div>
        )}
      </div>
    </div>
  );
}
export default ProductInfoCard;
