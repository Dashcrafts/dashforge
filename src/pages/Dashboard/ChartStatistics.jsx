import { Card, Col, Row } from "react-bootstrap";
import { ChartStatisticsWidget } from "./Components";
import ReactApexChart from "react-apexcharts";
const apexSparklineChartOpts = {
  series: [
    {
      data: [10, 20, 15, 40, 20, 50, 70, 60, 90, 70, 110],
    },
  ],
  chart: {
    type: "bar",
    height: 110,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
  colors: ["#348cd4"],
};
const apexSparklineChar2tOpts = {
  series: [
    {
      name: "Series A",
      data: [10, 90, 30, 60, 50, 90, 25, 55, 30, 40],
    },
  ],
  chart: {
    height: 110,
    type: "area",
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [50, 100, 100, 100],
    },
  },
  colors: ["#348cd4", "transparent"],
};
const ChartStatistics = () => {
  return (
    <>
      <Row>
        <Col xl={6} lg={12} md={6}>
          <Card>
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={5}>
                  <ReactApexChart
                    options={apexSparklineChartOpts}
                    series={apexSparklineChartOpts.series}
                    type="bar"
                    height={110}
                    className="apex-charts"
                  />
                </Col>
                <ChartStatisticsWidget
                  title="Total Products Sales"
                  counterOptions={{
                    suffix: "K",
                    decimals: 1,
                  }}
                  count="20.7%"
                  stats={64.5}
                  variant="text-success"
                  icon="mdi mdi-trending-up"
                />
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={6}>
          <Card>
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={5}>
                  <ReactApexChart
                    options={apexSparklineChar2tOpts}
                    series={apexSparklineChar2tOpts.series}
                    type="area"
                    height={110}
                    className="apex-charts"
                  />
                </Col>
                <ChartStatisticsWidget
                  title="Active Users"
                  counterOptions={{
                    suffix: "K",
                    decimals: 2,
                  }}
                  count="20.7%"
                  stats={50.24}
                  variant="text-success"
                  icon="mdi mdi-trending-up"
                />
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default ChartStatistics;
