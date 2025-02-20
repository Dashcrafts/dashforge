import { Card, Col, Row, Breadcrumb as BSBreadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "../../components";
const Breadcrumb = () => {
  return (
    <>
      <PageBreadcrumb title="Breadcrumb" name="Breadcrumb" subName="Base UI" />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Example</h4>
              <p className="text-muted font-14">
                Indicate the current page’s location within a navigational
                hierarchy that automatically adds separators via CSS. Please
                read the official{" "}
                <Link
                  target="_blank"
                  to="https://react-bootstrap.github.io/docs/components/breadcrumb/"
                >
                  Bootstrap
                </Link>{" "}
                documentation for more options.
              </p>

              <div>
                <nav aria-label="breadcrumb">
                  <BSBreadcrumb className="mb-0">
                    <BSBreadcrumb.Item active>Home</BSBreadcrumb.Item>
                  </BSBreadcrumb>
                </nav>

                <nav aria-label="breadcrumb">
                  <BSBreadcrumb className="breadcrumb mb-0">
                    <BSBreadcrumb.Item href="#">Home</BSBreadcrumb.Item>
                    <BSBreadcrumb.Item active>Library</BSBreadcrumb.Item>
                  </BSBreadcrumb>
                </nav>

                <nav aria-label="breadcrumb">
                  <BSBreadcrumb className="mb-0">
                    <BSBreadcrumb.Item href="#">Home</BSBreadcrumb.Item>
                    <BSBreadcrumb.Item href="#">Library</BSBreadcrumb.Item>
                    <BSBreadcrumb.Item active>Data</BSBreadcrumb.Item>
                  </BSBreadcrumb>
                </nav>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">With Icons</h4>
              <p className="text-muted font-14">
                Optionally you can also specify the icon with your breadcrumb
                item.
              </p>

              <div>
                <nav aria-label="breadcrumb">
                  <BSBreadcrumb className="bg-soft-light p-2">
                    <BSBreadcrumb.Item active>
                      <i className="uil-home-alt"></i> Home
                    </BSBreadcrumb.Item>
                  </BSBreadcrumb>
                </nav>

                <nav aria-label="breadcrumb">
                  <BSBreadcrumb className="bg-soft-light p-2">
                    <BSBreadcrumb.Item href="#">
                      <i className="uil-home-alt"></i> Home
                    </BSBreadcrumb.Item>
                    <BSBreadcrumb.Item active>Library</BSBreadcrumb.Item>
                  </BSBreadcrumb>
                </nav>

                <nav aria-label="breadcrumb">
                  <BSBreadcrumb className="bg-soft-light p-2 mb-0">
                    <BSBreadcrumb.Item href="#">
                      <i className="uil-home-alt"></i> Home
                    </BSBreadcrumb.Item>
                    <BSBreadcrumb.Item href="#">Library</BSBreadcrumb.Item>
                    <BSBreadcrumb.Item active>Data</BSBreadcrumb.Item>
                  </BSBreadcrumb>
                </nav>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Breadcrumb;
