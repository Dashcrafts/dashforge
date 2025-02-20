// app constants
import { SideBarType, LayoutWidth } from "../constants";
const getLayoutConfigs = (layoutWidth) => {
  // add property to change in particular layoutWidth
  let config = {
    leftSideBarTypes: SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT,
  };
  switch (layoutWidth) {
    case LayoutWidth.LAYOUT_WIDTH_FLUID:
      config.leftSideBarTypes = SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT;
      break;
    case LayoutWidth.LAYOUT_WIDTH_BOXED:
      config.leftSideBarTypes = SideBarType.LEFT_SIDEBAR_TYPE_CONDENSED;
      break;
    default:
      return config;
  }
  return config;
};

/**
 * Changes the body attribute
 */
const changeHTMLAttribute = (attribute, value) => {
  if (document.body)
    document.getElementsByTagName("html")[0].setAttribute(attribute, value);
};
export { getLayoutConfigs, changeHTMLAttribute };

/**
 * Changes the body attribute
 */

const toggleDocumentAttribute = (attribute, value, remove, tag = "html") => {
  if (document.body) {
    const element = document.getElementsByTagName(tag.toString())[0];
    const hasAttribute = element.getAttribute(attribute);
    if (remove && hasAttribute) element.removeAttribute(attribute);
    else element.setAttribute(attribute, value);
  }
};
export { toggleDocumentAttribute };
