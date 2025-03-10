import { Button, Card, Col, Placeholder, Row } from "react-bootstrap";

// components
import { PageBreadcrumb } from "../../components";

// images
import img1 from "../../assets/images/small/small-1.jpg";
import img2 from "../../assets/images/small/small-2.jpg";
const BasicPlaceholders = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Placeholders</h4>
        <p className="text-muted font-13">
          In the example below, we take a typical card component and recreate it
          with placeholders applied to create a “loading card”. Size and
          proportions are the same between the two.
        </p>

        <Row>
          <Col md={6}>
            <Card className="border shadow-none mb-md-0">
              <Card.Img variant="top" src={img1} alt="..." />
              <Card.Body>
                <Card.Title as="h5">Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" as="a" href="#">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <div className="card border shadow-none mb-0" aria-hidden="true">
              <Card.Img src={img2} className="card-img-top" alt="..." />
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button
                  variant="primary"
                  tabIndex={-1}
                  xs={6}
                ></Placeholder.Button>
              </Card.Body>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
const PlaceholdersWithColor = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Color</h4>
        <p className="text-muted font-13">
          By default, the <code>placeholder</code> uses{" "}
          <code>currentColor</code>. This can be overriden with a custom color
          or utility class.
        </p>
        <Placeholder xs={12} />
        <Placeholder xs={12} bg="primary" />
        <Placeholder xs={12} bg="secondary" />
        <Placeholder xs={12} bg="success" />
        <Placeholder xs={12} bg="danger" />
        <Placeholder xs={12} bg="warning" />
        <Placeholder xs={12} bg="info" />
        <Placeholder xs={12} bg="light" />
        <Placeholder xs={12} bg="dark" />
      </Card.Body>
    </Card>
  );
};
const PlaceholdersWidth = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Width</h4>
        <p className="text-muted font-13">
          You can change the <code>width</code> through grid column classes,
          width utilities, or inline styles.
        </p>
        <Placeholder xs={6} />
        <Placeholder className="w-75" /> <br />
        <Placeholder
          style={{
            width: "25%",
          }}
        />
      </Card.Body>
    </Card>
  );
};
const PlaceholdersWithSizes = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Sizing</h4>
        <p className="text-muted font-13">
          The size of <code>.placeholder</code>s are based on the typographic
          style of the parent element. Customize them with sizing modifiers:{" "}
          <code>.placeholder-lg</code>, <code>.placeholder-sm</code>, or{" "}
          <code>.placeholder-xs</code>.
        </p>

        <Placeholder xs={12} size="lg" />
        <Placeholder xs={12} />
        <Placeholder xs={12} size="sm" />
        <Placeholder xs={12} size="xs" />
      </Card.Body>
    </Card>
  );
};
const PlaceholdersConcept = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">How it works</h4>
        <p className="text-muted font-13">
          Create placeholders with the <code>.placeholder</code> class and a
          grid column class (e.g., <code>.col-6</code>) to set the{" "}
          <code>width</code>. They can replace the text inside an element or as
          be added as a modifier class to an existing component.
        </p>

        <p aria-hidden="true">
          <Placeholder xs={6} />
        </p>

        <Placeholder.Button xs={4} aria-hidden="true" />
      </Card.Body>
    </Card>
  );
};
const PlaceholdersAnimation = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Animation</h4>
        <p className="text-muted font-13">
          Animate placehodlers with <code>.placeholder-glow</code> or{" "}
          <code>.placeholder-wave</code> to better convey the perception of
          something being <em>actively</em> loaded.
        </p>

        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} />
        </Placeholder>
        <Placeholder as="p" animation="wave" className="mb-0">
          <Placeholder xs={12} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};
const Placeholders = () => {
  return (
    <>
      <PageBreadcrumb
        title="Placeholders"
        name="Placeholders"
        subName="Base UI"
      />

      <Row>
        <Col xl={6}>
          <BasicPlaceholders />
        </Col>

        <Col xl={6}>
          <PlaceholdersWithColor />
          <PlaceholdersWidth />
        </Col>

        <Col xl={6}>
          <PlaceholdersWithSizes />
        </Col>

        <Col xl={6}>
          <PlaceholdersConcept />
        </Col>

        <Col xl={6}>
          <PlaceholdersAnimation />
        </Col>
      </Row>
    </>
  );
};
export default Placeholders;
