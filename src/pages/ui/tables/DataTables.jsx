import { Card, Col, Row } from "react-bootstrap";
import { PageBreadcrumb } from "@/components";
import { employeeRecords, expandableRecords } from "./data";
import { Table } from "@/components/table";
const columns = [
  {
    Header: "ID",
    accessor: "id",
    defaultCanSort: true,
  },
  {
    Header: "Name",
    accessor: "name",
    defaultCanSort: true,
  },
  {
    Header: "Phone Number",
    accessor: "phone",
    defaultCanSort: false,
  },
  {
    Header: "Age",
    accessor: "age",
    defaultCanSort: true,
  },
  {
    Header: "Company",
    accessor: "company",
    defaultCanSort: false,
  },
];
const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: employeeRecords.length,
  },
];
const DataTables = () => {
  return (
    <>
      <PageBreadcrumb name="Data Tables" subName="Tables" title="Data Tables" />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Pagination &amp; Sort</h4>
              <p className="text-muted font-14">
                A simple example of table with pagination and column sorting
              </p>

              <Table
                columns={columns}
                data={employeeRecords}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Multiple Row Selection</h4>
              <p className="text-muted font-14">
                This table allowing selection of multiple rows
              </p>

              <Table
                columns={columns}
                data={employeeRecords}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSelectable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Expand Row</h4>
              <p className="text-muted font-14">
                Expand row to see more additional details
              </p>

              <Table
                columns={columns}
                data={expandableRecords}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isExpandable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default DataTables;
