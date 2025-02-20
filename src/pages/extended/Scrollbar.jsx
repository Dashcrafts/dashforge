import { Card, Col, Row } from "react-bootstrap";
import { PageBreadcrumb } from "../../components";
import SimpleBar from "simplebar-react";
const Scrollbar = () => {
  return (
    <>
      <PageBreadcrumb
        name="Scrollbar"
        title="Scrollbar"
        subName="Extended UI"
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body className="pb-0">
              <h4 className="header-title">Default Scroll</h4>
              <p className="text-muted font-14">
                Just use data attribute <code>data-simplebar</code> and add{" "}
                <code>max-height: **px</code> oh fix height
              </p>
            </Card.Body>

            <SimpleBar
              className="card-body py-0 mb-3"
              data-simplebar
              style={{
                maxHeight: 250,
              }}
            >
              SimpleBar does only one thing: replace the browser's default
              scrollbar with a custom CSS-styled one without losing
              performances. Unlike some popular plugins, SimpleBar doesn't mimic
              scroll with Javascript, causing janks and strange scrolling
              behaviours... You keep the awesomeness of native scrolling...with
              a custom scrollbar!
              <p>
                SimpleBar{" "}
                <strong>does NOT implement a custom scroll behaviour</strong>.
                It keeps the <strong>native</strong>
                <code>overflow: auto</code> scroll and <strong>only</strong>{" "}
                replace the scrollbar visual appearance.
              </p>
              <h5>Design it as you want</h5>
              <p>
                SimpleBar uses pure CSS to style the scrollbar. You can easily
                customize it as you want! Or even have multiple style on the
                same page...or just keep the default style ("Mac OS" scrollbar
                style).
              </p>
              <h5>Lightweight and performant</h5>
              <p>
                Only 6kb minified. SimpleBar doesn't use Javascript to handle
                scrolling. You keep the performances/behaviours of the native
                scroll.
              </p>
              <h5>Supported everywhere</h5>
              <p className="mb-0">
                SimpleBar has been tested on the following browsers: Chrome,
                Firefox, Safari, Edge, IE11.
              </p>
            </SimpleBar>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body className="pb-0">
              <h4 className="header-title">RTL Position</h4>
              <p className="text-muted font-14">
                Just use data attribute{" "}
                <code>data-simplebar data-simplebar-direction='rtl'</code> and
                add <code>max-height: **px</code> oh fix height
              </p>
            </Card.Body>

            <SimpleBar
              className="card-body py-0 mb-3"
              data-simplebar
              data-simplebar-direction="rtl"
              style={{
                maxHeight: 250,
              }}
            >
              SimpleBar does only one thing: replace the browser's default
              scrollbar with a custom CSS-styled one without losing
              performances. Unlike some popular plugins, SimpleBar doesn't mimic
              scroll with Javascript, causing janks and strange scrolling
              behaviours... You keep the awesomeness of native scrolling...with
              a custom scrollbar!
              <p>
                SimpleBar{" "}
                <strong>does NOT implement a custom scroll behaviour</strong>.
                It keeps the <strong>native</strong>
                <code>overflow: auto</code> scroll and <strong>only</strong>{" "}
                replace the scrollbar visual appearance.
              </p>
              <h5>Design it as you want</h5>
              <p>
                SimpleBar uses pure CSS to style the scrollbar. You can easily
                customize it as you want! Or even have multiple style on the
                same page...or just keep the default style ("Mac OS" scrollbar
                style).
              </p>
              <h5>Lightweight and performant</h5>
              <p>
                Only 6kb minified. SimpleBar doesn't use Javascript to handle
                scrolling. You keep the performances/behaviours of the native
                scroll.
              </p>
              <h5>Supported everywhere</h5>
              <p className="mb-0">
                SimpleBar has been tested on the following browsers: Chrome,
                Firefox, Safari, Edge, IE11.
              </p>
            </SimpleBar>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Card>
            <Card.Body className="pb-0">
              <h4 className="header-title">Scroll Size</h4>
              <p className="text-muted font-14">
                Just use data attribute <code>data-simplebar</code> and add{" "}
                <code>max-height: **px</code> oh fix height
              </p>
            </Card.Body>

            <SimpleBar
              className="card-body py-0 mb-3"
              data-simplebar
              data-simplebar-lg
              style={{
                maxHeight: 250,
              }}
            >
              SimpleBar does only one thing: replace the browser's default
              scrollbar with a custom CSS-styled one without losing
              performances. Unlike some popular plugins, SimpleBar doesn't mimic
              scroll with Javascript, causing janks and strange scrolling
              behaviours... You keep the awesomeness of native scrolling...with
              a custom scrollbar!
              <p>
                SimpleBar{" "}
                <strong>does NOT implement a custom scroll behaviour</strong>.
                It keeps the <strong>native</strong>&nbsp;
                <code>overflow: auto</code> scroll and <strong>only</strong>{" "}
                replace the scrollbar visual appearance.
              </p>
              <h5>Design it as you want</h5>
              <p>
                SimpleBar uses pure CSS to style the scrollbar. You can easily
                customize it as you want! Or even have multiple style on the
                same page...or just keep the default style ("Mac OS" scrollbar
                style).
              </p>
              <h5>Lightweight and performant</h5>
              <p>
                Only 6kb minified. SimpleBar doesn't use Javascript to handle
                scrolling. You keep the performances/behaviours of the native
                scroll.
              </p>
              <h5>Supported everywhere</h5>
              <p className="mb-0">
                SimpleBar has been tested on the following browsers: Chrome,
                Firefox, Safari, Edge, IE11.
              </p>
            </SimpleBar>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Body className="pb-0">
              <h4 className="header-title">Scroll Color</h4>
              <p className="text-muted font-14">
                Just use data attribute&nbsp;
                <code>data-simplebar data-simplebar-primary</code> and add{" "}
                <code>max-height: **px</code> oh fix height
              </p>
            </Card.Body>

            <SimpleBar
              className="card-body py-0 mb-3"
              data-simplebar
              data-simplebar-primary
              style={{
                maxHeight: 250,
              }}
            >
              SimpleBar does only one thing: replace the browser's default
              scrollbar with a custom CSS-styled one without losing
              performances. Unlike some popular plugins, SimpleBar doesn't mimic
              scroll with Javascript, causing janks and strange scrolling
              behaviours... You keep the awesomeness of native scrolling...with
              a custom scrollbar!
              <p>
                SimpleBar{" "}
                <strong>does NOT implement a custom scroll behaviour</strong>.
                It keeps the <strong>native</strong>&nbsp;
                <code>overflow: auto</code> scroll and <strong>only</strong>{" "}
                replace the scrollbar visual appearance.
              </p>
              <h5>Design it as you want</h5>
              <p>
                SimpleBar uses pure CSS to style the scrollbar. You can easily
                customize it as you want! Or even have multiple style on the
                same page...or just keep the default style ("Mac OS" scrollbar
                style).
              </p>
              <h5>Lightweight and performant</h5>
              <p>
                Only 6kb minified. SimpleBar doesn't use Javascript to handle
                scrolling. You keep the performances/behaviours of the native
                scroll.
              </p>
              <h5>Supported everywhere</h5>
              <p className="mb-0">
                SimpleBar has been tested on the following browsers: Chrome,
                Firefox, Safari, Edge, IE11.
              </p>
            </SimpleBar>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Scrollbar;
