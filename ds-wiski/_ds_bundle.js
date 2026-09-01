/* @ds-bundle: {"format":4,"namespace":"WiskiPhotobookDesignSystem_53badd","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarBlock","sourcePath":"components/core/AvatarBlock.jsx"},{"name":"CardGridReviews","sourcePath":"components/core/CardGridReviews.jsx"},{"name":"NavigationPill","sourcePath":"components/core/NavigationPill.jsx"},{"name":"NavigationPillList","sourcePath":"components/core/NavigationPillList.jsx"},{"name":"ProductInfoCard","sourcePath":"components/core/ProductInfoCard.jsx"},{"name":"ReviewCard","sourcePath":"components/core/ReviewCard.jsx"},{"name":"Star","sourcePath":"components/core/Star.jsx"},{"name":"Text","sourcePath":"components/core/Text.jsx"},{"name":"TextHeading","sourcePath":"components/core/TextHeading.jsx"},{"name":"TextSmall","sourcePath":"components/core/TextSmall.jsx"},{"name":"TextStrong","sourcePath":"components/core/TextStrong.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"f2073f18b8d2","components/core/AvatarBlock.jsx":"bcdb4d1e37b7","components/core/CardGridReviews.jsx":"5ff32d0ef68b","components/core/NavigationPill.jsx":"e82c26867aa0","components/core/NavigationPillList.jsx":"e2fd4c097adc","components/core/ProductInfoCard.jsx":"cc696a39dfd2","components/core/ReviewCard.jsx":"63c589bdcdfc","components/core/Star.jsx":"a54f73855a85","components/core/Text.jsx":"c70838d7a1ec","components/core/TextHeading.jsx":"d239e15d7e91","components/core/TextSmall.jsx":"dfd4d08e9f64","components/core/TextStrong.jsx":"d7df8739b0f5","ui_kits/website/FooterSections.jsx":"7d47287f2e54","ui_kits/website/HeroSection.jsx":"2fb819334f27","ui_kits/website/MidSections.jsx":"9e7525d38c96","ui_kits/website/ProductBand.jsx":"19a193fb8a83","ui_kits/website/SiteHeader.jsx":"19e75e4a430e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WiskiPhotobookDesignSystem_53badd = window.WiskiPhotobookDesignSystem_53badd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
// figma node: 2:487 Avatar (12 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "type=" + __venc(p.type) + '|' + "size=" + __venc(p.size) + '|' + "shape=" + __venc(p.shape);
function Avatar(_p = {}) {
  const props = {
    ..._p,
    initials: _p.initials ?? "F",
    type: _p.type ?? "initial",
    size: _p.size ?? "lg",
    shape: _p.shape ?? "circle"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--icon-large) * 1px)",
      height: "calc(var(--icon-large) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-brand-default)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
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
      color: "var(--text-brand-on-brand)"
    }
  }, props.initials));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--icon-medium) * 1px)",
      height: "calc(var(--icon-medium) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--background-brand-default)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
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
      color: "var(--text-brand-on-brand)"
    }
  }, props.initials));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--icon-small) * 1px)",
      height: "calc(var(--icon-small) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--background-brand-default)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
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
      color: "var(--text-brand-on-brand)"
    }
  }, props.initials));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--icon-large) * 1px)",
      height: "calc(var(--icon-large) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-11dbcb982f9ba115",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--icon-medium) * 1px)",
      height: "calc(var(--icon-medium) * 1px)",
      overflow: "hidden",
      borderRadius: 8,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-11dbcb982f9ba115",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32
    }
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--icon-small) * 1px)",
      height: "calc(var(--icon-small) * 1px)",
      overflow: "hidden",
      borderRadius: 4,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-11dbcb982f9ba115",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--icon-large) * 1px)",
      height: "calc(var(--icon-large) * 1px)",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--background-brand-default)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
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
      color: "var(--text-brand-on-brand)"
    }
  }, props.initials));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--icon-medium) * 1px)",
      height: "calc(var(--icon-medium) * 1px)",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--background-brand-default)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
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
      color: "var(--text-brand-on-brand)"
    }
  }, props.initials));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--icon-small) * 1px)",
      height: "calc(var(--icon-small) * 1px)",
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--background-brand-default)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
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
      color: "var(--text-brand-on-brand)"
    }
  }, props.initials));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--icon-large) * 1px)",
      height: "calc(var(--icon-large) * 1px)",
      overflow: "hidden",
      borderRadius: 9999,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-11dbcb982f9ba115",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--icon-medium) * 1px)",
      height: "calc(var(--icon-medium) * 1px)",
      overflow: "hidden",
      borderRadius: 9999,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-11dbcb982f9ba115",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32
    }
  }));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--icon-small) * 1px)",
      height: "calc(var(--icon-small) * 1px)",
      overflow: "hidden",
      borderRadius: 9999,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-11dbcb982f9ba115",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }));
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
    "type=image|size=sm|shape=circle": __body11
  };
  return (__impls[__vkey(props)] ?? __body6)();
}
Object.assign(__ds_scope, { Avatar, __ds_default_components_core_Avatar_4ed3sh: Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/AvatarBlock.jsx
try { (() => {
// figma node: 10:371 Avatar Block
function AvatarBlock(_p = {}) {
  const props = {
    ..._p,
    title: _p.title ?? "Title",
    description: _p.description ?? "Description"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 139,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-300) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    type: "image",
    size: "lg",
    shape: "circle"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--body-font-family), system-ui, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1.399999976158142,
      color: "var(--text-default-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--body-font-family), system-ui, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.399999976158142,
      color: "var(--text-default-tertiary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.description)));
}
Object.assign(__ds_scope, { AvatarBlock, __ds_default_components_core_AvatarBlock_krlsws: AvatarBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AvatarBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/NavigationPill.jsx
try { (() => {
// figma node: 2:164 Navigation Pill (3 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "state=" + __venc(p.state);
function NavigationPill(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? "Link",
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--body-font-family), system-ui, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1,
      color: "var(--text-brand-on-brand-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--body-font-family), system-ui, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1,
      color: "var(--text-default-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--body-font-family), system-ui, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1,
      color: "var(--text-default-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
  const __impls = {
    // figma: State=Active
    "state=active": __body0,
    // figma: State=Default
    "state=default": __body1,
    // figma: State=Hover
    "state=hover": __body2
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
Object.assign(__ds_scope, { NavigationPill, __ds_default_components_core_NavigationPill_335g2b: NavigationPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavigationPill.jsx", error: String((e && e.message) || e) }); }

// components/core/NavigationPillList.jsx
try { (() => {
// figma node: 2:171 Navigation Pill List (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "direction=" + __venc(p.direction);
function NavigationPillList(_p = {}) {
  const props = {
    ..._p,
    link1: _p.link1 ?? true,
    link6: _p.link6 ?? true,
    slot: _p.slot ?? "",
    link7: _p.link7 ?? true,
    slot2: _p.slot2 ?? "",
    link3: _p.link3 ?? true,
    link2: _p.link2 ?? true,
    link4: _p.link4 ?? true,
    link5: _p.link5 ?? true,
    direction: _p.direction ?? "row"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 377,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-200) * 1px)",
      alignItems: "flex-start",
      flexWrap: "wrap",
      alignContent: "space-between",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.link1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    state: "active"
  })), props.link2 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    state: "default"
  })), props.link3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    state: "default"
  })), props.link4 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    state: "default"
  })), props.link5 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    state: "default"
  }), props.link6 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    state: "default"
  }), props.link7 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    state: "default"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 115,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-200) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.link1 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "default"
  }), props.link2 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "active"
  }), props.link3 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "default"
  }), props.link4 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "default"
  }), props.link5 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "default"
  }), props.link6 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "default"
  })));
  const __impls = {
    // figma: Direction=Row
    "direction=row": __body0,
    // figma: Direction=Column
    "direction=column": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { NavigationPillList, __ds_default_components_core_NavigationPillList_18bbnz: NavigationPillList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavigationPillList.jsx", error: String((e && e.message) || e) }); }

// components/core/Star.jsx
try { (() => {
// figma node: 2:337 Star
function Star(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-default-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.667,
    height: 15.850,
    viewBox: "0 0 16.667 15.850",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 1.667,
      width: 16.667,
      height: 15.85
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.333 0 L 10.908 5.217 L 16.667 6.058 L 12.5 10.117 L 13.483 15.85 L 8.333 13.142 L 3.183 15.85 L 4.167 10.117 L 0 6.058 L 5.758 5.217 L 8.333 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}
Object.assign(__ds_scope, { Star, __ds_default_components_core_Star_pwqij0: Star });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Star.jsx", error: String((e && e.message) || e) }); }

// components/core/Text.jsx
try { (() => {
// figma node: 2:116 Text
function Text(_p = {}) {
  const props = {
    ..._p,
    text: _p.text ?? "Text"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--body-font-family), system-ui, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-default-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
}
Object.assign(__ds_scope, { Text, __ds_default_components_core_Text_pwqy8n: Text });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Text.jsx", error: String((e && e.message) || e) }); }

// components/core/TextHeading.jsx
try { (() => {
// figma node: 10:369 Text Heading
function TextHeading(_p = {}) {
  const props = {
    ..._p,
    text: _p.text ?? "Text Heading"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--body-font-family), system-ui, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: 1.2000000476837158,
      letterSpacing: "-0.020em",
      color: "var(--text-default-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
}
Object.assign(__ds_scope, { TextHeading, __ds_default_components_core_TextHeading_1hzyuh3: TextHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/ReviewCard.jsx
try { (() => {
// figma node: 10:376 Review Card
function ReviewCard(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-100) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.Star, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.Star, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(__ds_scope.Star, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(__ds_scope.Star, null)), /*#__PURE__*/React.createElement(__ds_scope.Star, {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-100) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextHeading, {
    style: {
      position: "relative",
      width: 130,
      flexShrink: 0
    },
    text: "Review title"
  }), /*#__PURE__*/React.createElement(__ds_scope.Text, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Review body"
  })), /*#__PURE__*/React.createElement(__ds_scope.AvatarBlock, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    title: "Reviewer name",
    description: "Date"
  }));
}
Object.assign(__ds_scope, { ReviewCard, __ds_default_components_core_ReviewCard_1chzxi6: ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/core/CardGridReviews.jsx
try { (() => {
// figma node: 10:387 Card Grid Reviews (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "platform=" + __venc(p.platform);
function CardGridReviews(_p = {}) {
  const props = {
    ..._p,
    platform: _p.platform ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--device-width) * 1px)",
      backgroundColor: "var(--background-default-default)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-1200) * 1px)",
      padding: "64px 64px 64px 64px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--space-1600) * 1px)",
      paddingTop: "calc(var(--space-1600) * 1px)",
      paddingRight: "calc(var(--space-1600) * 1px)",
      paddingBottom: "calc(var(--space-1600) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextHeading, {
    style: {
      position: "relative",
      width: 163,
      flexShrink: 0
    },
    text: "Latest reviews"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-1200) * 1px)",
      alignItems: "flex-start",
      flexWrap: "wrap",
      alignContent: "space-between",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ReviewCard, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ReviewCard, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ReviewCard, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    }
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "calc(var(--device-width) * 1px)",
      backgroundColor: "var(--background-default-default)",
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextHeading, {
    style: {
      position: "relative",
      width: 113,
      height: 61,
      flexShrink: 0
    },
    text: "Latest reviews"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--space-600) * 1px)",
      alignItems: "flex-start",
      flexWrap: "wrap",
      alignContent: "space-between",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ReviewCard, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ReviewCard, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ReviewCard, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    }
  })));
  const __impls = {
    // figma: Platform=Desktop
    "platform=desktop": __body0,
    // figma: Platform=Mobile
    "platform=mobile": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { CardGridReviews, __ds_default_components_core_CardGridReviews_t24mjb: CardGridReviews });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CardGridReviews.jsx", error: String((e && e.message) || e) }); }

// components/core/TextSmall.jsx
try { (() => {
// figma node: 2:126 Text Small
function TextSmall(_p = {}) {
  const props = {
    ..._p,
    text: _p.text ?? "Text Small"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--body-font-family), system-ui, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-default-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
}
Object.assign(__ds_scope, { TextSmall, __ds_default_components_core_TextSmall_xsntcg: TextSmall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextSmall.jsx", error: String((e && e.message) || e) }); }

// components/core/TextStrong.jsx
try { (() => {
// figma node: 2:121 Text Strong
function TextStrong(_p = {}) {
  const props = {
    ..._p,
    text: _p.text ?? "Text Strong"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--body-font-family), system-ui, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-default-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
}
Object.assign(__ds_scope, { TextStrong, __ds_default_components_core_TextStrong_1dyg69g: TextStrong });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextStrong.jsx", error: String((e && e.message) || e) }); }

// components/core/ProductInfoCard.jsx
try { (() => {
// figma node: 2:131 Product Info Card
function ProductInfoCard(_p = {}) {
  const props = {
    ..._p,
    showDescription: _p.showDescription ?? true,
    title: _p.title ?? "Text",
    price: _p.price ?? "$0",
    body: _p.body ?? "Body text."
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
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
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: props.image ? undefined : "fig-asset-0707e6b202246218-4e5656f1",
    style: {
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
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--space-200) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Text, {
    text: props.title,
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.TextStrong, {
    text: props.price
  })), props.showDescription && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--body-font-family), system-ui, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.399999976158142,
      color: "rgb(48,48,48)",
      flexShrink: 0
    }
  }, props.body))));
}
Object.assign(__ds_scope, { ProductInfoCard, __ds_default_components_core_ProductInfoCard_1v61zqx: ProductInfoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProductInfoCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FooterSections.jsx
try { (() => {
const wiskiFootStyles = {
  reviews: {
    background: 'var(--surface-band-reviews)',
    padding: '0 0 0'
  },
  reviewsInner: {
    width: 1440,
    margin: '0 auto',
    padding: '0 114px',
    boxSizing: 'border-box'
  },
  faq: {
    background: 'var(--wiski-white)',
    padding: '60px 0'
  },
  faqImg: {
    width: 753,
    height: 493,
    margin: '0 auto',
    background: 'url(../../assets/faq-panel.png) center / contain no-repeat'
  },
  footer: {
    background: 'var(--wiski-white)',
    padding: '0 0 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24
  },
  pay: {
    width: 981,
    height: 59,
    background: 'url(../../assets/payment-methods.png) center / contain no-repeat'
  },
  legal: {
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  legalItem: {
    fontFamily: 'var(--font-core)',
    fontWeight: 400,
    fontSize: 'var(--size-legal)',
    lineHeight: '100%',
    color: 'var(--wiski-black)'
  }
};
const WISKI_LEGAL = ['@ 2026, wisky', 'Política de privacidad', 'Política de reembolso', 'Términos del servicio', 'Política de envío', 'Información de contacto', 'Preferencias de cookies'];
function ReviewsBand() {
  const {
    CardGridReviews
  } = window.WiskiPhotobookDesignSystem_53badd;
  return /*#__PURE__*/React.createElement("section", {
    className: "wiski-reviews",
    style: wiskiFootStyles.reviews
  }, /*#__PURE__*/React.createElement("div", {
    style: wiskiFootStyles.reviewsInner
  }, /*#__PURE__*/React.createElement(CardGridReviews, {
    platform: "desktop",
    style: {
      background: 'transparent',
      width: '100%',
      boxSizing: 'border-box'
    }
  })));
}
function FaqSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: wiskiFootStyles.faq
  }, /*#__PURE__*/React.createElement("div", {
    style: wiskiFootStyles.faqImg
  }));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: wiskiFootStyles.footer
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wiski.png",
    alt: "Wiski Photobook",
    style: {
      height: 44,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: wiskiFootStyles.pay
  }), /*#__PURE__*/React.createElement("div", {
    style: wiskiFootStyles.legal
  }, WISKI_LEGAL.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: wiskiFootStyles.legalItem
  }, l))));
}
Object.assign(window, {
  ReviewsBand,
  FaqSection,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FooterSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HeroSection.jsx
try { (() => {
const wiskiHeroStyles = {
  wrap: {
    position: 'relative',
    height: 591,
    background: 'var(--wiski-white)'
  },
  collage: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none'
  },
  tile: {
    position: 'absolute',
    borderRadius: 'var(--radius-photo)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  right: {
    position: 'absolute',
    left: 817,
    top: 113
  },
  eyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    height: 26,
    padding: '0 12px',
    borderRadius: 'var(--radius-round)',
    background: 'var(--wiski-gray-warm)',
    fontFamily: 'var(--font-eyebrow)',
    fontSize: 'var(--size-eyebrow)',
    lineHeight: '100%',
    letterSpacing: 'var(--tracking-eyebrow)',
    color: 'var(--wiski-white)',
    marginLeft: 25
  },
  h1: {
    margin: '22px 0 0',
    width: 'auto',
    whiteSpace: 'nowrap',
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 44,
    lineHeight: '100%',
    color: 'var(--wiski-black)'
  },
  cta: {
    marginTop: 30,
    width: 203,
    height: 46,
    borderRadius: 'var(--radius-button)',
    background: 'var(--action-primary)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 18,
    cursor: 'pointer',
    fontFamily: 'var(--font-core)',
    fontWeight: 700,
    fontSize: 'var(--size-cta)',
    lineHeight: '100%',
    color: 'var(--text-on-cta)'
  },
  dots: {
    marginTop: 58,
    display: 'flex',
    gap: 19
  },
  dot: {
    width: 58,
    height: 58,
    borderRadius: '50%'
  }
};
const WISKI_TILES = [{
  img: 'photo-04.jpg',
  left: 409,
  top: 137,
  width: 222,
  height: 164
}, {
  img: 'photo-02.jpg',
  left: 216,
  top: 211,
  width: 247,
  height: 254,
  child: {
    img: 'photo-03.jpg',
    left: 46,
    top: -42,
    width: 172,
    height: 138
  }
}, {
  img: 'photo-05.jpg',
  left: 453,
  top: 273,
  width: 218,
  height: 169
}, {
  img: 'photo-06.jpg',
  left: 379,
  top: 359,
  width: 247,
  height: 186
}];
const WISKI_DOTS = ['var(--wiski-orange)', 'var(--wiski-blue)', 'var(--wiski-yellow)', 'var(--wiski-cream)', '#4c4c4c'];
function HeroSection({
  onStart
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: wiskiHeroStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: wiskiHeroStyles.collage
  }, WISKI_TILES.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.img,
    style: {
      ...wiskiHeroStyles.tile,
      left: t.left,
      top: t.top,
      width: t.width,
      height: t.height,
      backgroundImage: `url(../../assets/${t.img})`
    }
  }, t.child && /*#__PURE__*/React.createElement("div", {
    style: {
      ...wiskiHeroStyles.tile,
      left: t.child.left,
      top: t.child.top,
      width: t.child.width,
      height: t.child.height,
      backgroundImage: `url(../../assets/${t.child.img})`
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: wiskiHeroStyles.right
  }, /*#__PURE__*/React.createElement("div", {
    style: wiskiHeroStyles.eyebrow
  }, "\xC1LBUMES IMPRESOS PARA TODO EL ECUADOR"), /*#__PURE__*/React.createElement("h1", {
    style: wiskiHeroStyles.h1
  }, "Una bestia esa foto,", /*#__PURE__*/React.createElement("br", null), "impr\xEDmela"), /*#__PURE__*/React.createElement("button", {
    style: wiskiHeroStyles.cta,
    onClick: onStart
  }, "Crear mi alb\xFAm"), /*#__PURE__*/React.createElement("div", {
    style: wiskiHeroStyles.dots
  }, WISKI_DOTS.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      ...wiskiHeroStyles.dot,
      background: c
    }
  })))));
}
Object.assign(window, {
  HeroSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HeroSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MidSections.jsx
try { (() => {
const wiskiMidStyles = {
  adv: {
    position: 'relative',
    height: 560,
    background: 'var(--wiski-white)'
  },
  advImg: {
    position: 'absolute',
    left: 313,
    top: 59,
    width: 848,
    height: 417,
    background: 'url(../../assets/hero-photobook-collage.png) center / contain no-repeat'
  },
  advHead: {
    position: 'absolute',
    left: 802,
    top: 145,
    width: 311,
    fontFamily: 'var(--font-core)',
    fontWeight: 700,
    fontSize: 'var(--size-section)',
    lineHeight: '100%',
    color: 'var(--wiski-black)',
    background: 'var(--wiski-white)',
    paddingBottom: 6
  },
  steps: {
    position: 'relative',
    height: 520,
    background: 'var(--wiski-white)'
  },
  strip: {
    position: 'absolute',
    left: 121,
    top: 0,
    width: 989,
    height: 184,
    background: 'url(../../assets/steps-strip.png) center / cover no-repeat'
  },
  row: {
    position: 'absolute',
    left: 121,
    top: 212,
    width: 989,
    display: 'flex',
    gap: 48
  },
  step: {
    flex: 1
  },
  stepTitle: {
    fontFamily: 'var(--font-core)',
    fontWeight: 600,
    fontSize: 'var(--size-badge)',
    lineHeight: '100%',
    color: 'var(--wiski-black)'
  },
  stepBody: {
    marginTop: 10,
    fontFamily: 'var(--font-core)',
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 1.5,
    color: 'var(--wiski-black)',
    maxWidth: 190
  },
  sparkles: {
    position: 'absolute',
    left: 1150,
    top: 8,
    width: 140,
    height: 120
  },
  fourth: {
    position: 'absolute',
    left: 1150,
    top: 220,
    fontFamily: 'var(--font-core)',
    fontWeight: 600,
    fontSize: 'var(--size-badge)',
    lineHeight: '100%',
    color: 'var(--wiski-black)'
  }
};
const WISKI_STEPS = [['1.  Elige tu plantilla', 'Escoge el estilo que más se parezca a tu viaje. Todo se personaliza después en el editor.'], ['2.  Sube tus fotos', 'Las organizamos automáticamente para ti, o arma el orden tú mismo si prefieres el control total.'], ['3.  Personaliza tu álbum', 'Cambia textos, colores y portada hasta que se sienta realmente tuyo.']];
function AdvantagesSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: wiskiMidStyles.adv
  }, /*#__PURE__*/React.createElement("div", {
    style: wiskiMidStyles.advImg
  }), /*#__PURE__*/React.createElement("div", {
    style: wiskiMidStyles.advHead
  }, "Descubre las ventajas de usar Wiski"));
}
function StepsSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: wiskiMidStyles.steps
  }, /*#__PURE__*/React.createElement("div", {
    style: wiskiMidStyles.strip
  }), /*#__PURE__*/React.createElement("div", {
    style: wiskiMidStyles.row
  }, WISKI_STEPS.map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: wiskiMidStyles.step
  }, /*#__PURE__*/React.createElement("div", {
    style: wiskiMidStyles.stepTitle
  }, t), /*#__PURE__*/React.createElement("div", {
    style: wiskiMidStyles.stepBody
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: wiskiMidStyles.sparkles
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/star-four-md.svg",
    alt: "",
    style: {
      position: 'absolute',
      left: 0,
      top: 34,
      width: 65
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/star-four-lg.svg",
    alt: "",
    style: {
      position: 'absolute',
      left: 88,
      top: 43,
      width: 44.598
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/star-four-sm.svg",
    alt: "",
    style: {
      position: 'absolute',
      left: 89,
      top: 92,
      width: 23.611
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: wiskiMidStyles.fourth
  }, "4.  Esperalo en casa"));
}
Object.assign(window, {
  AdvantagesSection,
  StepsSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MidSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductBand.jsx
try { (() => {
const wiskiBandStyles = {
  band: {
    background: 'var(--wiski-blue-86)',
    padding: '48px 0 90px',
    position: 'relative'
  },
  inner: {
    width: 1440,
    margin: '0 auto',
    padding: '0 169px',
    boxSizing: 'border-box'
  },
  kicker: {
    fontFamily: 'var(--font-core)',
    fontWeight: 600,
    fontSize: 'var(--size-badge)',
    lineHeight: '100%',
    color: 'var(--wiski-white)'
  },
  sub: {
    marginTop: 8,
    fontFamily: 'var(--font-core)',
    fontWeight: 600,
    fontSize: 'var(--size-badge)',
    lineHeight: '100%',
    color: 'var(--wiski-white)'
  },
  grid: {
    marginTop: 24,
    display: 'flex',
    gap: 48
  },
  slot: {
    position: 'relative',
    flex: 1
  },
  badge: {
    position: 'absolute',
    zIndex: 2,
    height: 20,
    borderRadius: 'var(--radius-badge)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-core)',
    fontWeight: 600,
    fontSize: 'var(--size-badge)',
    lineHeight: '100%',
    color: 'var(--wiski-white)',
    whiteSpace: 'nowrap',
    padding: '0 8px'
  },
  ghost: {
    position: 'absolute',
    right: 22,
    bottom: 22,
    width: 203,
    height: 46,
    borderRadius: 'var(--radius-button)',
    background: 'rgba(182,176,175,0)',
    border: 'none',
    boxShadow: 'var(--ring-secondary)',
    cursor: 'pointer',
    fontFamily: 'var(--font-core)',
    fontWeight: 700,
    fontSize: 'var(--size-cta)',
    lineHeight: '100%',
    color: 'var(--action-secondary)'
  }
};
const WISKI_PRODUCTS = [{
  title: 'Wiski Ruta',
  price: '$39',
  body: 'Tapa dura 21x30 cm — de la maleta al librero.',
  image: '../../assets/photo-02.jpg',
  badge: {
    label: 'Más vendido',
    color: 'var(--wiski-blue)',
    left: 411,
    top: 30
  }
}, {
  title: 'Wiski Momento',
  price: '$29',
  body: 'Formato mini de bolsillo 15x15 cm.',
  image: '../../assets/photo-06.jpg',
  badge: {
    label: 'Envíalo como regalo',
    color: 'var(--wiski-yellow)',
    left: 384,
    top: 33
  }
}];
function ProductBand({
  onAdd,
  chosen
}) {
  const {
    ProductInfoCard
  } = window.WiskiPhotobookDesignSystem_53badd;
  return /*#__PURE__*/React.createElement("section", {
    style: wiskiBandStyles.band
  }, /*#__PURE__*/React.createElement("div", {
    style: wiskiBandStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: wiskiBandStyles.kicker
  }, "Elige tu momento"), /*#__PURE__*/React.createElement("div", {
    style: wiskiBandStyles.sub
  }, "Formatos pensados para lo que quieras recordar o regalar"), /*#__PURE__*/React.createElement("div", {
    style: wiskiBandStyles.grid
  }, WISKI_PRODUCTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: wiskiBandStyles.slot
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...wiskiBandStyles.badge,
      background: p.badge.color,
      left: p.badge.left,
      top: p.badge.top
    }
  }, p.badge.label), /*#__PURE__*/React.createElement(ProductInfoCard, {
    title: p.title,
    price: p.price,
    body: p.body,
    image: p.image,
    style: {
      width: '100%',
      height: 461,
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: wiskiBandStyles.ghost,
    onClick: () => onAdd(p.title)
  }, chosen === p.title ? 'Añadido ✓' : 'Empecemos'))))));
}
Object.assign(window, {
  ProductBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
const wiskiHeaderStyles = {
  bar: {
    height: 120,
    background: 'var(--wiski-blue-86)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 40px',
    boxSizing: 'border-box',
    gap: 32
  },
  nav: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    margin: '0 auto'
  },
  icons: {
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  },
  iconBtn: {
    width: 40,
    height: 40,
    border: 'none',
    background: 'transparent',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
    padding: 0,
    position: 'relative'
  },
  count: {
    position: 'absolute',
    top: 2,
    right: 0,
    minWidth: 16,
    height: 16,
    borderRadius: 9999,
    background: 'var(--wiski-orange)',
    color: 'var(--wiski-cream)',
    fontFamily: 'var(--font-core)',
    fontWeight: 700,
    fontSize: 10,
    display: 'grid',
    placeItems: 'center',
    padding: '0 4px'
  }
};
function SiteHeader({
  links,
  active,
  onSelect,
  cart
}) {
  const {
    NavigationPill
  } = window.WiskiPhotobookDesignSystem_53badd;
  return /*#__PURE__*/React.createElement("header", {
    style: wiskiHeaderStyles.bar
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wiski.png",
    alt: "Wiski Photobook",
    style: {
      height: 44,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: wiskiHeaderStyles.nav
  }, links.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    onClick: () => onSelect(l),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(NavigationPill, {
    label: l,
    state: active === l ? 'active' : 'default',
    style: active === l ? {
      backgroundColor: 'var(--wiski-white)'
    } : {
      color: 'var(--wiski-white)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: wiskiHeaderStyles.icons
  }, /*#__PURE__*/React.createElement("button", {
    style: wiskiHeaderStyles.iconBtn,
    "aria-label": "Cuenta"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/user.svg",
    alt: "",
    style: {
      height: 25.592
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: wiskiHeaderStyles.iconBtn,
    "aria-label": "Carrito"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/shopping-cart-simple.svg",
    alt: "",
    style: {
      height: 21.75
    }
  }), cart > 0 && /*#__PURE__*/React.createElement("span", {
    style: wiskiHeaderStyles.count
  }, cart))));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarBlock = __ds_scope.AvatarBlock;

__ds_ns.CardGridReviews = __ds_scope.CardGridReviews;

__ds_ns.NavigationPill = __ds_scope.NavigationPill;

__ds_ns.NavigationPillList = __ds_scope.NavigationPillList;

__ds_ns.ProductInfoCard = __ds_scope.ProductInfoCard;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.Star = __ds_scope.Star;

__ds_ns.Text = __ds_scope.Text;

__ds_ns.TextHeading = __ds_scope.TextHeading;

__ds_ns.TextSmall = __ds_scope.TextSmall;

__ds_ns.TextStrong = __ds_scope.TextStrong;

})();
