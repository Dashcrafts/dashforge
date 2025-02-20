import { Card, Col, Row } from "react-bootstrap";
import { PageBreadcrumb } from "../../components";
const Pricing = () => {
  return (
    <>
      <PageBreadcrumb name="Pricing" title="Pricing" subName="Extras" />
      <Row className="justify-content-center">
        <Col xl={10}>
          <div className="text-center">
            <h3 className="mb-2">
              Our <b>Plans</b>
            </h3>
            <p className="text-muted w-50 m-auto">
              We have plans and prices that fit your business perfectly. Make
              your client site a success with our products.
            </p>
          </div>

          <Row className="my-3">
            <Col md={4}>
              <Card className="card-pricing">
                <Card.Body className="text-center">
                  <p className="card-pricing-plan-name fw-bold text-uppercase">
                    Professional Pack
                  </p>
                  <span className="card-pricing-icon text-primary">
                    <i className="fe-users"></i>
                  </span>
                  <h2 className="card-pricing-price">
                    $19 <span>/ Month</span>
                  </h2>
                  <ul className="card-pricing-features">
                    <li>10 GB Storage</li>
                    <li>500 GB Bandwidth</li>
                    <li>No Domain</li>
                    <li>1 User</li>
                    <li>Email Support</li>
                    <li>24x7 Support</li>
                  </ul>
                  <button className="btn btn-primary waves-effect waves-light mt-4 mb-2 width-sm">
                    Sign Up
                  </button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="card-pricing card-pricing-recommended">
                <Card.Body className="text-center">
                  <p className="card-pricing-plan-name fw-bold text-uppercase">
                    Business Pack
                  </p>
                  <span className="card-pricing-icon text-white">
                    <i className="fe-award"></i>
                  </span>
                  <h2 className="card-pricing-price text-white">
                    $29 <span>/ Month</span>
                  </h2>
                  <ul className="card-pricing-features">
                    <li>50 GB Storage</li>
                    <li>900 GB Bandwidth</li>
                    <li>2 Domain</li>
                    <li>10 User</li>
                    <li>Email Support</li>
                    <li>24x7 Support</li>
                  </ul>
                  <button className="btn btn-light waves-effect mt-4 mb-2 width-sm">
                    Sign Up
                  </button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="card-pricing">
                <Card.Body className="text-center">
                  <p className="card-pricing-plan-name fw-bold text-uppercase">
                    Enterprise Pack
                  </p>
                  <span className="card-pricing-icon text-primary">
                    <i className="fe-aperture"></i>
                  </span>
                  <h2 className="card-pricing-price">
                    $39 <span>/ Month</span>
                  </h2>
                  <ul className="card-pricing-features">
                    <li>100 GB Storege</li>
                    <li>Unlimited Bandwidth</li>
                    <li>10 Domain</li>
                    <li>Unlimited User</li>
                    <li>Email Support</li>
                    <li>24x7 Support</li>
                  </ul>
                  <button className="btn btn-primary waves-effect waves-light mt-4 mb-2 width-sm">
                    Sign Up
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Pricing;
