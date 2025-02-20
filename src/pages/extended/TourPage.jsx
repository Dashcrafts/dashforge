import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// components

import logo from "@/assets/images/logo-dark.png";
import Tour from "reactour";
import { PageBreadcrumb } from "@/components";
const TourPage = () => {
  // Define steps separately
  const steps = [
    {
      content: <h3>Let's begin our journey!</h3>,
      position: "center",
      selector: "body",
    },
    {
      content: <p>You can find here status of user who's currently online.</p>,
      position: "bottom",
      selector: "#logo-tour",
    },
    {
      content: <p>Click on the button and make sidebar navigation small.</p>,
      position: "top",
      selector: "#display-title-tour",
    },
    {
      content: <p>Here you can change theme skins and other features.</p>,
      position: "top",
      selector: "#thankyou-tour",
    },
  ];
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <PageBreadcrumb
        title="Range Slider"
        name="Range Slider"
        subName="Extended UI"
      />
      <Tour
        steps={steps}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="text-center" onClick={() => setIsOpen(true)}>
                <img src={logo} alt="" height="20" id="logo-tour" />
              </div>

              <h1 id="display-title-tour">This is a Heading 1</h1>
              <p className="text-muted">
                Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla
                elit. Morbi tempor tincidunt tempor. Etiam id turpis viverra,
                vulputate sapien nec, varius sem. Curabitur ullamcorper
                fringilla eleifend. In ut eros hendrerit est consequat posuere
                et at velit.
              </p>

              <div className="clearfix"></div>

              <h2>This is a Heading 2</h2>
              <p className="text-muted">
                In nec rhoncus eros. Vestibulum eu mattis nisl. Quisque viverra
                viverra magna nec pulvinar. Maecenas pellentesque porta augue,
                consectetur facilisis diam porttitor sed. Suspendisse tempor est
                sodales augue rutrum tincidunt. Quisque a malesuada purus.
              </p>

              <div className="clearfix"></div>

              <h3>This is a Heading 3</h3>
              <p className="text-muted">
                Vestibulum auctor tincidunt semper. Phasellus ut vulputate
                lacus. Suspendisse ultricies mi eros, sit amet tempor nulla
                varius sed. Proin nisl nisi, feugiat quis bibendum vitae,
                dapibus in tellus.
              </p>

              <div className="clearfix"></div>

              <h4>This is a Heading 4</h4>
              <p className="text-muted">
                Nulla et mattis nunc. Curabitur scelerisque commodo condimentum.
                Mauris blandit, velit a consectetur egestas, diam arcu fermentum
                justo, eget ultrices arcu eros vel erat.
              </p>

              <div className="clearfix"></div>

              <h5>This is a Heading 5</h5>
              <p className="text-muted">
                Quisque nec turpis at urna dictum luctus. Suspendisse convallis
                dignissim eros at volutpat. In egestas mattis dui. Aliquam
                mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac,
                commodo dapibus odio. Vivamus pretium nec odio cursus elementum.
                Suspendisse molestie ullamcorper ornare.
              </p>

              <div className="clearfix"></div>

              <h6>This is a Heading 6</h6>
              <p className="text-muted">
                Donec ultricies, lacus id tempor condimentum, orci leo faucibus
                sem, a molestie libero lectus ac justo. ultricies mi eros, sit
                amet tempor nulla varius sed. Proin nisl nisi, feugiat quis
                bibendum vitae, dapibus in tellus.
              </p>

              <div className="text-center pt-4">
                <Link
                  onClick={() => setIsOpen(true)}
                  to="#"
                  className=" btn btn-danger"
                  id="thankyou-tour"
                >
                  Thank you !
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default TourPage;
