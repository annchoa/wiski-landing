// figma node: 2:337 Star
export function Star(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-default-default)",
      ...props.style,
    }}>
      <svg width={16.667} height={15.850} viewBox="0 0 16.667 15.850" fill="none" style={{
        position: "absolute",
        left: 1.667,
        top: 1.667,
        width: 16.667,
        height: 15.85,
      }}>
        <path d={"M 8.333 0 L 10.908 5.217 L 16.667 6.058 L 12.5 10.117 L 13.483 15.85 L 8.333 13.142 L 3.183 15.85 L 4.167 10.117 L 0 6.058 L 5.758 5.217 L 8.333 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Star;
