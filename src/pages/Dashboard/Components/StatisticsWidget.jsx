import { Card, Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
const StatisticsWidget = (props) => {
  return (
    <>
      <Card className={`widget-rounded-circle shadow-none ${props.variant}`}>
        <Card.Body>
          <Row>
            <Col xs={6}>
              <div className="avatar-lg rounded-circle bg-soft-light">
                <i
                  className={`${props.icon} font-28 avatar-title text-white`}
                ></i>
              </div>
            </Col>
            <Col xs={6}>
              <div className="text-end">
                <h2 className="text-white mt-2">
                  <span>
                    <CountUp
                      duration={1}
                      end={props.stats}
                      {...props.counterOptions}
                    />
                  </span>
                </h2>
                <p className="text-white mb-0 text-truncate">
                  {props.description}
                </p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default StatisticsWidget;
