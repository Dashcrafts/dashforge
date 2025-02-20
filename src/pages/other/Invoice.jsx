import { Button, Card, Col, Image, Row } from "react-bootstrap";

// components
import { PageBreadcrumb } from "../../components";

// images
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";
const Invoice = () => {
  return (
    <>
      <PageBreadcrumb name="Invoice" title="Invoice" subName="Extras" />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <div className="clearfix">
                <div className="float-start">
                  <div className="auth-logo">
                    <div className="logo logo-dark">
                      <span className="logo-lg">
                        <Image src={logoDark} alt="" height="22" />
                      </span>
                    </div>

                    <div className="logo logo-light">
                      <span className="logo-lg">
                        <Image src={logoLight} alt="" height="22" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="float-end">
                  <h4 className="m-0 d-print-none">Invoice</h4>
                </div>
              </div>

              <Row>
                <Col md={6}>
                  <div className="mt-3">
                    <p>
                      <b>Hello, Stanley Jones</b>
                    </p>
                    <p className="text-muted">
                      Thanks a lot because you keep purchasing our products. Our
                      company promises to provide high quality products for you
                      as well as outstanding customer service for every
                      transaction.{" "}
                    </p>
                  </div>
                </Col>
                <Col md={4} className="offset-md-2">
                  <div className="mt-3 float-end">
                    <p>
                      <strong>Order Date : </strong>{" "}
                      <span className="float-end">
                        {" "}
                        &nbsp;&nbsp;&nbsp;&nbsp; Jan 17, 2016
                      </span>
                    </p>
                    <p>
                      <strong>Order Status : </strong>{" "}
                      <span className="float-end">
                        <span className="badge bg-danger">Unpaid</span>
                      </span>
                    </p>
                    <p>
                      <strong>Order No. : </strong>{" "}
                      <span className="float-end">000028 </span>
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col sm={6}>
                  <h6>Billing Address</h6>
                  <address>
                    Stanley Jones
                    <br />
                    795 Folsom Ave, Suite 600
                    <br />
                    San Francisco, CA 94107
                    <br />
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
                </Col>

                <Col sm={6}>
                  <h6>Shipping Address</h6>
                  <address>
                    Stanley Jones
                    <br />
                    795 Folsom Ave, Suite 600
                    <br />
                    San Francisco, CA 94107
                    <br />
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </address>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <div className="table-responsive">
                    <table className="table mt-4 table-centered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Item</th>
                          <th
                            style={{
                              width: "10%",
                            }}
                          >
                            Hours
                          </th>
                          <th
                            style={{
                              width: "10%",
                            }}
                          >
                            Hours Rate
                          </th>
                          <th
                            style={{
                              width: "10%",
                            }}
                            className="text-end"
                          >
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <b>Web Design</b> <br />2 Pages static website - my
                            website
                          </td>
                          <td>22</td>
                          <td>$30</td>
                          <td className="text-end">$660.00</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <b>Software Development</b> <br />
                            Invoice editor software - AB'c Software
                          </td>
                          <td>112.5</td>
                          <td>$35</td>
                          <td className="text-end">$3937.50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col sm={6}>
                  <div className="clearfix pt-5">
                    <h6 className="text-muted">Notes:</h6>
                    <small className="text-muted">
                      All accounts are to be paid within 7 days from receipt of
                      invoice. To be paid by cheque or credit card or direct
                      payment online. If account is not paid within 7 days the
                      credits details supplied as confirmation of work
                      undertaken will be charged the agreed quoted fee noted
                      above.
                    </small>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="float-end">
                    <p>
                      <b>Sub-total:</b>{" "}
                      <span className="float-end">$4597.50</span>
                    </p>
                    <p>
                      <b>Discount (10%):</b>{" "}
                      <span className="float-end">
                        {" "}
                        &nbsp;&nbsp;&nbsp; $459.75
                      </span>
                    </p>
                    <h3>$4137.75 USD</h3>
                  </div>
                  <div className="clearfix"></div>
                </Col>
              </Row>

              <div className="mt-4 mb-1">
                <div className="text-end d-print-none d-flex flex-wrap gap-1 justify-content-end">
                  <Button variant="primary" onClick={() => window.print()}>
                    <i className="mdi mdi-printer me-1"></i> Print
                  </Button>
                  <Button variant="info">Submit</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Invoice;
