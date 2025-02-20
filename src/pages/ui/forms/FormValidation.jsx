import { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";

// components
import { PageBreadcrumb } from "../../../components";
const CustomStyles = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Custom styles</h4>
        <p className="text-muted font-14">
          Custom feedback styles apply custom colors, borders, focus styles, and
          background icons to better communicate feedback. Background icons for{" "}
          <code>&lt;select&gt;</code>s are only available with{" "}
          <code>.form-select</code>, and not <code>.form-control</code>.
        </p>

        <Form
          className="needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Label htmlFor="validationCustom01">First name</Form.Label>
            <Form.Control
              type="text"
              id="validationCustom01"
              placeholder="First name"
              defaultValue="Mark"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="validationCustom02">Last name</Form.Label>
            <Form.Control
              type="text"
              id="validationCustom02"
              placeholder="Last name"
              defaultValue="Otto"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="validationCustomUsername">Username</Form.Label>
            <InputGroup>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                className="form-control"
                id="validationCustomUsername"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback>
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="validationCustom03">City</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              id="validationCustom03"
              placeholder="City"
              required
            />
            <Form.Control.Feedback>
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="validationCustom04">State</Form.Label>
            <Form.Control
              type="text"
              id="validationCustom04"
              placeholder="State"
              required
            />
            <Form.Control.Feedback>
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="validationCustom05">Zip</Form.Label>
            <Form.Control
              type="text"
              id="validationCustom05"
              placeholder="Zip"
              required
            />
            <Form.Control.Feedback>
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              id="invalidCheck"
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            ></Form.Check>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit form
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
const TooltipsFormValidation = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Tooltips</h4>
        <p className="text-muted font-14">
          If your form layout allows it, you can swap the&nbsp;
          <code>.{"{valid|invalid}"}-feedback</code> classes for&nbsp;
          <code>.{"{valid|invalid}"}-tooltip</code> classes to display
          validation feedback in a styled tooltip. Be sure to have a parent with{" "}
          <code>position: relative</code> on it for tooltip positioning. In the
          example below, our column classes have this already, but your project
          may require an alternative setup.
        </p>

        <Form
          className="needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="position-relative mb-3">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              id="validationTooltip01"
              placeholder="First name"
              defaultValue="Mark"
              required
            />
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid" tooltip>
              Please enter first name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              id="validationTooltip02"
              placeholder="Last name"
              defaultValue="Otto"
              required
            />
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid" tooltip>
              Please enter last name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Text id="validationTooltipUsernamePrepend">
                @
              </InputGroup.Text>
              <Form.Control
                type="text"
                id="validationTooltipUsername"
                placeholder="Username"
                required
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please choose a unique and valid username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              id="validationTooltip03"
              placeholder="City"
              required
            />
            <Form.Control.Feedback type="invalid" tooltip>
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              id="validationTooltip04"
              placeholder="State"
              required
            />
            <Form.Control.Feedback type="invalid" tooltip>
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              id="validationTooltip05"
              placeholder="Zip"
              required
            />
            <Form.Control.Feedback type="invalid" tooltip>
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit form
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
const FormValidation = () => {
  return (
    <>
      <PageBreadcrumb
        name="Form Validation"
        subName="Forms"
        title="Form Validation"
      />
      <Row>
        <Col lg={6}>
          <CustomStyles />
        </Col>
        <Col lg={6}>
          <TooltipsFormValidation />
        </Col>
      </Row>
    </>
  );
};
export default FormValidation;
