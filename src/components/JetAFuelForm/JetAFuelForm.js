import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatISO } from "date-fns";

//Style Imports
import "./JetAFuelForm.css";

function JetAFuelForm() {
  const newAppointment = useSelector((state) => state.newAppointment);
  const [firstName, setFirstName] = useState(newAppointment.first);
  const [lastName, setLastName] = useState(newAppointment.last);
  const [phoneNum, setPhoneNum] = useState(newAppointment.phone);
  const [email, setEmail] = useState(newAppointment.email);
  const [fuelQty, setFuelQty] = useState(newAppointment.fuel_qty);
  const [oilType, setOilType] = useState(newAppointment.oil_type);
  const [oilQty, setOilQty] = useState(newAppointment.oil_qty);
  const [addComm, setAddComm] = useState(newAppointment.additional_comm);
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();
  const addDetails = () => {
    const formattedDate = formatISO(startDate);
    const fuelType = "Jet A";
    dispatch({
      type: "SET_FIRST",
      payload: firstName,
    });
    dispatch({
      type: "SET_LAST",
      payload: lastName,
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
      type: "SET_FUEL_TYPE",
      payload: fuelType,
    });
    dispatch({
      type: "SET_FUEL_QTY",
      payload: fuelQty,
    });
    dispatch({
      type: "SET_OIL_TYPE",
      payload: oilType,
    });
    dispatch({
      type: "SET_OIL_QTY",
      payload: oilQty,
    });
    dispatch({
      type: "SET_APPT_DATE",
      payload: formattedDate,
    });
    dispatch({
      type: "SET_ADD_COMM",
      payload: addComm,
    });
  };

  console.log("what is the startDate", startDate);

  return (
    <div className="step-one">
      <section className="container">
        <div className="card my-5">
          <div>
            <h2>Jet A Fuel Service </h2>
          </div>
          <div>
            <p className="lg">N{newAppointment.tail}</p>
          </div>

          <section>
            <p className="lead">Approx. Fuel Volume Needed</p>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
                value={fuelQty}
                onChange={(event) => setFuelQty(event.target.value)}
              />
              <div class="input-group-append">
                <span class="input-group-text">gal.</span>
              </div>
            </div>
          </section>
          <h3>Appointment Details</h3>
          <div>
            <p className="lead">Contact Information</p>
            <form class="">
              <div class="form-group mb-2">
                <p className="text-bold lead"></p>
              </div>
              <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />

                <label for="inputPassword2" class="sr-only"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />

                <label for="inputPassword2" class="sr-only"></label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Phone"
                  value={phoneNum}
                  onChange={(event) => setPhoneNum(event.target.value)}
                />

                <label for="inputPassword2" class="sr-only"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div>
                <section>
                  <p className="lead text-bold">Oil Type</p>
                  <select
                    class="custom-select"
                    id="inputGroupSelect01"
                    value={oilType}
                    onChange={(event) => setOilType(event.target.value)}
                  >
                    <option selected>Oil...</option>
                    <option value="Aero Shell 15W50">Aero Shell 15W50</option>
                    <option value="Philips 20W50">Philips 20W50</option>
                  </select>
                </section>

                <section>
                  <p className="lead text-bold">Oil Amount</p>
                  <select
                    class="custom-select"
                    id="inputGroupSelect01"
                    value={oilQty}
                    onChange={(event) => setOilQty(event.target.value)}
                  >
                    <option value="0" selected>
                      Quarts...
                    </option>
                    <option value="1">1 qt</option>
                    <option value="2">2 qts</option>
                    <option value="3">3 qts</option>
                    <option value="4">4 qts</option>
                    <option value="5">5 qts</option>
                  </select>
                </section>
                <section>
                  <p className="lead">Requested Date and Time</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    showTimeSelect
                    timeIntervals={1}
                    dateFormat="MM/dd/yyyy HH:mm"
                    timeFormat="HH:mm"
                  />
                </section>
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
            <div className="flex btn-spacing">
              <Link to="/">
                <button className="btn">Back</button>
              </Link>
              <Link to="/ReviewSubmitJetA">
                <button className="btn" onClick={addDetails}>
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JetAFuelForm;
