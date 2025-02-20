import { Card, Col, Row } from "react-bootstrap";
import { PageBreadcrumb } from "../../../../components";
import React from "react";
import { remixIconList } from "./data";
const RemixIcons = () => {
  return (
    <>
      <PageBreadcrumb name="Remix Icons" subName="Icons" title="Remix Icons" />
      <Row>
        <Col xs={12}>
          {(remixIconList || []).map((category, idx) => {
            return (
              <Card key={idx}>
                <Card.Body>
                  <h4 className="card-title">{Object.keys(category)[0]}</h4>
                  {Object.keys(category).includes("Editor") ? (
                    <>
                      <p className="card-title-desc mb-2">
                        Use <code>&lt;i class="ri-bold"&gt;&lt;/i&gt;</code>
                      </p>
                      <Row className="icons-list-demo">
                        {(
                          Object.keys(category[Object.keys(category)[0]]) || []
                        ).map((icon, idx) => {
                          return (
                            <Col key={idx} sm={6} lg={4} xl={3}>
                              <i className={`ri-${icon}`}></i> ri-
                              {icon}
                            </Col>
                          );
                        })}
                      </Row>
                    </>
                  ) : (
                    <>
                      <p className="card-title-desc mb-2">
                        Use{" "}
                        <code>&lt;i class="ri-home-line"&gt;&lt;/i&gt;</code> or{" "}
                        <code>&lt;i class="ri-home-fill"&gt;&lt;/i&gt;</code>{" "}
                      </p>
                      <Row className="icons-list-demo">
                        {(
                          Object.keys(category[Object.keys(category)[0]]) || []
                        ).map((icon, index) => {
                          return (
                            <React.Fragment key={icon + index}>
                              <Col sm={6} lg={4} xl={3}>
                                <i className={`ri-${icon}-line`}></i> ri-{icon}
                                -line
                              </Col>
                              <Col sm={6} lg={4} xl={3}>
                                <i className={`ri-${icon}-fill`}></i> ri-{icon}
                                -fill
                              </Col>
                            </React.Fragment>
                          );
                        })}
                      </Row>
                    </>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </>
  );
};
export default RemixIcons;
