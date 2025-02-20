import { Card, Col, Row } from "react-bootstrap";

// components
import { PageBreadcrumb } from "../../../components";


// dummy data
import {
  canadaMapOpts,
  italyMapOpts,
  russiaMapOpts,
  spainMapOpts,
  usaMapOpts,
  worldMapOpts,
} from "./data";
import WorldMap from "./vectorMaps/WorldMap";
import UsaVectorMap from "./vectorMaps/UsaVectorMap";
import RussiaVectorMap from "./vectorMaps/RussiaVectorMap";
import ItalyVectorMap from "./vectorMaps/ItalyVectorMap";
import CanadaVectorMap from "./vectorMaps/CanadaVectorMap";
import IraqVectorMap from "./vectorMaps/IraqVectorMap";
import SpainVectorMap from "./vectorMaps/SpainVectorMap";
const VectorMaps = () => {
  return (
    <>
      <PageBreadcrumb name="Vector Maps" title="Vector Maps" subName="Maps" />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">World Vector Map</h4>
              <WorldMap height="360px" width="100%" options={worldMapOpts} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">USA Vector Map</h4>
              <UsaVectorMap height="300px" width="100%" options={usaMapOpts} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">India Vector Map</h4>
              <RussiaVectorMap
                height="300px"
                width="100%"
                options={russiaMapOpts}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Italy Vector Map</h4>
              <ItalyVectorMap
                height="300px"
                width="100%"
                options={italyMapOpts}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Canada Vector Map</h4>
              <CanadaVectorMap
                height="300px"
                width="100%"
                options={canadaMapOpts}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Iraq Vector Map</h4>
              <IraqVectorMap
                height="300px"
                width="100%"
                options={IraqVectorMap}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title mb-3">Spain Vector Map</h4>
              <SpainVectorMap
                height="300px"
                width="100%"
                options={spainMapOpts}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default VectorMaps;
