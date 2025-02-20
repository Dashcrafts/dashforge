// images
import { Card, Col, Image, Row } from "react-bootstrap";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar9 from "../../assets/images/users/avatar-9.jpg";
import img2 from "../../assets/images/small/small-2.jpg";
import img3 from "../../assets/images/small/small-3.jpg";
import { PageBreadcrumb } from "../../components";
const Avatars = () => {
  return (
    <>
      <PageBreadcrumb title="Avatars" name="Avatars" subName="Base UI" />
      <Row>
        <Col xxl={6}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Sizing - Images</h4>
              <p className="text-muted font-14 mb-3">
                Create and group avatars of different sizes and shapes with the
                css classes. Using Bootstrap's naming convention, you can
                control size of avatar including standard avatar, or scale it up
                to different sizes.
              </p>

              <Row>
                <Col md={3}>
                  <Image
                    src={avatar2}
                    alt="image"
                    className="img-fluid avatar-xs rounded"
                  />
                  <p>
                    <code>.avatar-xs</code>
                  </p>
                  <Image
                    src={avatar3}
                    alt="image"
                    className="img-fluid avatar-sm rounded mt-2"
                  />
                  <p className="mb-2 mb-sm-0">
                    <code>.avatar-sm</code>
                  </p>
                </Col>
                <Col md={3}>
                  <Image
                    src={avatar4}
                    alt="image"
                    className="img-fluid avatar-md rounded"
                  />
                  <p>
                    <code>.avatar-md</code>
                  </p>
                </Col>

                <Col md={3}>
                  <Image
                    src={avatar5}
                    alt="image"
                    className="img-fluid avatar-lg rounded"
                  />
                  <p>
                    <code>.avatar-lg</code>
                  </p>
                </Col>

                <Col md={3}>
                  <Image
                    src={avatar6}
                    alt="image"
                    className="img-fluid avatar-xl rounded"
                  />
                  <p className="mb-0">
                    <code>.avatar-xl</code>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={6}>
          <Card>
            <div className="card-body">
              <h4 className="header-title">Rounded Circle</h4>
              <p className="text-muted font-14 mb-3">
                Using an additional class <code>.rounded-circle</code> in{" "}
                <code>&lt;img&gt;</code> element creates the rounded avatar.
              </p>

              <Row>
                <Col md={4}>
                  <Image
                    src={avatar7}
                    alt="image"
                    className="img-fluid avatar-md rounded-circle"
                  />
                  <p className="mt-1">
                    <code>.avatar-md .rounded-circle</code>
                  </p>
                </Col>

                <Col md={4}>
                  <Image
                    src={avatar8}
                    alt="image"
                    className="img-fluid avatar-lg rounded-circle"
                  />
                  <p>
                    <code>.avatar-lg .rounded-circle</code>
                  </p>
                </Col>

                <Col md={4}>
                  <Image
                    src={avatar9}
                    alt="image"
                    className="img-fluid avatar-xl rounded-circle"
                  />
                  <p className="mb-0">
                    <code>.avatar-xl .rounded-circle</code>
                  </p>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xxl={6}>
          <Card>
            <div className="card-body">
              <h4 className="header-title">Sizing - Background Color</h4>
              <p className="text-muted font-14 mb-3">
                Using utilities classes of background e.g. <code>bg-*</code>{" "}
                allows you to have any background color as well.
              </p>

              <Row>
                <Col md={3}>
                  <div className="avatar-xs">
                    <span className="avatar-title bg-primary rounded">xs</span>
                  </div>
                  <p className="mb-2 font-14 mt-1">
                    Using <code>.avatar-xs</code>
                  </p>

                  <div className="avatar-sm mt-3">
                    <span className="avatar-title bg-success rounded">sm</span>
                  </div>

                  <p className="mb-0 font-14 mt-1">
                    Using <code>.avatar-sm</code>
                  </p>
                </Col>
                <Col md={3}>
                  <div className="avatar-md">
                    <span className="avatar-title bg-soft-info text-info font-20 rounded">
                      MD
                    </span>
                  </div>

                  <p className="mb-0 font-14 mt-1">
                    Using <code>.avatar-md</code>
                  </p>
                </Col>

                <Col md={3}>
                  <div className="avatar-lg">
                    <span className="avatar-title bg-danger font-22 rounded">
                      LG
                    </span>
                  </div>

                  <p className="mb-0 font-14 mt-1">
                    Using <code>.avatar-lg</code>
                  </p>
                </Col>

                <Col md={3}>
                  <div className="avatar-xl">
                    <span className="avatar-title bg-soft-warning text-warning font-24 rounded">
                      XL
                    </span>
                  </div>

                  <p className="mb-0 font-14 mt-1">
                    Using <code>.avatar-xl</code>
                  </p>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col xxl={6}>
          <Card>
            <div className="card-body">
              <h4 className="header-title">Rounded Circle Background</h4>
              <p className="text-muted font-14 mb-3">
                Using an additional class <code>.rounded-circle</code> in{" "}
                <code>&lt;img&gt;</code> element creates the rounded avatar.
              </p>

              <Row>
                <Col md={4}>
                  <div className="avatar-md">
                    <span className="avatar-title bg-soft-secondary text-secondary font-20 rounded-circle">
                      MD
                    </span>
                  </div>

                  <p className="mb-0 font-14 mt-1">
                    Using <code>.avatar-md .rounded-circle</code>
                  </p>
                </Col>

                <Col md={4}>
                  <div className="avatar-lg">
                    <span className="avatar-title bg-light text-dark font-22 rounded-circle">
                      LG
                    </span>
                  </div>

                  <p className="mb-0 font-14 mt-1">
                    Using <code>.avatar-lg .rounded-circle</code>
                  </p>
                </Col>

                <Col md={4}>
                  <div className="avatar-xl">
                    <span className="avatar-title bg-soft-primary text-primary font-24 rounded-circle">
                      XL
                    </span>
                  </div>

                  <p className="mb-0 font-14 mt-1">
                    Using <code>.avatar-xl .rounded-circle</code>
                  </p>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Card>
            <div className="card-body">
              <h4 className="header-title">Images shapes</h4>
              <p className="text-muted font-14 mb-3">
                Avatars with different sizes and shapes.
              </p>

              <Row>
                <Col sm={2}>
                  <Image
                    src={img2}
                    alt="image"
                    className="img-fluid rounded"
                    width="200"
                  />
                  <p className="mb-0">
                    <code>.rounded</code>
                  </p>
                </Col>

                <Col sm={2} className=" text-center">
                  <Image
                    src={avatar6}
                    alt="image"
                    className="img-fluid rounded"
                    width="120"
                  />
                  <p className="mb-0">
                    <code>.rounded</code>
                  </p>
                </Col>

                <Col sm={2} className=" text-center">
                  <Image
                    src={avatar7}
                    alt="image"
                    className="img-fluid rounded-circle"
                    width="120"
                  />
                  <p className="mb-0">
                    <code>.rounded-circle</code>
                  </p>
                </Col>

                <Col sm={2}>
                  <Image
                    src={img3}
                    alt="image"
                    className="img-fluid img-thumbnail"
                    width="200"
                  />
                  <p className="mb-0">
                    <code>.img-thumbnail</code>
                  </p>
                </Col>
                <Col sm={2}>
                  <Image
                    src={avatar8}
                    alt="image"
                    className="img-fluid rounded-circle img-thumbnail"
                    width="120"
                  />
                  <p className="mb-0">
                    <code>.rounded-circle .img-thumbnail</code>
                  </p>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Avatars;
