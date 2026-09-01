// figma node: 2:164 Navigation Pill (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function NavigationPill(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Link", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--background-brand-tertiary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-200) * 1px)",
      paddingTop: "calc(var(--space-200) * 1px)",
      paddingRight: "calc(var(--space-200) * 1px)",
      paddingBottom: "calc(var(--space-200) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--body-font-family), system-ui, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-brand-on-brand-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-200) * 1px)",
      paddingTop: "calc(var(--space-200) * 1px)",
      paddingRight: "calc(var(--space-200) * 1px)",
      paddingBottom: "calc(var(--space-200) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--body-font-family), system-ui, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--background-default-default-hover)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-200) * 1px)",
      paddingTop: "calc(var(--space-200) * 1px)",
      paddingRight: "calc(var(--space-200) * 1px)",
      paddingBottom: "calc(var(--space-200) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--body-font-family), system-ui, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1,
        color: "var(--text-default-default)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: State=Active
    "state=active": __body0,
    // figma: State=Default
    "state=default": __body1,
    // figma: State=Hover
    "state=hover": __body2,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default NavigationPill;
