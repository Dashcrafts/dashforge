import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
const StatisticCardWidget = (props) => {
  return (
    <>
      <Card>
        <Card.Body>
          <div className="d-flex align-items-center">
            <div className="w-100">
              <h5 className=" mt-0">{props.titie}</h5>
              <h2 className="mb-0">
                <CountUp
                  duration={1}
                  end={props.stats}
                  {...props.counterOptions}
                />
              </h2>
            </div>
            <i className={`${props.icon} text-light display-3 float-end`}></i>
          </div>
          <p className=" mt-3 mb-3">{props.description}</p>
          <div>
            <Link to="#" className="text-primary float-end">
              <i className="mdi mdi-arrow-right font-20"></i>
            </Link>
            <span
              className={`${props.bgColor} ${props.variant} fw-medium rounded px-2 font-12 py-1`}
            >
              Excellent
            </span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default StatisticCardWidget;
