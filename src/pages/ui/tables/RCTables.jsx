import { Card, Col, Row } from "react-bootstrap";
import { PageBreadcrumb } from "../../../components";
import Table from "rc-table";
import { RCTableColumn, employeeRecords } from "./data";
const RCTables = () => {
  return (
    <>
      <PageBreadcrumb name="RCTable" subName="Tables" title="RCTable" />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <div className="responsive-table-plugin">
                <div className="table-rep-plugin">
                  <div
                    className="table-responsive"
                    data-pattern="priority-columns"
                  >
                    <Table columns={RCTableColumn} data={employeeRecords} />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default RCTables;
