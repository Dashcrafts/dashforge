import { Form } from "react-bootstrap";
const SideBarTheme = ({ handleChangeSideBarTheme, sideBarTheme }) => {
  return (
    <div>
      <h5 className="fw-medium font-14 mt-4 mb-2 pb-1">Menu Color</h5>

      <div className="d-flex flex-column gap-2">
        <Form.Check className="form-switch">
          <Form.Check.Input
            type="radio"
            name="data-menu-color"
            id="leftbar-color-light"
            value={"light"}
            onChange={(e) => handleChangeSideBarTheme(e.target.value)}
            checked={sideBarTheme === "light"}
          />
          <Form.Check.Label
            className="form-check-label"
            htmlFor="leftbar-color-light"
          >
            Light
          </Form.Check.Label>
        </Form.Check>

        <Form.Check className="form-switch">
          <Form.Check.Input
            type="radio"
            name="data-menu-color"
            id="leftbar-color-dark"
            value={"dark"}
            onChange={(e) => handleChangeSideBarTheme(e.target.value)}
            checked={sideBarTheme === "dark"}
          />
          <Form.Check.Label
            className="form-check-label"
            htmlFor="leftbar-color-dark"
          >
            Dark
          </Form.Check.Label>
        </Form.Check>
        <Form.Check className="form-switch">
          <Form.Check.Input
            type="radio"
            name="data-menu-color"
            id="leftbar-color-brand"
            value={"brand"}
            onChange={(e) => handleChangeSideBarTheme(e.target.value)}
            checked={sideBarTheme === "brand"}
          />
          <Form.Check.Label
            className="form-check-label"
            htmlFor="leftbar-color-brand"
          >
            Brand
          </Form.Check.Label>
        </Form.Check>
        <Form.Check className="form-switch">
          <Form.Check.Input
            type="radio"
            name="data-menu-color"
            id="leftbar-color-gradient"
            value={"gradient"}
            onChange={(e) => handleChangeSideBarTheme(e.target.value)}
            checked={sideBarTheme === "gradient"}
          />
          <Form.Check.Label
            className="form-check-label"
            htmlFor="leftbar-color-gradient"
          >
            Gradient
          </Form.Check.Label>
        </Form.Check>
      </div>
    </div>
  );
};
export default SideBarTheme;
