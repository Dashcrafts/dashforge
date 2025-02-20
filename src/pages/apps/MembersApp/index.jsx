import { Button, Card, Col, Dropdown, Image, Row } from "react-bootstrap";
import { PageBreadcrumb } from "../../../components";
import { Link } from "react-router-dom";
import { members } from "./data";
const MembersApp = () => {
  return (
    <>
      <PageBreadcrumb name="Members" subName="Apps" title="Members" />
      <Row className="mb-3">
        <Col lg={10} md={7} sm={6}>
          <Button variant="primary" className="mb-sm-0 mb-2 me-2">
            <i className="mdi mdi-plus"></i> Add Member
          </Button>
        </Col>
        <Col lg={2} md={5} sm={6}>
          <form className="text-lg-end">
            <input
              type="search"
              className="form-control"
              id="inputPassword2"
              placeholder="Search..."
            />
          </form>
        </Col>
      </Row>

      <Row>
        {(members || []).map((member, idx) => {
          return (
            <Col xl={3} md={6} key={idx}>
              <Card className="text-center">
                <Card.Body>
                  <Dropdown className="text-end">
                    <Dropdown.Toggle
                      as="a"
                      href="#"
                      className="arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                      <Dropdown.Item href="#">Edit</Dropdown.Item>
                      <Dropdown.Item href="#">Delete</Dropdown.Item>
                      <Dropdown.Item href="#">Block</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Image
                    src={member.image}
                    className="rounded-circle avatar-lg img-thumbnail bg-transparent"
                    alt="profile-image"
                  />
                  <div className="mt-3">
                    <h4 className="mb-1">{member.name}</h4>
                    <p className=" mb-2">
                      @webdesigner <span> | </span>{" "}
                      <span>
                        {" "}
                        <Link to="#" className="text-pink">
                          websitename.com
                        </Link>{" "}
                      </span>
                    </p>
                    <p className="">
                      Hi I'm Johnathn Deo,has been the industry's standard ever
                      since the 1500s.
                    </p>
                  </div>
                  <ul className="social-list list-inline mt-3 mb-0">
                    <li className="list-inline-item">
                      <Link
                        to="#"
                        className="social-list-item border-primary text-primary"
                      >
                        <i className="mdi mdi-facebook"></i>
                      </Link>
                    </li>
                    &nbsp;
                    <li className="list-inline-item">
                      <Link
                        to="#"
                        className="social-list-item border-danger text-danger"
                      >
                        <i className="mdi mdi-google"></i>
                      </Link>
                    </li>
                    &nbsp;
                    <li className="list-inline-item">
                      <Link
                        to="#"
                        className="social-list-item border-info text-info"
                      >
                        <i className="mdi mdi-twitter"></i>
                      </Link>
                    </li>
                  </ul>
                  <Row className="mt-3 g-3">
                    <Col xs={6}>
                      <Link to="#" className="btn btn-light w-100">
                        View Profile
                      </Link>
                    </Col>
                    <Col xs={6}>
                      <Link to="#" className="btn btn-light w-100">
                        Send Message
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Row className="mt-3 mb-4">
        <Col xs={12}>
          <div className="text-center">
            <Link to="#" className="btn btn-primary">
              <i className="mdi mdi-loading mdi-spin me-1"></i> Loading...
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default MembersApp;
