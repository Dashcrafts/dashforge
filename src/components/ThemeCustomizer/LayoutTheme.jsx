import React from "react";
import { Form } from "react-bootstrap";
const LayoutTheme = ({ handleChangeLayoutTheme, theme }) => {
  return (
    <>
      <h5 className="fw-medium font-14 mt-4 mb-2 pb-1">Color Scheme</h5>
      <div className="colorscheme-cardradio">
        <div className="d-flex flex-column gap-2">
          <Form.Check className="form-switch">
            <Form.Check.Input
              className="form-check-input"
              type="radio"
              name="data-bs-theme"
              id="layout-color-light"
              value={"light"}
              onChange={(e) => handleChangeLayoutTheme(e.target.value)}
              checked={theme === "light"}
            />

            <Form.Check.Label
              className="form-check-label"
              htmlFor="layout-color-light"
            >
              Light
            </Form.Check.Label>
          </Form.Check>

          <Form.Check className="form-switch">
            <Form.Check.Input
              className="form-check-input"
              type="radio"
              name="data-bs-theme"
              id="layout-color-dark"
              value={"dark"}
              onChange={(e) => handleChangeLayoutTheme(e.target.value)}
              checked={theme === "dark"}
            />
            <Form.Check.Label
              className="form-check-label"
              htmlFor="layout-color-dark"
            >
              Dark
            </Form.Check.Label>
          </Form.Check>
        </div>
      </div>
    </>
  );
};
export default LayoutTheme;
