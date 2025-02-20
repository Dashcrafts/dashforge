import React from "react";
import SimpleBar from "simplebar-react";
import { Button, OffcanvasBody } from "react-bootstrap";

// constants

// components
import LayoutTheme from "./LayoutTheme";
import LayoutType from "./LayoutType";
import LayoutMode from "./LayoutWidth";
import TopBarTheme from "./TopBarTheme";
import SideBarTheme from "./SideBarTheme";
import SideBarType from "./SideBarType";
import LayoutPosition from "./LayoutPosition";
import { useLayoutContext } from "@/context/useLayoutContext";
const ThemeCustomizer = ({ handleRightSideBar, rightBarNodeRef }) => {
  const {
    orientation,
    theme,
    mode,
    topBar,
    resetSettings,
    menu,
    changeLayoutOrientation,
    changeTheme,
    changeLayoutMode,
    changeTopBarTheme,
    changeMenuTheme,
    changeMenuSize,
    changeMenuPosition,
  } = useLayoutContext();

  /**
   * Changes the layout type
   */
  const handleChangeLayoutType = (type) => {
    switch (type) {
      case "horizontal":
        changeLayoutOrientation("horizontal");
        break;
      default:
        changeLayoutOrientation("vertical");
        break;
    }
  };

  /**
   * Changes the layout theme
   */
  const handleChangeLayoutTheme = (theme) => {
    switch (theme) {
      case "dark":
        changeTheme("dark");
        break;
      default:
        changeTheme("light");
        break;
    }
  };

  /**
   * Changes the layout width
   */
  const handleChangeLayoutWidth = (layoutWidth) => {
    switch (layoutWidth) {
      case "boxed":
        changeLayoutMode("boxed");
        break;
      case "detached":
        changeLayoutMode("detached");
        break;
      default:
        changeLayoutMode("fluid");
        break;
    }
  };

  /**
   * Changes the topbar theme
   */
  const handleChangeTopBarTheme = (theme) => {
    switch (theme) {
      case "dark":
        changeTopBarTheme("dark");
        break;
      case "brand":
        changeTopBarTheme("brand");
        break;
      default:
        changeTopBarTheme("light");
        break;
    }
  };

  /**
   * Changes the left sidebar theme
   */
  const handleChangeSideBarTheme = (theme) => {
    switch (theme) {
      case "dark":
        changeMenuTheme("dark");
        break;
      case "brand":
        changeMenuTheme("brand");
        break;
      case "gradient":
        changeMenuTheme("gradient");
        break;
      default:
        changeMenuTheme("light");
        break;
    }
  };

  /**
   * Changes the left sidebar type
   */
  const handleChangeSideBarType = (type) => {
    switch (type) {
      case "compact":
        changeMenuSize("compact");
        break;
      case "condensed":
        changeMenuSize("condensed");
        break;
      case "full":
        changeMenuSize("full");
        break;
      case "fullscreen":
        changeMenuSize("fullscreen");
        break;
      default:
        changeMenuSize("default");
        break;
    }
  };

  /**
   * Changes the layout position
   */
  const handleChangeLayoutPosition = (position) => {
    switch (position) {
      case "scrollable":
        changeMenuPosition("scrollable");
        break;
      default:
        changeMenuPosition("fixed");
        break;
    }
  };
  return (
    <React.Fragment>
      <div
        className="fw-semibold px-3 m-0 py-2 font-16 bg-light d-flex align-items-center"
        ref={rightBarNodeRef}
      >
        <span className="d-block py-2">Theme Settings</span>
        <button
          type="button"
          className="btn-close ms-auto"
          onClick={handleRightSideBar}
        />
      </div>
      <OffcanvasBody>
        <SimpleBar scrollbarMaxSize={320} className="h-100">
          <div className="alert alert-warning" role="alert">
            <strong>Customize </strong> the overall color scheme, sidebar menu,
            etc.
          </div>

          {/* layout type */}
          <LayoutType
            handleChangeLayoutType={handleChangeLayoutType}
            orientation={orientation}
          />

          {/* layout theme */}
          <LayoutTheme
            handleChangeLayoutTheme={handleChangeLayoutTheme}
            theme={theme}
          />

          {/* layout width */}
          <LayoutMode
            handleChangeLayoutWidth={handleChangeLayoutWidth}
            mode={mode}
          />

          {/* top bar theme */}
          <TopBarTheme
            handleChangeTopBarTheme={handleChangeTopBarTheme}
            topBarTheme={topBar.theme}
          />

          {/* side bar theme */}
          <SideBarTheme
            handleChangeSideBarTheme={handleChangeSideBarTheme}
            sideBarTheme={menu.theme}
          />

          {/* layout position */}
          <LayoutPosition
            handleChangeLayoutPosition={handleChangeLayoutPosition}
            layoutPosition={menu.position}
          />

          {/* side bar type */}
          <SideBarType
            handleChangeSideBarType={handleChangeSideBarType}
            sideBarType={menu.size}
          />
        </SimpleBar>
      </OffcanvasBody>
      <div className="offcanvas-footer border-top px-3 py-2 text-center">
        <div className="d-flex gap-2">
          <Button variant="light" className="w-50" onClick={resetSettings}>
            Reset
          </Button>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="btn btn-danger w-50"
          >
            <i className="mdi mdi-basket me-1" />
            Buy
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ThemeCustomizer;
