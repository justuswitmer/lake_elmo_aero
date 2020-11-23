import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  setHours,
  setMinutes,
  parseISO,
  formatISO,
  format,
  addDays,
  getDay,
  getHours,
  getMinutes,
} from "date-fns";

import { Link } from "react-router-dom";
import axios from "axios";
import mapStoreToProps from "../../redux/mapStoreToProps";

// Style Imports
import { Button, Form, Row, Col } from "react-bootstrap";
import "./FieldServiceApptForm.css";

function FieldServiceApptForm(props) {
  const newAppointment = useSelector((state) => state.newAppointment);
  const unavailableTimes = useSelector((state) => state.unavailableTimes);
  const [firstName, setFirstName] = useState(newAppointment.first);
  const [lastName, setLastName] = useState(newAppointment.last);
  const [hangarNum, setHangarNum] = useState(newAppointment.hangar_num);
  const [phoneNum, setPhoneNum] = useState(newAppointment.phone);
  const [email, setEmail] = useState(newAppointment.email);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(startDate);
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [hangarAccess, setHangarAccess] = useState(
    newAppointment.hangar_access
  );
  const [doorCode, setDoorCode] = useState("");
  const [addComm, setAddComm] = useState(newAppointment.additional_comm);
  //const [unavailableTimes, setUnavailableTimes] = useState(startDateTime);

  const dispatch = useDispatch();

  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );

  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  const formattedDate = formatISO(startDate);
  const formattedTime = formatISO(startTime);
  const formattedDateTime = formatISO(startDateTime);
  const reducedDateTime = formatISO(startDateTime, { representation: "date" });
  const dateOne = reducedDateTime;
  const dateTwo = formatISO(addDays(startDateTime, 1), {
    representation: "date",
  });
  console.log("what is dateOne", dateOne);

  console.log("what is dateTwo", dateTwo);

  const omittedTimes = [];
  const getUnavailableTimes = (dateTime) => {
    setStartDateTime(dateTime);
    dispatch({
      type: "FETCH_EXCLUDED_TIMES",
      payload: {
        dateOne: dateOne,
        dateTwo: dateTwo,
      },
    });
  };
  // useEffect(() => {
  //   axios.get('/appointment/times', {
  //     params: {
  //       dateOne: dateOne,
  //       dateTwo: dateTwo
  //     }
  //   })
  //     .then(res => {
  //       setUnavailableTimes(res.data)
  //     });
  // }, [startDateTime]);

  // const parseExcludedTimes = () => {
  //   unavailableTimes.map(time => {

  //   })
  // }

  const parsedHours = getHours(parseISO("2021-01-14T19:30:00.000Z"));
  const parsedMinutes = getMinutes(parseISO("2021-01-14T19:30:00.000Z"));
  // const excludedTimes = {[
  //   setHours(setMinutes(new Date(), parsedMinutes), parsedHours)
  // ]}

  console.log(
    "what are the unavailableTimes",
    omittedTimes,
    parsedMinutes,
    parsedHours
  );

  const addDetails = () => {
    const newHangarAccess =
      hangarAccess === "Door Code" ? `Door Code: ${doorCode}` : hangarAccess;
    dispatch({
      type: "SET_FIRST",
      payload: firstName,
    });
    dispatch({
      type: "SET_LAST",
      payload: lastName,
    });
    dispatch({
      type: "SET_HANGAR_NUM",
      payload: hangarNum,
    });
    dispatch({
      type: "SET_PHONE",
      payload: phoneNum,
    });
    dispatch({
      type: "SET_EMAIL",
      payload: email,
    });
    dispatch({
      type: "SET_APPT_DATE",
      payload: formattedDateTime,
    });
    dispatch({
      type: "SET_HANGAR_ACCESS",
      payload: newHangarAccess,
    });
    dispatch({
      type: "SET_ADD_COMM",
      payload: addComm,
    });
  };

  return (
    <div className="">
      <section className="container">
        <div className="">
          <div>
            <h4>Field Service</h4>
          </div>
          <div>
            <p className="md">N- {newAppointment.tail}</p>
            <h3>Appointment Details</h3>
          </div>
          <div>
            <p className="lead">Contact Information</p>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="firstName">First Name</label>
                  <input
                    className="form-control"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    required
                  />
                </div>

                <div class="form-group col-md-6">
                  <label for="lastName">Last Name</label>
                  <input
                    className="form-control"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="phone">Phone</label>
                  <input
                    className="form-control"
                    id="phone"
                    type="text"
                    placeholder="Phone"
                    value={phoneNum}
                    onChange={(event) => setPhoneNum(event.target.value)}
                  />
                </div>

                <div class="form-group col-md-6">
                  <label for="email">Email</label>
                  <input
                    className="form-control"
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
            </form>

            <section>
              <p>Date and Time Together</p>
              <DatePicker
                todayButton="Today"
                selected={startDateTime}
                onChange={(datetime) => getUnavailableTimes(datetime)}
                // onChange={(datetime) => setStartDateTime(datetime)}
                minDate={new Date()}
                filterDate={isWeekday}
                showTimeSelect
                timeIntervals={15}
                minTime={setHours(setMinutes(new Date(), 0), 7)}
                maxTime={setHours(setMinutes(new Date(), 0), 19)}
                excludeTimes={omittedTimes}
                timeCaption="Time"
                dateFormat="MM/dd/yyyy HH:mm"
                timeFormat="HH:mm"
                customInput={<ExampleCustomInput />}
              />
              <p>{formattedDateTime}</p>
              {/* <p>{dateOne}</p> */}
              {/* <p>{dateTwo}</p> */}
            </section>

            <p className="lead">Hangar Details</p>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="hangarNumber">Hangar Number</label>
                  <input
                    className="form-control"
                    id="hangarNumber"
                    placeholder="Hangar Number"
                    value={hangarNum}
                    onChange={(event) => setHangarNum(event.target.value)}
                  />
                </div>

                <div className="form-group col-md-6">
                  <label for="hangarAccess">How Will We Gain Access?</label>
                  <select
                    className="form-control"
                    id="hangarAccess"
                    defaultValue="Choose..."
                    value={hangarAccess}
                    onChange={(event) => setHangarAccess(event.target.value)}
                  >
                    <option>Choose...</option>
                    <option value="I will be there">I will be there</option>
                    <option value="Door Code">Door Code</option>
                    <option value="Lake Elmo Aero has access">
                      Lake Elmo Aero has access
                    </option>
                    <option value="Hangar Unlocked">Hangar Unlocked</option>
                  </select>
                </div>
                <div
                  className={`form-group col-md-6 ${
                    hangarAccess === "Door Code" ? "" : "hidden"
                  }`}
                >
                  <label for="doorCode">Enter Door Code</label>
                  <input
                    className="form-control"
                    id="hangarAccess"
                    type="text"
                    // class="form-control"
                    value={doorCode}
                    onChange={(event) => setDoorCode(event.target.value)}
                    placeholder="Enter Code"
                  />
                </div>
              </div>
            </form>

            <form>
              <div>
                <section>
                  <p className="lead">Additional Comments</p>
                  <div class="input-group">
                    <textarea
                      class="form-control"
                      aria-label="With textarea"
                      value={addComm}
                      onChange={(event) => setAddComm(event.target.value)}
                    ></textarea>
                  </div>
                </section>
              </div>
            </form>
          </div>
          <div className="flex btn-grouping">
            <div className="btn-grouping">
              <Link to="/FieldServiceForm">
                <Button>Back</Button>
              </Link>
              <Link to="/ReviewSubmit">
                <Button onClick={addDetails}>Next</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FieldServiceApptForm;
