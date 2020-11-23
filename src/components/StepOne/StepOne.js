import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";

//Style Import
import "./StepOne.css";

function StepOne(props) {
  const newAppointment = useSelector((state) => state.newAppointment);
  const [tail, setTail] = useState(newAppointment.tail);
  const [selectedService, setSelectedService] = useState("Hangar");
  const [hangarTabClass, setHangarTabClass] = useState("tab active");
  const [runwayTabClass, setRunwayTabClass] = useState("tab");
  const [linkRoute, setLinkRoute] = useState("/FieldServiceForm");

  const [tabIsActive, setTabIsActive] = useState(false);
  const [hangarTabIsActive, setHangarTabIsActive] = useState(true);

  const handleServiceChange = (event) => {
    console.log("in setService with:", event);
    setSelectedService(event);
    // toggleBtnClass();
    // toggleActiveTab();
    // toggleService();
  };

  const toggleBtnClass = () => {
    if (hangarTabClass === "tab") {
      setHangarTabClass("tab active");
      setRunwayTabClass("tab");
    } else if (runwayTabClass === "tab") {
      setRunwayTabClass("tab active");
      setHangarTabClass("tab");
    }
  };

  const toggleActiveTab = () => {
    setTabIsActive(true);
  };

  // const toggleService = () => {
  //   console.log("selectedService is:", selectedService);
  //   selectedService === "Hangar"
  //     ? setSelectedService("Runway")
  //     : setSelectedService("Hangar");
  // };

  const service_type = selectedService === "Hangar" ? "Hangar" : "Runway";

  const dispatch = useDispatch();
  const addDetails = () => {
    dispatch({

      type: 'SET_TAIL',
      payload: `N${tail}`
    })
    dispatch({
      type: "SET_SERVICE_TYPE",
      payload: service_type,
    });
  };

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
              <p className="text-bold lead m-1">N -</p>
              <input
                type="text"
                value={tail}
                onChange={(event) => setTail(event.target.value)}
                id="inputPassword2"
                placeholder="number"
              />
            </div>

            <section className="text-center my-5">
              <h3 className="m-3">Service Request Type</h3>
              <label>
                <input
                  type="radio"
                  name="service-type"
                  className="hide"
                  value={selectedService}
                  onChange={() => handleServiceChange("Hangar")}
                />
                <div className="card">Hangar and Field Services</div>
              </label>

              <label>
                <input
                  type="radio"
                  name="service-type"
                  className="hide"
                  value={selectedService}
                  onChange={() => handleServiceChange("Runway")}
                />
                <div className="card btn">Runway Services</div>
              </label>
            </section>

            {/* <div className="tab-content">
              <div id="hangar" data-tab-content className="active">
                <h3>Hangar</h3>
                <p>Fuel, Oil, and other Hanger services</p>
              </div>
              <div id="runway" data-tab-content>
                <h3>Runway</h3>
                <p>Runway Service for inbound flights</p>
              </div>
            </div> */}

            <section>
              {selectedService === "Hangar" ? (
                <div>
                  <h3>Hangar</h3>
                  <p>Fuel, Oil, and other Hangar services</p>
                </div>
              ) : (
                <div>
                  <h3>Runway</h3>
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
                <button className="btn" onClick={addDetails}>
                  Let's Get Started
                </button>
              </Link>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default connect(mapStoreToProps)(StepOne);
