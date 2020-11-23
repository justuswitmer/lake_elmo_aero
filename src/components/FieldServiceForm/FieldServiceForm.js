import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

//Style Imports
import { Button, Form, Row, Col } from "react-bootstrap";
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

  //Test Logs
  console.log("fuelIsChecked is:", fuelIsChecked);

  const dispatch = useDispatch();
  const addDetails = () => {
    const newFuelQty = fuelQty === "Gal" ? gallons : fuelQty;

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
      payload: addService,
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
                <div className="service-menu my-3">
                  <div className="service-selector">
                    <div className="service-checkbox">
                      <input
                        type="checkbox"
                        onChange={() =>
                          setFuelIsChecked(
                            fuelIsChecked === false ? true : false
                          )
                        }
                      />
                      <p className="lead text-bold">Fuel</p>
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
                          class="custom-select"
                          id="inputGroupSelect01"
                          value={fuelType}
                          onChange={(event) => setFuelType(event.target.value)}
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
                          onChange={(event) => setFuelQty(event.target.value)}
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
                          className="form-control"
                          id="gallons"
                          type="number"
                          // class="form-control"
                          value={gallons}
                          onChange={(event) => setGallons(event.target.value)}
                          placeholder="Enter an Amount"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div className="service-menu">
                  <div className="service-selector">
                    <div className="service-checkbox">
                      <input
                        type="checkbox"
                        onChange={() =>
                          setOilIsChecked(oilIsChecked === false ? true : false)
                        }
                      />
                      <p className="lead text-bold">Oil</p>
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
                          onChange={(event) => setOilType(event.target.value)}
                        >
                          <option selected>Oil...</option>
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
                          onChange={(event) => setOilQty(event.target.value)}
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
              <Link to="/FieldServiceApptForm">
                <button className="btn" onClick={addDetails}>
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default connect(mapStoreToProps)(FieldServiceForm);
