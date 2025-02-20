import React from "react";
import { Form } from "react-bootstrap";
const LayoutMode = ({ handleChangeLayoutWidth, mode }) => {
  return (
    <div id="layout-width">
      <h5 className="fw-medium font-14 mt-4 mb-2 pb-1">Layout Mode</h5>

      <div className="d-flex flex-column gap-2">
        <Form.Check className="form-switch">
          <Form.Check.Input
            type="radio"
            name="data-layout-mode"
            id="layout-mode-fluid"
            value={"fluid"}
            onChange={(e) => handleChangeLayoutWidth(e.target.value)}
            checked={mode === "fluid"}
          />
          <Form.Check.Label
            className="form-check-label"
            htmlFor="layout-mode-fluid"
          >
            Fluid
          </Form.Check.Label>
        </Form.Check>

        <div id="layout-boxed">
          <Form.Check className="form-switch">
            <Form.Check.Input
              type="radio"
              name="data-layout-mode"
              id="layout-mode-boxed"
              value={"boxed"}
              onChange={(e) => handleChangeLayoutWidth(e.target.value)}
              checked={mode === "boxed"}
            />
            <Form.Check.Label
              className="form-check-label"
              htmlFor="layout-mode-boxed"
            >
              Boxed
            </Form.Check.Label>
          </Form.Check>
        </div>

        <div id="layout-detached">
          <Form.Check className="form-switch">
            <Form.Check.Input
              className="form-check-input"
              type="radio"
              name="data-layout-mode"
              id="data-layout-detached"
              value={"detached"}
              onChange={(e) => handleChangeLayoutWidth(e.target.value)}
              checked={mode === "detached"}
            />
            <Form.Check.Label
              className="form-check-label"
              htmlFor="data-layout-detached"
            >
              Detached
            </Form.Check.Label>
          </Form.Check>
        </div>
      </div>
    </div>
  );
};
export default LayoutMode;
