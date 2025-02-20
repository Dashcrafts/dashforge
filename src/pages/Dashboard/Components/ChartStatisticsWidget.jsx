import { Col } from "react-bootstrap";
import CountUp from "react-countup";
const ChartStatisticsWidget = (props) => {
  return (
    <>
      <Col xs={6} className="offset-1">
        <div className="text-end">
          <p className="font-14 mb-1">{props.title}</p>
          <h2 className="fw-bold mb-1">
            <CountUp duration={1} end={props.stats} {...props.counterOptions} />
          </h2>
          <h5 className={`mb-0 ${props.variant}`}>
            <i className={`${props.icon} font-18 me-1`}></i>
            {props.count}
          </h5>
        </div>
      </Col>
    </>
  );
};
export default ChartStatisticsWidget;
