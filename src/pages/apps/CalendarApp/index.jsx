import { Button, Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import "@fullcalendar/react";
import { Draggable } from "@fullcalendar/interaction";
import { defaultEvents } from "./data";
import Calendar from "./Calendar";
import AddEditEvent from "./AddEditEvent";
import { PageBreadcrumb } from "../../../components";
const SidePanel = () => {
  // external events
  const externalEvents = [
    {
      id: 1,
      variant: "bg-success",
      title: "New Theme Release",
    },
    {
      id: 2,
      variant: "bg-info",
      title: "My Event",
    },
    {
      id: 3,
      variant: "bg-warning",
      title: "Meet manager",
    },
    {
      id: 4,
      variant: "bg-danger",
      title: "Create New theme",
    },
  ];
  return (
    <>
      <div id="external-events">
        <br />
        <p className="text-muted">
          Drag and drop your event or click in the calendar
        </p>

        {(externalEvents || []).map((event, idx) => {
          return (
            <div
              key={idx}
              className={`external-event ${event.variant}`}
              title={event.title}
              data-class={event.variant}
            >
              <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle"></i>
              {event.title}
            </div>
          );
        })}
      </div>
    </>
  );
};
const CalendarApp = () => {
  /*
   * modal handeling
   */
  const [show, setShow] = useState(false);
  const onCloseModal = () => {
    setShow(false);
    setEventData({});
    setDateInfo({});
  };
  const onOpenModal = () => setShow(true);
  const [isEditable, setIsEditable] = useState(false);

  /*
   * event data
   */
  const [events, setEvents] = useState([...defaultEvents]);
  const [eventData, setEventData] = useState({});
  const [dateInfo, setDateInfo] = useState({});
  useEffect(() => {
    // create dragable events
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".external-event",
    });
  }, []);

  /*
    calendar events
    */
  // on date click
  const onDateClick = (arg) => {
    setDateInfo(arg);
    onOpenModal();
    setIsEditable(false);
  };

  // on event click
  const onEventClick = (arg) => {
    const event = {
      id: String(arg.event.id),
      title: arg.event.title,
      className: arg.event.classNames[0],
    };
    setEventData(event);
    setIsEditable(true);
    onOpenModal();
  };

  // on drop
  const onDrop = (arg) => {
    const dropEventData = arg;
    const title = dropEventData.draggedEl.title;
    if (title == null) {
    } else {
      let newEvent = {
        id: String(events.length + 1),
        title: title,
        start: dropEventData ? dropEventData.dateStr : new Date(),
        className: dropEventData.draggedEl.attributes["data-class"]["value"],
      };
      const modifiedEvents = [...events];
      modifiedEvents.push(newEvent);
      setEvents(modifiedEvents);
    }
  };

  /*
    on add event 
    */
  const onAddEvent = (data) => {
    const modifiedEvents = [...events];
    const event = {
      id: String(modifiedEvents.length + 1),
      title: data.title,
      start: Object.keys(dateInfo).length !== 0 ? dateInfo.date : new Date(),
      className: data.className,
    };
    modifiedEvents.push(event);
    setEvents(modifiedEvents);
    onCloseModal();
  };

  /*
    on update event
    */
  const onUpdateEvent = (data) => {
    const modifiedEvents = [...events];
    const idx = modifiedEvents.findIndex((e) => e["id"] === eventData.id);
    modifiedEvents[idx]["title"] = data.title;
    modifiedEvents[idx]["className"] = data.className;
    setEvents(modifiedEvents);
    onCloseModal();
    setIsEditable(false);
  };

  /*
    on remove event
    */
  const onRemoveEvent = () => {
    var modifiedEvents = [...events];
    const idx = modifiedEvents.findIndex((e) => e["id"] === eventData.id);
    modifiedEvents.splice(idx, 1);
    setEvents(modifiedEvents);
    onCloseModal();
  };

  /**
   * on event drop
   */
  const onEventDrop = (arg) => {
    const modifiedEvents = [...events];
    const idx = modifiedEvents.findIndex((e) => e["id"] === arg.event.id);
    modifiedEvents[idx]["title"] = arg.event.title;
    modifiedEvents[idx]["className"] = arg.event.classNames;
    modifiedEvents[idx]["start"] = arg.event.start;
    modifiedEvents[idx]["end"] = arg.event.end;
    setEvents(modifiedEvents);
    setIsEditable(false);
  };

  // create new event
  const createNewEvent = () => {
    setIsEditable(false);
    onOpenModal();
  };
  return (
    <>
      <PageBreadcrumb name="Calendar" subName="Apps" title="Calendar" />
      <Row>
        <Col xs={12}>
          {/* <Card>
            <Card.Body> */}
          <Row>
            <Col lg={3}>
              <Card>
                <Card.Body>
                  <Button
                    size="lg"
                    variant="primary"
                    className="font-16 w-100"
                    onClick={createNewEvent}
                  >
                    <i className="mdi mdi-plus-circle-outline"></i> Create New
                    Event
                  </Button>

                  <SidePanel />
                </Card.Body>
              </Card>
            </Col>

            <Col lg={9}>
              <Card>
                <Card.Body>
                  {/* fullcalendar control */}
                  <Calendar
                    onDateClick={onDateClick}
                    onEventClick={onEventClick}
                    onDrop={onDrop}
                    onEventDrop={onEventDrop}
                    events={events}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* </Card.Body>
           </Card> */}
        </Col>
      </Row>

      {/* add new event modal */}
      {show ? (
        <AddEditEvent
          isOpen={show}
          onClose={onCloseModal}
          isEditable={isEditable}
          eventData={eventData}
          onUpdateEvent={onUpdateEvent}
          onRemoveEvent={onRemoveEvent}
          onAddEvent={onAddEvent}
        />
      ) : null}
    </>
  );
};
export default CalendarApp;
