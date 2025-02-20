import {
  Card,
  Col,
  Row,
  Offcanvas as BSOffcanvas,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useToggle } from "../../hooks";

// components
import { PageBreadcrumb } from "../../components";
const LinkAndButtonOffcanvas = () => {
  const [isOpen, toggle] = useToggle();
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Offcanvas</h4>
        <p className="text-muted font-13">
          You can use a link with the <code>href</code> attribute, or a button
          with the <code>data-bs-target</code> attribute. In both cases, the{" "}
          <code>data-bs-toggle="offcanvas"</code> is required.
        </p>
        <div className="d-flex flex-wrap gap-2">
          <Link
            className="btn btn-primary"
            onClick={toggle}
            to="#"
            role="button"
          >
            Link with href
          </Link>
          <Button variant="primary" onClick={toggle}>
            Button with data-bs-target
          </Button>
        </div>

        <BSOffcanvas
          show={isOpen}
          onHide={toggle}
          className="offcanvas-start"
          tabIndex={-1}
        >
          <BSOffcanvas.Header closeButton>
            <BSOffcanvas.Title as="h5">Offcanvas</BSOffcanvas.Title>
          </BSOffcanvas.Header>
          <BSOffcanvas.Body className="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </div>
            <h5 className="mt-3">List</h5>
            <ul className="ps-3">
              <li>Nemo enim ipsam voluptatem quia aspernatur</li>
              <li>Neque porro quisquam est, qui dolorem</li>
              <li>Quis autem vel eum iure qui in ea</li>
            </ul>

            <ul className="ps-3">
              <li>At vero eos et accusamus et iusto odio dignissimos</li>
              <li>Et harum quidem rerum facilis</li>
              <li>Temporibus autem quibusdam et aut officiis</li>
            </ul>
          </BSOffcanvas.Body>
        </BSOffcanvas>
      </Card.Body>
    </Card>
  );
};
const OffCanvasWithBackdrop = ({ name, ...props }) => {
  const [isOpen, toggle] = useToggle();
  return (
    <>
      <Button variant="primary" onClick={toggle} className="mt-2 me-2 mt-md-0">
        {name}
      </Button>
      <BSOffcanvas
        show={isOpen}
        onHide={toggle}
        {...props}
        className="offcanvas-start"
      >
        <BSOffcanvas.Header closeButton>
          <BSOffcanvas.Title as="h5">{name}</BSOffcanvas.Title>
        </BSOffcanvas.Header>
        <BSOffcanvas.Body>
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <h5 className="mt-3">List</h5>
          <ul className="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
          </ul>
          <ul className="ps-3">
            <li>At vero eos et accusamus et iusto odio dignissimos</li>
            <li>Et harum quidem rerum facilis</li>
            <li>Temporibus autem quibusdam et aut officiis</li>
          </ul>
        </BSOffcanvas.Body>
      </BSOffcanvas>
    </>
  );
};
const OffcanvasPlacement = ({ name, ...props }) => {
  const [isOpen, toggle] = useToggle();
  return (
    <>
      <Button variant="primary" onClick={toggle} className="mt-2 me-1 mt-md-0">
        {" "}
        Toggle {name} offcanvas
      </Button>
      <BSOffcanvas show={isOpen} onHide={toggle} {...props}>
        <BSOffcanvas.Header closeButton>
          <BSOffcanvas.Title>Offcanvas {name}</BSOffcanvas.Title>
        </BSOffcanvas.Header>

        <BSOffcanvas.Body className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <h5 className="mt-3">List</h5>
          <ul className="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
          </ul>
        </BSOffcanvas.Body>
      </BSOffcanvas>
    </>
  );
};
const DarkOffcanvas = () => {
  const [isOpen, toggle] = useToggle();
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Dark Offcanvas</h4>
        <p className="text-muted font-13">
          Change the appearance of offcanvases with utilities to better match
          them to different contexts like dark navbars. Here we add{" "}
          <code>.text-bg-dark</code> to the <code>.offcanvas</code> and{" "}
          <code> .btn-close-white</code> to <code>.btn-close</code> for proper
          styling with a dark offcanvas. If you have dropdowns within, consider
          also adding <code>.dropdown-menu-dark</code> to{" "}
          <code>.dropdown-menu</code>.
        </p>

        <div>
          <Button variant="primary" onClick={toggle} className="mt-2 mt-md-0">
            Dark offcanvas
          </Button>

          <BSOffcanvas
            show={isOpen}
            onHide={toggle}
            className="offcanvas-start text-bg-dark"
          >
            <BSOffcanvas.Header closeButton>
              <BSOffcanvas.Title as="h5">Dark Offcanvas</BSOffcanvas.Title>
            </BSOffcanvas.Header>

            <BSOffcanvas.Body>
              <div>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </div>
              <h5 className="mt-3">List</h5>
              <ul className="ps-3">
                <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                <li>Neque porro quisquam est, qui dolorem</li>
                <li>Quis autem vel eum iure qui in ea</li>
              </ul>
            </BSOffcanvas.Body>
          </BSOffcanvas>
        </div>
      </Card.Body>
    </Card>
  );
};
const Offcanvas = () => {
  const options = [
    {
      name: "Enable body scrolling",
      scroll: true,
      backdrop: false,
    },
    {
      name: "Enable backdrop (default)",
      scroll: false,
      backdrop: true,
    },
    {
      name: "Enable both scrolling & backdrop",
      scroll: true,
      backdrop: true,
    },
  ];
  const placementOptions = [
    {
      name: "Top",
      placement: "top",
    },
    {
      name: "right",
      placement: "end",
    },
    {
      name: "bottom",
      placement: "bottom",
    },
    {
      name: "Left",
      placement: "start",
    },
  ];
  return (
    <>
      <PageBreadcrumb title="Offcanvas" name="Offcanvas" subName="Base UI" />
      <Row>
        <Col xl={6}>
          <LinkAndButtonOffcanvas />

          <Card>
            <Card.Body>
              <h4 className="header-title">Offcanvas Backdrop</h4>
              <p className="text-muted font-13">
                Scrolling the <code>&lt;body&gt;</code> element is disabled when
                an offcanvas and its backdrop are visible. Use the{" "}
                <code>data-bs-scroll</code> attribute to toggle{" "}
                <code>&lt;body&gt;</code> scrolling and{" "}
                <code>data-bs-backdrop</code> to toggle the backdrop.
              </p>

              {(options || []).map((props, idx) => (
                <OffCanvasWithBackdrop key={idx} {...props} />
              ))}
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Offcanvas Placement</h4>
              <p className="text-muted font-13">
                Try the right and bottom examples out below.
              </p>

              <ul className="text-muted font-13">
                <li>
                  <code>.offcanvas-start</code> places offcanvas on the left of
                  the viewport (shown above)
                </li>
                <li>
                  <code>.offcanvas-end</code> places offcanvas on the right of
                  the viewport
                </li>
                <li>
                  <code>.offcanvas-top</code> places offcanvas on the top of the
                  viewport
                </li>
                <li>
                  <code>.offcanvas-bottom</code> places offcanvas on the bottom
                  of the viewport
                </li>
              </ul>
              <div>
                {(placementOptions || []).map((option, idx) => (
                  <OffcanvasPlacement
                    key={idx}
                    placement={option.placement}
                    name={option.name}
                  />
                ))}
              </div>
            </Card.Body>
          </Card>
          <DarkOffcanvas />
        </Col>
      </Row>
    </>
  );
};
export default Offcanvas;
