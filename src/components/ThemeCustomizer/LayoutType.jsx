import React from "react";
import { Form } from "react-bootstrap";
const LayoutType = ({ handleChangeLayoutType, orientation }) => {
  return (
    <>
      <h5 className="fw-medium font-14 mt-4 mb-2 pb-1">Choose Layout</h5>
      <div className="d-flex flex-column gap-2">
        <Form.Check className="form-switch">
          <Form.Check.Input
            className="form-check-input"
            type="radio"
            name="data-layout"
            id="customizer-layout01"
            value={"vertical"}
            onChange={(e) => handleChangeLayoutType(e.target.value)}
            checked={orientation === "vertical"}
          />
          <Form.Check.Label
            className="form-check-label"
            htmlFor="customizer-layout01"
          >
            Vertical
          </Form.Check.Label>
        </Form.Check>
        <Form.Check className="form-switch">
          <input
            className="form-check-input"
            type="radio"
            name="data-layout"
            id="customizer-layout02"
            value={"horizontal"}
            onChange={(e) => handleChangeLayoutType(e.target.value)}
            checked={orientation === "horizontal"}
          />
          <Form.Check.Label
            className="form-check-label"
            htmlFor="customizer-layout02"
          >
            Horizontal
          </Form.Check.Label>
        </Form.Check>
      </div>
    </>
  );
};
export default LayoutType;
