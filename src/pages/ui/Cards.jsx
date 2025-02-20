import { Card, Col, Collapse, ListGroup, Row } from "react-bootstrap";

// images
import cardImg from "../../assets/images/small/small-1.jpg";
import cardImg1 from "../../assets/images/small/small-2.jpg";
import cardImg3 from "../../assets/images/small/small-3.jpg";
import cardImg4 from "../../assets/images/small/small-4.jpg";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "../../components";
import { useState } from "react";
const CardWithImage = () => {
  return (
    <Card className="d-block">
      <Card.Img className="card-img-top" src={cardImg} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up.
        </p>
        <Link to="#" className="btn btn-primary ">
          Button
        </Link>
      </div>
    </Card>
  );
};
const CardWithImage2 = () => {
  return (
    <Card className="d-block">
      <Card.Img className="card-img-top" src={cardImg1} alt="Card image cap" />
      <Card.Body className="card-body">
        <Card.Title as="h5" className="card-title">
          Card title
        </Card.Title>
        <Card.Text className="card-text">
          Some quick example text to build on the card..
        </Card.Text>
      </Card.Body>
      <ListGroup as="ul" variant="flush">
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      </ListGroup>
      <div className="card-body">
        <Card.Link href="#" className="text-custom">
          Card link
        </Card.Link>
        <Card.Link href="#" className="text-custom">
          Another link
        </Card.Link>
      </div>
    </Card>
  );
};
const CardWithImage3 = () => {
  return (
    <Card className="d-block">
      <Card.Img className="card-img-top" src={cardImg3} alt="Card image cap" />
      <Card.Body className="card-body">
        <Card.Text className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up.
        </Card.Text>
        <Card.Link href="#" className="btn btn-primary ">
          Button
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
const CardWithTitleAndImage = () => {
  return (
    <Card className="d-block">
      <Card.Body>
        <Card.Title as="h5">Card title</Card.Title>
        <Card.Subtitle as="h6" className="text-muted">
          Support card subtitle
        </Card.Subtitle>
      </Card.Body>
      <Card.Img className="img-fluid" src={cardImg4} alt="Card image cap" />
      <div className="card-body">
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#" className="text-custom">
          Card link
        </Card.Link>
        <Card.Link href="#" className="text-custom">
          Another link
        </Card.Link>
      </div>
    </Card>
  );
};
const CardWithSpecialTitle = () => {
  return (
    <Card as={Card.Body}>
      <Card.Title as="h5">Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Link to="#" className="btn btn-primary ">
        Go somewhere
      </Link>
    </Card>
  );
};
const CardWithHeader = () => {
  return (
    <Card>
      <Card.Header as="h6" className="bg-light">
        Featured
      </Card.Header>
      <Card.Body>
        <Card.Title as="h5">Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to="#" className="btn btn-primary">
          Go somewhere
        </Link>
      </Card.Body>
    </Card>
  );
};
const CardWithHeaderAndQuote = () => {
  return (
    <Card>
      <Card.Header className="bg-light">Quote</Card.Header>
      <Card.Body>
        <blockquote className="card-bodyquote">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer>
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
const CardWithHeaderAndFooter = () => {
  return (
    <Card>
      <Card.Header className="bg-light">Featured</Card.Header>
      <Card.Body>
        <Link to="#" className="btn btn-primary ">
          Go somewhere
        </Link>
      </Card.Body>
      <Card.Footer className="border-top border-light text-muted">
        2 days ago
      </Card.Footer>
    </Card>
  );
};
const ColoredCards = () => {
  const colors = [
    "bg-primary",
    "bg-success",
    "bg-info",
    "bg-warning",
    "bg-danger",
  ];
  return (
    <>
      <Col lg={4} sm={6}>
        <Card className="bg-secondary text-white">
          <Card.Body>
            <Card.Title as="h5">Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Link to="#" className="btn btn-primary  btn-sm">
              Button
            </Link>
          </Card.Body>
        </Card>
      </Col>

      {(colors || []).map((color, idx) => {
        return (
          <Col lg={4} sm={6} key={idx}>
            <Card className={`text-white ${color}`}>
              <Card.Body>
                <blockquote className="card-bodyquote">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
const BorderdCards = () => {
  const colors = [
    {
      color: "secondary",
    },
    {
      color: "primary",
    },
    {
      color: "success",
    },
  ];
  return (
    <>
      {(colors || []).map((item, idx) => {
        return (
          <Col md={4} key={idx}>
            <Card className={`border-${item.color} border`}>
              <Card.Body>
                <Card.Title as="h5">Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Link to="#" className={`btn btn-${item.color}  btn-sm`}>
                  Button
                </Link>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
const HorizontalCards = () => {
  return (
    <>
      <Col lg={6}>
        <Card>
          <Row className="g-0 align-items-center">
            <Col md={4}>
              <Card.Img src={cardImg4} className="card-img" alt="..." />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title as="h5" className="card-title">
                  Card title
                </Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Row className="g-0 align-items-center">
            <Col md={8}>
              <Card.Body>
                <Card.Title as="h5" className="card-title">
                  Card title
                </Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Col>
            <Col md={4}>
              <img src={cardImg} className="card-img" alt="..." />
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};
const CardwithstretchedLink = () => {
  return (
    <>
      <Col sm={3} lg={3}>
        <Card>
          <Card.Img src={cardImg1} className="card-img-top" alt="..." />
          <Card.Body>
            <Card.Title as="h5">Card with stretched link</Card.Title>
            <Link to="#n-primary  mt-2 stretched-link">Go somewhere</Link>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={3} lg={3}>
        <Card>
          <Card.Img src={cardImg3} className="card-img-top" alt="..." />
          <Card.Body>
            <Card.Title as="h5">
              <Link to="#uccess stretched-link">Card with stretched link</Link>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card up the bulk of the
              card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={3} lg={3}>
        <Card>
          <Card.Img src={cardImg4} className="card-img-top" alt="..." />
          <Card.Body>
            <Card.Title as="h5">Card with stretched link</Card.Title>
            <Link to="#n-info  mt-2 stretched-link">Go somewhere</Link>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={3} lg={3}>
        <Card>
          <Card.Img src={cardImg} className="card-img-top" alt="..." />
          <Card.Body>
            <Card.Title as="h5">
              <Link to="#hed-link">Card with stretched link</Link>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card up the bulk of the
              card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
const CardWithGroup = ({ item }) => {
  return (
    <Card className="d-block">
      <Card.Img
        className="card-img-top"
        src={item.image}
        alt="Card image cap"
      />
      <Card.Body>
        <Card.Title as="h5" className="card-title">
          {item.title}
        </Card.Title>
        <Card.Text>{item.text}</Card.Text>
        <Card.Text>
          <small className="text-muted">{item.subtext}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
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
            <Card.Title as="h5" className={`mb-0 ${props.titleClass}`}>
              {cardTitle}
            </Card.Title>
            <Collapse in={collapse}>
              <div>
                <div className="pt-3">{children}</div>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      ) : null}
    </>
  );
};
const Cards = () => {
  const CardGroupDetails = [
    {
      id: 1,
      image: cardImg,
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      subtext: "Last updated 3 mins ago",
    },
    {
      id: 2,
      image: cardImg1,
      title: "Card title",
      text: "This card has supporting text below as a natural lead-in to additional content.",
      subtext: "Last updated 3 mins ago",
    },
    {
      id: 3,
      image: cardImg3,
      title: "Card title",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
      subtext: "Last updated 3 mins ago",
    },
  ];
  return (
    <>
      <PageBreadcrumb title="Cards" name="Cards" subName="Base UI" />
      <Row>
        <Col sm={3} lg={3}>
          <CardWithImage />
        </Col>

        <Col sm={3} lg={3}>
          <CardWithImage2 />
        </Col>

        <Col sm={3} lg={3}>
          <CardWithImage3 />
        </Col>

        <Col sm={3} lg={3}>
          <CardWithTitleAndImage />
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <CardWithSpecialTitle />
        </Col>
        <Col sm={6}>
          <CardWithSpecialTitle />
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <CardWithHeader />
        </Col>

        <Col md={4}>
          <CardWithHeaderAndQuote />
        </Col>

        <Col md={4}>
          <CardWithHeaderAndFooter />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <h4 className="mb-4">Card Colored</h4>
        </Col>
      </Row>

      <Row>
        <ColoredCards />
      </Row>

      <Row>
        <Col xs={12}>
          <h4 className="mb-4">Card Bordered</h4>
        </Col>
      </Row>

      <Row>
        <BorderdCards />
      </Row>

      <Row>
        <Col xs={12}>
          <h4 className="mb-4">Horizontal Card</h4>
        </Col>
      </Row>

      <Row>
        <HorizontalCards />
      </Row>

      <Row>
        <Col xs={12}>
          <h4 className="mb-4">Stretched link</h4>
        </Col>
      </Row>

      <Row>
        <CardwithstretchedLink />
      </Row>

      <Row>
        <Col xs={12}>
          <h4 className="mb-4">Card Group</h4>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <div className="card-group">
            {(CardGroupDetails || []).map((item, idx) => (
              <CardWithGroup item={item} key={idx} />
            ))}
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <h4 className="my-4">Custom Card Portlets</h4>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card>
            <div className="card-body">
              <Row>
                <Col md={4}>
                  <CustomCardPortlets className="mb-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry alice ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </CustomCardPortlets>
                </Col>

                <Col md={4}>
                  <CustomCardPortlets className="bg-primary text-white mb-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry alice ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </CustomCardPortlets>
                </Col>

                <Col md={4}>
                  <CustomCardPortlets className="bg-success text-white mb-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry alice ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </CustomCardPortlets>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Cards;
