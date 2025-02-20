import { useState } from "react";
import { Card, Col, Row, Carousel as BSCarousel, Image } from "react-bootstrap";

// images
import Img1 from "../../assets/images/small/small-1.jpg";
import Img2 from "../../assets/images/small/small-2.jpg";
import Img3 from "../../assets/images/small/small-3.jpg";
import Img4 from "../../assets/images/small/small-4.jpg";

// components
import { PageBreadcrumb } from "../../components";
const DefaultSlides = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Slides only</h4>
        <p className="text-muted font-14">
          Here’s a carousel with slides only. Note the presence of the{" "}
          <code>.d-block</code>
          &nbsp;and <code>.img-fluid</code> on carousel images to prevent
          browser default image alignment.
        </p>
        <BSCarousel indicators={false} controls={false}>
          <BSCarousel.Item className="active">
            <Image fluid className="d-block" src={Img1} alt="First slide" />
          </BSCarousel.Item>
          <BSCarousel.Item>
            <Image fluid className="d-block" src={Img2} alt="Second slide" />
          </BSCarousel.Item>
          <BSCarousel.Item>
            <Image fluid className="d-block" src={Img3} alt="Third slide" />
          </BSCarousel.Item>
        </BSCarousel>
      </Card.Body>
    </Card>
  );
};
const SlidesWithControls = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">With controls</h4>
        <p className="text-muted font-14">
          Adding in the previous and next controls:
        </p>
        <BSCarousel indicators={false}>
          <BSCarousel.Item>
            <Image fluid className="d-block" src={Img4} alt="First slide" />
          </BSCarousel.Item>
          <BSCarousel.Item>
            <Image fluid className="d-block" src={Img1} alt="Second slide" />
          </BSCarousel.Item>
          <BSCarousel.Item>
            <Image fluid className="d-block" src={Img2} alt="Third slide" />
          </BSCarousel.Item>
        </BSCarousel>
      </Card.Body>
    </Card>
  );
};
const SlidesWithIndicators = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">With indicators</h4>
        <p className="text-muted font-14">
          You can also add the indicators to the carousel, alongside the
          controls, too.
        </p>

        <BSCarousel activeIndex={index} onSelect={handleSelect}>
          <BSCarousel.Item>
            <Image fluid className="d-block" src={Img3} alt="First slide" />
          </BSCarousel.Item>
          <BSCarousel.Item>
            <Image fluid className="d-block" src={Img2} alt="Second slide" />
          </BSCarousel.Item>
          <BSCarousel.Item>
            <Image fluid className="d-block" src={Img1} alt="Third slide" />
          </BSCarousel.Item>
        </BSCarousel>
      </Card.Body>
    </Card>
  );
};
const SlidesWithCaptions = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">With captions</h4>
        <p className="text-muted font-14">
          Add captions to your slides easily with the{" "}
          <code>.carousel-caption</code> element within any{" "}
          <code>.carousel-item</code>.
        </p>
        <BSCarousel indicators={false}>
          <BSCarousel.Item>
            <Image src={Img1} fluid alt="First slide" className="d-block" />
            <BSCarousel.Caption className="d-none d-md-block">
              <h3 className="text-white">First slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </BSCarousel.Caption>
          </BSCarousel.Item>
          <BSCarousel.Item>
            <Image src={Img3} alt="Second slide" fluid className="d-block" />
            <BSCarousel.Caption className="d-none d-md-block">
              <h3 className="text-white">Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </BSCarousel.Caption>
          </BSCarousel.Item>
          <BSCarousel.Item>
            <Image src={Img2} fluid alt="Third slide" className="d-block" />
            <BSCarousel.Caption className="d-none d-md-block">
              <h3 className="text-white">Third slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </BSCarousel.Caption>
          </BSCarousel.Item>
        </BSCarousel>
      </Card.Body>
    </Card>
  );
};
const CrossFade = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Crossfade</h4>
        <p className="text-muted font-14">
          Add <code>.carousel-fade</code> to your carousel to animate slides
          with a fade transition instead of a slide.
        </p>
        <BSCarousel fade indicators={false}>
          <BSCarousel.Item>
            <Image fluid className="d-block" src={Img1} alt="First slide" />
          </BSCarousel.Item>
          <BSCarousel.Item>
            <Image
              fluid
              className="d-block img-fluid"
              src={Img2}
              alt="Second slide"
            />
          </BSCarousel.Item>
          <BSCarousel.Item>
            <Image
              fluid
              className="d-block img-fluid"
              src={Img3}
              alt="Third slide"
            />
          </BSCarousel.Item>
        </BSCarousel>
      </Card.Body>
    </Card>
  );
};
const IndividualInterval = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Individual interval</h4>
        <p className="text-muted font-14">
          Add <code>data-bs-interval=""</code> to a <code>.carousel-item</code>{" "}
          to change the amount of time to delay between automatically cycling to
          the next item.
        </p>

        <BSCarousel indicators={false}>
          <BSCarousel.Item interval={1000}>
            <Image
              fluid
              src={Img4}
              className="d-block w-100"
              alt="First slide"
            />
          </BSCarousel.Item>
          <BSCarousel.Item interval={2000}>
            <Image
              fluid
              src={Img2}
              className="d-block w-100"
              alt="Second slide"
            />
          </BSCarousel.Item>
          <BSCarousel.Item>
            <Image
              fluid
              src={Img1}
              className="d-block w-100"
              alt="Third slide"
            />
          </BSCarousel.Item>
        </BSCarousel>
      </Card.Body>
    </Card>
  );
};
const Carousel = () => {
  return (
    <>
      <PageBreadcrumb title="Carousel" name="Carousel" subName="Base UI" />
      <Row>
        <Col lg={6}>
          <DefaultSlides />
        </Col>
        <Col lg={6}>
          <SlidesWithControls />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <SlidesWithIndicators />
        </Col>
        <Col lg={6}>
          <SlidesWithCaptions />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <CrossFade />
        </Col>
        <Col lg={6}>
          <IndividualInterval />
        </Col>
      </Row>
    </>
  );
};
export default Carousel;
