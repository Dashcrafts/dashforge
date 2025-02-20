import { Card, Col, Row } from "react-bootstrap";

// components
import { PageBreadcrumb } from "../../../../components";

//icon data
import { materialIconList } from "./data";
import NewIcons from "./NewIcons";
import AllIcons from "./AllIcons";
const MaterialIcons = () => {
  const newIcons =
    materialIconList &&
    materialIconList.filter((icon) => icon.version === "5.8.55");
  return (
    <>
      <PageBreadcrumb
        name="Mdi Icons"
        subName="Icons"
        title="Material Design Icons"
      />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">
                New Icons{" "}
                <span className="badge badge-soft-danger">6.5.95</span>
              </h4>
              <NewIcons newIcons={newIcons} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">All Icons</h4>
              <AllIcons icons={materialIconList} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Size</h4>
              <Row className="icons-list-demo">
                {[18, 24, 36, 48].map((size, idx) => {
                  return (
                    <Col xl={3} ld={4} sm={6} key={idx}>
                      <i className={`mdi mdi-${size}px mdi-account`}></i> mdi-
                      {size}px
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Rotate</h4>

              <Row className="icons-list-demo">
                {[45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
                  return (
                    <Col xl={3} ld={4} sm={6} key={idx}>
                      <i className={`mdi mdi-rotate-${angle} mdi-account`}></i>{" "}
                      mdi-rotate-{angle}
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-4">Spin</h4>
              <Row className="icons-list-demo">
                {["loading", "star"].map((icon, idx) => {
                  return (
                    <Col xl={3} ld={4} sm={6} key={idx}>
                      <i className={`mdi mdi-spin mdi-${icon}`}></i> mdi-spin
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
export default MaterialIcons;
