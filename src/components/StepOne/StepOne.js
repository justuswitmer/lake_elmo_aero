import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

//Style Import
import "./StepOne.css";
import { useSpring, animated } from "react-spring";
import { BsDot } from "react-icons/bs";
import hangar from "./images/hangar.svg";
import flying from "./images/flying.svg";
import cessna from "../images/cessna172b.png";

function StepOne(props) {
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });
  const newAppointment = useSelector((state) => state.newAppointment);
  const [selectedService, setSelectedService] = useState("On Field");

  const handleServiceChange = (event) => {
    console.log("in setService with:", event);
    setSelectedService(event);
  };

  const service_type =
    selectedService === "On Field" ? "On Field" : "Jet Refueling";

  const dispatch = useDispatch();

  //If Forms are validated, addDetails is triggered
  const onSubmit = () => {
    addDetails();
    props.history.push(
      selectedService === "On Field" ? "/FieldServiceForm" : "/JetAService"
    );
  };

  const addDetails = () => {
    dispatch({
      type: "SET_SERVICE_TYPE",
      payload: service_type,
    });
  };

  return (
    <animated.div style={trans}>
      <section className="container">
        <div className="step-one">
          <div className="">
            <div className="row">
              <p className="lead text-bold">
                Welcome to Lake Elmo Aero - Select Your Service Type
              </p>
            </div>
            <div className="row">
              <section className="box col-sm-12 col-md-7">
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
                        <img src={hangar} alt="cessna" />
                      </div>
                    </div>

                    <input
                      type="radio"
                      name="service-type"
                      className="hide"
                      value="On Field"
                      onChange={(event) =>
                        handleServiceChange(event.target.value)
                      }
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
                      onChange={(event) =>
                        handleServiceChange(event.target.value)
                      }
                    />
                  </label>
                </div>
              </section>
            </div>
            <div className="">
              <p className="text-bold lead">
                {`About
              ${
                selectedService === "Jet Refueling"
                  ? "Jet Refueling"
                  : "On Field"
              }
              Service:`}
              </p>
            </div>

            <div className="row">
              <section className="box col-sm-6 col-sm-pull-6 col-md-5 col-md-pull-7">
                <div className="tab-list">
                  <ul className="m-1">
                    <li>
                      <BsDot />

                      {selectedService === "On Field"
                        ? "In-Hangar Service"
                        : "24-Hour Service"}
                    </li>
                    <li>
                      <BsDot />

                      {selectedService === "On Field"
                        ? "Fuel and Oil"
                        : "Jet A Fuel"}
                    </li>
                    <li>
                      <BsDot />

                      {selectedService === "On Field"
                        ? "Additional Maintenance Services"
                        : "Oil"}
                    </li>
                  </ul>
                </div>
                <button
                  className="btn btn-success margin-top-xl"
                  onClick={onSubmit}
                >
                  Start Your Service Appointment
                </button>
              </section>

              <div className="hidden-md-* col-sm-6 col-sm-push-6 col-md-7 col-md-push-5">
                <img src={cessna} alt="hangar" className="cessna img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Link to="/login">
            <p className="text-center">| Admin Login | </p>
          </Link>
        </div>
      </section>
    </animated.div>
  );
}

export default withRouter(StepOne);
