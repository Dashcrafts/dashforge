import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Image,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import { inboxMessages, teamMembers, upcomingReminders } from "./data";

// components
import { PageBreadcrumb } from "../../components";

// images
import avatar1 from "../../assets/images/users/user-1.jpg";
import avatar3 from "../../assets/images/users/user-3.jpg";
import avatar4 from "../../assets/images/users/user-4.jpg";
import avatar6 from "../../assets/images/users/user-6.jpg";
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
const Profile = () => {
  return (
    <>
      <PageBreadcrumb name="Profile" title="Profile" subName="Extras" />
      <Row>
        <Col xl={3}>
          <Card>
            <Card.Body>
              <Dropdown className="float-end">
                <Dropdown.Toggle
                  as="a"
                  href="#"
                  className="arrow-none card-drop"
                >
                  <i className="mdi mdi-dots-vertical"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu align="end">
                  <Dropdown.Item href="#">Edit</Dropdown.Item>
                  <Dropdown.Item href="#">Delete</Dropdown.Item>
                  <Dropdown.Item href="#">Block</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-flex align-items-start">
                <Image
                  src={avatar1}
                  className="rounded-circle avatar-lg img-thumbnail"
                  alt="profile-image"
                />
                <div className="w-100 ms-3">
                  <h4 className="my-0">Geneva McKnight</h4>
                  <p className="text-muted">@webdesigner</p>
                  <div className="d-flex flex-wrap gap-1">
                    <Button variant="soft-primary" className="btn-xs mb-2">
                      Follow
                    </Button>
                    <Button variant="soft-success" className="btn-xs mb-2">
                      Message
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <h4 className="font-13 text-uppercase">About Me :</h4>
                <p className="text-muted font-13 mb-3">
                  Hi I'm Johnathn Deo,has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type.
                </p>
                <p className="text-muted mb-2 font-13">
                  <strong>Full Name :</strong>{" "}
                  <span className="ms-2">Geneva D. McKnight</span>
                </p>
                <p className="text-muted mb-2 font-13">
                  <strong>Mobile :</strong>
                  <span className="ms-2">(123) 123 1234</span>
                </p>
                <p className="text-muted mb-2 font-13">
                  <strong>Email :</strong>{" "}
                  <span className="ms-2">user@email.domain</span>
                </p>
                <p className="text-muted mb-1 font-13">
                  <strong>Location :</strong> <span className="ms-2">USA</span>
                </p>
              </div>

              <ul className="social-list list-inline mt-3 mb-0">
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="social-list-item text-center border-primary text-primary"
                  >
                    <i className="mdi mdi-facebook"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="social-list-item text-center border-danger text-danger"
                  >
                    <i className="mdi mdi-google"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="social-list-item text-center border-info text-info"
                  >
                    <i className="mdi mdi-twitter"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="social-list-item text-center border-secondary text-secondary"
                  >
                    <i className="mdi mdi-github"></i>
                  </Link>
                </li>
              </ul>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body className="text-center">
              <Row>
                <Col xs={4} className=" border-end border-light">
                  <h5 className="text-muted mt-1 mb-2 fw-normal">Applied</h5>
                  <h2 className="mb-0 fw-bold">116</h2>
                </Col>
                <Col xs={4} className=" border-end border-light">
                  <h5 className="text-muted mt-1 mb-2 fw-normal">Reviewed</h5>
                  <h2 className="mb-0 fw-bold">87</h2>
                </Col>
                <Col xs={4}>
                  <h5 className="text-muted mt-1 mb-2 fw-normal">Contacted</h5>
                  <h2 className="mb-0 fw-bold">98</h2>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card>
            <div className="card-body px-0 py-3">
              <h4 className="card-title px-4 mb-2">Inbox</h4>

              <SimpleBar
                className="inbox-widget px-4"
                data-simplebar
                style={{
                  maxHeight: 350,
                }}
              >
                {(inboxMessages || []).map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="d-flex align-items-center pb-1"
                      id="tooltips-container"
                    >
                      <Image
                        src={item.img}
                        className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent"
                        alt=""
                      />
                      <div className="w-100 ms-3">
                        <h5 className="mb-1">{item.sender}</h5>
                        <p className="mb-0 font-13">{item.message}</p>
                      </div>
                      <OverlayTrigger
                        placement="left"
                        overlay={<Tooltip>Reply</Tooltip>}
                      >
                        <Link
                          to="#"
                          className="btn btn-sm btn-soft-info font-13"
                        >
                          {" "}
                          <i className="mdi mdi-reply"></i>{" "}
                        </Link>
                      </OverlayTrigger>
                    </div>
                  );
                })}
              </SimpleBar>
            </div>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <Form action="#" className="comment-area-box mb-3">
                <span className="input-icon">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write something..."
                  ></Form.Control>
                </span>
                <div className="comment-area-btn">
                  <div className="float-end">
                    <Button type="submit" variant="dark" size="sm">
                      Post
                    </Button>
                  </div>
                  <div className="d-flex flex-wrap gap-1">
                    <Link to="#" className="btn btn-sm btn-light text-black-50">
                      <i className="far fa-user"></i>
                    </Link>
                    <Link to="#" className="btn btn-sm btn-light text-black-50">
                      <i className="fa fa-map-marker-alt"></i>
                    </Link>
                    <Link to="#" className="btn btn-sm btn-light text-black-50">
                      <i className="fa fa-camera"></i>
                    </Link>
                    <Link to="#" className="btn btn-sm btn-light text-black-50">
                      <i className="far fa-smile"></i>
                    </Link>
                  </div>
                </div>
              </Form>

              <div className="border border-light p-2 mb-3">
                <div className="d-flex align-items-start">
                  <Image
                    className="me-2 avatar-sm rounded-circle"
                    src={avatar4}
                    alt="Generic placeholder image"
                  />
                  <div className="w-100">
                    <h5 className="">
                      Thelma Fridley{" "}
                      <small className="text-muted"> 1 hour ago</small>
                    </h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Duis sagittis ipsum.
                    Praesent mauris. Fusce nec tellus sed augue semper porta.
                    Mauris massa.
                    <br />
                    <Link
                      to="#"
                      className="text-muted font-13 d-inline-block mt-2"
                    >
                      <i className="mdi mdi-reply"></i> Reply
                    </Link>
                  </div>
                </div>

                <div className="post-user-comment-box">
                  <div className="d-flex align-items-start">
                    <Image
                      className="me-2 avatar-sm rounded-circle"
                      src={avatar3}
                      alt="Generic placeholder image"
                    />
                    <div className="w-100">
                      <h5 className="mt-0">
                        Jeremy Tomlinson{" "}
                        <small className="text-muted">3 hours ago</small>
                      </h5>
                      Nice work, makes me think of The Money Pit.
                      <br />
                      <Link
                        to="#"
                        className="text-muted font-13 d-inline-block mt-2"
                      >
                        <i className="mdi mdi-reply"></i> Reply
                      </Link>
                      <div className="d-flex align-items-start mt-3">
                        <Link className="pe-2" to="#">
                          <Image
                            src={avatar4}
                            className="avatar-sm rounded-circle"
                            alt="Generic placeholder image"
                          />
                        </Link>
                        <div className="w-100">
                          <h5 className="mt-0">
                            Kathleen Thomas{" "}
                            <small className="text-muted">5 hours ago</small>
                          </h5>
                          i'm in the middle of a timelapse animation myself!
                          (Very different though.) Awesome stuff.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mt-2">
                    <Link className="pe-2" to="#">
                      <Image
                        src={avatar1}
                        className="rounded-circle"
                        alt="Generic placeholder image"
                        height="31"
                      />
                    </Link>
                    <div className="w-100">
                      <input
                        type="text"
                        id="simpleinput"
                        className="form-control border-0 form-control-sm"
                        placeholder="Add comment"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <Link to="#" className="btn btn-sm btn-link text-danger">
                    <i className="mdi mdi-heart"></i> Like (28)
                  </Link>
                  <Link to="#" className="btn btn-sm btn-link text-muted">
                    <i className="mdi mdi-share-variant"></i> Share
                  </Link>
                </div>
              </div>

              <div className="border border-light p-2 mb-3">
                <div className="d-flex align-items-start">
                  <Image
                    className="me-2 avatar-sm rounded-circle"
                    src={avatar3}
                    alt="Generic placeholder image"
                  />
                  <div className="w-100">
                    <h5 className="m-0">Jeremy Tomlinson</h5>
                    <p className="text-muted">
                      <small>about 2 minuts ago</small>
                    </p>
                  </div>
                </div>
                <p>
                  Story based around the idea of time lapse, animation to post
                  soon!
                </p>

                <Image
                  src={img1}
                  alt="post-img"
                  className="rounded me-1"
                  height="60"
                />
                <Image
                  src={img2}
                  alt="post-img"
                  className="rounded me-1"
                  height="60"
                />
                <Image
                  src={img3}
                  alt="post-img"
                  className="rounded"
                  height="60"
                />

                <div className="mt-2">
                  <Link to="#" className="btn btn-sm btn-link text-muted">
                    <i className="mdi mdi-reply"></i> Reply
                  </Link>
                  <Link to="#" className="btn btn-sm btn-link text-muted">
                    <i className="mdi mdi-heart-outline"></i> Like
                  </Link>
                  <Link to="#" className="btn btn-sm btn-link text-muted">
                    <i className="mdi mdi-share-variant"></i> Share
                  </Link>
                </div>
              </div>

              <div className="border border-light p-2 mb-3">
                <div className="d-flex align-items-start">
                  <Image
                    className="me-2 avatar-sm rounded-circle"
                    src={avatar6}
                    alt="Generic placeholder image"
                  />
                  <div className="w-100">
                    <h5 className="m-0">Jeremy Tomlinson</h5>
                    <p className="text-muted">
                      <small>15 hours ago</small>
                    </p>
                  </div>
                </div>
                <p>
                  The parallax is a little odd but O.o that house build is
                  awesome!!
                </p>

                <iframe
                  src="https://player.vimeo.com/video/87993762"
                  height="300"
                  title="vimeo1"
                  className="img-fluid border-0"
                ></iframe>
              </div>

              <div className="text-center">
                <Link to="#" className="text-danger">
                  <i className="mdi mdi-spin mdi-loading me-1"></i> Load more{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3}>
          <Card>
            <Card.Body>
              <Dropdown className="float-end">
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
                  <Dropdown.Item href="#">Sales Report</Dropdown.Item>
                  <Dropdown.Item href="#">Export Report</Dropdown.Item>
                  <Dropdown.Item href="#">Profit</Dropdown.Item>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <h4 className="card-title mb-3">
                Team Members <i className="mdi mdi-account-multiple ms-1"></i>
              </h4>
              <div className="list-group">
                {(teamMembers || []).map((member, idx) => {
                  return (
                    <Link
                      key={idx}
                      to="#"
                      className="list-group-item list-group-item-action"
                    >
                      <div
                        className="d-flex align-items-center pb-1"
                        id="tooltips-container"
                      >
                        <Image
                          src={member.img}
                          className="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent"
                          alt=""
                        />
                        <div className="w-100 ms-2">
                          <h5 className="mb-1">
                            {member.name}
                            {member.hasIcon && (
                              <i className="mdi mdi-check-decagram text-info ms-1"></i>
                            )}
                          </h5>
                          <p className="mb-0 font-13 text-muted">
                            {member.tech}
                          </p>
                        </div>
                        <i className="mdi mdi-chevron-right h2"></i>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Dropdown className="float-end">
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
                  <Dropdown.Item href="#">Sales Report</Dropdown.Item>
                  <Dropdown.Item href="#">Export Report</Dropdown.Item>
                  <Dropdown.Item href="#">Profit</Dropdown.Item>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <h4 className="card-title mb-3">
                Upcoming Reminders <i className="mdi mdi-adjust ms-1"></i>
              </h4>

              <div className="list-group">
                {(upcomingReminders || []).map((item, idx) => {
                  return (
                    <div key={idx} className="my-1">
                      <div
                        className="d-flex align-items-start"
                        id="tooltips-container"
                      >
                        <div>
                          <i
                            className={`mdi mdi-circle h3 ${item.variant}`}
                          ></i>
                        </div>
                        <div className="w-100 ms-2">
                          <h5 className="mb-1 mt-0">{item.title}</h5>
                          <ul className="list-inline text-muted font-12">
                            <li className="list-inline-item">
                              <i className="mdi mdi-calendar-blank-outline me-1"></i>
                              {item.date}
                            </li>
                            <li className="list-inline-item"> - </li>
                            <li className="list-inline-item">
                              {" "}
                              <i className="mdi mdi-clock-time-eight-outline me-1"></i>
                              {item.from} <span className="px-1">To</span>{" "}
                              {item.to}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Profile;
