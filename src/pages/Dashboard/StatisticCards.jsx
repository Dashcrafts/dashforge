import { Col, Row } from "react-bootstrap";
import { StatisticCardWidget } from "./Components";
const StatisticCards = () => {
  return (
    <>
      <Row>
        <Col lg={4}>
          <StatisticCardWidget
            titie="Active Users"
            stats={24600}
            description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut ratione voluptate msequi nesciunt."
            icon="mdi mdi-account"
            variant="text-primary"
            bgColor="bg-soft-primary"
          />
        </Col>
        <Col lg={4}>
          <StatisticCardWidget
            titie="Business Profile"
            stats={40340}
            description="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
            icon="mdi mdi-office-building"
            variant="text-warning"
            bgColor="bg-soft-warning"
            counterOptions={{
              prefix: "$",
            }}
          />
        </Col>
        <Col lg={4}>
          <StatisticCardWidget
            titie="Market Price"
            stats={1180}
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."
            icon="mdi mdi-database-marker"
            variant="text-pink"
            bgColor="bg-soft-pink"
            counterOptions={{
              prefix: "$",
            }}
          />
        </Col>
      </Row>
    </>
  );
};
export default StatisticCards;
