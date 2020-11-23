import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  parseISO,
  getHours,
  getMinutes,
  getDate,
  getMonth,
  getYear,
  format,
} from "date-fns";

//Style Imports
import "./ReviewSubmit.css";
import { useSpring, animated } from "react-spring";
import five from "../images/five.svg";

function ReviewSubmit() {
  //For Animation
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });

  const newAppointment = useSelector((state) => state.newAppointment);
  const dispatch = useDispatch();

  const createAppointment = () => {
    dispatch({
      type: "CREATE_APPOINTMENT",
      payload: newAppointment,
    });
    dispatch({
      type: "SEND_CONFIRM",
      url: "/email-confirm",
      payload: newAppointment,
    });
    dispatch({
      type: "SEND_ADMIN",
      url: "/email-admin",
      payload: newAppointment,
    });
    dispatch({
      type: "SEND_ALERT_ONE",
      url: "/sms-alert-one",
      payload: newAppointment,
    });
    dispatch({
      type: "SEND_ALERT_TWO",
      url: "/sms-alert-two",
      payload: newAppointment,
    });
    dispatch({
      type: "SEND_ALERT_THREE",
      url: "/sms-alert-three",
      payload: newAppointment,
    });
    dispatch({
      type: "SET_RESET",
    });
  };

  // working out date for display from service form and datepicker
  // assisted by https://stackoverflow.com/questions/25159330/convert-an-iso-date-to-the-date-format-yyyy-mm-dd-in-javascript
  // const displayDate = (parseISO(newAppointment.appointment_date));
  const date = new Date(newAppointment.appointment_date);
  const year = getYear(date);
  const month = getMonth(date) + 1;
  const dt = getDate(date);
  const hour = getHours(date);
  const minutes = getMinutes(date);

  const displayDate =
    (month < 10 ? "0" + month : month) +
    "/" +
    (dt < 10 ? "0" + dt : dt) +
    "/" +
    (year < 10 ? "0" + year : year) +
    " " +
    (hour < 10 ? "0" + hour : hour) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes);

  return (
    <animated.div style={trans}>
      <div className="step-one">
        <section className="container">
          <div className="step-display mb-3">
            <img src={five} alt="five" className="m-2 step-icon" />
            <p className="lead text-bold">Review Your Appointment Details</p>
          </div>
          <div className="">
            <div className="card">
              <p className="lead text-bold text-color">Requested Services</p>
              <div className="row">
                <section className="col-md-3">
                  <p className="lead text-bold">Fuel</p>
                  <p className="sm">Type: {newAppointment.fuel_type}</p>
                  <p className="sm">Volume: {newAppointment.fuel_qty}</p>
                </section>
                <section className="col-md-3">
                  <p className="lead text-bold">Oil</p>
                  <p className="sm">Type: {newAppointment.oil_type}</p>
                  <p className="sm">Amount: {newAppointment.oil_qty}qts</p>
                </section>

                <section className="col-md-3">
                  <p className="lead ">Additional Services</p>
                  <p className="sm">{newAppointment.additional_serv}</p>
                </section>
              </div>
            </div>
            <hr />
            <div className="card">
              <p className="lead text-bold text-color">Appointment Details</p>
              <div class="row">
                <section className="col-sm-3 m-1">
                  <p className="lead">Service Date</p>
                  <p className="sm">{displayDate}</p>
                </section>

                <section className="col-sm-3 m-1">
                  <p className="lead">Aircraft Details</p>
                  <p className="sm">Tail Number: N{newAppointment.tail}</p>
                  <p className="sm">Hangar: {newAppointment.hangar_num}</p>
                  <p className="sm">Access: {newAppointment.hangar_access}</p>
                  <p className="sm">
                    Additional Comments: {newAppointment.additional_comm}
                  </p>
                </section>

                <section className="col-sm-3 m-1">
                  <p className="lead">Contact Information</p>
                  <p className="sm">
                    Full Name: {newAppointment.first} {newAppointment.last}
                  </p>
                  <p className="sm">Phone: {newAppointment.phone}</p>
                  <p className="sm">Email: {newAppointment.email}</p>
                </section>
              </div>
            </div>
            <div className="services-flex align-center btn-grouping">
              <Link to="/FieldServiceApptForm">
                <button className="btn-outline text-color lead text-bold">
                  Back
                </button>
              </Link>
              <Link to="/ApptSuccess">
                <Button onClick={createAppointment}>Submit</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </animated.div>
  );
}

export default ReviewSubmit;
