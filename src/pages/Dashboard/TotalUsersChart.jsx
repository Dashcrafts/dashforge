import ReactApexChart from "react-apexcharts";
import { Card, Col, Dropdown, ProgressBar, Row } from "react-bootstrap";
const apexRadialBarOpts = {
  series: [55, 75],
  chart: {
    type: "radialBar",
    width: 205,
    height: 205,
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "50%",
      },
      track: {
        margin: 8,
        strokeWidth: "40%",
      },
      dataLabels: {
        show: false,
      },
    },
  },
  colors: ["#45bbe0", "#f06292"],
};
const TotalUsersChart = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Dropdown className="float-end">
            <Dropdown.Toggle
              as="a"
              href="#"
              className="arrow-none card-drop"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="mdi mdi-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item href="#">Sales Report</Dropdown.Item>
              <Dropdown.Item href="#">Export Report</Dropdown.Item>
              <Dropdown.Item href="#">Profit</Dropdown.Item>
              <Dropdown.Item href="#">Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h4 className="header-title mb-3">Total Users</h4>
          <div className="text-center mb-4">
            <ReactApexChart
              options={apexRadialBarOpts}
              series={apexRadialBarOpts.series}
              type="radialBar"
              height={205}
              className="mt-0"
            />
          </div>
          <Row className="align-items-center justify-content-center">
            <Col xs={5}>
              <h5>
                <i className="mdi mdi-circle-double text-info me-1"></i> Last
                Month
              </h5>
            </Col>
            <Col xs={6}>
              <ProgressBar
                variant="info"
                now={55}
                style={{
                  height: 6,
                }}
              />
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center mt-1">
            <Col xs={5}>
              <h5>
                <i className="mdi mdi-circle-double text-pink me-1"></i> Last
                week
              </h5>
            </Col>
            <Col xs={6}>
              <ProgressBar
                variant="pink"
                now={75}
                style={{
                  height: 6,
                }}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default TotalUsersChart;
