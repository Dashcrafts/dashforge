import { Button, Col, Row } from "react-bootstrap";
import AuthLayout from "./AuthLayout";
import { FormInput, VerticalForm } from "../../components";
import { Link } from "react-router-dom";
const RecoverPassword = () => {
  return (
    <>
      <AuthLayout
        helpText="Enter your email address and we'll send you an email with instructions to reset your password."
        bottomLinks={
          <Row>
            <Col xs={12} className="text-center">
              <p className="text-muted">
                Back to{" "}
                <Link
                  to="/auth/login"
                  className="text-dark text-decoration-underline ms-1"
                >
                  <b>Log in</b>
                </Link>
              </p>
            </Col>
          </Row>
        }
      >
        <VerticalForm onSubmit={() => {}}>
          <FormInput
            label="Email address"
            type="email"
            name="email"
            placeholder={"Enter your email"}
            containerClass={"mb-3"}
          />

          <div className="text-center d-grid">
            <Button variant="primary" type="submit">
              {" "}
              Reset Password{" "}
            </Button>
          </div>
        </VerticalForm>
      </AuthLayout>
    </>
  );
};
export default RecoverPassword;
