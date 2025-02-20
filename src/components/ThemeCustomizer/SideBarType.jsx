import React from "react";
import { Form } from "react-bootstrap";
const SideBarType = ({ handleChangeSideBarType, sideBarType }) => {
  return (
    <>
      <div id="sidebar-size">
        <h5 className="fw-medium font-14 mt-4 mb-2 pb-1">Sidebar Size</h5>

        <div className="d-flex flex-column gap-2">
          <Form.Check className="form-switch">
            <Form.Check.Input
              type="radio"
              name="data-sidenav-size"
              id="leftbar-size-default"
              value={"default"}
              onChange={(e) => handleChangeSideBarType(e.target.value)}
              checked={sideBarType === "default"}
            />
            <Form.Check.Label htmlFor="leftbar-size-default">
              Default
            </Form.Check.Label>
          </Form.Check>

          <Form.Check className="form-switch">
            <Form.Check.Input
              type="radio"
              name="data-sidenav-size"
              id="leftbar-size-compact"
              value={"compact"}
              onChange={(e) => handleChangeSideBarType(e.target.value)}
              checked={sideBarType === "compact"}
            />
            <Form.Check.Label htmlFor="leftbar-size-compact">
              Compact
            </Form.Check.Label>
          </Form.Check>

          <Form.Check className="form-switch">
            <Form.Check.Input
              type="radio"
              name="data-sidenav-size"
              id="leftbar-size-small"
              value={"condensed"}
              onChange={(e) => handleChangeSideBarType(e.target.value)}
              checked={sideBarType === "condensed"}
            />
            <Form.Check.Label htmlFor="leftbar-size-small">
              Condensed
            </Form.Check.Label>
          </Form.Check>

          <Form.Check className="form-switch">
            <Form.Check.Input
              type="radio"
              name="data-sidenav-size"
              id="leftbar-size-full"
              value={"full"}
              onChange={(e) => handleChangeSideBarType(e.target.value)}
              checked={sideBarType === "full"}
            />
            <Form.Check.Label htmlFor="leftbar-size-full">
              Full Layout
            </Form.Check.Label>
          </Form.Check>

          <Form.Check className="form-switch">
            <Form.Check.Input
              type="radio"
              name="data-sidenav-size"
              id="leftbar-size-fullscreen"
              value={"fullscreen"}
              onChange={(e) => handleChangeSideBarType(e.target.value)}
              checked={sideBarType === "fullscreen"}
            />
            <Form.Check.Label htmlFor="leftbar-size-fullscreen">
              Fullscreen Layout
            </Form.Check.Label>
          </Form.Check>
        </div>
      </div>
    </>
  );
};
export default SideBarType;
