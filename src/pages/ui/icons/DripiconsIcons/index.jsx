import React from "react";
import { PageBreadcrumb } from "../../../../components";
import { Card, Col, Row } from "react-bootstrap";
import { dripiconsList } from "./data";
const DripiconsIcons = () => {
  return (
    <>
      <PageBreadcrumb name="Dripicons" title="Dripicons" subName="Icons" />

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Row className="icons-list-demo">
                {(dripiconsList || []).map((icon, idx) => {
                  return (
                    <Col key={idx} sm={6} md={4} lg={3}>
                      <i className={icon.name}></i> {icon.name}
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
export default DripiconsIcons;
