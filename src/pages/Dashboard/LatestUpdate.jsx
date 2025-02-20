import { Card, Dropdown } from "react-bootstrap";
const LatestUpdate = ({ latestUpdate }) => {
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
          <h4 className="header-title mb-3">Latest Update</h4>

          {(latestUpdate || []).map((item, idx) => {
            return (
              <div
                key={idx}
                className={`align-items-center ${
                  idx === latestUpdate.length - 1
                    ? "pt-2 mt-1"
                    : idx === 0
                    ? "border-bottom border-light pb-2 mb-1"
                    : "border-bottom border-light py-2 my-1"
                }`}
              >
                <h3 className="float-end my-2 py-1">{item.count}</h3>
                <div className="d-flex align-items-center">
                  <div className={`avatar-md rounded-circle ${item.bgColor}`}>
                    <i
                      className={`${item.icon} font-26 avatar-title ${item.variant}`}
                    ></i>
                  </div>
                  <div className="ms-2">
                    <h5 className="mb-1 mt-0 fw-bold">{item.title}</h5>
                    <p className=" mb-0">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </>
  );
};
export default LatestUpdate;
