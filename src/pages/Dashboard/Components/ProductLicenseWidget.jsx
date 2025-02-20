import { Col, ProgressBar, Row } from "react-bootstrap";
const ProductLicenseWidget = (props) => {
  return (
    <>
      <Row className={`align-items-center ${props.className}`}>
        <Col xl={5}>
          <h5>
            {props.title}{" "}
            <span className=" fw-normal"> - {props.subtitle}</span>{" "}
            <b className="px-2">-</b>{" "}
            <span className="">{props.progress}%</span>
          </h5>
        </Col>
        <Col xl={7}>
          <ProgressBar
            variant={props.variant}
            now={props.progress}
            style={{
              height: 6,
            }}
          />
        </Col>
      </Row>
    </>
  );
};
export default ProductLicenseWidget;
