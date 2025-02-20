import React, { Suspense, useEffect } from "react";
import { Container } from "react-bootstrap";

// hoooks
import { changeHTMLAttribute } from "../../utils";
import { useLayoutContext } from "@/context/useLayoutContext";

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import("../Topbar"));
const NavBar = React.lazy(() => import("./NavBar"));
const Footer = React.lazy(() => import("../Footer"));
const RightSideBar = React.lazy(() => import("../RightSideBar"));
const loading = () => <div />;
const HorizontalLayout = ({ children }) => {
  const { theme, mode, topBar, menu } = useLayoutContext();

  /**
   * Layout defaults
   */

  useEffect(() => {
    changeHTMLAttribute("data-layout", "topnav");
  }, []);
  useEffect(() => {
    changeHTMLAttribute("data-bs-theme", theme);
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
    changeHTMLAttribute("data-layout-position", menu.position);
  }, [menu.position]);
  return (
    <>
      <Suspense fallback={loading()}>
        <div className="wrapper">
          <Suspense fallback={loading()}>
            <Topbar />
          </Suspense>

          <Suspense fallback={loading()}>
            <NavBar />
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
export default HorizontalLayout;
