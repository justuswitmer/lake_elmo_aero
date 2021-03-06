import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import mapStoreToProps from '../../redux/mapStoreToProps';
import moment from 'moment';

function AdminHistory(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row flex">
        <div className="col-sm">{moment(props.appointment.appointment_date).format('MM/DD/YYYY')}</div>
        <div className="col-sm">N{props.appointment.tail}</div>
        <div className="col-sm">{props.appointment.service_type}</div>
        <div className="col-sm">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleShow}
          >
            View
          </button>
        </div>
      </div>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">{props.appointment.tail}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <p className="md text-center">Service Details</p>
            <div className="text-center grid">
              <section className="m-1">
                <p className="lead text-bold">Fuel</p>
                <p className="sm">Type: {props.appointment.fuel_type}</p>
                <p className="sm">Volume: {props.appointment.fuel_qty}</p>
              </section>
              <section className="m-1">
                <p className="lead text-bold">Oil</p>
                <p className="sm">Amount: {props.appointment.oil_qty}</p>
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
              <p className="sm">Full Name: {props.appointment.first} {props.appointment.last}</p>
              <p className="sm">Phone: {props.appointment.phone}</p>
              <p className="sm">Email: {props.appointment.email}</p>
            </section>

            <section className="m-1">
              <p className="lead text-bold">Date / Time</p>
              <p className="">{moment(props.appointment.appointment_date).format('MM/DD/YYYY')}</p>
              <p className="sm">{moment(props.appointment.appointment_date).format('HH:mm')}</p>
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
            <button type="submit" className="btn btn-primary flex">
              Mark As Complete
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default connect(mapStoreToProps)(AdminHistory);
