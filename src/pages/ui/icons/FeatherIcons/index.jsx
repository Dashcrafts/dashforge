import { Card, Col, Row } from "react-bootstrap";
import { PageBreadcrumb } from "../../../../components";
import { icons } from "./data";
const FeatherIcons = () => {
  return (
    <>
      <PageBreadcrumb name="Feather" subName="Icons" title="Feather Icons" />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Row className="icons-list-demo">
                {(icons || []).map((icon, idx) => {
                  const Icon = icon.icon;
                  return (
                    <Col sm={6} md={4} lg={3} key={idx}>
                      <Icon width={24} height={24} /> {icon.name}
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
export default FeatherIcons;
