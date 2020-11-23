import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { BsDot } from "react-icons/bs";


//Style Import
import "./StepOne.css";

function StepOne() {
  const newAppointment = useSelector((state) => state.newAppointment);
  const price = useSelector((state) => state.price)
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

      type: 'SET_TAIL',
      payload: tail
    })
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
                className={`tabs ${
                  selectedService === "Hangar"
                    ? "active tab-border text-bold"
                    : ""
                }`}
              >
                <div className="tab-content lead text-center">
                  On Field Services
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
                className={`tabs ${
                  selectedService === "Runway"
                    ? "active tab-border text-bold"
                    : ""
                }`}
              >
                <div className="tab-content lead text-center">
                  Incoming Jet Services
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
          <div className="">
            <div className="flex">
              <p className="text-bold md ">N- </p>
              <input
                type="text"
                value={tail}
                onChange={(event) => setTail(event.target.value)}
                placeholder="number"
              />

              <div className="m-1">
                <Link
                  to={
                    selectedService === "Hangar"
                      ? "/FieldServiceForm"
                      : "/JetAService"
                  }
                >
                  <button className="btn" onClick={addDetails}>
                    Let's Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default StepOne;
