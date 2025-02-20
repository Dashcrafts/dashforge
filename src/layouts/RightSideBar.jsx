import React, { useRef } from "react";
import { Offcanvas } from "react-bootstrap";

// components
import { ThemeCustomizer } from "../components";
import { useLayoutContext } from "@/context/useLayoutContext";
const RightSideBar = () => {
  const rightBarNodeRef = useRef(null);
  const { themeCustomizer } = useLayoutContext();
  return (
    <React.Fragment>
      <Offcanvas
        className="settings-offcanvas"
        show={themeCustomizer.open}
        onHide={themeCustomizer.toggle}
        placement="end"
      >
        <ThemeCustomizer
          handleRightSideBar={themeCustomizer.toggle}
          rightBarNodeRef={rightBarNodeRef}
        />
      </Offcanvas>
    </React.Fragment>
  );
};
export default RightSideBar;
