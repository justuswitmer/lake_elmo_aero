import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

//Style Import
import "./StepOne.css";
import { BsDot } from "react-icons/bs";
import hangar from "./images/hangar.svg";
import flying from "./images/flying.svg";

function StepOne(props) {
  //For Input Validation
  const [tailError, setTailError] = useState("");

  const newAppointment = useSelector((state) => state.newAppointment);
  const [tail, setTail] = useState(newAppointment.tail);
  const [selectedService, setSelectedService] = useState("On Field");

  const handleServiceChange = (event) => {
    console.log("in setService with:", event);
    setSelectedService(event);
  };

  const service_type = selectedService === "On Field" ? "On Field" : "Jet Refueling";

  const dispatch = useDispatch();

  //Handles the setting of each state and resets error fields.
  const handleTail = (event) => {
    setTail(event);
    setTailError("");
  };

  // Determines if there are any issues with required fields. If no, it returns true.
  const validateForms = () => {
    if (!tail) {
      setTailError("Please Enter Tail Number");
    }

    if (!tail) {
      return false;
    }

    return true;
  };

  //If Forms are validated, addDetails is triggered
  const onSubmit = () => {
    const isValid = validateForms();

    if (isValid) {
      addDetails();
      props.history.push(
        selectedService === "On Field" ? "/FieldServiceForm" : "/JetAService"
      );
    }
  };

  const addDetails = () => {
    dispatch({
      type: "SET_TAIL",
      payload: tail,
    });
    dispatch({
      type: "SET_SERVICE_TYPE",
      payload: service_type,
    });
  };

  return (
    <section className="container">
      <div className="card">
        <section className="box">
          <h2 className="box">Select Your Service Type</h2>
          <div className="tabs-flex">
            <label>
              <div
                className={`tabs ${
                  selectedService === "On Field"
                    ? "active tab-border text-bold"
                    : ""
                }`}
              >
                <div className="tab-content">
                  <div className="lead">On Field Service</div>
                  <img src={hangar} alt="hangar" />
                </div>
              </div>

              <input
                type="radio"
                name="service-type"
                className="hide"
                value="On Field"
                onChange={(event) => handleServiceChange(event.target.value)}
              />
            </label>

            <label>
              <div
                className={`tabs ${
                  selectedService === "Jet Refueling"
                    ? "active tab-border text-bold"
                    : ""
                }`}
              >
                <div className="tab-content">
                  <div className="lead">Jet Refueling Service</div>
                  <img src={flying} alt="flying" />
                </div>
              </div>
              <input
                type="radio"
                name="service-type"
                className="hide"
                value="Jet Refueling"
                onChange={(event) => handleServiceChange(event.target.value)}
              />
            </label>
          </div>

          <div className=" tabs-flex">
            <div className="list">
              <ul
                className={`m-1 ${selectedService === "Jet Refueling" ? "hide" : ""}`}
              >
                <li>
                  <BsDot />
                  In-Hangar Service
                </li>
                <li>
                  <BsDot />
                  Fuel and Oil
                </li>
                <li>
                  <BsDot />
                  Additional Aircraft Services
                </li>
              </ul>
            </div>
            <div className="list">
              <ul
                className={`m-1 ${selectedService === "On Field" ? "hide" : ""}`}
              >
                <li>
                  <BsDot />
                  24-Hour Service
                </li>
                <li>
                  <BsDot />
                  Jet A Fuel
                </li>
                <li>
                  <BsDot />
                  Oil
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="box">
          <div>
            <h2 className="box">Enter Your Tail Number</h2>
          </div>
          <form className="tail-form">
            <div className="form-group col-md-6 mt-3 flex">
              <label className="md" for="nNumber">
                N
              </label>
              <input
                className={`form-control ${tailError ? "is-invalid" : ""}`}
                id="nNumber"
                type="text"
                value={tail}
                onChange={(event) => handleTail(event.target.value)}
                placeholder="number"
              />
              <div className="invalid-feedback">{tailError}</div>
            </div>
            <button className="btn m-2" onClick={onSubmit}>
              Let's Get Started
            </button>
          </form>
        </section>
      </div>
      <div>
        <Link to="/login">
          <p className="text-center">| Admin Login | </p>
        </Link>
      </div>
    </section>
  );
}

export default withRouter(StepOne);
