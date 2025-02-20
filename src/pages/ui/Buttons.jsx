import { Button, ButtonGroup, Card, Col, Dropdown, Row } from "react-bootstrap";
import { PageBreadcrumb } from "../../components";
const buttonVariants = [
  {
    name: "Primary",
    color: "primary",
  },
  {
    name: "Secondary",
    color: "secondary",
  },
  {
    name: "Success",
    color: "success",
    icon: "uil-cloud-computing",
  },
  {
    name: "Danger",
    color: "danger",
  },
  {
    name: "Warning",
    color: "warning",
  },
  {
    name: "Info",
    color: "info",
    icon: "uil-circuit",
  },
  {
    name: "Light",
    color: "light",
  },
  {
    name: "Dark",
    color: "dark",
  },
];
const DefultButtons = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Default Buttons</h4>
        <p className="text-muted font-14">
          Use the button classes on an <code>&lt;a&gt;</code>,{" "}
          <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code> element.
        </p>

        <div>
          <div className="d-flex flex-wrap gap-2">
            {(buttonVariants || []).map((button, idx) => {
              return (
                <Button key={idx} variant={button.color} type="button">
                  {button.name}
                </Button>
              );
            })}

            <button type="button" className="btn btn-link waves-effect">
              Link
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
const OutlineButtons = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Button Outline</h4>
        <p className="text-muted font-14">
          Use a classes <code>.btn-outline-**</code> to quickly create a
          bordered buttons.
        </p>

        <div>
          <div className="d-flex flex-wrap gap-2">
            {(buttonVariants || []).map((button, idx) => {
              return (
                <Button
                  key={idx}
                  type="button"
                  variant={"outline-" + button.color}
                >
                  {button.icon && <i className={button.icon} />}&nbsp;
                  {button.name}
                </Button>
              );
            })}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
const RoundedButtons = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Button-Rounded</h4>
        <p className="text-muted font-14">
          Add <code>.rounded-pill</code> to default button to get rounded
          corners.
        </p>

        <div>
          <div className="d-flex flex-wrap gap-2">
            {(buttonVariants || []).map((button, idx) => {
              return (
                <Button
                  key={idx}
                  variant={button.color}
                  className="rounded-pill"
                >
                  {button.name}
                </Button>
              );
            })}

            <button
              type="button"
              className="btn btn-link rounded-pill waves-effect"
            >
              Link
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
const OutlineRoundedButtons = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Button Outline Rounded</h4>
        <p className="text-muted font-14">
          Use a classes <code>.btn-outline-**</code> to quickly create a
          bordered buttons.
        </p>

        <div>
          <div className="d-flex flex-wrap gap-2">
            {(buttonVariants || []).map((button, idx) => {
              return (
                <Button
                  key={idx}
                  variant={"outline-" + button.color}
                  className="rounded-pill"
                >
                  {button.icon && <i className={button.icon} />} {button.name}
                </Button>
              );
            })}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
const SoftButtons = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Soft Buttons</h4>
        <p className="text-muted font-14">
          Use a classes <code>.btn-soft-**</code> to quickly create a soft
          background color buttons.
        </p>

        <div>
          <div className="d-flex flex-wrap gap-2">
            {(buttonVariants || []).slice(0, 5).map((button, idx) => {
              return (
                <Button
                  key={idx}
                  type="button"
                  variant={"soft-" + button.color}
                >
                  {button.name}
                </Button>
              );
            })}

            <Button type="button" variant="soft-info">
              Info
            </Button>
            <Button type="button" variant="soft-dark" className="waves-light">
              Dark
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
const RoundedSoftButtons = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Soft Rounded Buttons</h4>
        <p className="text-muted font-14">
          Use a classes <code>.btn-soft-**</code> <code>.rounded-pill</code> to
          quickly create a soft background color buttons with rounded.
        </p>

        <div>
          <div className="d-flex flex-wrap gap-2">
            {(buttonVariants || []).slice(0, 5).map((button, idx) => {
              return (
                <Button
                  key={idx}
                  type="button"
                  variant={"soft-" + button.color}
                  className="rounded-pill "
                >
                  {button.name}
                </Button>
              );
            })}

            <Button type="button" variant="soft-info" className="rounded-pill ">
              Info
            </Button>
            <Button
              type="button"
              variant="soft-dark"
              className="rounded-pill waves-light"
            >
              Dark
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
const ButtonSizes = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Button-Sizes</h4>
        <p className="text-muted font-14">
          Add <code>.btn-lg</code>, <code>.btn-sm</code> for additional sizes.
        </p>

        <div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <Button type="button" variant="primary" className="btn-lg">
              Large
            </Button>
            <Button type="button" variant="info">
              Normal
            </Button>
            <Button type="button" variant="success" className="btn-sm">
              Small
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
const DisabledButton = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Button-Disabled</h4>
        <p className="text-muted font-14">
          Add the <code>disabled</code> attribute to <code>&lt;button&gt;</code>{" "}
          buttons.
        </p>

        <div>
          <div className="d-flex flex-wrap gap-2">
            <Button type="button" variant="info" disabled>
              Info
            </Button>
            <Button type="button" variant="success" disabled>
              Success
            </Button>
            <Button type="button" variant="danger" disabled>
              Danger
            </Button>
            <Button type="button" variant="dark" disabled>
              Dark
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
const IconButtons = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Icon Buttons</h4>
        <p className="text-muted font-14">Icon only button.</p>

        <div>
          <div className="d-flex flex-wrap gap-2">
            <Button type="button" variant="light">
              <i className="mdi mdi-heart-outline"></i>{" "}
            </Button>
            <Button type="button" variant="danger">
              <i className="mdi mdi-window-close"></i>{" "}
            </Button>
            <Button type="button" variant="dark">
              <i className="mdi mdi-music"></i>{" "}
            </Button>
            <Button type="button" variant="primary">
              <i className="mdi mdi-star"></i>{" "}
            </Button>
            <Button type="button" variant="success">
              <i className="mdi mdi-thumb-up-outline"></i>{" "}
            </Button>
            <Button type="button" variant="info">
              <i className="mdi mdi-keyboard"></i>{" "}
            </Button>
            <Button type="button" variant="warning">
              <i className="mdi mdi-wrench"></i>{" "}
            </Button>
            <br />
            <Button type="button" variant="light">
              <i className="mdi mdi-heart me-1"></i> <span>Like</span>{" "}
            </Button>
            <Button type="button" variant="warning">
              <i className="mdi mdi-rocket me-1"></i> <span>Launch</span>{" "}
            </Button>
            <Button type="button" variant="info">
              <i className="mdi mdi-cloud me-1"></i> <span>Cloud Hosting</span>{" "}
            </Button>
            <br />
            <Button type="button" variant="outline-success">
              <i className="uil-money-withdrawal"></i> Money
            </Button>
            <Button type="button" variant="outline-primary">
              <i className="uil-paypal"></i> PayPal
            </Button>
            <Button type="button" variant="outline-danger">
              <i className="uil-cog"></i> Settings
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
const BlockButton = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Block Button</h4>

        <p className="text-muted font-14">
          Create block level buttons by adding class <code>.d-grid</code> to
          parent div.
        </p>

        <div>
          <div className="d-grid gap-2">
            <Button type="button" variant="primary">
              Block Button
            </Button>
            <Button type="button" variant="info" className="btn-sm">
              Block Button
            </Button>
            <Button type="button" variant="success" className="btn-xs">
              Block Button
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
const ButtonGroups = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Button Group</h4>

        <p className="text-muted font-14">
          Wrap a series of buttons with <code>.btn</code> in{" "}
          <code>.btn-group</code>.
        </p>

        <div>
          <ButtonGroup className="mb-2">
            <Button variant="light">Left</Button>
            <Button variant="light">Middle</Button>
            <Button variant="light">Right</Button>
          </ButtonGroup>
          <br />
          <ButtonGroup className="mb-2 me-1">
            <Button variant="light">1</Button>
            <Button variant="light">2</Button>
            <Button variant="light">3</Button>
            <Button variant="light">4</Button>
          </ButtonGroup>

          <ButtonGroup className="mb-2 me-1">
            <Button variant="light">5</Button>
            <Button variant="light">6</Button>
            <Button variant="light">7</Button>
          </ButtonGroup>

          <ButtonGroup className="mb-2">
            <Button variant="light">8</Button>
          </ButtonGroup>
          <br />
          <ButtonGroup className="mb-2">
            <Button variant="light">1</Button>
            <Button variant="primary">2</Button>
            <Button variant="light">3</Button>
            <ButtonGroup>
              <Dropdown>
                <Dropdown.Toggle variant="light">
                  {" "}
                  Dropdown <span className="caret"></span>{" "}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as="a">Dropdown link</Dropdown.Item>
                  <Dropdown.Item as="a">Dropdown link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>
          </ButtonGroup>

          <Row>
            <Col md={3}>
              <div className="btn-group-vertical mb-2">
                <Button variant="light">Top</Button>
                <Button variant="light">Middle</Button>
                <Button variant="light">Bottom</Button>
              </div>
            </Col>
            <Col md={3}>
              <div className="btn-group-vertical mb-2">
                <Button variant="light">Button 1</Button>
                <Button variant="light">Button 2</Button>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    Button 3 <span className="caret"></span>{" "}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as="a">Dropdown link</Dropdown.Item>
                    <Dropdown.Item as="a" className="dropdown-item">
                      Dropdown link
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};
const Buttons = () => {
  return (
    <>
      <PageBreadcrumb title="Buttons" name="Buttons" subName="Base UI" />
      <Row>
        <Col xl={6}>
          <DefultButtons />
        </Col>
        <Col xl={6}>
          <OutlineButtons />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <RoundedButtons />
        </Col>
        <Col xl={6}>
          <OutlineRoundedButtons />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <SoftButtons />
        </Col>
        <Col xl={6}>
          <RoundedSoftButtons />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ButtonSizes />
        </Col>

        <Col xl={6}>
          <DisabledButton />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <IconButtons />
        </Col>
        <Col xl={6}>
          <BlockButton />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <ButtonGroups />
        </Col>
      </Row>
    </>
  );
};
export default Buttons;
