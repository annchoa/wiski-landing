// figma node: 10:369 Text Heading
export function TextHeading(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Text Heading" };
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
        fontWeight: 600,
        fontSize: 24,
        whiteSpace: "nowrap",
        lineHeight: 1.2000000476837158,
        letterSpacing: "-0.020em",
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text}</span>
    </div>
  );
}
export default TextHeading;
