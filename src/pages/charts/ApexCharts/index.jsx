import { useState } from "react";
import { Card, Col, Collapse, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "../../../components";
import ReactApexChart from "react-apexcharts";
import {
  gradientLineChartOpts,
  lineWithDataLabelOpts,
  stackedAreaOpts,
  spark1Opts,
  spark2Opts,
  spark3Opts,
  apexColumnChartOpts,
  columnWithDataLableOpts,
  mixedLineAreaChartOpts,
  basicBarChartOpts,
  barwithNegativeValueOpts,
  lineColumnAreaChartOpts,
  multipleYAxisChartOpts,
  simpleBubbleChartOpts,
  secondBubbleChartOpts,
  scatterXYOpts,
  scatterDatetimeOpts,
  simpleCandlestickChartOpts,
  simplePieChartOpts,
  gradientDonutChartOpts,
  patternedDonutChartOpts,
  basicRadialBarChart,
  multipleRadialBarOpts,
  strokedCircularChartOpts,
} from "./data";
const CustomCardPortlets = (props) => {
  const children = props["children"] || null;
  const cardTitle = props["cardTitle"] || "Card title";
  const [collapse, setCollapse] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(false);

  /**
   * Toggle the body
   */
  const toggleContent = () => {
    setCollapse(!collapse);
  };

  /**
   * Reload the content
   */
  const reloadContent = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500 + 300 * (Math.random() * 5));
  };

  /**
   * remove the portlet
   */
  const remove = () => {
    setHidden(true);
  };
  return (
    <>
      {!hidden ? (
        <Card className={props.className}>
          {loading && (
            <div className="card-disabled">
              <div className="card-portlets-loader"></div>
            </div>
          )}
          <Card.Body>
            <div className="card-widgets">
              <Link to="#" onClick={reloadContent}>
                <i className="mdi mdi-refresh" />
              </Link>
              <Link to="#" onClick={toggleContent}>
                <i
                  className={`mdi ${collapse ? "mdi-minus" : ""} ${
                    !collapse ? "mdi-plus" : ""
                  }`}
                />
              </Link>
              <Link to="#" onClick={remove}>
                <i className="mdi mdi-close" />
              </Link>
            </div>
            <Card.Title as="h4" className={`mb-0 ${props.titleClass}`}>
              {cardTitle}
            </Card.Title>
            <Collapse in={collapse}>
              <div className="pt-3">
                <Row>{children}</Row>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      ) : null}
    </>
  );
};
const ApexCharts = () => {
  return (
    <>
      <PageBreadcrumb title="Apexcharts" name="Apexcharts" subName="Charts" />
      <Row>
        <Col xs={12}>
          <CustomCardPortlets cardTitle="Sparkline Charts">
            <Col md={4}>
              <ReactApexChart
                className="apex-charts"
                options={spark1Opts}
                height={160}
                series={spark1Opts.series}
                type="area"
              />
            </Col>
            <Col md={4}>
              <ReactApexChart
                className="apex-charts"
                options={spark2Opts}
                height={160}
                series={spark2Opts.series}
                type="area"
              />
            </Col>
            <Col md={4}>
              <ReactApexChart
                className="apex-charts"
                options={spark3Opts}
                height={160}
                series={spark3Opts.series}
                type="area"
              />
            </Col>
          </CustomCardPortlets>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <CustomCardPortlets cardTitle="Line with Data Labels">
            <ReactApexChart
              className="apex-charts"
              options={lineWithDataLabelOpts}
              height={380}
              series={lineWithDataLabelOpts.series}
              type="line"
            />
          </CustomCardPortlets>
        </Col>

        <Col xl={6}>
          <CustomCardPortlets cardTitle="Gradient Line Chart">
            <ReactApexChart
              className="apex-charts"
              options={gradientLineChartOpts}
              height={380}
              series={gradientLineChartOpts.series}
              type="line"
            />
          </CustomCardPortlets>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <CustomCardPortlets cardTitle="Stacked Area">
            <ReactApexChart
              className="apex-charts"
              options={stackedAreaOpts}
              height={380}
              series={stackedAreaOpts.series}
              type="area"
            />
          </CustomCardPortlets>
        </Col>

        <Col xl={6}>
          <CustomCardPortlets cardTitle="Basic Column Chart">
            <ReactApexChart
              className="apex-charts"
              options={apexColumnChartOpts}
              height={380}
              series={apexColumnChartOpts.series}
              type="bar"
            />
          </CustomCardPortlets>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <CustomCardPortlets cardTitle="Column Chart with Datalabels">
            <ReactApexChart
              className="apex-charts"
              options={columnWithDataLableOpts}
              height={380}
              series={columnWithDataLableOpts.series}
              type="bar"
            />
          </CustomCardPortlets>
        </Col>

        <Col xl={6}>
          <CustomCardPortlets cardTitle="Mixed Chart - Line & Area">
            <ReactApexChart
              className="apex-charts"
              options={mixedLineAreaChartOpts}
              height={380}
              series={mixedLineAreaChartOpts.series}
              type="line"
            />
          </CustomCardPortlets>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <CustomCardPortlets cardTitle="Basic Bar Chart">
            <ReactApexChart
              className="apex-charts"
              options={basicBarChartOpts}
              height={380}
              series={basicBarChartOpts.series}
              type="bar"
            />
          </CustomCardPortlets>
        </Col>

        <Col xl={6}>
          <CustomCardPortlets cardTitle="Bar with Negative Values">
            <ReactApexChart
              className="apex-charts"
              options={barwithNegativeValueOpts}
              height={380}
              series={barwithNegativeValueOpts.series}
              type="bar"
            />
          </CustomCardPortlets>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <CustomCardPortlets cardTitle="Line, Column & Area Chart">
            <ReactApexChart
              className="apex-charts"
              options={lineColumnAreaChartOpts}
              height={380}
              series={lineColumnAreaChartOpts.series}
              type="line"
            />
          </CustomCardPortlets>
        </Col>

        <Col xl={6}>
          <CustomCardPortlets cardTitle="Multiple Y-Axis Chart">
            <ReactApexChart
              className="apex-charts"
              options={multipleYAxisChartOpts}
              height={380}
              series={multipleYAxisChartOpts.series}
              type="line"
            />
          </CustomCardPortlets>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <CustomCardPortlets cardTitle="Simple Bubble Chart">
            <ReactApexChart
              className="apex-charts"
              options={simpleBubbleChartOpts}
              height={380}
              series={simpleBubbleChartOpts.series}
              type="bubble"
            />
          </CustomCardPortlets>
        </Col>

        <Col xl={6}>
          <CustomCardPortlets cardTitle="3D Bubble Chart">
            <ReactApexChart
              className="apex-charts"
              options={secondBubbleChartOpts}
              height={380}
              series={secondBubbleChartOpts.series}
              type="bubble"
            />
          </CustomCardPortlets>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <CustomCardPortlets cardTitle="Scatter (XY) Chart">
            <ReactApexChart
              className="apex-charts"
              options={scatterXYOpts}
              height={380}
              series={scatterXYOpts.series}
              type="scatter"
            />
          </CustomCardPortlets>
        </Col>

        <Col xl={6}>
          <CustomCardPortlets cardTitle="Scatter Chart - Datetime">
            <ReactApexChart
              className="apex-charts"
              options={scatterDatetimeOpts}
              height={380}
              series={scatterDatetimeOpts.series}
              type="scatter"
            />
          </CustomCardPortlets>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <CustomCardPortlets cardTitle="Simple Candlestick Chart">
            <ReactApexChart
              className="apex-charts"
              options={simpleCandlestickChartOpts}
              height={400}
              series={simpleCandlestickChartOpts.series}
              type="candlestick"
            />
          </CustomCardPortlets>
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <CustomCardPortlets cardTitle="Simple Pie Chart">
            <ReactApexChart
              className="apex-charts"
              options={simplePieChartOpts}
              height={320}
              series={simplePieChartOpts.series}
              type="pie"
            />
          </CustomCardPortlets>
        </Col>

        <Col xl={4}>
          <CustomCardPortlets cardTitle="Gradient Donut Chart">
            <ReactApexChart
              className="apex-charts"
              options={gradientDonutChartOpts}
              height={320}
              series={gradientDonutChartOpts.series}
              type="donut"
            />
          </CustomCardPortlets>
        </Col>
        <Col xl={4}>
          <CustomCardPortlets cardTitle="Patterned Donut Chart">
            <ReactApexChart
              className="apex-charts"
              options={patternedDonutChartOpts}
              height={320}
              series={patternedDonutChartOpts.series}
              type="donut"
            />
          </CustomCardPortlets>
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <CustomCardPortlets cardTitle="Basic RadialBar Chart">
            <ReactApexChart
              className="apex-charts"
              options={basicRadialBarChart}
              height={350}
              series={basicRadialBarChart.series}
              type="radialBar"
            />
          </CustomCardPortlets>
        </Col>

        <Col xl={4}>
          <CustomCardPortlets cardTitle="Multiple RadialBars">
            <ReactApexChart
              className="apex-charts"
              options={multipleRadialBarOpts}
              height={350}
              series={multipleRadialBarOpts.series}
              type="radialBar"
            />
          </CustomCardPortlets>
        </Col>

        <Col xl={4}>
          <CustomCardPortlets cardTitle="Stroked Circular Guage">
            <ReactApexChart
              className="apex-charts"
              options={strokedCircularChartOpts}
              height={375}
              series={strokedCircularChartOpts.series}
              type="radialBar"
            />
          </CustomCardPortlets>
        </Col>
      </Row>
    </>
  );
};
export default ApexCharts;
