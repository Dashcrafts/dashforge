import { Col, Row } from "react-bootstrap";

// components
import { StatisticsWidget } from "./Components";
const Statistics = () => {
  return (
    <Row>
      <Col md={6} xl={3}>
        <StatisticsWidget
          variant="bg-purple"
          counterOptions={{
            prefix: "$",
          }}
          description="Statistics"
          stats={92847}
          icon="fe-bar-chart-line-"
        />
      </Col>
      <Col md={6} xl={3}>
        <StatisticsWidget
          variant="bg-info"
          counterOptions={{
            suffix: "k",
            decimals: 0,
          }}
          description="Users Today"
          stats={56}
          icon="fe-users"
        />
      </Col>
      <Col md={6} xl={3}>
        <StatisticsWidget
          variant="bg-pink"
          description="Request Per Minute"
          stats={2568}
          icon="fe-shuffle"
        />
      </Col>
      <Col md={6} xl={3}>
        <StatisticsWidget
          variant="bg-success"
          description="New Downloads"
          stats={523}
          icon="fe-download"
        />
      </Col>
    </Row>
  );
};
export default Statistics;
