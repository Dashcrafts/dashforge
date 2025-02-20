import { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Row, Col, Button } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "../../../components";
const AddEditEvent = ({
  isOpen,
  onClose,
  isEditable,
  eventData,
  onRemoveEvent,
  onUpdateEvent,
  onAddEvent,
}) => {
  // event state
  const [event] = useState(eventData);

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      title: yup.string().required("Please enter event name"),
      className: yup.string().required("Please select category"),
    })
  );

  /*
   * form methods
   */
  const methods = useForm({
    defaultValues: {
      title: event.title,
      className: event.className ? String(event.className) : "bg-danger",
    },
    resolver: schemaResolver,
  });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  /*
   * handle form submission
   */
  const onSubmitEvent = (data) => {
    isEditable ? onUpdateEvent(data) : onAddEvent(data);
  };
  return (
    <>
      <Modal show={isOpen} onHide={onClose}>
        <Modal.Header className="py-3 px-4 border-bottom-0" closeButton>
          <Modal.Title as="h5" id="modal-title">
            {isEditable ? "Edit Event" : "Add New Event"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4 pb-4 pt-0">
          <form
            noValidate
            name="chat-form"
            id="chat-form"
            onSubmit={handleSubmit(onSubmitEvent)}
          >
            <Row>
              <Col xs={12}>
                <FormInput
                  type="text"
                  label="Event Name"
                  name="title"
                  className="form-control"
                  placeholder="Insert Event Name"
                  containerClass={"mb-3"}
                  register={register}
                  key="title"
                  errors={errors}
                  control={control}
                />
              </Col>
              <Col xs={12}>
                <FormInput
                  type="select"
                  label="Category"
                  name="className"
                  containerClass={"mb-3"}
                  register={register}
                  key="className"
                  errors={errors}
                  control={control}
                >
                  <option value="bg-danger">Danger</option>
                  <option value="bg-success">Success</option>
                  <option value="bg-primary">Primary</option>
                  <option value="bg-info">Info</option>
                  <option value="bg-dark">Dark</option>
                  <option value="bg-warning">Warning</option>
                </FormInput>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col md={6} xs={4}>
                {isEditable ? (
                  <Button variant="danger" onClick={onRemoveEvent}>
                    Delete
                  </Button>
                ) : null}
              </Col>
              <Col md={6} xs={8} className="text-end">
                <Button variant="light" className="me-1" onClick={onClose}>
                  Close
                </Button>
                <Button variant="success" type="submit">
                  Save
                </Button>
              </Col>
            </Row>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AddEditEvent;
