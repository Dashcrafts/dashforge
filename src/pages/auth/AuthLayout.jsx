import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";

// images
import logoLight from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";

//component

const AuthLayout = ({
  userImage,
  authTitle,
  helpText,
  bottomLinks,
  isCombineForm,
  children,
  hasForm,
  hasThirdPartyLogin,
  hideLogo,
}) => {
  useEffect(() => {
    if (document.body) {
      document.body.classList.add("loading", "authentication-bg");
    }
    return () => {
      if (document.body) {
        document.body.classList.remove("loading", "authentication-bg");
      }
    };
  }, []);
  return (
    <>
      <div className="account-pages mt-5 mb-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="shadow-none">
                <Card.Body className="p-3">
                  {!hideLogo && (
                    <div className="text-center w-75 m-auto">
                      <div className="auth-logo">
                        <Link to="/" className="logo bg-transparent logo-dark text-center">
                          <span className="logo-lg">
                            <img src={logoDark} alt="" height="22" />
                          </span>
                        </Link>
                        <Link to="/" className="logo logo-light bg-transparent text-center">
                           <span className="logo-lg">
                            <img src={logoLight} alt="" height="22" />
                          </span>
                        </Link>
                      </div>
                      {!userImage && (
                        <p className="text-muted mb-4">{helpText}</p>
                      )}
                    </div>
                  )}

                  {userImage && (
                    <div className="text-center w-75 m-auto">
                      <img
                        src={userImage}
                        alt="user-avatar"
                        className={userImage ? "rounded-circle" : ""}
                      />
                      <h4 className="text-dark-50 text-center mt-3">
                        Hi ! Dashforge{" "}
                      </h4>
                      <p className="text-muted mb-4">{helpText}</p>
                    </div>
                  )}

                  {children}

                  {hasThirdPartyLogin && (
                    <div className="text-center">
                      <h5 className="mt-3 text-muted">Sign in with</h5>
                      <ul className="social-list list-inline mt-3 mb-0">
                        <li className="list-inline-item">
                          <Link
                            to="/"
                            className="social-list-item border-primary text-primary"
                          >
                            <i className="mdi mdi-facebook"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to="/"
                            className="social-list-item border-danger text-danger"
                          >
                            <i className="mdi mdi-google"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to="/"
                            className="social-list-item border-info text-info"
                          >
                            <i className="mdi mdi-twitter"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to="/"
                            className="social-list-item border-secondary text-secondary"
                          >
                            <i className="mdi mdi-github"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </Card.Body>
              </Card>

              {bottomLinks}
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="footer footer-alt">
        {new Date().getFullYear()} &copy; Dashforge theme by&nbsp;{" "}
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="text-dark text-decoration-underline"
        >
          Dashcrafts
        </a>
      </footer>
    </>
  );
};
export default AuthLayout;
