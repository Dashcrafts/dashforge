import { Card, Col, ListGroup, Row } from "react-bootstrap";
import ReactQuill from "react-quill-new";
import { PageBreadcrumb } from "../../../components";

// style
import "react-quill-new/dist/quill.snow.css";
import "react-quill-new/dist/quill.bubble.css";
// import "easymde/dist/easymde.min.css";

const FormEditors = () => {
  const delay = 1000;
  const options = {
    autofocus: true,
    autosave: {
      enabled: true,
      uniqueId: "1",
      delay,
    },
  };
  let valueBubble = "";
  let valueSnow = "";
  valueSnow =
    valueBubble = `<h3><span class="ql-size-large">Hello World!</span></h3>
  <p><br/></p>
  <h3>This is an simple editable area.</h3>
  <p><br/></p>
  <ul>
    <li>Select a text to reveal the toolbar.</li>
    <li>Edit rich document on-the-fly, so elastic!</li>
  </ul>
  <p><br/></p>
  <p>End of simple area</p>`;
  const modules = {
    toolbar: [
      [
        {
          font: [],
        },
        {
          size: [],
        },
      ],
      ["bold", "italic", "underline", "strike"],
      [
        {
          color: [],
        },
        {
          background: [],
        },
      ],
      [
        {
          script: "super",
        },
        {
          script: "sub",
        },
      ],
      [
        {
          header: [false, 1, 2, 3, 4, 5, 6],
        },
        "blockquote",
        "code-block",
      ],
      [
        {
          list: "ordered",
        },
        {
          list: "bullet",
        },
        {
          indent: "-1",
        },
        {
          indent: "+1",
        },
      ],
      [
        "direction",
        {
          align: [],
        },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  return (
    <>
      <PageBreadcrumb name="Editors" subName="Forms" title="Editors" />
      <Row>
        <Col xs={12}>
          <Card>
            <ListGroup as="ul" variant="flush">
              <ListGroup.Item as="li">
                <div className="mb-2">
                  <h4 className="header-title mt-2">Quill Editor</h4>
                  <p className="text-muted font-14">
                    Snow is a clean, flat toolbar theme.
                  </p>
                  <ReactQuill
                    modules={modules}
                    defaultValue={valueSnow}
                    theme="snow"
                    style={{
                      height: 300,
                    }}
                    className="pb-4"
                  />
                </div>
              </ListGroup.Item>

              {/* <ListGroup.Item>
                <div className="mb-2">
                  <h5 className="mb-1">Bubble Editor</h5>
                  <p className="text-muted font-14">Bubble is a simple tooltip based theme.</p>
                  <ReactQuill defaultValue={valueBubble} theme="bubble" style={{ height: 300 }} />
                </div>
               </ListGroup.Item> */}
            </ListGroup>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <ListGroup as="ul" variant="flush">
              {/* <ListGroup.Item as="li">
                <div className="mb-2">
                  <h4 className="header-title mt-2">Quill Editor</h4>
                  <p className="text-muted font-14">Snow is a clean, flat toolbar theme.</p>
                  <ReactQuill
                    modules={modules}
                    defaultValue={valueSnow}
                    theme="snow"
                    style={{ height: 300 }}
                    className='pb-4'
                  />
                </div>
               </ListGroup.Item> */}

              <ListGroup.Item>
                <div className="mb-2">
                  <h5 className="mb-1">Bubble Editor</h5>
                  <p className="text-muted font-14">
                    Bubble is a simple tooltip based theme.
                  </p>
                  <ReactQuill
                    defaultValue={valueBubble}
                    theme="bubble"
                    style={{
                      height: 300,
                    }}
                  />
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <h4 className="header-title">SimpleMDE</h4>
              <p className="text-muted font-14">SimpleMDE is a light-weight, simple, embeddable, and beautiful JS markdown editor</p>
              <SimpleMDEReact id="1" options={options} />
            </Card.Body>
          </Card>
        </Col>
       </Row> */}
    </>
  );
};
export default FormEditors;
