import { Col, Row } from "react-bootstrap";
import { PageBreadcrumb } from "../../components";
import Statistics from "./Statistics";
import StatisticsChart from "./StatisticsChart";
import ProductLicense from "./ProductLicense";
import ChartStatistics from "./ChartStatistics";
import StatisticCards from "./StatisticCards";
import RecentProduct from "./RecentProduct";
import { latestUpdate, recentProducts } from "./data";
import LatestUpdate from "./LatestUpdate";
import TotalUsersChart from "./TotalUsersChart";
const Dashboard = () => {
  return (
    <>
      <PageBreadcrumb name="Dashboard" title="Dashboard" subName="Dashboard" />
      <Statistics />

      <Row>
        <Col lg={6}>
          <StatisticsChart />
        </Col>
        <Col lg={6}>
          <ProductLicense />
          <ChartStatistics />
        </Col>
      </Row>

      <StatisticCards />

      <Row>
        <Col xl={6}>
          <RecentProduct recentProducts={recentProducts} />
        </Col>

        <Col xl={3} md={6}>
          <LatestUpdate latestUpdate={latestUpdate} />
        </Col>
        <Col xl={3} md={6}>
          <TotalUsersChart />
        </Col>
      </Row>
    </>
  );
};
export default Dashboard;
