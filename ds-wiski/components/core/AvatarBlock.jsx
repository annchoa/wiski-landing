import { Avatar } from './Avatar.jsx';

// figma node: 10:371 Avatar Block
export function AvatarBlock(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Title", description: _p.description ?? "Description" };
  return (
    <div className={props.className} style={{
      width: 139,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-300) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          height: 40,
          flexShrink: 0,
        }}>{props.icon1 ?? <Avatar type={"image"} size={"lg"} shape={"circle"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--body-font-family), system-ui, sans-serif",
          fontWeight: 600,
          fontSize: 16,
          lineHeight: 1.399999976158142,
          color: "var(--text-default-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.title}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--body-font-family), system-ui, sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.399999976158142,
          color: "var(--text-default-tertiary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.description}</span>
      </div>
    </div>
  );
}
export default AvatarBlock;
