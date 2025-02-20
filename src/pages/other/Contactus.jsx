import { Button, Card, Col, Row } from "react-bootstrap";
import { PageBreadcrumb, FormInput } from "../../components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Contactus = () => {
  /*
   * form methods
   */
  const methods = useForm({
    defaultValues: {
      password: "password",
      statictext: "email@example.com",
      color: "#727cf5",
    },
  });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;
  return (
    <>
      <PageBreadcrumb name="Contact" subName="Extras" title="Contact" />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Row className="justify-content-center">
                <Col xl={3} md={4}>
                  <div className="text-center">
                    <div className=" bg-soft-primary border border-primary avatar-lg mb-3 rounded-circle mx-auto">
                      <i className="dripicons-user avatar-title text-primary h2 m-0"></i>
                    </div>
                    <p className="font-15">
                      795 Folsom Ave, Suite 600
                      <br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </Col>
                <Col xl={3} md={4}>
                  <div className="text-center">
                    <div className=" bg-soft-primary border border-primary avatar-lg mb-3 rounded-circle mx-auto">
                      <i className="dripicons-phone avatar-title text-primary h2 m-0"></i>
                    </div>
                    <p className="font-15">(120) 456-789-123</p>
                  </div>
                </Col>
                <Col xl={3} md={4}>
                  <div className="text-center">
                    <div className=" bg-soft-primary border border-primary avatar-lg mb-3 rounded-circle mx-auto">
                      <i className="dripicons-message avatar-title text-primary h2 m-0"></i>
                    </div>
                    <p className="font-15">
                      <Link to="">support@yourmail.com</Link>
                    </p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Row>
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col lg={6}>
                      <div className="contact-map">
                        <iframe
                          src="https://www.google.com/maps/embed/v1/place?q=New+York+University&key=AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4"
                          title="googlr-map"
                          style={{
                            width: "100%",
                            height: 400,
                            overflow: "hidden",
                            border: 0,
                          }}
                        ></iframe>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <form
                        onSubmit={handleSubmit(() => {})}
                        name="ajax-form"
                        action="#"
                        method="post"
                        className="contact-form mt-4 mt-lg-0"
                        data-parsley-validate=""
                        noValidate
                      >
                        <Row>
                          <Col md={6}>
                            <FormInput
                              label="First Name"
                              type="text"
                              name="text"
                              className="form-control"
                              placeholder="First name"
                              containerClass="mb-3"
                              register={register}
                              key="text1"
                              errors={errors}
                              control={control}
                            />
                          </Col>
                          <Col md={6}>
                            <FormInput
                              label="Last Name"
                              type="text"
                              name="text"
                              placeholder="Last name"
                              containerClass="mb-3"
                              register={register}
                              key="text2"
                              className="form-control"
                              errors={errors}
                              control={control}
                            />
                          </Col>
                          <Col xs={12}>
                            <FormInput
                              label="Your Email"
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Your email"
                              containerClass="mb-3"
                              register={register}
                              key="email"
                              errors={errors}
                              control={control}
                            />
                          </Col>

                          <Col xs={12}>
                            <FormInput
                              label="Message"
                              type="textarea"
                              name="textarea"
                              rows={6}
                              className="form-control"
                              placeholder="Message"
                              containerClass="mb-3"
                              register={register}
                              key="textarea"
                              errors={errors}
                              control={control}
                            />
                          </Col>
                        </Row>

                        <Button variant="primary" id="send">
                          Submit
                        </Button>
                      </form>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Contactus;
