import { Card, Col, Row } from "react-bootstrap";
import useFileUploader from "./useFileUploader";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
const FileUploader = ({
  showPreview = true,
  onFileUpload,
  icon,
  extraText,
  text,
}) => {
  const { selectedFiles, handleAcceptedFiles, removeFile } =
    useFileUploader(showPreview);
  return (
    <>
      <Dropzone
        onDrop={(acceptedFiles) =>
          handleAcceptedFiles(acceptedFiles, onFileUpload)
        }
      >
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone mb-3">
            <div className="dz-message needsclick" {...getRootProps()}>
              <input {...getInputProps()} />
              <i className={`text-muted h1 ${icon}`} />
              <h3>{text}</h3>
              <span className="text-muted font-13">{extraText}</span>
            </div>
          </div>
        )}
      </Dropzone>

      {showPreview && selectedFiles.length > 0 && (
        <div className="dropzone-previews mt-3">
          {(selectedFiles || []).map((file, idx) => {
            return (
              <Card
                className="mt-1 mb-0 shadow-none border"
                key={idx + "-file"}
              >
                <div className="p-2">
                  <Row className="align-items-center">
                    {file.preview && (
                      <Col className="col-auto">
                        <img
                          data-dz-thumbnail=""
                          className="avatar-sm rounded bg-light"
                          alt={file.name}
                          src={file.preview}
                        />
                      </Col>
                    )}
                    {!file.preview && (
                      <Col className="col-auto">
                        <div className="avatar-sm">
                          <span className="avatar-title bg-primary rounded">
                            {file.type.split("/")[0]}
                          </span>
                        </div>
                      </Col>
                    )}
                    <Col className="ps-0">
                      <Link to="#" className="text-muted fw-bold">
                        {file.name}
                      </Link>
                      <p className="mb-0">
                        <strong>{file.formattedSize}</strong>
                      </p>
                    </Col>
                    <Col className="text-end">
                      <Link
                        to="#"
                        className="btn btn-link btn-lg text-muted shadow-none"
                      >
                        <i
                          className="ri-close-line"
                          onClick={() => removeFile(file)}
                        />
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};
export default FileUploader;
