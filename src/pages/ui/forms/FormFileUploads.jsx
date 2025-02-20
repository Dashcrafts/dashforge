import { Card, Col, Row } from "react-bootstrap";
import { PageBreadcrumb, FileUploader } from "../../../components";
const FormFileUploads = () => {
  return (
    <>
      <PageBreadcrumb
        name="File Uploads"
        subName="Forms"
        title="File Uploads"
      />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Dropzone File Upload</h4>
              <p className="text-muted font-14">
                DropzoneJS is an open source library that provides drag’n’drop
                file uploads with image previews.
              </p>
              <FileUploader
                icon="ri-upload-cloud-2-line"
                extraText="(This is just a demo dropzone. Selected files are not actually uploaded.)"
                text="Drop files here or click to upload."
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default FormFileUploads;
