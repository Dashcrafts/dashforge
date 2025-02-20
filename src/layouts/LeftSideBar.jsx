import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

// components
import AppMenu from "./Menu";

// helpers
import { getMenuItems } from "../helpers/menu";

// assets
import logoLight from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-dark.png";
import logoSm from "../assets/images/logo-sm.png";

/* Sidebar content */
const SideBarContent = () => {
  return (
    <>
      <AppMenu menuItems={getMenuItems()} />
      <div className="clearfix" />
    </>
  );
};
const LeftSideBar = ({ isCondensed, isLight, hideUserProfile, hideLogo }) => {
  const menuNodeRef = useRef(null);
  function closeLeftSideBar() {
    document.getElementsByTagName("html")[0].classList.remove("sidebar-enable");
    const backdrop = document.getElementById("custom-backdrop");
    if (backdrop) {
      document.body.removeChild(backdrop);
      document.body.style.removeProperty("overflow");
    }
  }
  return (
    <React.Fragment>
      <div className="leftside-menu" ref={menuNodeRef}>
        {!hideLogo && (
          <>
            <Link to="/" className="logo logo-light">
              <span className="logo-lg">
                <img src={logoLight} alt="logo" />
              </span>
              <span className="logo-sm">
                <img src={logoSm} alt="small logo" />
              </span>
            </Link>
            <Link to="/" className="logo logo-dark">
              <span className="logo-lg">
                <img src={logoDark} alt="dark logo" />
              </span>
              <span className="logo-sm">
                <img src={logoSm} alt="small logo" />
              </span>
            </Link>
          </>
        )}
        {!isCondensed && (
          <>
            <div className="button-close-fullsidebar">
              <i
                className="ri-close-fill align-middle"
                onClick={closeLeftSideBar}
              />
            </div>
            <SimpleBar className="h-100" id="leftside-menu-container">
              <SideBarContent />
            </SimpleBar>
          </>
        )}
        {isCondensed && <SideBarContent />}
      </div>
    </React.Fragment>
  );
};
export default LeftSideBar;
