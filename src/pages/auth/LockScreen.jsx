import AuthLayout from "./AuthLayout";
import { FormInput, VerticalForm } from "../../components";
import { Button, Row, Col } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

// assets
import user1 from "../../assets/images/users/user-1.jpg";
/**
 * bottom links
 */
const BottomLink = () => {
  return (
    <Row className="mt-3">
      <Col xs={12} className="text-center">
        <p className="text-muted">
          Not you? return
          <Link
            to="/auth/login"
            className="text-dark text-decoration-underline ms-1"
          >
            <b>Sign In</b>
          </Link>
        </p>
      </Col>
    </Row>
  );
};

/*
 * form validation schema
 */
const schemaResolver = yupResolver(
  yup.object().shape({
    password: yup.string().required("Please enter Password"),
  })
);
const LockScreen = () => {
  /*
   * handle form submission
   */
  const onSubmit = (formData) => {
    console.log(formData.password);
  };
  return (
    <>
      <AuthLayout
        helpText="Enter your password to access the admin."
        bottomLinks={<BottomLink />}
        userImage={user1}
      >
        <VerticalForm onSubmit={onSubmit} resolver={schemaResolver}>
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            containerClass="mb-3"
          />

          <div className="text-center d-grid">
            <Button variant="primary" type="submit">
              {" "}
              Log In{" "}
            </Button>
          </div>
        </VerticalForm>
      </AuthLayout>
    </>
  );
};
export default LockScreen;
