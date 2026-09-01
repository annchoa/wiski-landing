// figma node: 2:126 Text Small
export function TextSmall(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Text Small" };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--body-font-family), system-ui, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text}</span>
    </div>
  );
}
export default TextSmall;
