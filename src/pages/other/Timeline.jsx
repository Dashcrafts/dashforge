import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

// components
import { PageBreadcrumb } from "../../components";

//images
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
const Timeline = () => {
  const timelineData = {
    Today: [
      {
        date: "1 hour ago",
        time: "08:25 am",
        text: "Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?",
      },
      {
        date: "2 hours ago",
        time: "08:25 am",
        text: "consectetur adipisicing elit. Iusto, optio, dolorum John deon provident rerum aut hic quasi placeat iure tempora laudantium",
      },
      {
        date: "10 hours ago",
        time: "08:25 am",
        text: "3 new photo Uploaded on facebook fan page",
        images: [img1, img2, img3],
      },
      {
        date: "14 hours ago",
        time: "08:25 am",
        text: "Outdoor visit at California State Route 85 with John Boltana & Harry Piterson regarding to setup a new show room.",
      },
      {
        date: "19 hours ago",
        time: "08:25 am",
        text: "Jonatha Smith added new milestone crishtianLorem ipsum dolor sit amet consiquest dio",
      },
    ],
    Yesterday: [
      {
        date: "07 January 2018",
        time: "08:25 am",
        text: "Montly Regular Medical check up at Greenland Hospital by the doctor Johm meon",
      },
      {
        date: "07 January 2018",
        time: "08:25 am",
        text: "Download the new updates of Dashforge admin dashboard",
      },
      {
        date: "07 January 2018",
        time: "08:25 am",
        text: "Jonatha Smith added new milestone crishtianLorem ipsum dolor sit amet consiquest dio",
      },
    ],
    LastMonth: [
      {
        date: "31 December 2017",
        time: "08:25 am",
        text: "Download the new updates of Dashforge admin dashboard",
      },
      {
        date: "16 Decembar 2017",
        time: "08:25 am",
        text: "Jonatha Smith added new milestone prankLorem ipsum dolor sit amet consiquest dio",
      },
    ],
  };
  return (
    <>
      <PageBreadcrumb name="Timeline" title="Timeline" subName="Extras" />
      <Row>
        <Col xs={12}>
          <div className="timeline">
            {Object.keys(timelineData).map((day, idx) => {
              return (
                <Fragment key={idx}>
                  <article className="timeline-item">
                    <h2 className="m-0 d-none">&nbsp;</h2>
                    <div className="time-show mt-0">
                      <Link to="#" className="btn btn-primary width-lg">
                        {day}
                      </Link>
                    </div>
                  </article>

                  {(timelineData[day] || []).map((item, idx) => {
                    return idx % 2 === 0 ? (
                      <article
                        key={idx}
                        className="timeline-item timeline-item-left"
                      >
                        <div className="timeline-desk">
                          <div className="timeline-box">
                            <span className="arrow-alt"></span>
                            <span className="timeline-icon">
                              <i className="mdi mdi-adjust"></i>
                            </span>
                            <h4 className="mt-0 font-15">{item.date}</h4>
                            <p className="text-muted">
                              <small>{item.time}</small>
                            </p>
                            <p className="mb-0">{item.text}</p>
                            {item.images && (
                              <div className="timeline-album">
                                {(item.images || []).map((img, idx) => {
                                  return (
                                    <Link to="#" key={idx}>
                                      <img alt="" src={img} />
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </article>
                    ) : (
                      <article key={idx} className="timeline-item">
                        <div className="timeline-desk">
                          <div className="timeline-box">
                            <span className="arrow"></span>
                            <span className="timeline-icon">
                              <i className="mdi mdi-adjust"></i>
                            </span>
                            <h4 className="mt-0 font-15">{item.date}</h4>
                            <p className=" text-muted">
                              <small>{item.time}</small>
                            </p>
                            <p className="mb-0">{item.text}</p>
                            {item.images && (
                              <div className="timeline-album">
                                {(item.images || []).map((img, idx) => {
                                  return (
                                    <Link to="#" key={idx}>
                                      <img alt="" src={img} />
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </Fragment>
              );
            })}
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Timeline;
