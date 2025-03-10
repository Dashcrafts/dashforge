import { useState } from "react";
import { Alert, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "../../components";
const colors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];
const DefaultAlerts = () => {
  const defaultAlertVariants = [
    {
      variant: "primary",
      isBG: false,
    },
    {
      variant: "secondary",
      isBG: false,
    },
    {
      variant: "success",
      isBG: false,
    },
    {
      variant: "danger",
      isBG: false,
    },
    {
      variant: "warning",
      isBG: true,
    },
    {
      variant: "info",
      isBG: true,
    },
    {
      variant: "light",
      isBG: true,
    },
    {
      variant: "dark",
      isBG: true,
    },
  ];
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Default Alert</h4>
        <p className="text-muted font-14 mb-3">
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages. Alerts are available
          for any length of text, as well as an optional dismiss button.
        </p>
        <p>
          For proper styling, use one of the eight
          <strong>required</strong> contextual classes (e.g.,
          <code>.alert-success</code>). For background color use class
          <code>.bg-* </code>, <code>.text-white </code>
        </p>

        <div>
          {(colors || []).map((color, idx) => {
            return (
              <Alert
                variant={color}
                key={idx}
                className={`${
                  defaultAlertVariants[idx].isBG
                    ? "border-0 text-bg-" + defaultAlertVariants[idx].variant
                    : ""
                }`}
              >
                <strong>
                  {color.charAt(0).toUpperCase() + color.slice(1)} -{" "}
                </strong>{" "}
                A simple {color} alert—check it out!
              </Alert>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
};
const DismissibleAlerts = () => {
  const [colors, setColors] = useState([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]);
  const dismissibleAlertVariants = [
    {
      variant: "primary",
      isBG: true,
    },
    {
      variant: "secondary",
      isBG: true,
    },
    {
      variant: "success",
      isBG: true,
    },
    {
      variant: "danger",
      isBG: true,
    },
    {
      variant: "warning",
      isBG: false,
    },
    {
      variant: "info",
      isBG: false,
    },
    {
      variant: "light",
      isBG: false,
    },
    {
      variant: "dark",
      isBG: false,
    },
  ];

  /*
   * handle close
   */
  const handleClose = (index) => {
    const list = [...colors];
    list.splice(index, 0);
    setColors(list);
  };
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Dismissing Alerts</h4>
        <p className="text-muted font-14 mb-3">
          Add a dismiss button and the <code>.alert-dismissible</code> class,
          which adds extra padding to the right of the alert and positions the{" "}
          <code>.btn-close</code> button.
        </p>
        <div>
          {(colors || []).map((color, idx) => {
            return (
              <Alert
                variant={color}
                key={idx}
                onClose={() => handleClose(idx)}
                dismissible
                closeVariant={
                  dismissibleAlertVariants[idx].isBG ? "white" : undefined
                }
                className={`${
                  dismissibleAlertVariants[idx].isBG
                    ? "border-0 text-bg-" +
                      dismissibleAlertVariants[idx].variant
                    : ""
                }`}
              >
                <strong>
                  {color.charAt(0).toUpperCase() + color.slice(1)} -{" "}
                </strong>{" "}
                A simple {color} alert—check it out!
              </Alert>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
};
const CustomAlert = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Custom Alerts</h4>
        <p className="text-muted font-14 mb-3">
          Display alert with transparent background and with contextual text
          color. Use classes
          <code>.bg-white</code>, and <code>.text-*</code>. E.g.{" "}
          <code>bg-white text-primary</code>.
        </p>
        <div>
          {(colors || []).map((color, idx) => {
            return (
              <Alert
                variant={color}
                key={idx}
                className="bg-transparent"
                role="alert"
              >
                This is a <strong>{color}</strong> alert—check it out!
              </Alert>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
};
const LinkColor = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Link Color</h4>
        <p className="text-muted font-14 mb-3">
          Use the <code>.alert-link</code> utility class to quickly provide
          matching colored links within any alert.
        </p>
        <div>
          {(colors || []).map((color, idx) => {
            return (
              <Alert variant={color} key={idx} role="alert">
                A simple {color} alert with{" "}
                <Link to="#" className="alert-link">
                  an example link
                </Link>
                . Give it a click if you like.
              </Alert>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
};
const IconWithAlert = () => {
  const iconAlertVariants = [
    {
      variant: "primary",
      icon: "ri-check-line",
    },
    {
      variant: "secondary",
      icon: "ri-close-circle-line",
    },
    {
      variant: "success",
      icon: "ri-alert-line",
    },
    {
      variant: "danger",
      icon: "ri-information-line",
    },
  ];
  const colors = ["success", "danger", "warning", "info"];
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Icons with Alerts</h4>
        <p className="text-muted font-14 mb-3">
          You can also include additional elements like icons, heading, etc
          along side the actual message.
        </p>
        <div>
          {(colors || []).map((color, idx) => {
            return (
              <Alert variant={color} key={idx} role="alert">
                <i
                  className={`${iconAlertVariants[idx].icon} me-1 align-middle fs-16`}
                />
                This is a <strong>{color}</strong> alert - check it out!
              </Alert>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
};
const AdditionalContent = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Additional content</h4>
        <p className="text-muted font-14 mb-3">
          Alerts can also contain additional HTML elements like headings,
          paragraphs and dividers.
        </p>
        <div>
          <Alert variant="success" className="mb-0" role="alert">
            <Alert.Heading as="h4">Well done!</Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </Alert>
        </div>
      </Card.Body>
    </Card>
  );
};
const LiveAlert = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Live Alert</h4>
        <p className="text-muted font-14 mb-3">
          Click the button below to show an alert (hidden with inline styles to
          start), then dismiss (and destroy) it with the built-in close button.
        </p>
        <div>
          <Alert
            show={showAlert}
            variant="success"
            onClose={() => setShowAlert(!showAlert)}
            dismissible
          >
            <div>Nice, you triggered this alert message!</div>
          </Alert>
          <Button
            variant="primary"
            type="button"
            onClick={() => setShowAlert(!showAlert)}
          >
            Show live alert
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
const Alerts = () => {
  return (
    <>
      <PageBreadcrumb title="Alerts" name="Alerts" subName="Base UI" />
      <Row>
        <Col xl={6}>
          <DefaultAlerts />
        </Col>
        <Col xl={6}>
          <DismissibleAlerts />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <CustomAlert />
        </Col>
        <Col xl={6}>
          <LinkColor />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <IconWithAlert />
        </Col>

        <Col xl={6}>
          <AdditionalContent />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <LiveAlert />
        </Col>
      </Row>
    </>
  );
};
export default Alerts;
