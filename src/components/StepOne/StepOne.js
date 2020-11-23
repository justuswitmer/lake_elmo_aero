import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

//Style Import
import "./StepOne.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import { BsDot } from "react-icons/bs";
import hangar from "./images/hangar.svg";
import flying from "./images/flying.svg";

function StepOne() {
  const newAppointment = useSelector((state) => state.newAppointment);
  const price = useSelector((state) => state.price);
  const [tail, setTail] = useState(newAppointment.tail);
  const [selectedService, setSelectedService] = useState("Hangar");

  const handleServiceChange = (event) => {
    console.log("in setService with:", event);
    setSelectedService(event);
  };

  const service_type = selectedService === "Hangar" ? "Hangar" : "Runway";

  const dispatch = useDispatch();
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
    <section className="step-one">
      <div className="container">
        <section className="box">
          <h2 className="box">Select Your Service Type</h2>
          <div className="tabs-flex">
            <label>
              <div
                className={`tabs ${selectedService === "Hangar"
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
                value="Hangar"
                onChange={(event) => handleServiceChange(event.target.value)}
              />
            </label>

            <label>
              <div
                className={`tabs ${selectedService === "Runway"
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
                value="Runway"
                onChange={(event) => handleServiceChange(event.target.value)}
              />
            </label>
          </div>

          <div className=" tabs-flex">
            <div className="list">
              <ul
                className={`m-1 ${selectedService === "Runway" ? "hide" : ""}`}
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
                  Additional Services
                </li>
              </ul>
            </div>
            <div className="list">
              <ul
                className={`m-1 ${selectedService === "Hangar" ? "hide" : ""}`}
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
                N-
              </label>
              <input
                className="form-control"
                id="nNumber"
                type="text"
                value={tail}
                onChange={(event) => setTail(event.target.value)}
                placeholder="number"
              />
            </div>
            <Link
              to={
                selectedService === "Hangar"
                  ? "/FieldServiceForm"
                  : "/JetAService"
              }
            >
              <button className="btn m-2" onClick={addDetails}>
                Let's Get Started
              </button>
            </Link>
          </form>
        </section>
      </div>
    </section>
  );
}

export default StepOne;
