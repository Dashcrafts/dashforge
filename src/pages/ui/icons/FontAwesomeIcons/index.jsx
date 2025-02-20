import { Card, Col, Row } from "react-bootstrap";
import { FAIconList } from "./data";
import { PageBreadcrumb } from "../../../../components";
const FontAwesomeIcons = () => {
  const solidIcons =
    FAIconList.data &&
    FAIconList.data.length &&
    FAIconList.data.filter((icon) =>
      icon.attributes.membership.free.includes("solid")
    );
  const regularIcons =
    FAIconList.data &&
    FAIconList.data.length &&
    FAIconList.data.filter((icon) =>
      icon.attributes.membership.free.includes("regular")
    );
  const brandsIcons =
    FAIconList.data &&
    FAIconList.data.length &&
    FAIconList.data.filter((icon) =>
      icon.attributes.membership.free.includes("brands")
    );
  return (
    <>
      <PageBreadcrumb
        name="Font Awesome 5"
        subName="Icons"
        title="Font Awesome 5 Icons"
      />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Solid</h4>
              <p className="sub-header">
                Use <code>&lt;i class="fas fa-ad"&gt;&lt;/i&gt;</code>{" "}
                <span className="badge bg-success">v 5.13.0</span>.
              </p>
              <Row className="icons-list-demo" id="solid">
                {(solidIcons || []).map((icon, idx) => {
                  return (
                    <Col key={idx} sm={6} md={4} lg={3}>
                      <i className={`fas fa-${icon.attributes.id}`} />{" "}
                      <span>fas fa-{icon.attributes.id}</span>
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4 className="header-title">Regular</h4>
              <p className="sub-header">
                Use{" "}
                <code>&lt;i className="far fa-address-book"&gt;&lt;/i&gt;</code>{" "}
                <span className="badge bg-success">v 5.13.0</span>.
              </p>
              <Row className="icons-list-demo" id="regular">
                {(regularIcons || []).map((icon, idx) => {
                  return (
                    <Col key={idx} sm={6} md={4} lg={3}>
                      <i className={`far fa-${icon.attributes.id}`} />{" "}
                      <span>far fa-{icon.attributes.id}</span>
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h4 className="header-title">Brands</h4>
              <p className="sub-header">
                Use <code>&lt;i className="fab fa-500px"&gt;&lt;/i&gt;</code>{" "}
                <span className="badge bg-success">v 5.13.0</span>.
              </p>
              <Row className="icons-list-demo" id="brand">
                {(brandsIcons || []).map((icon, idx) => {
                  return (
                    <Col key={idx} sm={6} md={4} lg={3}>
                      <i className={`fab fa-${icon.attributes.id}`} />{" "}
                      <span>fab fa-{icon.attributes.id}</span>
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default FontAwesomeIcons;
