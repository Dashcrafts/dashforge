import { useState } from "react";

// form validation
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AuthLayout from "./AuthLayout";

// components
import useLogin from "@/hooks/useLogin";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { PageBreadcrumb } from "../../components";
import { Controller } from "react-hook-form";
import Feedback from "react-bootstrap/esm/Feedback";

/* bottom links */
const BottomLink = () => {
  return (
    <Row className="mt-3">
      <div className="col-12 text-center">
        <p>
          {" "}
          <Link to="/auth/recover-password" className="text-muted ms-1">
            Forgot your password?
          </Link>
        </p>
        <p className="text-muted">
          Don&apos;t have an account?{" "}
          <Link
            to="/auth/register"
            className="text-dark text-decoration-underline ms-1"
          >
            <b>Sign Up</b>
          </Link>
        </p>
      </div>
    </Row>
  );
};
const Login = () => {
  const { login, control } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <PageBreadcrumb title="Login" />

      <AuthLayout
        helpText="Enter your email address and password to access admin panel."
        bottomLinks={<BottomLink />}
        hasThirdPartyLogin
      >
        <form onSubmit={login}>
          <div className="mb-3">
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <FormGroup>
                  <FormLabel htmlFor="email">{"Email"}</FormLabel>
                  <FormControl
                    id="email"
                    {...field}
                    isInvalid={Boolean(fieldState.error?.message)}
                  />
                  {fieldState.error?.message && (
                    <Feedback type="invalid" className="text-danger">
                      {fieldState.error?.message}
                    </Feedback>
                  )}
                </FormGroup>
              )}
            />
          </div>

          <div className="mb-3">
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <FormGroup>
                  <FormLabel htmlFor="password">{"Password"}</FormLabel>

                  <div className="position-relative">
                    <FormControl
                      id="password"
                      type={showPassword ? "text" : "password"}
                      {...field}
                      isInvalid={Boolean(fieldState.error?.message)}
                    />
                    {fieldState.error?.message && (
                      <Feedback type="invalid" className="text-danger">
                        {fieldState.error?.message}
                      </Feedback>
                    )}
                    <span
                      className="d-flex position-absolute top-50 end-0 translate-middle-y p-0 pe-2 me-2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {!fieldState.error &&
                        (showPassword ? (
                          <FiEye
                            height={18}
                            width={18}
                            className="cursor-pointer"
                          />
                        ) : (
                          <FiEyeOff
                            height={18}
                            width={18}
                            className="cursor-pointer"
                          />
                        ))}
                    </span>
                  </div>
                </FormGroup>
              )}
            />
          </div>

          <div className="text-center d-grid">
            <Button variant="primary" type="submit">
              {"Log In"}
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  );
};
export default Login;
