import { Card, Col, Row } from "react-bootstrap";
import Nestable from "react-nestable";

// components
import { PageBreadcrumb } from "../../components";
import { useState } from "react";

// styles
import "react-nestable/dist/styles/index.css";
const items = [
  {
    id: 0,
    text: "Choose a smartwatch",
  },
  {
    id: 1,
    text: "Send design for review",
    children: [
      {
        id: 2,
        text: " Coffee with the team",
      },
      {
        id: 3,
        text: " Ready my new work",
      },
      {
        id: 4,
        text: " Make a wireframe",
        children: [
          {
            id: 5,
            text: "  Video app redesign",
          },
          {
            id: 6,
            text: " iOS apps design completed",
          },
          {
            id: 7,
            text: "  Dashboard design started",
          },
        ],
      },
      {
        id: 8,
        text: " Homepage design",
      },
      {
        id: 9,
        text: " Developed UI Kit",
      },
    ],
  },
];
const items2 = [
  {
    id: 0,
    text: "Item 11",
  },
  {
    id: 1,
    text: "Item 12",
  },
  {
    id: 2,
    text: "Item 13",
  },
  {
    id: 3,
    text: "Item 14",
  },
  {
    id: 4,
    text: "Item 15",
    children: [
      {
        id: 5,
        text: "Item 16",
      },
      {
        id: 6,
        text: "Item 17",
      },
      {
        id: 7,
        text: "Item 18",
      },
    ],
  },
];
const items3 = [
  {
    id: 0,
    text: "Item 13",
  },
  {
    id: 1,
    text: "Item 14",
  },
  {
    id: 2,
    text: "Item 15",
    children: [
      {
        id: 3,
        text: "Item 16",
      },
      {
        id: 4,
        text: "Item 17",
      },
      {
        id: 5,
        text: "Item 18",
      },
    ],
  },
];
const RenderItem = ({ item, collapseIcon, handler }) => {
  return (
    <div className="dd-list">
      <div className="dd-item">
        <div className="dd-handle">
          {handler}
          {collapseIcon}
          {item.text}
        </div>
      </div>
    </div>
  );
};
const NestableList = () => {
  const [isCollapsed, setIsCollapsed] = useState();
  return (
    <>
      <PageBreadcrumb
        name="Nestable List"
        title="Nestable List"
        subName="Extended UI"
      />
      <Row>
        <Col lg={12}>
          <div className="text-start" id="nestable_list_menu">
            <button
              type="button"
              className="btn btn-blue btn-sm waves-effect mb-3 waves-light"
              data-action="expand-all"
              onClick={() => setIsCollapsed(false)}
            >
              Expand All
            </button>
            <button
              type="button"
              className="btn btn-pink btn-sm waves-effect mb-3 waves-light"
              data-action="collapse-all"
              onClick={() => setIsCollapsed(true)}
            >
              Collapse All
            </button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h4 className="header-title">Nestable Lists 1</h4>
                  <p className="sub-header">
                    Drag & drop hierarchical list with mouse and touch
                    compatibility (jQuery plugin).
                  </p>
                  <Nestable
                    items={items}
                    renderItem={RenderItem}
                    className="custom-dd dd"
                    collapsed={isCollapsed}
                  />
                </Col>

                <Col md={6}>
                  <h4 className="header-title mt-3 mt-md-0">
                    Nestable Lists 2
                  </h4>
                  <p className="sub-header">
                    Drag & drop hierarchical list with mouse and touch
                    compatibility (jQuery plugin).
                  </p>
                  <Nestable
                    items={items2}
                    renderItem={RenderItem}
                    className="custom-dd dd"
                    collapsed={isCollapsed}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <h4 className="header-title">Nestable Lists 3</h4>
                  <p className="sub-header">
                    Drag & drop hierarchical list with mouse and touch
                    compatibility (jQuery plugin).
                  </p>
                  <Nestable
                    items={items3}
                    renderItem={RenderItem}
                    className="custom-dd-empty dd"
                    handler={
                      <span className="dragula-handle text-muted me-3 font-20" />
                    }
                    collapsed={isCollapsed}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default NestableList;
