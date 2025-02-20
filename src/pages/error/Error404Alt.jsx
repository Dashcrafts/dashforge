import { Col, Image, Row } from "react-bootstrap";
import errorImg from "../../assets/images/svg/error404.png";
import { PageBreadcrumb } from "@/components";
const Error404Alt = () => {
  return (
    <>
      <PageBreadcrumb name="Starter" subName="Apps" title="Starter" />
      <Row className="justify-content-center">
        <Col lg={6} xl={4} className="mb-4">
          <div className="my-5 pt-5">
            <div className="error-ghost text-center">
              <Image src={errorImg} />
            </div>
            <div className="text-center">
              <h2 className="text-uppercase text-primary mt-4">
                Page Not Found
              </h2>
              <p className="text-muted mt-4 ">
                It's looking like you may have taken a wrong turn. Don't
                worry... it happens to the best of us. You might want to check
                your internet connection. Here's a little tip that might help
                you get back on track.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Error404Alt;
