// figma node: 2:116 Text
export function Text(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Text" };
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
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text}</span>
    </div>
  );
}
export default Text;
