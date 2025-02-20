import React, { Suspense, useEffect } from "react";
import { Container } from "react-bootstrap";

// hooks
import { useViewPort } from "../hooks";
import { changeHTMLAttribute, toggleDocumentAttribute } from "../utils";
import { useLayoutContext } from "@/context/useLayoutContext";

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import("./Topbar"));
const LeftSideBar = React.lazy(() => import("./LeftSideBar"));
const Footer = React.lazy(() => import("./Footer"));
const RightSideBar = React.lazy(() => import("./RightSideBar"));
const loading = () => <div />;
const VerticalLayout = ({ children }) => {
  const { width } = useViewPort();
  const { theme, mode, topBar, menu, changeMenuSize } = useLayoutContext();

  /**
   * Layout defaults
   */

  useEffect(() => {
    toggleDocumentAttribute("data-bs-theme", theme);
  }, [theme]);
  useEffect(() => {
    changeHTMLAttribute("data-layout-mode", mode);
  }, [mode]);
  useEffect(() => {
    changeHTMLAttribute("data-topbar-color", topBar.theme);
  }, [topBar.theme]);
  useEffect(() => {
    changeHTMLAttribute("data-menu-color", menu.theme);
  }, [menu.theme]);
  useEffect(() => {
    changeHTMLAttribute("data-sidenav-size", menu.size);
  }, [menu.size]);
  useEffect(() => {
    changeHTMLAttribute("data-layout-position", menu.position);
  }, [menu.position]);
  useEffect(() => {
    document.getElementsByTagName("html")[0].removeAttribute("data-layout");
  }, []);

  // const updateDimensions = useCallback(() => {
  //   // activate the condensed sidebar if smaller devices like ipad or tablet
  //   if (width > 767 && width <= 1140) {
  //     dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_CONDENSED));
  //   } else if (width > 1140) {
  //     dispatch(changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT));
  //   }
  // }, [dispatch, width])

  // useEffect(() => {
  //   window.addEventListener('resize', updateDimensions);

  //   return () => {
  //     window.removeEventListener('resize', updateDimensions);
  //   }
  // }, [dispatch, updateDimensions])

  /**
   * for changing leftsidebar type according to the type of device
   */
  useEffect(() => {
    if (width < 768) {
      changeMenuSize("full");
    } else if (width < 1140) {
      changeMenuSize("full");
    } else if (width >= 1140) {
      changeMenuSize("default");
    }
  }, [width]);
  const isCondensed = menu.size === "condensed";
  const isLight = menu.theme === "light";
  return (
    <>
      <Suspense fallback={loading()}>
        <div id="wrapper">
          <Suspense fallback={loading()}>
            <Topbar />
          </Suspense>

          <Suspense fallback={loading()}>
            <LeftSideBar
              isCondensed={isCondensed}
              isLight={isLight}
              hideUserProfile={true}
            />
          </Suspense>

          <div className="content-page">
            <div className="content">
              <Container fluid>
                <Suspense fallback={loading()}>{children}</Suspense>
              </Container>
            </div>
            <Footer />
          </div>
        </div>

        <Suspense fallback={loading()}>
          <RightSideBar />
        </Suspense>
      </Suspense>
    </>
  );
};
export default VerticalLayout;
