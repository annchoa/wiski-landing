// figma node: 2:487 Avatar (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "size=" + __venc(p.size) + '|' + "shape=" + __venc(p.shape);

export function Avatar(_p = {}) {
  const props = { ..._p, initials: _p.initials ?? "F", type: _p.type ?? "initial", size: _p.size ?? "lg", shape: _p.shape ?? "circle" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "calc(var(--icon-large) * 1px)",
      height: "calc(var(--icon-large) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-brand-default)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 13.5,
        top: 8,
        width: 12,
        height: 24,
        fontFamily: "var(--body-font-family), system-ui, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.2000000476837158,
        color: "var(--text-brand-on-brand)",
      }}>{props.initials}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "calc(var(--icon-medium) * 1px)",
      height: "calc(var(--icon-medium) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-brand-default)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 10.5,
        top: 4.5,
        width: 10,
        height: 22,
        fontFamily: "var(--body-font-family), system-ui, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        color: "var(--text-brand-on-brand)",
      }}>{props.initials}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "calc(var(--icon-small) * 1px)",
      height: "calc(var(--icon-small) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--background-brand-default)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 8,
        top: 1.5,
        width: 9,
        height: 20,
        fontFamily: "var(--body-font-family), system-ui, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        color: "var(--text-brand-on-brand)",
      }}>{props.initials}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "calc(var(--icon-large) * 1px)",
      height: "calc(var(--icon-large) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-11dbcb982f9ba115" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 40,
        height: 40,
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "calc(var(--icon-medium) * 1px)",
      height: "calc(var(--icon-medium) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-11dbcb982f9ba115" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 32,
        height: 32,
      }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "calc(var(--icon-small) * 1px)",
      height: "calc(var(--icon-small) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-11dbcb982f9ba115" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
      }} />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "calc(var(--icon-large) * 1px)",
      height: "calc(var(--icon-large) * 1px)",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--background-brand-default)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 13.5,
        top: 8,
        width: 12,
        height: 24,
        fontFamily: "var(--body-font-family), system-ui, sans-serif",
        fontWeight: 400,
        fontSize: 20,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.2000000476837158,
        color: "var(--text-brand-on-brand)",
      }}>{props.initials}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "calc(var(--icon-medium) * 1px)",
      height: "calc(var(--icon-medium) * 1px)",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--background-brand-default)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 10.5,
        top: 4.5,
        width: 10,
        height: 22,
        fontFamily: "var(--body-font-family), system-ui, sans-serif",
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        color: "var(--text-brand-on-brand)",
      }}>{props.initials}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "calc(var(--icon-small) * 1px)",
      height: "calc(var(--icon-small) * 1px)",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--background-brand-default)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 8,
        top: 1.5,
        width: 9,
        height: 20,
        fontFamily: "var(--body-font-family), system-ui, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: 1.399999976158142,
        color: "var(--text-brand-on-brand)",
      }}>{props.initials}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "calc(var(--icon-large) * 1px)",
      height: "calc(var(--icon-large) * 1px)",
      overflow: "hidden",
      borderRadius: 9999,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-11dbcb982f9ba115" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 40,
        height: 40,
      }} />
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "calc(var(--icon-medium) * 1px)",
      height: "calc(var(--icon-medium) * 1px)",
      overflow: "hidden",
      borderRadius: 9999,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-11dbcb982f9ba115" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 32,
        height: 32,
      }} />
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "calc(var(--icon-small) * 1px)",
      height: "calc(var(--icon-small) * 1px)",
      overflow: "hidden",
      borderRadius: 9999,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-11dbcb982f9ba115" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
      }} />
    </div>
  );
  const __impls = {
    // figma: Type=Initial, Size=Large, Shape=Square
    "type=initial|size=lg|shape=square": __body0,
    // figma: Type=Initial, Size=Medium, Shape=Square
    "type=initial|size=md|shape=square": __body1,
    // figma: Type=Initial, Size=Small, Shape=Square
    "type=initial|size=sm|shape=square": __body2,
    // figma: Type=Image, Size=Large, Shape=Square
    "type=image|size=lg|shape=square": __body3,
    // figma: Type=Image, Size=Medium, Shape=Square
    "type=image|size=md|shape=square": __body4,
    // figma: Type=Image, Size=Small, Shape=Square
    "type=image|size=sm|shape=square": __body5,
    // figma: Type=Initial, Size=Large, Shape=Circle
    "type=initial|size=lg|shape=circle": __body6,
    // figma: Type=Initial, Size=Medium, Shape=Circle
    "type=initial|size=md|shape=circle": __body7,
    // figma: Type=Initial, Size=Small, Shape=Circle
    "type=initial|size=sm|shape=circle": __body8,
    // figma: Type=Image, Size=Large, Shape=Circle
    "type=image|size=lg|shape=circle": __body9,
    // figma: Type=Image, Size=Medium, Shape=Circle
    "type=image|size=md|shape=circle": __body10,
    // figma: Type=Image, Size=Small, Shape=Circle
    "type=image|size=sm|shape=circle": __body11,
  };
  return (__impls[__vkey(props)] ?? __body6)();
}
export default Avatar;
