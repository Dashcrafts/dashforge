import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  Collapse as BSCollapse,
  Button,
} from "react-bootstrap";
import { useToggle } from "../../hooks";

// components
import { PageBreadcrumb } from "../../components";
const BasicCollapse = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Collapse</h4>
        <p className="text-muted font-14 mb-3">
          Bootstrap's collapse provides the way to toggle the visibility of any
          content or element. Please read the official{" "}
          <Link
            to="https://react-bootstrap.github.io/docs/utilities/transitions/"
            target="_blank"
          >
            Bootstrap
          </Link>{" "}
          documentation for a full list of options.
        </p>

        <p className="d-flex flex-wrap gap-2">
          <Link className="btn btn-primary" to="#" onClick={toggle}>
            Link with href
          </Link>
          <Button variant="primary" onClick={toggle}>
            Button with data-bs-target
          </Button>
        </p>
        <BSCollapse in={isOpen}>
          <div>
            <Card className="mb-0">
              <Card.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry alice ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </Card.Body>
            </Card>
          </div>
        </BSCollapse>
      </Card.Body>
    </Card>
  );
};
const HorizontalCollapse = () => {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Collapse Horizontal</h4>
        <p className="text-muted font-14 mb-3">
          The collapse plugin also supports horizontal collapsing. Add the{" "}
          <code>.collapse-horizontal</code> modifier class to transition the{" "}
          <code>width</code> instead of <code>height</code> and set a{" "}
          <code>width</code> on the immediate child element.
        </p>
        <p>
          <Button
            onClick={() => setOpen(!open)}
            variant="primary"
            aria-expanded={open}
          >
            Toggle width collapse
          </Button>
        </p>
        <div
          style={{
            minHeight: 120,
          }}
        >
          <BSCollapse in={open} dimension="width">
            <div>
              <Card
                className="mb-0"
                style={{
                  width: 300,
                }}
              >
                <Card.Body>
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                </Card.Body>
              </Card>
            </div>
          </BSCollapse>
        </div>
      </Card.Body>
    </Card>
  );
};
const MultipleTargetsCollapse = () => {
  const [isOpenFirst, toggleFirst] = useToggle(false);
  const [isOpenSecond, toggleSecond] = useToggle(false);
  const toggleBoth = () => {
    toggleFirst();
    toggleSecond();
  };
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Multiple Targets</h4>
        <p className="text-muted font-14 mb-3">
          Multiple <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can
          show and hide an element if they each reference it with their{" "}
          <code>href</code> or <code>data-bs-target</code> attribute
        </p>
        <p className="d-flex flex-wrap gap-1">
          <Link to="#" className="btn btn-primary" onClick={toggleFirst}>
            Toggle first element
          </Link>
          <Button variant="primary" type="button" onClick={toggleSecond}>
            Toggle second element
          </Button>
          <Button variant="primary" type="button" onClick={toggleBoth}>
            Toggle both elements
          </Button>
        </p>
        <Row>
          <Col>
            <BSCollapse in={isOpenFirst}>
              <div>
                <Card className="mb-0">
                  <Card.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry alice ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </Card.Body>
                </Card>
              </div>
            </BSCollapse>
          </Col>
          <Col>
            <BSCollapse in={isOpenSecond}>
              <div>
                <Card className="mb-0">
                  <Card.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry alice ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </Card.Body>
                </Card>
              </div>
            </BSCollapse>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
const Collapse = () => {
  return (
    <>
      <PageBreadcrumb title="Collapse" name="Collapse" subName="Base UI" />
      <Row>
        <Col xl={6}>
          <BasicCollapse />
        </Col>
        <Col xl={6}>
          <HorizontalCollapse />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <MultipleTargetsCollapse />
        </Col>
      </Row>
    </>
  );
};
export default Collapse;
