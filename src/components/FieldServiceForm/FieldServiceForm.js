import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

//Style Imports
import "./FieldServiceForm.css";
import { useSpring, animated } from "react-spring";
import fuelPump from "./images/fuel-pump.svg";
import oil from "./images/oil.svg";
import one from "../images/one.svg";

function FieldServiceForm(props) {
  //For Animation
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });

  //For Data Fields
  const newAppointment = useSelector((state) => state.newAppointment);
  const [fuelType, setFuelType] = useState(newAppointment.fuel_type);
  const [fuelQty, setFuelQty] = useState(newAppointment.fuel_qty);
  const [gallons, setGallons] = useState("");
  const [oilType, setOilType] = useState(newAppointment.oil_type);
  const [oilQty, setOilQty] = useState(newAppointment.oil_qty);
  const [addService, setAddService] = useState(newAppointment.additional_serv);

  //For rendering form fields
  const [fuelIsChecked, setFuelIsChecked] = useState(false);
  const [oilIsChecked, setOilIsChecked] = useState(false);

  //For Input Validation
  const [fuelError, setFuelError] = useState("");
  const [oilError, setOilError] = useState("");
  const [galError, setGalError] = useState("");
  const [servicesError, setServicesError] = useState("");

  //Test Logs
  console.log("fuelIsChecked is:", fuelIsChecked);
  console.log("oilIsChecked is:", oilIsChecked);

  //Handles whether or not the Fuel Checkbox is marked, and resets any errors that may have occurred.
  const fuelStatus = () => {
    setFuelIsChecked(fuelIsChecked === false ? true : false);

    if (fuelError) {
      setFuelError("");
      setGalError(""); // Resets Gallon Error
    }
  };

  //Handles whether or not the Oil Checkbox is marked, and resets any errors that may have occurred.
  const oilStatus = () => {
    setOilIsChecked(oilIsChecked === false ? true : false);

    if (oilError) {
      setOilError(""); // removes error message if conditions are met
    }
  };

  const handleFuelType = (event) => {
    setFuelType(event);
    setFuelError("");
  };

  const handleFuelQty = (event) => {
    setFuelQty(event);
    setFuelError(""); // removes error message if conditions are met
  };

  const handleGallons = (event) => {
    setGallons(event);
    setGalError("");
  };

  const handleOilType = (event) => {
    setOilType(event);
    setOilError("");
  };

  const handleOilQty = (event) => {
    setOilQty(event);
    setOilError("");
  };

  const handleAddService = (event) => {
    setAddService(event);
    setServicesError("");
  };

  const validateFuelForm = () => {
    //If Fuel is checked, but no Qty or Type, add this error
    console.log("in validateFuelForms");
    if (
      fuelIsChecked &&
      (fuelType === "Choose..." || fuelQty === "0" || fuelQty === "Choose...")
    ) {
      setFuelError("Please Confirm Fuel Type and Quantity");
      return false;
    }

    if (fuelQty === "Gal" && !gallons) {
      setGalError("Please Specify Gallons");
      return false;
    }

    return true;
  };

  const validateOilForm = () => {
    console.log("in validateOilForms");

    //If Oil is checked, but no Qty or Type, add this error
    if (
      oilIsChecked &&
      (oilType === "Choose..." || oilQty === 0 || oilQty === "Choose...")
    ) {
      setOilError("Please Confirm Oil Type and Quantity");
      return false;
    }

    return true;
  };

  // Confirms if ANY service is selected. If not, returns false;
  const validateServices = () => {
    //If Oil and Fuel are NOT checked, and addService is null, add this error
    if (!oilIsChecked && !fuelIsChecked && !addService) {
      setServicesError("Please Confirm Services Needed");
      console.log("No Services Selected");
      return false;
    }

    return true;
  };

  //Test Logs
  console.log("fuelError:", fuelError);
  console.log("galError:", galError);
  console.log("fuelType:", fuelType);
  console.log("fuelQty:", fuelQty);
  console.log("oilType:", oilType);
  console.log("oilQty:", oilQty);

  const onSubmit = () => {
    const fuelIsValid = validateFuelForm();
    const oilIsValid = validateOilForm();
    const serviceIsValid = validateServices();

    // If all validation checks out, proceed.
    if (fuelIsValid && oilIsValid && serviceIsValid) {
      addDetails();
      props.history.push("/FieldServiceApptForm");
      console.log("FORM IS VALID");
    }
  };

  const dispatch = useDispatch();
  const addDetails = () => {
    const newFuelQty = fuelQty === "Gal" ? `${gallons}gal` : fuelQty;
    const newAddService = addService === "" ? "None" : addService;
    dispatch({
      type: "SET_FUEL_TYPE",
      payload: fuelType,
    });
    dispatch({
      type: "SET_FUEL_QTY",
      payload: newFuelQty,
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
      type: "SET_ADD_SERV",
      payload: newAddService,
    });
  };

  return (
    <animated.div style={trans}>
      <section className="container">
        <div className="step-one">
          <div className="row">
            <div className="col">
              <div className="step-display mb-3">
                <img src={one} alt="two" className="m-2 step-icon" />
                <p className="lead text-bold">What Services Do You Need?</p>
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    {/* FUEL SERVICE MENU */}
                    <div className="service-menu col">
                      <div className="service-selector">
                        <div className="service-checkbox">
                          <input
                            className={`${fuelError ? "is-invalid" : ""}`}
                            type="checkbox"
                            onChange={() => fuelStatus()}
                          />
                          <p className="lead text-bold">Fuel</p>
                          <div className="invalid-feedback ml-2">
                            {fuelError}
                          </div>
                        </div>
                        <img
                          src={fuelPump}
                          alt="fuel-pump"
                          className="fuel-icon mr-2"
                        />
                      </div>
                      <form
                        className={`service-fields m-3 ${
                          fuelIsChecked === false ? "hidden" : ""
                        }`}
                      >
                        <div className="form-row">
                          <div className="form-group">
                            <label for="fuelType">Fuel Type</label>

                            <select
                              className="form-control"
                              id="inputGroupSelect01"
                              value={fuelType}
                              onChange={(event) =>
                                handleFuelType(event.target.value)
                              }
                            >
                              <option selected>Choose...</option>
                              {props.store.price.map((price) => (
                                <option value={price.type}>
                                  {price.type}... {price.pricePerGal}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="form-group ml-2">
                            <label for="fuelAmount">Amount</label>

                            <select
                              className="form-control"
                              id="fuelAmount"
                              value={fuelQty}
                              onChange={(event) =>
                                handleFuelQty(event.target.value)
                              }
                              // disabled={fuelQtyDisabled}
                            >
                              <option selected>Choose...</option>
                              <option value="Full">Full</option>
                              <option value="Tabs">Tabs</option>
                              <option value="Gal">Specify Gallons</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group col-md-5">
                          <div className="input-group">
                            <div
                              className={`services-flex align-center  ${
                                fuelQty === "Gal" ? "" : "hidden"
                              }`}
                            >
                              <input
                                className={`form-control ${
                                  galError ? "is-invalid" : ""
                                }`}
                                id="gallons"
                                type="number"
                                value={gallons}
                                onChange={(event) =>
                                  handleGallons(event.target.value)
                                }
                                placeholder="0"
                              />
                              <label for="gallons">Gallons</label>
                              <div className="invalid-feedback">{galError}</div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* OIL SERVICE MENU */}
                  <div className="">
                    <div className="service-menu col">
                      <div className="service-selector">
                        <div className="service-checkbox">
                          <input
                            className={`${oilError ? "is-invalid" : ""}`}
                            type="checkbox"
                            onChange={() =>
                              oilStatus(oilIsChecked === false ? true : false)
                            }
                          />
                          <p className="lead text-bold">Oil</p>
                          <div className="invalid-feedback ml-2">
                            {oilError}
                          </div>
                        </div>
                        <img src={oil} alt="oil" className="oil-icon mr-2" />
                      </div>
                      <form
                        className={`service-fields m-3 ${
                          oilIsChecked === false ? "hidden" : ""
                        }`}
                      >
                        <div className="form-row">
                          <div className="form-group">
                            <label for="oilType">Oil Type</label>
                            <select
                              className="form-control"
                              id="oilType"
                              value={oilType}
                              onChange={(event) =>
                                handleOilType(event.target.value)
                              }
                            >
                              <option selected>Choose...</option>
                              <option value="Aero Shell 15W50">
                                Aero Shell 15W50
                              </option>
                              <option value="Philips 20W50">
                                Philips 20W50
                              </option>
                            </select>
                          </div>
                          <div className="form-group ml-2">
                            <label for="quantity">Quantity</label>
                            <select
                              className="form-control"
                              id="quantity"
                              value={oilQty}
                              onChange={(event) =>
                                handleOilQty(event.target.value)
                              }
                            >
                              <option selected>Quarts...</option>
                              <option value="1">1 qt</option>
                              <option value="2">2 qts</option>
                              <option value="3">3 qts</option>
                              <option value="4">4 qts</option>
                              <option value="5">5 qts</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* ADDITIONAL SERVICES */}
                  <div className="">
                    <div className="service-menu">
                      <p className="lead text-bold service-selector">
                        Additional Service Requests
                      </p>

                      <div className="form-group col-md-12">
                        <div class="input-group">
                          <textarea
                            className={`form-control mb-3 ${
                              servicesError ? "is-invalid" : ""
                            }`}
                            aria-label="With textarea"
                            rows="3"
                            value={addService}
                            onChange={(event) =>
                              handleAddService(event.target.value)
                            }
                          ></textarea>
                          <div className="invalid-feedback">
                            {servicesError}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mt-3">
              <p className="md mt-5 p-3 text-color">On-Field Service</p>
              <div className="p-3">
                At Lake Elmo Aero, we take pride in providing the best service
                for your aircraft. We make sure your aircraft is legal, done
                on-time, and most importantly SAFE. Our staff has over 80 years
                of combined general aviation experience.
              </div>
            </div>
          </div>
          <div className="services-flex align-center btn-grouping">
            <Link to="/">
              <button className="btn-outline text-color lead text-bold">
                Back
              </button>
            </Link>

            <button className="btn" onClick={onSubmit}>
              Continue
            </button>
          </div>
        </div>
      </section>
    </animated.div>
  );
}

export default connect(mapStoreToProps)(FieldServiceForm);
