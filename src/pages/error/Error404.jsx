import { Image } from "react-bootstrap";
import AuthLayout from "../auth/AuthLayout";
import { Link } from "react-router-dom";
import errorImg from "../../assets/images/svg/error404.png";
const Error404 = () => {
  return (
    <>
      <AuthLayout hideLogo>
        <div className="error-ghost text-center">
          <Image src={errorImg} />
        </div>

        <div className="text-center">
          <h2 className="text-uppercase text-primary mt-4">Page Not Found</h2>
          <p className="text-muted mt-4 ">
            It's looking like you may have taken a wrong turn. Don't worry... it
            happens to the best of us. You might want to check your internet
            connection. Here's a little tip that might help you get back on
            track.
          </p>

          <Link
            to="/"
            className="btn btn-primary waves-effect waves-light mt-4"
          >
            {" "}
            Return Home
          </Link>
        </div>
      </AuthLayout>
    </>
  );
};
export default Error404;
