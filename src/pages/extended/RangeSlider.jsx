import { PageBreadcrumb } from "@/components";
// styles
import RangeIconSlider from "@/components/RangeIconSlider";
import "nouislider/distribute/nouislider.css";
import { Card, CardBody, Col, Row } from "react-bootstrap";
const RangeSlider = () => {
  return (
    <>
      <PageBreadcrumb
        name="Range Slider"
        title="RANGE SLIDER"
        subName="Extended UI"
      />
      <Row>
        <Col xs={6}>
          <Card>
            <CardBody>
              <h4 className="header-title">Default</h4>
              <p className="text-muted">Start with default options</p>
              <div>
                <RangeIconSlider id="range_01" />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h4 className="header-title">Prefix</h4>
              <p className="text-muted">Showing grid and adding prefix "$"</p>
              <div>
                <RangeIconSlider
                  id="range_03"
                  option={{
                    plugin: "range-slider",
                    type: "double",
                    grid: "true",
                    min: 0,
                    max: 1000,
                    from: 200,
                    to: 800,
                    prefix: "$",
                  }}
                />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h4 className="header-title">Step</h4>
              <p className="text-muted">
                Increment with specific value only (step)
              </p>
              <div>
                <RangeIconSlider
                  id="range_05"
                  option={{
                    plugin: "range-slider",
                    type: "double",
                    grid: "true",
                    min: -1000,
                    max: 1000,
                    from: -500,
                    to: 500,
                    step: 250,
                  }}
                />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h4 className="header-title">Prettify Numbers</h4>
              <p className="text-muted">Prettify enabled. Much better!</p>
              <div>
                <RangeIconSlider
                  id="range_07"
                  option={{
                    plugin: "range-slider",
                    grid: "true",
                    min: 1000,
                    max: 1000000,
                    step: 1000,
                    from: 200000,
                    to: 1000,
                    prettify_enabled: "true",
                  }}
                />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h4 className="header-title">Extra Example</h4>
              <p className="text-muted">
                Want to show that max number is not the biggest one?
              </p>
              <div>
                <RangeIconSlider
                  id="range_09"
                  option={{
                    plugin: "range-slider",
                    grid: "true",
                    min: 18,
                    max: 70,
                    prefix: "Age",
                    max_postfix: "+",
                    from: 30,
                    to: 1000,
                  }}
                />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h4 className="header-title">Postfixes</h4>
              <p className="text-muted">Using postfixes</p>
              <div>
                <RangeIconSlider
                  id="range_11"
                  option={{
                    plugin: "range-slider",
                    type: "single",
                    grid: "true",
                    min: -90,
                    max: 90,
                    postfix: " Â°",
                    from: 0,
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={6}>
          <Card>
            <CardBody>
              <h4 className="header-title">Min-Max</h4>
              <p className="text-muted">
                Set min value, max value and start point
              </p>
              <div>
                <RangeIconSlider
                  id="range_02"
                  option={{
                    plugin: "range-slider",
                    min: 100,
                    max: 1000,
                    from: 550,
                  }}
                />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h4 className="header-title">Range</h4>
              <p className="text-muted">Set up range with negative values</p>
              <div>
                <RangeIconSlider
                  id="range_04"
                  option={{
                    plugin: "range-slider",
                    min: -1000,
                    max: 1000,
                    from: -500,
                    to: 500,
                    type: "double",
                    grid: "true",
                  }}
                />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h4 className="header-title">Custom Values</h4>
              <p className="text-muted">Using any strings as values</p>
              <div>
                <RangeIconSlider
                  id="range_06"
                  option={{
                    plugin: "range-slider",
                    grid: "true",
                    from: 3,
                    values:
                      "January,February,March,April,May,June,July,Auguest,September,October,November,December",
                  }}
                />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h4 className="header-title">Disabled</h4>
              <p className="text-muted">Lock slider by using disable option</p>
              <div>
                <RangeIconSlider
                  id="range_08"
                  option={{
                    plugin: "range-slider",
                    min: 100,
                    max: 1000,
                    from: 550,
                    disable: "true",
                  }}
                />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h4 className="header-title">Use Decorate Both option</h4>
              <p className="text-muted">Use decorate_both option</p>
              <div>
                <RangeIconSlider
                  id="range_10"
                  option={{
                    plugin: "range-slider",
                    type: "double",
                    min: 100,
                    max: 200,
                    from: 145,
                    to: 155,
                    prefix: "Weight ",
                    postfix: " million pounds",
                    decorate_both: "true",
                  }}
                />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h4 className="header-title">Hide</h4>
              <p className="text-muted">Or hide any part you wish</p>
              <div>
                <RangeIconSlider
                  id="range_12"
                  option={{
                    plugin: "range-slider",
                    type: "double",
                    min: 1000,
                    max: 2000,
                    from: 1200,
                    to: 1800,
                    hide_min_max: "true",
                    hide_from_to: "true",
                    grid: "true",
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default RangeSlider;
