import { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Card,
  Col,
  Row,
  useAccordionButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "../../components";
const CustomToggle = ({
  children,
  eventKey,
  containerClass,
  linkClass,
  callback,
}) => {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );
  const isCurrentEventKey = activeEventKey === eventKey;
  return (
    <h5 className={containerClass}>
      <Link
        to="#"
        className={`${linkClass} ${!isCurrentEventKey ? "collapsed" : ""}`}
        onClick={decoratedOnClick}
      >
        {children}
      </Link>
    </h5>
  );
};
const CustomAccordion1 = ({ item, index }) => {
  return (
    <>
      <Card className="mb-1">
        <Card.Header>
          <CustomToggle
            eventKey={String(index)}
            containerClass="m-0"
            linkClass="text-dark"
          >
            <i className="mdi mdi-help-circle me-1 text-primary"></i>
            {item.title}
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={String(index)}>
          <Card.Body>{item.text}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};
const CustomAccordion2 = ({ item, index }) => {
  return (
    <>
      <Card className="mb-0">
        <Card.Header>
          <CustomToggle
            eventKey={String(index)}
            containerClass="m-0 position-relative"
            linkClass="custom-accordion-title text-reset d-block"
          >
            Q. {item.title}
            <i className="mdi mdi-chevron-down accordion-arrow"></i>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={String(index)}>
          <Card.Body>{item.text}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};
const Accordions = () => {
  const accordianContent = [
    {
      id: 1,
      title: "What is Vakal text here?",
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry Alice ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
    },
    {
      id: 2,
      title: "What is Vakal text here?",
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry Alice ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
    },
    {
      id: 3,
      title: "How many variations exist?",
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry Alice ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
    },
    {
      id: 4,
      title: "What is Vakal text here?",
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry Alice ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
    },
  ];
  const accordianContent2 = [
    {
      id: 1,
      title: "Can I use this template for my client?",
      text: " Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere",
    },
    {
      id: 2,
      title: "Can this theme work with Wordpress?",
      text: "No. This is a HTML template. It won't directly with wordpress, though you can convert this into wordpress compatible theme",
    },
    {
      id: 3,
      title: "How do I get help with the theme?",
      text: "   Use our dedicated support email (dashcraftsteam@gmail.com) to send your issues or feedback. We are here to help anytime",
    },
    {
      id: 4,
      title: "Will you regularly give updates of Dashforge ?",
      text: "Yes, We will update the Dashforge regularly. All the future updates would be available without any cost",
    },
  ];
  return (
    <>
      <PageBreadcrumb
        title="Accordions"
        name="Accordions & Collapse"
        subName="Base UI"
      />
      <Row>
        <Col xl={6}>
          <Accordion className="mb-3" defaultActiveKey="0">
            {(accordianContent || []).map((item, idx) => {
              return <CustomAccordion1 key={idx} item={item} index={idx} />;
            })}
          </Accordion>
        </Col>
        <Col xl={6}>
          <Accordion
            className="custom-accordion"
            defaultActiveKey="0"
            id="custom-accordion-one"
          >
            {(accordianContent2 || []).map((item, idx) => {
              return <CustomAccordion2 key={idx} item={item} index={idx} />;
            })}
          </Accordion>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Border Accordions</h4>
              <p className="text-muted font-14 mb-3">
                Click the accordions below to expand/collapse the accordion
                content.
              </p>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header as="h2">Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header as="h2">Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header as="h2">Accordion Item #3</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Flush Accordions</h4>
              <p className="text-muted font-14 mb-3">
                Add <code>.accordion-flush</code> to remove the default{" "}
                <code>background-color</code>, some borders, and some rounded
                corners to render accordions edge-to-edge with their parent
                container.
              </p>

              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Placeholder content for this accordion, which is intended to
                    demonstrate the
                    <code>.accordion-flush</code> class. This is the first
                    item's accordion body.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Placeholder content for this accordion, which is intended to
                    demonstrate the
                    <code>.accordion-flush</code> class. This is the second
                    item's accordion body. Let's imagine this being filled with
                    some actual content.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body>
                    Placeholder content for this accordion, which is intended to
                    demonstrate the
                    <code>.accordion-flush</code> class. This is the third
                    item's accordion body. Nothing more exciting happening here
                    in terms of content, but just filling up the space to make
                    it look, at least at first glance, a bit more representative
                    of how this would look in a real-world application.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Always Open Accordions</h4>
              <p className="text-muted font-14 mb-3">
                Omit the <code>data-bs-parent</code> attribute on each{" "}
                <code>.accordion-collapse</code> to make accordion items stay
                open when another item is opened.
              </p>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Accordions;
