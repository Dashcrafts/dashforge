import { Card, Dropdown } from "react-bootstrap";
import { ProductLicenseWidget } from "./Components";
const ProductLicense = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Dropdown className="float-end">
            <Dropdown.Toggle as="a" href="#" className="arrow-none card-drop">
              <i className="mdi mdi-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item href="#">Sales Report</Dropdown.Item>
              <Dropdown.Item href="#">Export Report</Dropdown.Item>
              <Dropdown.Item href="#">Profit</Dropdown.Item>
              <Dropdown.Item href="#">Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h4 className="header-title mb-3">Product License</h4>
          <div className="position-relative">
            <ProductLicenseWidget
              title="Standard"
              subtitle="Single Site"
              progress={30}
              variant="info"
            />
            <ProductLicenseWidget
              title="Multisite"
              subtitle="Unlimited sites"
              progress={60}
              variant="warning"
              className="mt-2"
            />
            <ProductLicenseWidget
              title="Extended"
              subtitle="For paying users"
              progress={85}
              variant="danger"
              className="mt-2"
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default ProductLicense;
