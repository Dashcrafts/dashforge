import { Helmet } from "react-helmet";
import { Breadcrumb, Col, Row } from "react-bootstrap";
const PageBreadcrumb = ({ title, name, subName }) => {
  return (
    <>
      <Helmet>
        <title>
          {title} | DashForge - Responsive Bootstrap 5 Admin Dashboard
        </title>
      </Helmet>
      {name && (
        <Row>
          <Col xs={12}>
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <Breadcrumb.Item as="span">Dashforge</Breadcrumb.Item>
                  <Breadcrumb.Item>{subName}</Breadcrumb.Item>
                  <Breadcrumb.Item active>{name}</Breadcrumb.Item>
                </ol>
              </div>
              <h4 className="page-title">{name}</h4>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};
export default PageBreadcrumb;
