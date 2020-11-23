import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {useSelector, useDispatch} from 'react-redux';

//Style Imports
import "./ReviewSubmit.css";

function ReviewSubmit() {
  const newAppointment = useSelector(state => state.newAppointment);
  const dispatch = useDispatch();
  
  const createAppointment = (event) => {
    event.preventDefault();
    dispatch({
      type: 'CREATE_APPOINTMENT',
      payload: newAppointment
    });
  }

  
  return (
    <div className="step-one">
      <section className="container">
        <div className="card my-5">
          <div>
            <h4>Field Service</h4>
          </div>
          <div className="">
            <p className="md text-center">Service Details</p>
            <div className="text-center grid">
              <section className="m-1">
                <p className="lead text-bold">Fuel</p>
                <p className="sm">Type: {newAppointment.fuel_type}</p>
                <p className="sm">Volume: {newAppointment.fuel_qty}</p>
              </section>
              <section className="m-1">
                <p className="lead text-bold">Oil</p>
                <p className="sm">Type: {newAppointment.oil_type}</p>
                <p className="sm">Amount: {newAppointment.oil_qty}qts.</p>
              </section>

              <section className="m-1">
                <p className="lead text-bold">Additional Service Details</p>
                <p className="sm">{newAppointment.additional_serv}</p>
              </section>
            </div>
          </div>
          <hr />
          <div className="">
            <p className="md text-center m-2">Appointment Details</p>
            <p className="md text-center m-2">N-{newAppointment.tail}</p>
            <div class="text-center grid">
              <section className="m-1">
                <p className="lead text-bold">Customer Information</p>
                <p className="sm">Full Name: {newAppointment.first} {newAppointment.last}</p>
                <p className="sm">Phone: {newAppointment.phone}</p>
                <p className="sm">Email: {newAppointment.email}</p>
              </section>

              <section className="m-1">
                <p className="lead text-bold">Date / Time</p>
                <p className="">"TBD"</p>
                <p className="sm">"TBD"</p>
              </section>

              <section className="m-1">
                <p className="lead text-bold">Hangar Access</p>
                <p className="sm">Hangar: {newAppointment.hangar_num}</p>
                <p className="sm">{newAppointment.hangar_access}</p>
              </section>

              <section className="m-1">
                <p className="lead text-bold">Additional Comments</p>
                <p className="sm">{newAppointment.additional_comm}</p>
              </section>
            </div>

            <div className="flex btn-grouping">
              <Link to="/FieldServiceApptForm">
                <Button>Back</Button>
              </Link>
              <Link to="/ApptSuccess">
                <Button onClick={event => createAppointment(event)}>Submit</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewSubmit;
