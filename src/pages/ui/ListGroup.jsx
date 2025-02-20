import {
  Card,
  Col,
  Row,
  ListGroup as BSListGroup,
  Badge,
} from "react-bootstrap";
import { PageBreadcrumb } from "../../components";
const Basic = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Basic example</h4>
        <p className="text-muted font-14">
          The most basic list group is an unordered list with list items and the
          proper classes. Build upon it with the options that follow, or with
          your own CSS as needed.
        </p>
        <BSListGroup>
          <BSListGroup.Item>
            <i className="uil-google-drive-alt me-1"></i> Google Drive
          </BSListGroup.Item>
          <BSListGroup.Item>
            <i className="uil-facebook-messenger me-1"></i> Facebook Messenger
          </BSListGroup.Item>
          <BSListGroup.Item>
            <i className="uil-apple me-1"></i> Apple Technology Company
          </BSListGroup.Item>
          <BSListGroup.Item>
            <i className="uil-intercom me-1"></i> Intercom Support System
          </BSListGroup.Item>
          <BSListGroup.Item>
            <i className="uil-paypal me-1"></i> Paypal Payment Gateway
          </BSListGroup.Item>
        </BSListGroup>
      </Card.Body>
    </Card>
  );
};
const ActiveItems = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Active items</h4>
        <p className="text-muted font-14">
          Add <code>.active</code> to a <code>.list-group-item</code> to
          indicate the current active selection.
        </p>
        <BSListGroup>
          <BSListGroup.Item active>
            <i className="uil-google-drive-alt me-1"></i> Google Drive
          </BSListGroup.Item>
          <BSListGroup.Item>
            <i className="uil-facebook-messenger me-1"></i> Facebook Messenger
          </BSListGroup.Item>
          <BSListGroup.Item>
            <i className="uil-apple me-1"></i> Apple Technology Company
          </BSListGroup.Item>
          <BSListGroup.Item>
            <i className="uil-intercom me-1"></i> Intercom Support System
          </BSListGroup.Item>
          <BSListGroup.Item>
            <i className="uil-paypal me-1"></i> Paypal Payment Gateway
          </BSListGroup.Item>
        </BSListGroup>
      </Card.Body>
    </Card>
  );
};
const DisabledItems = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Disabled items</h4>
        <BSListGroup>
          <BSListGroup.Item disabled>
            <i className="uil-google-drive-alt me-1"></i> Google Drive
          </BSListGroup.Item>
          <BSListGroup.Item>
            <i className="uil-facebook-messenger me-1"></i> Facebook Messenger
          </BSListGroup.Item>
          <BSListGroup.Item>
            <i className="uil-apple me-1"></i> Apple Technology Company
          </BSListGroup.Item>
          <BSListGroup.Item>
            <i className="uil-intercom me-1"></i> Intercom Support System
          </BSListGroup.Item>
          <BSListGroup.Item>
            <i className="uil-paypal me-1"></i> Paypal Payment Gateway
          </BSListGroup.Item>
        </BSListGroup>
      </Card.Body>
    </Card>
  );
};
const LinksButtons = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Links and Buttons</h4>
        <p className="text-muted font-14">
          Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create{" "}
          <em>actionable</em> list group items with hover, disabled, and active
          states by adding <code>.list-group-item-action</code>.
        </p>
        <BSListGroup>
          <BSListGroup.Item href="#" action active>
            Paypal Payment Gateway
          </BSListGroup.Item>
          <BSListGroup.Item href="#" action>
            Google Drive
          </BSListGroup.Item>
          <BSListGroup.Item as="button" action>
            Facebook Messenger
          </BSListGroup.Item>
          <BSListGroup.Item as="button" action>
            Apple Technology Company
          </BSListGroup.Item>
          <BSListGroup.Item href="#" disabled action tabIndex={-1}>
            Intercom Support System
          </BSListGroup.Item>
        </BSListGroup>
      </Card.Body>
    </Card>
  );
};
const FlushListGroup = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Flush</h4>
        <p className="text-muted font-14">
          Add <code>.list-group-flush</code> to remove some borders and rounded
          corners to render list group items edge-to-edge in a parent container
          (e.g., cards).
        </p>

        <BSListGroup variant="flush">
          <BSListGroup.Item>Google Drive</BSListGroup.Item>
          <BSListGroup.Item>Facebook Messenger</BSListGroup.Item>
          <BSListGroup.Item>Apple Technology Company</BSListGroup.Item>
          <BSListGroup.Item>Intercom Support System</BSListGroup.Item>
          <BSListGroup.Item>Paypal Payment Gateway</BSListGroup.Item>
        </BSListGroup>
      </Card.Body>
    </Card>
  );
};
const HorizontalListGroup = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Horizontal</h4>
        <p className="text-muted font-14">
          Add <code>.list-group-horizontal</code> to change the layout of list
          group items from vertical to horizontal across all breakpoints.
          Alternatively, choose a responsive variant{" "}
          <code>.list-group-horizontal-{"{sm|md|lg|xl}"}</code> to make a list
          group horizontal starting at that breakpoint’s <code>min-width</code>.
        </p>

        <BSListGroup horizontal className="mb-3">
          <BSListGroup.Item>Google</BSListGroup.Item>
          <BSListGroup.Item>Whatsapp</BSListGroup.Item>
          <BSListGroup.Item>Facebook</BSListGroup.Item>
        </BSListGroup>

        <BSListGroup horizontal="sm" className="mb-3">
          <BSListGroup.Item>Apple</BSListGroup.Item>
          <BSListGroup.Item>PayPal</BSListGroup.Item>
          <BSListGroup.Item>Intercom</BSListGroup.Item>
        </BSListGroup>

        <BSListGroup horizontal="md">
          <BSListGroup.Item>Google</BSListGroup.Item>
          <BSListGroup.Item>Whatsapp</BSListGroup.Item>
          <BSListGroup.Item>Facebook</BSListGroup.Item>
        </BSListGroup>
      </Card.Body>
    </Card>
  );
};
const ContextualListGroup = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Contextual classes</h4>
        <p className="text-muted font-14">
          Use contextual classes to style list items with a stateful background
          and color.
        </p>

        <BSListGroup>
          <BSListGroup.Item>Dapibus ac facilisis in</BSListGroup.Item>
          <BSListGroup.Item variant="primary">
            A simple primary list group item
          </BSListGroup.Item>
          <BSListGroup.Item variant="secondary">
            A simple secondary list group item
          </BSListGroup.Item>
          <BSListGroup.Item variant="success">
            A simple success list group item
          </BSListGroup.Item>
          <BSListGroup.Item variant="danger">
            A simple danger list group item
          </BSListGroup.Item>
          <BSListGroup.Item variant="warning">
            A simple warning list group item
          </BSListGroup.Item>
          <BSListGroup.Item variant="info">
            A simple info list group item
          </BSListGroup.Item>
          <BSListGroup.Item variant="light">
            A simple light list group item
          </BSListGroup.Item>
          <BSListGroup.Item variant="dark">
            A simple dark list group item
          </BSListGroup.Item>
        </BSListGroup>
      </Card.Body>
    </Card>
  );
};
const ContextualLinksListGroup = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Contextual classes with Link</h4>
        <p className="text-muted font-14">
          Use contextual classes to style list items with a stateful background
          and color.
        </p>

        <BSListGroup>
          <BSListGroup.Item href="#" action>
            Dapibus ac facilisis in
          </BSListGroup.Item>
          <BSListGroup.Item href="#" variant="primary" action>
            A simple primary list group item
          </BSListGroup.Item>
          <BSListGroup.Item href="#" variant="secondary" action>
            A simple secondary list group item
          </BSListGroup.Item>
          <BSListGroup.Item href="#" variant="success" action>
            A simple success list group item
          </BSListGroup.Item>
          <BSListGroup.Item href="#" variant="danger" action>
            A simple danger list group item
          </BSListGroup.Item>
          <BSListGroup.Item href="#" variant="warning" action>
            A simple warning list group item
          </BSListGroup.Item>
          <BSListGroup.Item href="#" variant="info" action>
            A simple info list group item
          </BSListGroup.Item>
          <BSListGroup.Item href="#" variant="light" action>
            A simple light list group item
          </BSListGroup.Item>
          <BSListGroup.Item href="#" variant="dark" action>
            A simple dark list group item
          </BSListGroup.Item>
        </BSListGroup>
      </Card.Body>
    </Card>
  );
};
const CustomContentListGroup = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Custom content</h4>
        <p className="text-muted font-14">
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of flexbox utilities.
        </p>

        <BSListGroup>
          <BSListGroup.Item href="#" action active>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </BSListGroup.Item>
          <BSListGroup.Item href="#" action>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </BSListGroup.Item>
          <BSListGroup.Item href="#" action>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </BSListGroup.Item>
        </BSListGroup>
      </Card.Body>
    </Card>
  );
};
const BadgesListGroup = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">With badges</h4>
        <p className="text-muted font-14">
          Add badges to any list group item to show unread counts, activity, and
          more with the help of some utilities.
        </p>

        <BSListGroup>
          <BSListGroup.Item className="d-flex justify-content-between align-items-center">
            Gmail Emails
            <Badge bg="primary" pill>
              14
            </Badge>
          </BSListGroup.Item>
          <BSListGroup.Item className="d-flex justify-content-between align-items-center">
            Pending Payments
            <Badge bg="success" pill>
              2
            </Badge>
          </BSListGroup.Item>
          <BSListGroup.Item className="d-flex justify-content-between align-items-center">
            Action Needed
            <Badge bg="danger" pill>
              99+
            </Badge>
          </BSListGroup.Item>
          <BSListGroup.Item className="d-flex justify-content-between align-items-center">
            Payments Done
            <Badge bg="success" pill>
              20+
            </Badge>
          </BSListGroup.Item>
        </BSListGroup>
      </Card.Body>
    </Card>
  );
};
const CheckboxesandRadiosListGroup = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Checkboxes and radios</h4>
        <p className="text-muted font-14">
          Place Bootstrap’s checkboxes and radios within list group items and
          customize as needed. You can use them without{" "}
          <code>&lt;label&gt;</code>s, but please remember to include an{" "}
          <code>aria-label</code> attribute and value for accessibility.
        </p>

        <BSListGroup>
          <BSListGroup.Item>
            <input
              id="first-checkbox"
              className="form-check-input me-1"
              type="checkbox"
              value=""
              aria-label="..."
            />
            <label htmlFor="first-checkbox">First checkbox</label>
          </BSListGroup.Item>
          <BSListGroup.Item>
            <input
              id="second-checkbox"
              className="form-check-input me-1"
              type="checkbox"
              value=""
              aria-label="..."
            />
            <label htmlFor="second-checkbox">Second checkbox</label>
          </BSListGroup.Item>
        </BSListGroup>
        <BSListGroup className="mt-2">
          <BSListGroup.Item>
            <input
              id="firstRadio"
              className="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value=""
              defaultChecked
            />{" "}
            <label className="form-check-label" htmlFor="firstRadio">
              First radio
            </label>
          </BSListGroup.Item>
          <BSListGroup.Item>
            <input
              id="secondRadio"
              className="form-check-input me-1"
              type="radio"
              name="listGroupRadio"
              value=""
            />{" "}
            <label className="form-check-label" htmlFor="secondRadio">
              Second radio
            </label>
          </BSListGroup.Item>
        </BSListGroup>
      </Card.Body>
    </Card>
  );
};
const NumberedListGroup = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Numbered</h4>
        <p className="text-muted font-14">
          Numbers are generated by <code>counter-reset</code> on the{" "}
          <code>&lt;ol&gt;</code>, and then styled and placed with a{" "}
          <code>::before</code> psuedo-element on the <code>&lt;li&gt;</code>{" "}
          with <code>counter-increment</code> and <code>content</code>.
        </p>

        <BSListGroup as="ol" numbered>
          <BSListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </BSListGroup.Item>
          <BSListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </BSListGroup.Item>
          <BSListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <Badge bg="primary" pill>
              14
            </Badge>
          </BSListGroup.Item>
        </BSListGroup>
      </Card.Body>
    </Card>
  );
};
const ListGroup = () => {
  return (
    <>
      <PageBreadcrumb title="List Group" name="List Group" subName="Base UI" />
      <Row>
        <Col xl={4}>
          <Basic />
        </Col>
        <Col xl={4}>
          <ActiveItems />
        </Col>
        <Col xl={4}>
          <DisabledItems />
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <LinksButtons />
        </Col>
        <Col xl={4}>
          <FlushListGroup />
        </Col>
        <Col xl={4}>
          <HorizontalListGroup />
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <ContextualListGroup />
        </Col>
        <Col xl={4}>
          <ContextualLinksListGroup />
        </Col>
        <Col xl={4}>
          <CustomContentListGroup />
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <BadgesListGroup />
        </Col>
        <Col xl={4}>
          <CheckboxesandRadiosListGroup />
        </Col>
        <Col xl={4}>
          <NumberedListGroup />
        </Col>
      </Row>
    </>
  );
};
export default ListGroup;
