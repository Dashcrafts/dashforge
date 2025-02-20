import { Card, Col, Row } from "react-bootstrap";
import { PageBreadcrumb } from "../../../components";
import {
  polarChartData,
  barChartData,
  donutChartData,
  lineChartData,
  pieChartData,
  radarChartData,
} from "./data";
import { Bar, Doughnut, Line, Pie, PolarArea, Radar } from "react-chartjs-2";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Filler,
  Tooltip,
  Legend
);
const ChartjsCharts = () => {
  // chart options
  const pieChartOpts = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const lineChartOpts = {
    bezierCurve: false,
    maintainAspectRatio: false,
    hover: {
      intersect: true,
    },
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        intersect: false,
      },
    },
    zeroLineColor: () => "rgba(150, 150, 150, 0.9)",
    scales: {
      x: {
        display: true,
        grid: {
          color: () => "rgba(150, 150, 150, 0.1)",
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          stepSize: 20,
        },
        display: true,
        borderDash: [5, 5],
        grid: {
          color: () => "rgba(0,0,0,0)",
          drawBorder: false,
          fontColor: "#fff",
        },
      },
    },
  };
  const barChartOpts = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          display: false,
          drawBorder: false,
        },
        stacked: false,
        ticks: {
          stepSize: 20,
        },
      },
      x: {
        stacked: false,
        grid: {
          drawBorder: false,
          color: () => "rgba(0,0,0,0.01)",
        },
      },
    },
  };
  const donutChartOpts = {
    maintainAspectRatio: false,
    cutoutPercentage: 60,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const polarChartOpts = {
    maintainAspectRatio: false,
    scales: {
      r: {
        ticks: {
          backdropColor: "transparent",
        },
        angleLines: {
          color: "rgba(150, 150, 150, 0.1)", // lines radiating from the center
        },
        grid: {
          color: "rgba(150, 150, 150, 0.1)",
        },
      },
    },
  };
  const radarChartOpts = {
    maintainAspectRatio: false,
    scales: {
      r: {
        ticks: {
          backdropColor: "transparent",
        },
        grid: {
          color: "rgba(150, 150, 150, 0.1)",
        },
        angleLines: {
          color: "rgba(150, 150, 150, 0.1)",
        },
      },
    },
  };
  return (
    <>
      <PageBreadcrumb title="Chartjs" name="Chartjs" subName="Charts" />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Line Chart</h4>
              <div
                className="mt-4 chartjs-chart"
                style={{
                  height: "350px",
                }}
              >
                <Line data={lineChartData} options={lineChartOpts} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Bar Chart</h4>

              <div
                className="mt-4 chartjs-chart"
                style={{
                  height: "350px",
                }}
              >
                <Bar data={barChartData} options={barChartOpts} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Pie Chart</h4>

              <div
                className="mt-4 chartjs-chart"
                style={{
                  height: "350px",
                }}
              >
                <Pie data={pieChartData} options={pieChartOpts} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Donut Chart</h4>

              <div
                className="mt-4 chartjs-chart"
                style={{
                  height: "350px",
                }}
              >
                <Doughnut data={donutChartData} options={donutChartOpts} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Polar area Chart</h4>
              <div
                className="mt-4 chartjs-chart"
                style={{
                  height: "350px",
                }}
              >
                <PolarArea data={polarChartData} options={polarChartOpts} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Radar Chart</h4>

              <div
                className="mt-4 chartjs-chart"
                style={{
                  height: "350px",
                }}
              >
                <Radar data={radarChartData} options={radarChartOpts} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default ChartjsCharts;
