import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import rocketAnimation from "@/assets/images/animat-rocket-color.gif";

// images
import logoLight from "../../assets/images/logo-light.png";
import { useEffect } from "react";
// import rocketImg from '/animat-rocket-color.gif'
const Maintenance = () => {
  useEffect(() => {
    if (document.body) document.body.classList.add("authentication-bg-img");
    return () => {
      document.body.classList.remove("authentication-bg-img");
    };
  }, []);
  return (
    <>
      <div className="mt-5 mb-5">
        <Container className="container">
          <Row className="justify-content-center">
            <Col xs={11}>
              <div>
                <div className="d-flex justify-content-center">
                  <Link to="#">
                    <img src={logoLight} alt="" height="22" />
                  </Link>
                </div>

                <div className="text-center my-5">
                  <img src={rocketAnimation} alt="" height="180" />
                  <h2 className="home-text text-uppercase text-primary">
                    Site is Under Maintenance
                  </h2>
                  <p className="text-white">
                    We're making the system more awesome.we'll be back shortly.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="footer footer-alt">
        {new Date().getFullYear()} &copy; Dashforge theme by &nbsp;
        <Link
          to=""
          target="_blank"
          className="link-light text-light text-decoration-underline"
        >
          Dashcrafts
        </Link>
      </footer>
    </>
  );
};
export default Maintenance;
