import { ButtonGroup, Card, Col, Dropdown, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// components
import { PageBreadcrumb } from "../../components";

//images
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
const Aboutus = () => {
  return (
    <>
      <PageBreadcrumb name="About Us" title="About Us" subName="Extras" />

      <Row>
        <Col xs={12}>
          <Card className="text-center">
            <Card.Body>
              <Row className="justify-content-center">
                <Col xl={8}>
                  <h2 className="mb-3">
                    It's designed for describing your app, agency or business
                  </h2>
                  <p className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, printer took a
                    galley of type and scrambled it to make a book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesettingremainingisthatis essentially
                    unchanged.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <h4 className="text-dark fw-semibold text-uppercase mb-3">
            Our Services
          </h4>
        </Col>
      </Row>

      <Row>
        <Col xl={3} md={6}>
          <Card className="text-center">
            <Card.Body>
              <div className=" bg-soft-primary border border-primary avatar-lg mb-3 rounded-circle mx-auto">
                <i className="dripicons-broadcast avatar-title text-primary h2 m-0"></i>
              </div>
              <h4 className="mb-3">Strategy Solutions</h4>

              <p className="text-muted mx-2">
                We put a lot of effort in design, as it’s the most important
                ingredient of successful website utperspiciatis type book.
              </p>
              <Link to="#" className="text-dark">
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={6}>
          <Card className="text-center">
            <Card.Body>
              <div className=" bg-soft-pink border border-pink avatar-lg mb-3 rounded-circle mx-auto">
                <i className="dripicons-help avatar-title text-pink h2 m-0"></i>
              </div>
              <h4 className="mb-3">Development</h4>

              <p className="text-muted mx-2">
                We put a lot of effort in design, as it’s the most important
                ingredient of successful website utperspiciatis type book.
              </p>
              <Link to="#" className="text-dark">
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={6}>
          <Card className="text-center">
            <Card.Body>
              <div className=" bg-soft-success border border-success avatar-lg mb-3 rounded-circle mx-auto">
                <i className="dripicons-brightness-medium avatar-title text-success h2 m-0"></i>
              </div>
              <h4 className="mb-3">Dedicated Support</h4>

              <p className="text-muted mx-2">
                We put a lot of effort in design, as it’s the most important
                ingredient of successful website utperspiciatis type book.
              </p>
              <Link to="#" className="text-dark">
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={6}>
          <Card className="text-center">
            <Card.Body>
              <div className=" bg-soft-purple border border-purple avatar-lg mb-3 rounded-circle mx-auto">
                <i className="dripicons-clock avatar-title text-purple h2 m-0"></i>
              </div>
              <h4 className="mb-3">Digital Design</h4>

              <p className="text-muted mx-2">
                We put a lot of effort in design, as it’s the most important
                ingredient of successful website utperspiciatis type book.
              </p>
              <Link to="#" className="text-dark">
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={6}>
          <Card className="text-center">
            <Card.Body>
              <div className=" bg-soft-dark border border-dark avatar-lg mb-3 rounded-circle mx-auto">
                <i className="dripicons-graph-pie avatar-title text-dark h2 m-0"></i>
              </div>
              <h4 className="mb-3">Strategy Solutions</h4>

              <p className="text-muted mx-2">
                We put a lot of effort in design, as it’s the most important
                ingredient of successful website utperspiciatis type book.
              </p>
              <Link to="#" className="text-dark">
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={6}>
          <Card className="text-center">
            <Card.Body>
              <div className=" bg-soft-warning border border-warning avatar-lg mb-3 rounded-circle mx-auto">
                <i className="dripicons-jewel avatar-title text-warning h2 m-0"></i>
              </div>
              <h4 className="mb-3">Dedicated Support</h4>

              <p className="text-muted mx-2">
                We put a lot of effort in design, as it’s the most important
                ingredient of successful website utperspiciatis type book.
              </p>
              <Link to="#" className="text-dark">
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={6}>
          <Card className="text-center">
            <Card.Body>
              <div className=" bg-soft-info border border-info avatar-lg mb-3 rounded-circle mx-auto">
                <i className="dripicons-pamphlet avatar-title text-info h2 m-0"></i>
              </div>
              <h4 className="mb-3">Digital Design</h4>

              <p className="text-muted mx-2">
                We put a lot of effort in design, as it’s the most important
                ingredient of successful website utperspiciatis type book.
              </p>
              <Link to="#" className="text-dark">
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} md={6}>
          <Card className="text-center">
            <Card.Body>
              <div className=" bg-soft-dark border border-dark avatar-lg mb-3 rounded-circle mx-auto">
                <i className="dripicons-hourglass avatar-title text-dark h2 m-0"></i>
              </div>
              <h4 className="mb-3">UI/UX Design</h4>

              <p className="text-muted mx-2">
                We put a lot of effort in design, as it’s the most important
                ingredient of successful website utperspiciatis type book.
              </p>
              <Link to="#" className="text-dark">
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <h4 className="text-dark fw-semibold text-uppercase mb-3">
            Behind People
          </h4>
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center">
                <Image
                  src={avatar3}
                  alt="team-member"
                  className="avatar-lg d-block img-thumbnail rounded-circle"
                />
                <div className="w-100 ms-3">
                  <h4 className="mt-0">Daniel Syme</h4>
                  <p className="mb-0">Founder</p>
                </div>
                <Dropdown as={ButtonGroup} drop="up">
                  <Dropdown.Toggle
                    as="a"
                    href="#"
                    className="arrow-none card-drop"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-dots-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">View Profile</Dropdown.Item>
                    <Dropdown.Item href="#">Report</Dropdown.Item>
                    <Dropdown.Item href="#">Block</Dropdown.Item>
                    <li>
                      <Dropdown.Divider />
                    </li>
                    <Dropdown.Item href="#" className="text-danger">
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center">
                <img
                  src={avatar5}
                  alt="team-member"
                  className="avatar-lg d-block img-thumbnail rounded-circle"
                />
                <div className="w-100 ms-3">
                  <h4 className="mt-0">Patrick Coote</h4>
                  <p className="mb-0">Co-Founder</p>
                </div>
                <Dropdown as={ButtonGroup} drop="up">
                  <Dropdown.Toggle
                    as="a"
                    href="#"
                    className="arrow-none card-drop"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-dots-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">View Profile</Dropdown.Item>
                    <Dropdown.Item href="#">Report</Dropdown.Item>
                    <Dropdown.Item href="#">Block</Dropdown.Item>
                    <li>
                      <Dropdown.Divider />
                    </li>

                    <Dropdown.Item href="#" className="text-danger">
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center">
                <img
                  src={avatar4}
                  alt="team-member"
                  className="avatar-lg d-block img-thumbnail rounded-circle"
                />
                <div className="w-100 ms-3">
                  <h4 className="mt-0">Hugo Moncrieff</h4>
                  <p className="mb-0">Creative Director</p>
                </div>
                <Dropdown as={ButtonGroup} drop="up">
                  <Dropdown.Toggle
                    as="a"
                    href="#"
                    className="arrow-none card-drop"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-dots-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">View Profile</Dropdown.Item>

                    <Dropdown.Item href="#">Report</Dropdown.Item>

                    <Dropdown.Item href="#">Block</Dropdown.Item>

                    <li>
                      <Dropdown.Divider />
                    </li>

                    <Dropdown.Item href="#" className="text-danger">
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Aboutus;
