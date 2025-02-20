import { Card, Col, Row } from "react-bootstrap";
import { CustomFlatpickr, PageBreadcrumb } from "../../../components";

// components

const DatePickers = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Flatpickr - Date picker</h4>
        <p className="sub-header font-13">
          A lightweight and powerful datetimepicker
        </p>

        <div className="mb-3">
          <label className="form-label">Basic</label>
          <CustomFlatpickr
            className="form-control"
            placeholder="Basic datepicker"
            options={{
              enableTime: false,
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date & Time</label>
          <CustomFlatpickr
            className="form-control"
            placeholder="Date and Time"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Human-friendly Dates</label>
          <CustomFlatpickr
            className="form-control"
            value={new Date()}
            placeholder="October 9, 2018"
            options={{
              enableTime: false,
              altInput: true,
              altFormat: "F j, Y",
              dateFormat: "Y-m-d",
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">MinDate and MaxDate</label>
          <CustomFlatpickr
            className="form-control"
            placeholder="mindate - maxdate"
            options={{
              minDate: "today",
              maxDate: new Date("2025-05-01"),
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Disabling dates</label>
          <CustomFlatpickr
            className="form-control"
            placeholder="Disabling dates"
            options={{
              disable: [
                function (date) {
                  return date.getDay() === 0 || date.getDay() === 6;
                },
              ],
              enableTime: false,
              locale: {
                firstDayOfWeek: 1, // start week on Monday
              },
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Selecting multiple dates</label>
          <CustomFlatpickr
            className="form-control"
            placeholder="Multiple dates"
            options={{
              enableTime: false,
              mode: "multiple",
              dateFormat: "Y-m-d",
              defaultDate: ["2016-10-20", "2016-11-04"],
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Selecting multiple dates - Conjunction
          </label>
          <CustomFlatpickr
            className="form-control"
            placeholder="2018-10-10 :: 2018-10-11"
            value={[new Date(), new Date()]}
            options={{
              enableTime: false,
              mode: "multiple",
              dateFormat: "Y-m-d",
              conjunction: " :: ",
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Range Calendar</label>
          <CustomFlatpickr
            className="form-control"
            placeholder="2018-10-03 to 2018-10-10"
            value={[new Date(), new Date()]}
            options={{
              enableTime: false,
              mode: "range",
            }}
          />
        </div>

        <div>
          <label className="form-label">Inline Calendar</label>
          <CustomFlatpickr
            className="form-control"
            placeholder="Inline calendar"
            options={{
              enableTime: false,
              inline: true,
            }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};
const TimePicker = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Flatpickr - Time Picker</h4>
        <p className="sub-header font-13">
          A lightweight and powerful datetimepicker
        </p>

        <div className="mb-3">
          <label className="form-label">Basic</label>
          <CustomFlatpickr
            className="form-control"
            placeholder="Basic timepickr"
            options={{
              enableTime: true,
              noCalendar: true,
              dateFormat: "H:i",
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">24-hour Time Picker</label>
          <CustomFlatpickr
            className="form-control"
            value={new Date()}
            placeholder="16:21"
            options={{
              enableTime: true,
              noCalendar: true,
              dateFormat: "H:i",
              time_24hr: true,
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Time Picker w/ Limits</label>
          <CustomFlatpickr
            className="form-control"
            placeholder="16:00"
            options={{
              enableTime: true,
              noCalendar: true,
              dateFormat: "H:i",
              minTime: "16:00",
              maxTime: "22:30",
            }}
          />
        </div>

        <div>
          <label className="form-label">Preloading Time</label>
          <CustomFlatpickr
            className="form-control"
            placeholder="16:45"
            value={new Date()}
            options={{
              enableTime: true,
              noCalendar: true,
              dateFormat: "H:i",
              defaultDate: "13:45",
            }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};
const FormPickers = () => {
  return (
    <>
      <PageBreadcrumb name="Pickers" title="Pickers" subName="Forms" />
      <Row>
        <Col lg={6}>
          <DatePickers />
        </Col>

        <Col lg={6}>
          <TimePicker />
        </Col>
      </Row>
    </>
  );
};
export default FormPickers;
