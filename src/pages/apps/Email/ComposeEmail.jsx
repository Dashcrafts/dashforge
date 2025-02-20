import { useState } from "react";
import { Button, ButtonGroup, Card, Col, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LeftBar from "./LeftBar";
// components
import { FormInput, VerticalForm, PageBreadcrumb } from "../../../components";
import ReactQuill from "react-quill-new";

// style
import "react-quill-new/dist/quill.snow.css";
const ComposeEmail = () => {
  const [editorState, setEditorState] = useState();
  const [editorValue, setEditorValue] = useState(`
  <h3><span className="ql-size-large">Hello World!</span></h3>
  <p><br /></p>
  <h3>This is an simple editable area.</h3>
  <p><br /></p>
  <ul>
    <li>
      Select a text to reveal the toolbar.
    </li>
    <li>
      Edit rich document on-the-fly, so elastic!
    </li>
  </ul>
  <p><br /></p>
  <p>
    End of simple area
  </p>`);
  const schemaResolver = yupResolver(
    yup.object().shape({
      to: yup.string().required("Please specify to email"),
      subject: yup.string().required("Please specify subject"),
    })
  );

  /**
   * Handles the save
   * @param {*} event
   * @param {*} values
   */

  /**
   * On editor body change
   */
  const onEditorStateChange = (event) => {
    setEditorValue(event);
  };
  return (
    <>
      <PageBreadcrumb
        name="Compose Email"
        subName="Email"
        title="Compose Email"
      />
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div className="inbox-leftbar">
                <Link
                  to="/apps/email/inbox"
                  className="btn btn-danger w-100 waves-effect waves-light"
                >
                  Inbox
                </Link>
                <LeftBar />
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
                  <VerticalForm onSubmit={""} resolver={schemaResolver}>
                    <FormInput
                      type="email"
                      name="to"
                      placeholder="To"
                      containerClass={"mb-3"}
                    />
                    <FormInput
                      type="text"
                      name="subject"
                      placeholder="subject"
                      containerClass={"mb-3"}
                    />
                    <ReactQuill
                      theme="snow"
                      defaultValue={editorValue}
                      onChange={(e) => onEditorStateChange(e)}
                      className="mb-3 card border-0"
                      style={{
                        height: 280,
                      }}
                      modules={{
                        toolbar: {
                          container: [
                            ["bold", "italic", "underline", "strike"],
                            [
                              {
                                color: [],
                              },
                            ],
                            ["blockquote", "code-block"],
                            [
                              {
                                list: "ordered",
                              },
                              {
                                list: "bullet",
                              },
                            ],
                            ["link", "image", "video"],
                          ],
                        },
                      }}
                    />

                    <div>
                      <div className="justify-content-end d-flex flex-wrap gap-1">
                        <Button variant="success">
                          <i className="mdi mdi-content-save-outline"></i>
                        </Button>
                        <Button variant="success">
                          <i className="mdi mdi-delete"></i>
                        </Button>
                        <Button variant="primary">
                          {" "}
                          <span>Send</span>{" "}
                          <i className="mdi mdi-send ms-2"></i>{" "}
                        </Button>
                      </div>
                    </div>
                  </VerticalForm>
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
export default ComposeEmail;
