import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import { Donut } from 'react-dial-knob';
// components
import { PageBreadcrumb } from '../../../components';

// dummay data
import { apexColumnChartOpts, columnWithDataLableOpts, lineColumnAreaChartOpts, widgetCards, widgets } from "./data";
const Widgets = () => {
  return <>
      <PageBreadcrumb name="Widgets" title="Widgets" subName="Widget" />
      <Row>
        {(widgets || []).map((widget, idx) => {
        return <React.Fragment key={idx}>
              {widget.image ? <Col xl={3} md={6}>
                  <Card>
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <div className="avatar-lg text-center bg-light rounded-circle">
                          <img className="avatar-title" src={widget.image} alt="" title="clock.svg" />
                        </div>
                        <div className="text-end">
                          <p className="text-uppercase">{widget.title}</p>
                          <h2 className="mb-0"><span data-plugin="counterup">{widget.count}</span></h2>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col> : widget.isRight ? <Col md={6} xl={3}>
                  <Card className={`widget-rounded-circle ${widget.variant} shadow-none`}>
                    <Card.Body>
                      <Row>
                        <Col xs={6}>
                          <h2 className="text-white mt-2"><span data-plugin="counterup">{widget.count}</span></h2>
                          <p className="text-white mb-0 text-truncate">{widget.title}</p>
                        </Col>
                        <Col xs={6}>
                          <div className="avatar-lg rounded-circle bg-soft-light ms-auto">
                            <i className={`${widget.icon} font-24 avatar-title text-white`}></i>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col> : <Col md={6} xl={3}>
                  <Card className={`widget-rounded-circle ${widget.variant} shadow-none`}>
                    <Card.Body>
                      <Row>
                        <Col xs={6}>
                          <div className="avatar-lg rounded-circle bg-soft-light">
                            <i className={`${widget.icon} font-22 avatar-title text-white`}></i>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="text-end">
                            <h2 className="text-white mt-2"><span data-plugin="counterup">{widget.count}</span></h2>
                            <p className="text-white mb-0 text-truncate">{widget.title}</p>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>}
            </React.Fragment>;
      })}

      </Row>
      <Row>

        {(widgetCards || []).map((widget, idx) => {
        return <React.Fragment key={idx}>
              {widget.variant ? <Col xl={3} md={6}>
                  <Card className="widget-user">
                    <Card.Body>
                      <Image src={widget.image} className="img-fluid d-block rounded-circle avatar-md" alt="user" />
                      <div className="wid-u-info">
                        <h5 className="mt-3 mb-1">{widget.name}</h5>
                        <p className="text-muted mb-0">dashcraftsteam@gmail.com</p>
                        <div className="user-position">
                          <span className={`${widget.variant}`}>{widget.position}</span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col> : <Col md={6} xl={3}>
                  <Card className="widget-rounded-circle">
                    <Card.Body>
                      <Row className="align-items-center">
                        <div className="col-auto">
                          <div className="avatar-lg">
                            <Image src={widget.image} className="img-fluid rounded-circle" alt="user-img" />
                          </div>
                        </div>
                        <Col>
                          <h5 className="mb-1 mt-2">{widget.name}</h5>
                          <p className="mb-2 text-muted">{widget.position}</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>}
            </React.Fragment>;
      })}

      </Row>
      <Row>
        <Col xs={12}>
          <h4 className="mb-4">Chart Widgets</h4>
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={6}>
                  <div className="avatar-sm bg-warning rounded-circle">
                    <i className="fe-aperture avatar-title font-22 text-white"></i>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="text-end">
                    <h3 className="my-1">$<span data-plugin="counterup">8,145</span></h3>
                    <p className="text-muted mb-1 text-truncate">Income Status</p>
                  </div>
                </Col>
              </Row>
              <div>
                <ReactApexChart className='apex-charts' options={apexColumnChartOpts} height={280} series={apexColumnChartOpts.series} type='bar' />

              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={6}>
                  <div className="avatar-sm bg-blue rounded-circle">
                    <i className="fe-shopping-bag avatar-title font-22 text-white"></i>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="text-end">
                    <h3 className="my-1"><span data-plugin="counterup">367</span></h3>
                    <p className="text-muted mb-1 text-truncate">Sales Status</p>
                  </div>
                </Col>
              </Row>
              <div className="text-center">

                <ReactApexChart className='apex-charts' options={columnWithDataLableOpts} height={280} series={columnWithDataLableOpts.series} type='bar' />

              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={6}>
                  <div className="avatar-sm bg-success rounded-circle">
                    <i className="fe-users avatar-title font-22 text-white"></i>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="text-end">
                    <h3 className="my-1"><span data-plugin="counterup">7204</span></h3>
                    <p className="text-muted mb-1 text-truncate">Recent Users</p>
                  </div>
                </Col>
              </Row>
              <div>

                <ReactApexChart className='apex-charts' options={lineColumnAreaChartOpts} height={280} series={lineColumnAreaChartOpts.series} type='line' />

              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Total Revenue</h4>
              <div className="widget-chart text-center" dir="ltr">
                <div className="d-flex justify-content-center">
                  <Donut diameter={175} value={60} max={100} min={0} step={1} theme={{
                  donutColor: "#f1556c"
                }} />
                </div>
                <h5 className="text-muted mt-3">Total sales made today</h5>
                <h2>$178</h2>

                <Row className="mt-3">
                  <Col xs={4}>
                    <p className="text-muted font-15 mb-1 text-truncate">Target</p>
                    <h4>$12k</h4>
                  </Col>
                  <Col xs={4}>
                    <p className="text-muted font-15 mb-1 text-truncate">Last week</p>
                    <h4>$2487</h4>
                  </Col>
                  <Col xs={4}>
                    <p className="text-muted font-15 mb-1 text-truncate">Last Month</p>
                    <h4>$14.5k</h4>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Sales Status</h4>

              <div className="widget-chart text-center" dir="ltr">
                <div className="d-flex justify-content-center">
                  <Donut diameter={175} value={37} max={100} min={0} step={1} theme={{
                  donutColor: "#6658dd"
                }} />
                </div>
                <h5 className="text-muted mt-3">Total sales made today</h5>
                <h2>29</h2>

                <Row className="mt-3">
                  <Col xs={4}>
                    <p className="text-muted font-15 mb-1 text-truncate">Target</p>
                    <h4>480</h4>
                  </Col>
                  <Col xs={4}>
                    <p className="text-muted font-15 mb-1 text-truncate">Last week</p>
                    <h4>136</h4>
                  </Col>
                  <Col xs={4}>
                    <p className="text-muted font-15 mb-1 text-truncate">Last Month</p>
                    <h4>514</h4>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Recent Users</h4>

              <div className="widget-chart text-center" dir="ltr">
                <div className="d-flex justify-content-center">
                  <Donut diameter={175} value={81} max={100} min={0} step={1} theme={{
                  donutColor: "#78c350"
                }} />
                </div>
                <h5 className="text-muted mt-3">Total sales made today</h5>
                <h2>72</h2>

                <Row className="mt-3">
                  <Col xs={4}>
                    <p className="text-muted font-15 mb-1 text-truncate">Target</p>
                    <h4>8k</h4>
                  </Col>
                  <Col xs={4}>
                    <p className="text-muted font-15 mb-1 text-truncate">Last week</p>
                    <h4>2.5k</h4>
                  </Col>
                  <Col xs={4}>
                    <p className="text-muted font-15 mb-1 text-truncate">Last Month</p>
                    <h4>10.2k</h4>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>;
};
export default Widgets;