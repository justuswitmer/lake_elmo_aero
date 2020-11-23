import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Dropdown, DropdownButton, Button } from "react-bootstrap";

//Style Import
import "./StepOne.css";


function StepOne(props) {
  const [selectedService, setSelectedService] = useState("Hangar");
  const [hangarBtnClass, setHangarBtnClass] = useState("btn-click");
  const [runwayBtnClass, setRunwayBtnClass] = useState("btn");
  const [linkRoute, setLinkRoute] = useState("/FieldServiceForm");

  const handleServiceChange = (event) => {
    console.log("in setService with:", event);
    setSelectedService(event);
    toggleBtnClass();
    // toggleLinkRoute();
  };

  const toggleBtnClass = () => {
    if (hangarBtnClass === "btn") {
      setHangarBtnClass("btn-click");
      setRunwayBtnClass("btn");
    } else if (runwayBtnClass === "btn") {
      setRunwayBtnClass("btn-click");
      setHangarBtnClass("btn");
    }
  };

  // const toggleLinkRoute = () => {
  //   if (selectedService === "Hangar") {
  //     setLinkRoute("/FieldServiceForm");
  //     console.log("linkRoute is:", linkRoute);
  //   } else {
  //     setLinkRoute("/JetAService");

  //     console.log("linkRoute is:", linkRoute);
  //   }
  // };

  console.log("selectedService is:", selectedService);
  

  return (
    <div className="step-one">
      <section className="container">
      {props.store.price.map((price) => (
        <div className="card flex">
          <h3 className=" text-center text-bold">Current Fuel Prices</h3>
          <h4 className="">100L .... {price.fuel_100L}</h4>
          <h4 className="">Jet A .... {price.fuel_jetA}</h4>
        </div>
        ))}
        <div className="card my-4">
          <div>
            <h3 className="text-center">Enter Tail Number</h3>
          </div>
          <div className="">
            <div className="flex mx-sm-3 mb-2">
              <p className="text-bold lead m-1">N-</p>
              <input
                type="text"
                // class="form-control"
                id="inputPassword2"
                placeholder="number"
              />
            </div>

            <section className="text-center my-5">
              <h3 className="m-3">Service Request Type</h3>
              <button
                className={hangarBtnClass}
                onClick={() => handleServiceChange("Hangar")}
              >
                Hangar and Field Services
              </button>
              <button
                className={runwayBtnClass}
                onClick={() => handleServiceChange("Runway")}
              >
                Inbound Runway Services
              </button>
            </section>
            <section>
              {selectedService === "Hangar" ? (
                <div>
                  <p>Fuel, Oil, and other Hanger services</p>
                </div>
              ) : (
                <div>
                  <p>Runway Service for inbound flights</p>
                </div>
              )}
            </section>
            <section>
              <Link
                to={
                  selectedService === "Hangar"
                    ? "/FieldServiceForm"
                    : "/JetAService"
                }
              >
                <button className="btn">Let's Get Started</button>
              </Link>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default connect(mapStoreToProps)(StepOne);
