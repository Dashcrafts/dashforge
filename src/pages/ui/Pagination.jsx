import { Card, Col, Row, Pagination as BSPagination } from "react-bootstrap";

// components
import { PageBreadcrumb } from "../../components";
const DefaultPagination = () => {
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(<BSPagination.Item key={number}>{number}</BSPagination.Item>);
  }
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Default Pagination</h4>
        <p className="text-muted font-14">
          Simple pagination inspired by Rdio, great for apps and search results.
        </p>
        <nav>
          <BSPagination className="mb-0">
            <BSPagination.Prev />
            {items}
            <BSPagination.Next />
          </BSPagination>
        </nav>
      </Card.Body>
    </Card>
  );
};
const PaginationWithStates = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Disabled and active states</h4>
        <p className="text-muted font-14">
          Pagination links are customizable for different circumstances. Use{" "}
          <code>.disabled</code> for links that appear un-clickable and{" "}
          <code>.active</code> to indicate the current page.
        </p>

        <nav aria-label="...">
          <BSPagination className="mb-0">
            <BSPagination.Prev disabled>Previous</BSPagination.Prev>
            <BSPagination.Item>{1}</BSPagination.Item>
            <BSPagination.Item active>{2}</BSPagination.Item>
            <BSPagination.Item>{3}</BSPagination.Item>
            <BSPagination.Next>Next</BSPagination.Next>
          </BSPagination>
        </nav>
      </Card.Body>
    </Card>
  );
};
const PaginationAlignment = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Alignment</h4>
        <p className="text-muted font-14">
          Change the alignment of pagination components with flexbox utilities.
        </p>

        <nav aria-label="Page navigation example">
          <BSPagination className="justify-content-center">
            <BSPagination.Prev disabled>Previous</BSPagination.Prev>
            <BSPagination.Item>{1}</BSPagination.Item>
            <BSPagination.Item>{2}</BSPagination.Item>
            <BSPagination.Item>{3}</BSPagination.Item>
            <BSPagination.Next>Next</BSPagination.Next>
          </BSPagination>
        </nav>
        <nav aria-label="Page navigation example">
          <BSPagination className="justify-content-end">
            <BSPagination.Prev disabled>Previous</BSPagination.Prev>
            <BSPagination.Item>{1}</BSPagination.Item>
            <BSPagination.Item>{2}</BSPagination.Item>
            <BSPagination.Item>{3}</BSPagination.Item>
            <BSPagination.Next>Next</BSPagination.Next>
          </BSPagination>
        </nav>
      </Card.Body>
    </Card>
  );
};
const RoundedPagination = () => {
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <BSPagination.Item key={number} active={number === 3}>
        {number}
      </BSPagination.Item>
    );
  }
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Rounded Pagination</h4>
        <p className="text-muted font-14">
          Add <code> .pagination-rounded</code> for rounded pagination.
        </p>
        <nav>
          <BSPagination className="pagination-rounded mb-0">
            <BSPagination.Prev />
            {items}
            <BSPagination.Next />
          </BSPagination>
        </nav>
      </Card.Body>
    </Card>
  );
};
const PaginationSizes = () => {
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(<BSPagination.Item key={number}>{number}</BSPagination.Item>);
  }
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Sizing</h4>
        <p className="text-muted font-14">
          Add <code> .pagination-lg</code> or <code> .pagination-sm</code> for
          additional sizes.
        </p>

        <nav>
          <BSPagination size="lg">
            <BSPagination.Prev />
            {items}
            <BSPagination.Next />
          </BSPagination>
          <BSPagination size="sm" className="mb-0">
            <BSPagination.Prev />
            {items}
            <BSPagination.Next />
          </BSPagination>
        </nav>
      </Card.Body>
    </Card>
  );
};
const Pagination = () => {
  return (
    <>
      <PageBreadcrumb title="Pagination" name="Pagination" subName="Base UI" />

      <Row>
        <Col xl={6}>
          <DefaultPagination />
          <PaginationWithStates />
          <PaginationAlignment />
        </Col>
        <Col xl={6}>
          <RoundedPagination />
          <PaginationSizes />
        </Col>
      </Row>
    </>
  );
};
export default Pagination;
