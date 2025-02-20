import React from "react";
import { Form } from "react-bootstrap";
const TopBarTheme = ({ handleChangeTopBarTheme, topBarTheme }) => {
  return (
    <>
      <h5 className="fw-medium font-14 mt-4 mb-2 pb-1">Topbar Color</h5>

      <div className="d-flex flex-column gap-2">
        <Form.Check className="form-switch">
          <Form.Check.Input
            className="form-check-input"
            type="radio"
            name="data-topbar-color"
            id="topbar-color-light"
            value={"light"}
            onChange={(e) => handleChangeTopBarTheme(e.target.value)}
            checked={topBarTheme === "light"}
          />
          <Form.Check.Label
            className="form-check-label"
            htmlFor="topbar-color-light"
          >
            Light
          </Form.Check.Label>
        </Form.Check>

        <Form.Check className="form-switch">
          <Form.Check.Input
            className="form-check-input"
            type="radio"
            name="data-topbar-color"
            id="topbar-color-dark"
            value={"dark"}
            onChange={(e) => handleChangeTopBarTheme(e.target.value)}
            checked={topBarTheme === "dark"}
          />
          <Form.Check.Label
            className="form-check-label"
            htmlFor="topbar-color-dark"
          >
            Dark
          </Form.Check.Label>
        </Form.Check>

        <Form.Check className="form-switch">
          <Form.Check.Input
            className="form-check-input"
            type="radio"
            name="data-topbar-color"
            id="topbar-color-brand"
            value={"brand"}
            onChange={(e) => handleChangeTopBarTheme(e.target.value)}
            checked={topBarTheme === "brand"}
          />
          <Form.Check.Label
            className="form-check-label"
            htmlFor="topbar-color-brand"
          >
            Brand
          </Form.Check.Label>
        </Form.Check>
      </div>
    </>
  );
};
export default TopBarTheme;
