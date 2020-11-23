import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

//Style Imports
import "./FieldServiceForm.css";
import fuelPump from "./images/fuel-pump.svg";
import oil from "./images/oil.svg";

function FieldServiceForm(props) {
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
    const newAddService = addService === '' ? 'None' : addService;
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
    <section className="">
      <div className="container">
        <div className="">
          <h3>On Field Service Request For</h3>
          <p className="md">N{newAppointment.tail}</p>
        </div>
        <div className="my-2">
          <div>
            <form className="">
              <div className="">
                {/* FUEL SERVICE MENU */}
                <div className="service-menu my-3">
                  <div className="service-selector">
                    <div className="service-checkbox">
                      <input
                        className={`${fuelError ? "is-invalid" : ""}`}
                        type="checkbox"
                        onChange={() => fuelStatus()}
                      />
                      <p className="lead text-bold">Fuel</p>
                      <div className="invalid-feedback">{fuelError}</div>
                    </div>
                    <img src={fuelPump} alt="fuel-pump" />
                  </div>
                  <form
                    className={`service-fields m-2 ${
                      fuelIsChecked === false ? "hidden" : ""
                    }`}
                  >
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="fuelType">Fuel Type</label>

                        <select
                          className="custom-select"
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

                      <div className="form-group col-md-5">
                        <label for="fuelAmount">Specify Amount</label>

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
                          <option value="Gal">Specify Gallons</option>
                          <option value="Full">Full</option>
                          <option value="Tabs">Tabs</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div
                        className={` form-group col-md-6 ${
                          fuelQty === "Gal" ? "" : "hidden"
                        }`}
                      >
                        <label for="gallons">Enter Gallons</label>
                        <input
                          className={` form-control ${
                            galError ? "is-invalid" : ""
                          }`}
                          id="gallons"
                          type="number"
                          value={gallons}
                          onChange={(event) =>
                            handleGallons(event.target.value)
                          }
                          placeholder="Enter an Amount"
                        />
                        <div className="invalid-feedback">{galError}</div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* OIL SERVICE MENU */}
                <div className="service-menu">
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
                      <div className="invalid-feedback">{oilError}</div>
                    </div>
                    <img src={oil} alt="oil" className="oil-icon" />
                  </div>
                  <form
                    className={`service-fields ${
                      oilIsChecked === false ? "hidden" : ""
                    }`}
                  >
                    <div className="form-row">
                      <div className="form-group col-md-6">
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
                          <option value="Philips 20W50">Philips 20W50</option>
                        </select>
                      </div>
                      <div className="form-group col-md-4">
                        <label for="quantity">Quantity</label>
                        <select
                          className="form-control"
                          id="quantity"
                          value={oilQty}
                          onChange={(event) => handleOilQty(event.target.value)}
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
              <section>
                <p className="lead text-bold">Additional Service Requests</p>
                <div class="input-group">
                  <textarea
                    class="form-control"
                    aria-label="With textarea"
                    value={addService}
                    onChange={(event) => setAddService(event.target.value)}
                  ></textarea>
                </div>
              </section>
            </form>
            <div className="flex btn-grouping">
              <Link to="/">
                <button className="btn">Back</button>
              </Link>

              <button className="btn" onClick={onSubmit}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default connect(mapStoreToProps)(FieldServiceForm);
