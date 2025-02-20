import AuthLayout from "./AuthLayout";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormInput, VerticalForm } from "../../components";
const BottomLink = () => {
  return (
    <>
      <Row className="mt-3">
        <Col xs={12} className="text-center">
          <p className="text-muted">
            Already have account?{" "}
            <Link
              to="/auth/login"
              className="text-dark text-decoration-underline ms-1"
            >
              <b>Sign In</b>
            </Link>
          </p>
        </Col>
      </Row>
    </>
  );
};
const Register = () => {
  return (
    <>
      <AuthLayout
        helpText="Don't have an account? Create your account, it takes less than a minute"
        bottomLinks={<BottomLink />}
      >
        <VerticalForm onSubmit={() => {}}>
          <FormInput
            label="Full Name"
            type="text"
            name="username"
            placeholder="Enter your name"
            containerClass="mb-3"
            required
          />
          <FormInput
            label="Email address"
            type="text"
            name="Email"
            placeholder="Enter your email"
            containerClass="mb-3"
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            containerClass="mb-3"
          />
          <FormInput
            isTerms={true}
            type="checkbox"
            name="checkbox"
            containerClass={"mb-3"}
          />

          <div className="text-center d-grid">
            <Button variant="success" type="submit">
              {" "}
              Sign Up{" "}
            </Button>
          </div>
          <div className="text-center">
            <h5 className="mt-3 text-muted">Sign up using</h5>
            <ul className="social-list list-inline mt-3 mb-0">
              <li className="list-inline-item">
                <Link
                  to="#"
                  className="social-list-item border-primary text-primary"
                >
                  <i className="mdi mdi-facebook"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="#"
                  className="social-list-item border-danger text-danger"
                >
                  <i className="mdi mdi-google"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" className="social-list-item border-info text-info">
                  <i className="mdi mdi-twitter"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="#"
                  className="social-list-item border-secondary text-secondary"
                >
                  <i className="mdi mdi-github"></i>
                </Link>
              </li>
            </ul>
          </div>
        </VerticalForm>
      </AuthLayout>
    </>
  );
};
export default Register;
