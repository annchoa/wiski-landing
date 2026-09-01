import { NavigationPill } from './NavigationPill.jsx';

// figma node: 2:171 Navigation Pill List (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "direction=" + __venc(p.direction);

export function NavigationPillList(_p = {}) {
  const props = { ..._p, link1: _p.link1 ?? true, link6: _p.link6 ?? true, slot: _p.slot ?? "", link7: _p.link7 ?? true, slot2: _p.slot2 ?? "", link3: _p.link3 ?? true, link2: _p.link2 ?? true, link4: _p.link4 ?? true, link5: _p.link5 ?? true, direction: _p.direction ?? "row" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 377,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      alignItems: "flex-start",
      flexWrap: "wrap",
      alignContent: "space-between",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.link1 && (
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <NavigationPill state={"active"} />}</div>
        )}
        {props.link2 && (
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <NavigationPill state={"default"} />}</div>
        )}
        {props.link3 && (
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <NavigationPill state={"default"} />}</div>
        )}
        {props.link4 && (
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <NavigationPill state={"default"} />}</div>
        )}
        {props.link5 && (
        <NavigationPill
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          state={"default"}
        />
        )}
        {props.link6 && (
        <NavigationPill
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          state={"default"}
        />
        )}
        {props.link7 && (
        <NavigationPill
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          state={"default"}
        />
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 115,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-200) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.link1 && (
        <NavigationPill
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
        )}
        {props.link2 && (
        <NavigationPill
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"active"}
        />
        )}
        {props.link3 && (
        <NavigationPill
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
        )}
        {props.link4 && (
        <NavigationPill
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
        )}
        {props.link5 && (
        <NavigationPill
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
        )}
        {props.link6 && (
        <NavigationPill
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
        />
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: Direction=Row
    "direction=row": __body0,
    // figma: Direction=Column
    "direction=column": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default NavigationPillList;
