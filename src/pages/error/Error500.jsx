import { Link } from "react-router-dom";
import AuthLayout from "../auth/AuthLayout";
import globeImg from "../../assets/images/icons/globe.svg";
const Error500 = () => {
  return (
    <>
      <AuthLayout>
        <div className="text-center mt-4">
          <img src={globeImg} alt="globe.svg" height="60" />
          <h1 className="display-3 fw-semibold mt-4">500</h1>
          <p className="text-muted mt-4">
            Why not try refreshing your page? or you can contact{" "}
            <Link to="#" className="text-primary">
              support
            </Link>
          </p>

          <Link
            to="/"
            className="btn btn-primary waves-effect waves-light mt-3"
          >
            Return Home
          </Link>
        </div>
      </AuthLayout>
    </>
  );
};
export default Error500;
