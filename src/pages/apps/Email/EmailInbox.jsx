import { Link } from "react-router-dom";
import { emails as mails } from "./data";
import { useState } from "react";
import { Button, ButtonGroup, Card, Col, Dropdown, Row } from "react-bootstrap";
import LeftBar from "./LeftBar";
import { PageBreadcrumb } from "../../../components";
const EmailList = (props) => {
  const emails = props.emails || [];
  return (
    <>
      <ul className="message-list">
        {(emails || []).map((email, idx) => {
          return (
            <li className={`${!email.is_read ? "unread" : ""}`} key={idx}>
              <div className="col-mail col-mail-1">
                <div className="checkbox-wrapper-mail">
                  <input type="checkbox" id={"mail" + email.id} />
                  <label htmlFor={"mail" + email.id} className="toggle"></label>
                </div>
                <span
                  className={`star-toggle far fa-star ${
                    email.is_important ? "text-warning" : ""
                  } `}
                ></span>
                <Link to="" className="title">
                  {" "}
                  {email.from_name}
                  {email.number_of_reply > 1 && (
                    <span> ({email.number_of_reply})</span>
                  )}
                </Link>
              </div>
              <div className="col-mail col-mail-2">
                <Link to="" className="subject">
                  {email.subject} &nbsp;–&nbsp;
                  <span className="teaser">{email.teaser}</span>
                </Link>
                <div className="date">{email.time}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
const EmailInbox = () => {
  const [emails, setEmails] = useState(mails.slice(0, 20));
  const [totalEmails] = useState(mails.length);
  const [pageSize] = useState(20);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(20);
  const [totalPages] = useState(mails.length / 20);
  const [totalUnreadEmails] = useState(
    mails.filter((e) => e.is_read === false).length
  );

  /**
   * Gets the next page
   */
  const getNextPage = () => {
    var nextPage = page + 1;
    if (nextPage > totalEmails / pageSize) {
      nextPage = totalEmails / pageSize;
    }
    var startIdx = nextPage * pageSize - pageSize + 1;
    var endIdx = nextPage * pageSize;
    setPage(nextPage);
    setStartIndex(startIdx);
    setEndIndex(endIdx);
    setEmails(mails.slice(startIdx, endIdx));
  };

  /**
   * Gets the prev page
   */
  const getPrevPage = () => {
    var prevPage = page - 1;
    if (prevPage === 0) prevPage = 1;
    var startIdx = prevPage * pageSize - pageSize + 1;
    var endIdx = prevPage * pageSize;
    setPage(prevPage);
    setStartIndex(startIdx);
    setEndIndex(endIndex);
    setEmails(mails.slice(startIdx, endIdx));
  };

  /**
   * Shows the starred emails only
   */
  const showAllEmails = () => {
    setEmails(mails.slice(0, 20));
  };

  /**
   * Shows the starred emails only
   */
  const showStarredEmails = () => {
    setEmails(mails.filter((e) => e.is_important).slice(0, 20));
  };
  return (
    <>
      <PageBreadcrumb name="Mail Inbox" subName="Email" title="Mail Inbox" />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <div className="inbox-leftbar">
                <Link to="/apps/email/compose" className="btn btn-danger w-100">
                  Compose
                </Link>
                <LeftBar
                  totalUnreadEmails={totalUnreadEmails}
                  showAllEmails={showAllEmails}
                  showStarredEmails={showStarredEmails}
                />
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

                <div className="mt-3">
                  <EmailList emails={emails} />
                </div>

                <Row>
                  <Col xs={7} className="mt-1">
                    Showing {startIndex} - {endIndex} of {totalEmails}
                  </Col>
                  <Col xs={5}>
                    <ButtonGroup className="float-end">
                      {page === 1 ? (
                        <Button variant="light" className="btn-sm" disabled>
                          <i className="mdi mdi-chevron-left"></i>
                        </Button>
                      ) : (
                        <Button
                          variant="info"
                          className="btn-sm"
                          onClick={getPrevPage}
                        >
                          <i className="mdi mdi-chevron-left"></i>
                        </Button>
                      )}

                      {page < totalPages ? (
                        <Button
                          variant="info"
                          className="btn-sm"
                          onClick={getNextPage}
                        >
                          <i className="mdi mdi-chevron-right"></i>
                        </Button>
                      ) : (
                        <Button variant="light" className="btn-sm" disabled>
                          <i className="mdi mdi-chevron-right"></i>
                        </Button>
                      )}
                    </ButtonGroup>
                  </Col>
                </Row>
              </div>
              <div className="clearfix"></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default EmailInbox;
