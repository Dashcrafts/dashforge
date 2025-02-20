import { Card, CardBody, Col, Row } from "react-bootstrap";
// import FeatherIcon from "feather-icons-react";
import { Icons } from "./data";
import { PageBreadcrumb } from "../../../../components";
import {
  FiActivity,
  FiAirplay,
  FiAlertCircle,
  FiAlertOctagon,
  FiAlertTriangle,
  FiAnchor,
  FiAperture,
  FiArchive,
  FiClock,
  FiPrinter,
  FiShoppingBag,
} from "react-icons/fi";
const TwoToneIcons = () => {
  return (
    <>
      <PageBreadcrumb
        name="Two Tones"
        subName="Icons"
        title="Two Tones Icons"
      />

      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <h4 className="header-title">Examples</h4>
              <p className="mb-3">
                Use{" "}
                <code>
                  &lt;i data-feather="activity" class="icon-dual"&gt;&lt;/i&gt;
                </code>
                .
              </p>
              <Row className="icons-list-demo">
                {Icons.map((icon, idx) => {
                  const Icon = icon.icon;
                  return (
                    <Col sm={6} md={4} lg={3} key={idx}>
                      <div className="icon-item">
                        <Icon size={24} className="icon-dual" />
                        &nbsp;
                        <span className="ms-2">{icon.name}</span>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <h5 className="mt-0 mb-1 header-title">Two Tones Color Icons</h5>
              <p className="mb-3">
                Use{" "}
                <code>
                  &lt;i data-feather="activity"
                  class="icon-dual-**"&gt;&lt;/i&gt;
                </code>
                .
              </p>
              <Row className="icons-list-demo">
                <Col xl={3} lg={4} sm={6}>
                  <div className="icon-item">
                    <FiActivity size={24} className="icon-dual-primary" />
                    &nbsp;
                    <span>activity</span>
                  </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                  <div className="icon-item">
                    <FiAirplay className="icon-dual-success" />
                    &nbsp;
                    <span>airplay</span>
                  </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                  <div className="icon-item">
                    <FiAlertCircle className="icon-dual-danger" /> &nbsp;
                    <span>alert-circle</span>
                  </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                  <div className="icon-item">
                    <FiAlertOctagon className="icon-dual-info" /> &nbsp;
                    <span>alert-octagon</span>
                  </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                  <div className="icon-item">
                    <FiAlertTriangle className="icon-dual-warning" /> &nbsp;
                    <span>alert-triangle</span>
                  </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                  <div className="icon-item">
                    <FiAnchor className="icon-dual-dark" />
                    &nbsp;
                    <span>anchor</span>
                  </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                  <div className="icon-item">
                    <FiAperture className="icon-dual-purple" />
                    &nbsp;
                    <span>aperture</span>
                  </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                  <div className="icon-item">
                    <FiArchive className="icon-dual-pink" />
                    &nbsp;
                    <span>archive</span>
                  </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                  <div className="icon-item">
                    <FiClock className="icon-dual-danger" />
                    &nbsp;
                    <span>clock</span>
                  </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                  <div className="icon-item">
                    <FiShoppingBag className="icon-dual-info" />
                    &nbsp;
                    <span>shopping-bag</span>
                  </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                  <div className="icon-item">
                    <FiPrinter className="icon-dual-warning" />
                    &nbsp;
                    <span>printer</span>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default TwoToneIcons;
