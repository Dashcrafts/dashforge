import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "../../components";
const colors = [
  {
    variant: "primary",
    background: "soft-primary",
  },
  {
    variant: "secondary",
    background: "soft-secondary",
  },
  {
    variant: "success",
    background: "soft-success",
  },
  {
    variant: "danger",
    background: "soft-danger",
  },
  {
    variant: "warning",
    background: "soft-warning",
  },
  {
    variant: "info",
    background: "soft-info",
  },
  {
    variant: "light",
    background: "soft-light",
  },
  {
    variant: "dark",
    background: "soft-dark",
  },
];
const DefaultBadges = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Default</h4>
        <p className="text-muted font-14 mb-3">
          A simple labeling component. Badges scale to match the size of the
          immediate parent element by using relative font sizing and{" "}
          <code>em</code> units.
        </p>

        <div>
          <h1>
            h1.Example heading{" "}
            <Badge bg="secondary" className="text-light">
              New
            </Badge>
          </h1>
          <h2>
            h2.Example heading{" "}
            <Badge bg="soft-success" className="badge-soft-success">
              New
            </Badge>
          </h2>
          <h3>
            h2.Example heading <Badge bg="primary">New</Badge>
          </h3>
          <h4>
            h4.Example heading{" "}
            <Link to="#" className="badge badge-soft-info">
              Info Link
            </Link>
          </h4>
          <h5>
            h5.Example heading{" "}
            <Badge bg="" className="badge badge-outline-warning">
              New
            </Badge>
          </h5>
          <h6>
            h6.Example heading <Badge bg="danger">New</Badge>
          </h6>
        </div>
      </Card.Body>
    </Card>
  );
};
const PillBadges = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Pill Badges</h4>
        <p className="text-muted font-14 mb-3">
          Use the <code>.rounded-pill</code> modifier class to make badges more
          rounded.
        </p>

        <div>
          <div className="d-flex flex-wrap gap-1">
            {(colors || []).map((color, idx) => {
              return (
                <Badge
                  key={idx}
                  pill
                  className={`${
                    color.variant === "light" ? "text-dark" : "text-white"
                  }`}
                  bg={color.variant}
                >
                  {color.variant.charAt(0).toUpperCase() +
                    color.variant.slice(1)}
                </Badge>
              );
            })}
          </div>

          <h5 className="mt-4">Lighten Badges</h5>
          <p className="text-muted font-14 mb-3">
            Use the <code>.badge-soft-*</code> modifier class to make badges
            lighten.
          </p>

          <div className="d-flex flex-wrap gap-1">
            {(colors || []).map((color, idx) => {
              return (
                <Badge
                  key={idx}
                  pill
                  bg={color.background}
                  className={`text-${color.variant}`}
                >
                  {color.variant.charAt(0).toUpperCase() +
                    color.variant.slice(1)}
                </Badge>
              );
            })}
          </div>
          <h5 className="mt-4">Outline Badges</h5>
          <p className="text-muted font-14 mb-3">
            Using the <code>.badge-outline-*</code> to quickly create a bordered
            badges.
          </p>

          <div className="d-flex flex-wrap gap-1">
            {(colors || []).map((color, idx) => {
              return (
                <Badge
                  key={idx}
                  pill
                  bg=""
                  className={`badge-outline-${color.variant}`}
                >
                  {color.variant.charAt(0).toUpperCase() +
                    color.variant.slice(1)}
                </Badge>
              );
            })}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
const ContextualVariations = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Contextual variations</h4>
        <p className="text-muted font-14 mb-3">
          Add any of the below mentioned modifier classes to change the
          appearance of a badge. Badge can be more contextual as well. Just use
          regular convention e.g. <code>badge-*color</code>,{" "}
          <code>bg-primary</code>
          to have badge with different background.
        </p>

        <div>
          <div className="d-flex flex-wrap gap-1">
            {(colors || []).map((color, idx) => {
              return (
                <Badge
                  key={idx}
                  className={`${
                    color.variant === "light" ? "text-dark" : "text-white"
                  }`}
                  bg={color.variant}
                >
                  {color.variant.charAt(0).toUpperCase() +
                    color.variant.slice(1)}
                </Badge>
              );
            })}
          </div>

          <h5 className="mt-4">Lighten Badges</h5>
          <p className="text-muted font-14 mb-3">
            Using the <code>.badge-soft-*</code> modifier class, you can have
            more soften variation.
          </p>

          <div className="d-flex flex-wrap gap-1">
            {(colors || []).map((color, idx) => {
              return (
                <Badge
                  key={idx}
                  bg={color.background}
                  className={`text-${color.variant}`}
                >
                  {color.variant.charAt(0).toUpperCase() +
                    color.variant.slice(1)}
                </Badge>
              );
            })}
          </div>

          <h5 className="mt-4">Outline Badges</h5>
          <p className="text-muted font-14 mb-3">
            Using the <code>.badge-outline-*</code> to quickly create a bordered
            badges.
          </p>

          <div className="d-flex flex-wrap gap-1">
            {(colors || []).map((color, idx) => {
              return (
                <Badge
                  key={idx}
                  bg=""
                  className={`badge-outline-${color.variant}`}
                >
                  {color.variant.charAt(0).toUpperCase() +
                    color.variant.slice(1)}
                </Badge>
              );
            })}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
const BadgePositioned = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Badge Positioned</h4>
        <p className="text-muted font-14 mb-3">
          Use utilities to modify a <code>.badge</code> and position it in the
          corner of a link or button.
        </p>

        <div>
          <Row>
            <Col xs={6}>
              <Button
                type="button"
                variant="primary"
                className="position-relative"
              >
                Inbox
                <Badge
                  pill
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  99+
                  <span className="visually-hidden">unread messages</span>
                </Badge>
              </Button>
            </Col>
            <Col xs={6}>
              <Button
                type="button"
                variant="primary"
                className="position-relative"
              >
                Profile
                <Badge
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle p-1 border border-light rounded-circle"
                >
                  <span className="visually-hidden">New alerts</span>
                </Badge>
              </Button>
            </Col>
            <Col xs={6}>
              <Button type="button" variant="success" className="mt-4">
                Notifications{" "}
                <Badge bg="light" className="text-dark ms-1">
                  4
                </Badge>
              </Button>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};
const Badges = () => {
  return (
    <>
      <PageBreadcrumb title="Badges" name="Badges" subName="Base UI" />

      <Row>
        <Col xl={6}>
          <DefaultBadges />
          <PillBadges />
        </Col>
        <Col xl={6}>
          <ContextualVariations />
          <BadgePositioned />
        </Col>
      </Row>
    </>
  );
};
export default Badges;
