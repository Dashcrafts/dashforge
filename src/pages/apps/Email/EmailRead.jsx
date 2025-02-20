import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Dropdown,
  Image,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import LeftBar from "./LeftBar";
import { useState } from "react";

// dummy data
import { emails } from "./data";
import avatarImg from "../../../assets/images/users/user-2.jpg";
import { PageBreadcrumb } from "../../../components";
const EmailRead = () => {
  const [totalUnreadEmails] = useState(
    emails.filter((e) => e.is_read === false).length
  );
  const [email] = useState({
    avatar: avatarImg,
    subject: "Your elite author Graphic Optimization reward is ready!",
    from_name: "Steven Smith",
    from_email: "jonathan@domain.com",
    recieved_on: "Jul 24, 2019, 5:17 AM",
    attachments: [
      {
        id: 1,
        name: "Dashforge-admin-design.zip",
        size: "2.3MB",
        ext: ".zip",
      },
      {
        id: 2,
        name: "Dashboard-design.jpg",
        size: "3.25 MB",
        ext: ".jpg",
      },
      {
        id: 3,
        name: "Admin-bug-report.mp4",
        size: "7.05 MB",
        ext: ".mp4",
      },
    ],
  });
  return (
    <>
      <PageBreadcrumb name="Read-email" subName="Email" title="Read-email" />
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div className="inbox-leftbar">
                <Link
                  to="/apps/email/compose"
                  className="btn btn-danger w-100 waves-effect waves-light"
                >
                  Compose
                </Link>
                <LeftBar totalUnreadEmails={totalUnreadEmails} />
              </div>
              <div className="inbox-rightbar">
                <div className="d-flex flex-wrap gap-1">
                  <ButtonGroup>
                    <Button variant="light" size="sm">
                      <i className="mdi mdi-archive font-18"></i>
                    </Button>
                    <Button variant="light" size="sm">
                      <i className="mdi mdi-alert-octagon font-18"></i>
                    </Button>
                    <Button variant="light" size="sm">
                      <i className="mdi mdi-delete-variant font-18"></i>
                    </Button>
                  </ButtonGroup>
                  <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle
                      type="button"
                      className="btn btn-sm btn-light"
                    >
                      <i className="mdi mdi-folder font-18"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header as="span">Move to</Dropdown.Header>
                      <Dropdown.Item href="#">Social</Dropdown.Item>
                      <Dropdown.Item href="#">Promotions</Dropdown.Item>
                      <Dropdown.Item href="#">Updates</Dropdown.Item>
                      <Dropdown.Item href="#">Forums</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle
                      type="button"
                      className="btn btn-sm btn-light"
                    >
                      <i className="mdi mdi-label font-18"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header as="span">Label as:</Dropdown.Header>
                      <Dropdown.Item href="#">Updates</Dropdown.Item>
                      <Dropdown.Item href="#">Social</Dropdown.Item>
                      <Dropdown.Item href="#">Promotions</Dropdown.Item>
                      <Dropdown.Item href="#">Forums</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle
                      type="button"
                      className="btn btn-sm btn-light"
                    >
                      <i className="mdi mdi-dots-horizontal font-18"></i> More
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header as="span">More Option :</Dropdown.Header>
                      <Dropdown.Item href="#">Mark as Unread</Dropdown.Item>
                      <Dropdown.Item href="#">Add to Tasks</Dropdown.Item>
                      <Dropdown.Item href="#">Add Star</Dropdown.Item>
                      <Dropdown.Item href="#">Mute</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="mt-4">
                  <h5 className="font-18">
                    Your elite author Graphic Optimization reward is ready!
                  </h5>

                  <hr />

                  <div className="d-flex align-items-start mb-3 mt-1">
                    <Image
                      className="d-flex me-2 rounded-circle"
                      src={email.avatar}
                      alt={email.from_name}
                      height="32"
                    />
                    <div className="w-100">
                      <small className="float-end">{email.recieved_on}</small>
                      <h6 className="m-0 font-14">{email.from_name}</h6>
                      <small className="text-muted">
                        From: {email.from_email}
                      </small>
                    </div>
                  </div>

                  <p>Hi Dashcrafts!</p>
                  <p>
                    Clicking ‘Order Service’ on the right-hand side of the above
                    page will present you with an order page. This service has
                    the following Briefing Guidelines that will need to be
                    filled before placing your order:
                  </p>
                  <ol>
                    <li>
                      Your design preferences (Color, style, shapes, Fonts,
                      others){" "}
                    </li>
                    <li>Tell me, why is your item different? </li>
                    <li>
                      Do you want to bring up a specific feature of your item?
                      If yes, please tell me{" "}
                    </li>
                    <li>
                      Do you have any preference or specific thing you would
                      like to change or improve on your item page?{" "}
                    </li>
                    <li>
                      Do you want to include your item's or your provider's logo
                      on the page? if yes, please send it to me in vector format
                      (Ai or EPS){" "}
                    </li>
                    <li>Please provide me with the copy or text to display</li>
                  </ol>

                  <p>
                    Filling in this form with the above information will ensure
                    that they will be able to start work quickly.
                  </p>
                  <p>
                    You can complete your order by putting your coupon code into
                    the Promotional code box and clicking ‘Apply Coupon’.
                  </p>
                  <p>
                    <b>Best,</b> <br /> Graphic Studio
                  </p>
                  <hr />

                  <h5 className="mb-3">Attachments</h5>

                  <Row>
                    {(email.attachments || []).map((file, idx) => {
                      return (
                        <Col xl={4} key={idx}>
                          <Card className="mb-1 shadow-none border">
                            <div className="p-2">
                              <Row className="align-items-center">
                                <div className="col-auto">
                                  <div className="avatar-sm">
                                    <span className="avatar-title bg-soft-primary text-primary rounded">
                                      {file.ext}
                                    </span>
                                  </div>
                                </div>
                                <Col className="ps-0">
                                  <Link to="#" className="text-muted fw-bold">
                                    {file.name}
                                  </Link>
                                  <p className="mb-0">{file.size}</p>
                                </Col>
                                <div className="col-auto">
                                  <Link
                                    to="#"
                                    className="btn btn-link btn-lg text-muted"
                                  >
                                    <i className="dripicons-download"></i>
                                  </Link>
                                </div>
                              </Row>
                            </div>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                  <div className="mt-5">
                    <Link to="#" className="btn btn-secondary me-2">
                      <i className="mdi mdi-reply me-1"></i> Reply
                    </Link>
                    <Link to="#" className="btn btn-light">
                      Forward <i className="mdi mdi-forward ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default EmailRead;
