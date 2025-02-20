import { Button, Card, Col, Row } from "react-bootstrap";
import { PageBreadcrumb } from "../../components";
const FAQ = () => {
  return (
    <>
      <PageBreadcrumb name="FAQs" title="FAQs" subName="Extras" />

      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={12}>
                  <div className="text-center">
                    <i className="h1 mdi mdi-comment-multiple-outline text-muted"></i>
                    <h4 className="mb-3">Frequently Asked Questions</h4>
                    <p className="text-muted">
                      {" "}
                      Nisi praesentium similique totam odio obcaecati,
                      reprehenderit, dignissimos rem temporibus ea inventore
                      alias!
                      <br /> Beatae animi nemo ea tempora, temporibus laborum
                      facilis ut!
                    </p>
                    <Button
                      type="button"
                      variant="success"
                      className="mt-2 me-1"
                    >
                      <i className="mdi mdi-email-outline me-1"></i> Email us
                      your question
                    </Button>
                    &nbsp;
                    <Button type="button" variant="primary" className="mt-2">
                      <i className="mdi mdi-twitter me-1"></i> Send us a tweet
                    </Button>
                  </div>
                </Col>
              </Row>

              <Row className="pt-5">
                <Col lg={5} className="offset-lg-1">
                  <div>
                    <div className="faq-question-q-box">Q.</div>
                    <h4 className="faq-question font-14" data-wow-delay=".1s">
                      What is Lorem Ipsum?
                    </h4>
                    <p className="faq-answer mb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>

                  <div>
                    <div className="faq-question-q-box">Q.</div>
                    <h4 className="faq-question font-14">
                      Why use Lorem Ipsum?
                    </h4>
                    <p className="faq-answer mb-4">
                      Lorem ipsum dolor sit amet, in mea nonumes dissentias
                      dissentiunt, pro te solet oratio iriure. Cu sit consetetur
                      moderatius intellegam, ius decore accusamus te. Ne primis
                      suavitate disputando nam. Mutat convenirete.
                    </p>
                  </div>

                  <div>
                    <div className="faq-question-q-box">Q.</div>
                    <h4 className="faq-question font-14">
                      How many variations exist?
                    </h4>
                    <p className="faq-answer mb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>

                  <div>
                    <div className="faq-question-q-box">Q.</div>
                    <h4 className="faq-question font-14" data-wow-delay=".1s">
                      What is Lorem Ipsum?
                    </h4>
                    <p className="faq-answer mb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </Col>

                <Col lg={5}>
                  <div>
                    <div className="faq-question-q-box">Q.</div>
                    <h4 className="faq-question font-14">
                      Is safe use Lorem Ipsum?
                    </h4>
                    <p className="faq-answer mb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>

                  <div>
                    <div className="faq-question-q-box">Q.</div>
                    <h4 className="faq-question font-14">When can be used?</h4>
                    <p className="faq-answer mb-4">
                      Lorem ipsum dolor sit amet, in mea nonumes dissentias
                      dissentiunt, pro te solet oratio iriure. Cu sit consetetur
                      moderatius intellegam, ius decore accusamus te. Ne primis
                      suavitate disputando nam. Mutat convenirete.
                    </p>
                  </div>

                  <div>
                    <div className="faq-question-q-box">Q.</div>
                    <h4 className="faq-question font-14">
                      License &amp; Copyright
                    </h4>
                    <p className="faq-answer mb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>

                  <div>
                    <div className="faq-question-q-box">Q.</div>
                    <h4 className="faq-question font-14">
                      Is safe use Lorem Ipsum?
                    </h4>
                    <p className="faq-answer mb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default FAQ;
