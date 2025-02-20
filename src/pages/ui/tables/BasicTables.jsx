import { Card, Col, Row, Table } from "react-bootstrap";

// components
import { PageBreadcrumb } from "../../../components";

//dummay data
import { nestedRecords, records } from "./data";
import React from "react";
const BasicTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Basic example</h4>
        <p className="sub-header font-13">
          For basic styling—light padding and only horizontal dividers—add the
          base class <code>.table</code> to any <code>&lt;table&gt;</code>.
        </p>

        <div className="table-responsive">
          <Table className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const InverseTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Inverse table</h4>
        <p className="sub-header font-13">
          You can also invert the colors—with light text on dark
          backgrounds—with{" "}
          <code className="highlighter-rouge">.table-dark</code>.
        </p>

        <div className="table-responsive">
          <Table variant="dark" className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const TableHeadOptions = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Table head options</h4>
        <p className="sub-header font-13">
          Use one of two modifier classes to make <code>&lt;thead&gt;</code>s
          appear light or dark gray.
        </p>

        <div className="table-responsive">
          <Table className="mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const StripedRows = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Striped rows</h4>
        <p className="sub-header font-13">
          Use <code>.table-striped</code> to add zebra-striping to any table row
          within the <code>&lt;tbody&gt;</code>.
        </p>

        <div className="table-responsive">
          <Table striped className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const BorderedTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Bordered table</h4>
        <p className="sub-header font-13">
          Add <code>.table-bordered</code> for borders on all sides of the table
          and cells.
        </p>

        <div className="table-responsive">
          <Table bordered className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
              <tr>
                <th scope="row">4</th>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const BorderedColorTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Bordered color table</h4>
        <p className="sub-header font-13">
          Add <code>.table-bordered</code> for borders on all sides of the table
          and cells.
        </p>

        <div className="table-responsive">
          <Table bordered className="border-primary mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
              <tr>
                <th scope="row">4</th>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const SmallTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Small table</h4>
        <p className="sub-header font-13">
          Add <code>.table-sm</code> to make tables more compact by cutting cell
          padding in half.
        </p>

        <div className="table-responsive">
          <Table size="sm" className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}

              <tr>
                <th scope="row">4</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
export const ContextualclassesTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Contextual classes</h4>
        <p className="sub-header font-13">
          Use contextual classes to color table rows or individual cells.
        </p>

        <div className="table-responsive">
          <Table className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Column heading</th>
                <th>Column heading</th>
                <th>Column heading</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-active">
                <th scope="row">1</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr className="table-success">
                <th scope="row">3</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const TableHeadOptions2 = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Table head options</h4>
        <p className="sub-header font-13">
          Similar to tables and dark tables, use the modifier classes{" "}
          <code className="highlighter-rouge">.table-light</code> or{" "}
          <code className="highlighter-rouge">.table-dark</code> to make{" "}
          <code className="highlighter-rouge">&lt;thead&gt;</code>s appear light
          or dark gray.
        </p>

        <div className="table-responsive">
          <Table className="mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const ContextualWithBackgroundColor = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">
          Contextual classes with Background color
        </h4>
        <p className="sub-header font-13">
          You can also invert the colors—with light text on dark
          backgrounds—with{" "}
          <code className="highlighter-rouge">.table-dark</code>.
        </p>

        <div className="table-responsive">
          <Table variant="dark" className="text-white mb-0">
            <thead>
              <tr className="">
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const BorderlessTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Borderless table</h4>
        <p className="sub-header font-13">
          For basic styling—light padding and only horizontal dividers—add the
          base class <code>.table</code> to any <code>&lt;table&gt;</code>.
        </p>

        <div className="table-responsive">
          <Table borderless className="mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const BorderlessInverseTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Borderless Inverse table</h4>
        <p className="sub-header font-13">
          Your awesome text goes here.Your awesome text goes here.
        </p>

        <div className="table-responsive">
          <Table variant="dark" borderless className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const HoverableRows = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Hoverable rows</h4>
        <p className="sub-header font-13">
          Create responsive tables by wrapping any <code>.table</code> in{" "}
          <code>.table-responsive</code>
          to make them scroll horizontally on small devices (under 768px).
        </p>

        <div className="table-responsive">
          <Table hover className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const ActiveTables = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Active tables</h4>
        <p className="sub-header font-13">
          Highlight a table row or cell by adding a <code>.table-active</code>{" "}
          class.
        </p>

        <div className="table-responsive">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-active">
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan={2} className="table-active">
                  Larry the Bird
                </td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const NestedTable = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Nesting</h4>
        <p className="sub-header font-13">
          Border styles, active styles, and table variants are not inherited by
          nested tables.
        </p>

        <div className="table-responsive">
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(nestedRecords || []).map((record, idx) => {
                return record.children ? (
                  <React.Fragment key={idx}>
                    <tr>
                      <th scope="row">{record.id}</th>
                      <td>{record.firstName}</td>
                      <td>{record.lastName}</td>
                      <td>{record.userName}</td>
                    </tr>

                    <tr key={idx}>
                      <td colSpan={4}>
                        <Table className="mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            {(record.children || []).map((record, idx) => {
                              return (
                                <tr key={idx}>
                                  <th scope="row">{record.id}</th>
                                  <td>{record.firstName}</td>
                                  <td>{record.lastName}</td>
                                  <td>{record.userName}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </td>
                    </tr>
                  </React.Fragment>
                ) : (
                  <tr key={idx}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const TableWithFooter = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mb-4">Table foot</h4>

        <div className="table-responsive">
          <Table className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, idx) => {
                return (
                  <tr key={idx}>
                    <th scope="row">{record.id}</th>
                    <td>{record.firstName}</td>
                    <td>{record.lastName}</td>
                    <td>{record.userName}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Footer</th>
                <td>Footer</td>
                <td>Footer</td>
                <td>Footer</td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};
const BasicTables = () => {
  return (
    <>
      <PageBreadcrumb
        name="Basic Tables"
        title="Basic Tables"
        subName="Tables"
      />
      <Row>
        <Col lg={6}>
          <BasicTable />
        </Col>
        <Col lg={6}>
          <InverseTable />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <TableHeadOptions />
        </Col>
        <Col lg={6}>
          <StripedRows />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <BorderedTable />
        </Col>
        <Col lg={6}>
          <BorderedColorTable />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <SmallTable />
        </Col>
        <Col lg={6}>
          <ContextualclassesTable />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <TableHeadOptions2 />
        </Col>
        <Col lg={6}>
          <ContextualWithBackgroundColor />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <BorderlessTable />
        </Col>
        <Col lg={6}>
          <BorderlessInverseTable />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <HoverableRows />
        </Col>
        <Col lg={6}>
          <ActiveTables />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <NestedTable />
        </Col>
        <Col lg={6}>
          <TableWithFooter />
        </Col>
      </Row>
    </>
  );
};
export default BasicTables;
