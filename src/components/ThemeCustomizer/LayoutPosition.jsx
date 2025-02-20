import React from "react";
import { Form } from "react-bootstrap";
const LayoutPosition = ({ handleChangeLayoutPosition, layoutPosition }) => {
  return (
    <>
      <div>
        <h5 className="my-3 font-16 fw-bold">Layout Position</h5>
        <div className="d-flex flex-column gap-2">
          <Form.Check className="form-switch">
            <Form.Check.Input
              type="radio"
              name="data-layout-position"
              id="layout-position-fixed"
              value={"fixed"}
              onChange={(e) => handleChangeLayoutPosition(e.target.value)}
              checked={layoutPosition === "fixed"}
            />
            <Form.Check.Label htmlFor="layout-position-fixed">
              Fixed
            </Form.Check.Label>
          </Form.Check>

          <Form.Check className="form-switch">
            <Form.Check.Input
              type="radio"
              name="data-layout-position"
              id="layout-position-scrollable"
              value={"scrollable"}
              onChange={(e) => handleChangeLayoutPosition(e.target.value)}
              checked={layoutPosition === "scrollable"}
            />
            <Form.Check.Label htmlFor="layout-position-scrollable">
              Scrollable
            </Form.Check.Label>
          </Form.Check>
        </div>
      </div>
    </>
  );
};
export default LayoutPosition;
