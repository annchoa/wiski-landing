import { AvatarBlock } from './AvatarBlock.jsx';
import { Star } from './Star.jsx';
import { Text } from './Text.jsx';
import { TextHeading } from './TextHeading.jsx';

// figma node: 10:376 Review Card
export function ReviewCard(_p = {}) {
  const props = _p;
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--space-100) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <Star />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <Star />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon3 ?? <Star />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon4 ?? <Star />}</div>
        <Star style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--space-100) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <TextHeading
          style={{ position: "relative", width: 130, flexShrink: 0 }}
          text={"Review title"}
        />
        <Text
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          text={"Review body"}
        />
      </div>
      <AvatarBlock
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        title={"Reviewer name"}
        description={"Date"}
      />
    </div>
  );
}
export default ReviewCard;
