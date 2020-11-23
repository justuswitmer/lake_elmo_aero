import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import moment from "moment";
import { formatISO, format } from "date-fns";

//Style Imports
import "./Admin.css";

function AdminItem(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();


  const displayDate = format(new Date(), 'MM/dd/yyyy HH:mm');
  const emailApptDate = format(new Date(props.appointment.appointment_date), 'MM/dd/yyyy HH:mm');
  const completedAppt =
  {
    first: props.appointment.first,
    last: props.appointment.last,
    email: props.appointment.email,
    additional_serv: props.appointment.additional_serv,
    fuel_qty: props.appointment.fuel_qty,
    fuel_type: props.appointment.fuel_type,
    oil_qty: props.appointment.oil_qty,
    oil_type: props.appointment.oil_type,
    service_type: props.appointment.service_type,
    display_date: displayDate,
    email_appt_date: emailApptDate,
  }

  const completeRequest = () => {
    dispatch({
      type: "COMPLETE_APPOINTMENT",
      url: `appointment/${props.appointment.id}`,
      payload: props.appointment.id,
    });
    dispatch({
      type: 'SEND_COMPLETE',
      url: `/email-complete`,
      payload: completedAppt
    });
  };

  return (
    <>
      <td>
        {moment(props.appointment.appointment_date).format("MM/DD/YYYY")}
      </td>
      <td>N{props.appointment.tail}</td>
      <td>{props.appointment.service_type}</td>
      <td>
        <button type="button" id="adminBtn" className="btn" onClick={handleShow}>
          View
        </button>
      </td>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton id="modalHeader">
          <Modal.Title id="example-modal-sizes-title-lg" className="viewAdminItem">
            <p>N{props.appointment.tail}</p>

          </Modal.Title>
          <p>
            {props.appointment.is_completed === false ? "" :
              <em id="completeDate">Completed on {moment(props.appointment.completed_date).format("MM/DD/YYYY")} at {moment(props.appointment.completed_date).format("HH:mm")}</em>
            }</p>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <p className="md text-center">Service Details</p>
            <div className="text-center grid">
              <section className="m-1">
                <p className="lead text-bold">Fuel</p>
                <p className="sm">Type: {props.appointment.fuel_type}</p>
                <p className="sm">Volume: {props.appointment.fuel_qty}</p>
              </section>
              <section className="m-1">
                <p className="lead text-bold">Oil</p>
                <p className="sm">Amount: {props.appointment.oil_qty}qts</p>
              </section>

              <section className="m-1">
                <p className="lead text-bold">Additional Service Details</p>
                <p className="sm">{props.appointment.additional_serv}</p>
              </section>
            </div>
          </div>
          <hr />

          <p className="md text-center m-2">Appointment Details</p>
          <p className="md text-center m-2">N{props.appointment.tail}</p>
          <div className="text-center grid">
            <section className="m-1">
              <p className="lead text-bold">Customer Information</p>
              <p className="sm">
                Full Name: {props.appointment.first} {props.appointment.last}
              </p>
              <p className="sm">Phone: {props.appointment.phone}</p>
              <p className="sm">Email: {props.appointment.email}</p>
            </section>

            <section className="m-1">
              <p className="lead text-bold">Date / Time</p>
              <p className="">
                {moment(props.appointment.appointment_date).format(
                  "MM/DD/YYYY"
                )}
              </p>
              <p className="sm">
                {moment(props.appointment.appointment_date).format("HH:mm")}
              </p>
            </section>

            <section className="m-1">
              <p className="lead text-bold">Hangar Access</p>
              <p className="sm">Hangar: {props.appointment.hangar_num} </p>
              <p className="sm">{props.appointment.hangar_access}</p>
            </section>

            <section className="m-1">
              <p className="lead text-bold">Additional Comments</p>
              <p className="sm">{props.appointment.additional_comm}</p>
            </section>
          </div>
          <div className="flex m-2">
            {props.appointment.is_completed === false ?
              <button
                type="submit"
                className="btn btn-primary flex"
                onClick={completeRequest}
              >
                Mark As Complete
            </button>
              :
              <p></p>
            }
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default connect(mapStoreToProps)(AdminItem);
