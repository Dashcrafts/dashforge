import { Col, Row } from "react-bootstrap";

// dummy data

const NewIcons = ({ newIcons }) => {
  return (
    <Row className="icons-list-demo" id="newIcons">
      {(newIcons || []).map((icon, idx) => {
        return (
          <Col key={idx} sm={6} md={4} lg={3}>
            <i className={`mdi mdi-${icon.name}`}></i>
            <span>mdi-{icon.name}</span>
          </Col>
        );
      })}
    </Row>
  );
};
export default NewIcons;
