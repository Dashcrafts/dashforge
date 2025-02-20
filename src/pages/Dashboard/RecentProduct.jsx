import { Card, Dropdown, Table } from "react-bootstrap";
const RecentProduct = ({ recentProducts }) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Dropdown className="float-end">
            <Dropdown.Toggle
              as="a"
              href="#"
              className="arrow-none card-drop"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="mdi mdi-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item href="#">Sales Report</Dropdown.Item>
              <Dropdown.Item href="#">Export Report</Dropdown.Item>
              <Dropdown.Item href="#">Profit</Dropdown.Item>
              <Dropdown.Item href="#">Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h4 className="header-title mb-3">Recent Product</h4>

          <div className="table-responsive">
            <Table hover align="center" className="mb-0">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {(recentProducts || []).map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{item.productName}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <span
                          className={`${
                            item.status === "Active"
                              ? "text-success border-success"
                              : item.status === "Pending"
                              ? "text-warning border-warning"
                              : item.status === "Progress"
                              ? "text-info border-info"
                              : "text-primary border-primary"
                          } badge border`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td>{item.amount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default RecentProduct;
