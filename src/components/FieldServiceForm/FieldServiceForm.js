import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

//Style Imports
import "./FieldServiceForm.css";

function FieldServiceForm(props) {
  const newAppointment = useSelector((state) => state.newAppointment);
  const [fuelType, setFuelType] = useState(newAppointment.fuel_type);
  const [fuelQty, setFuelQty] = useState(newAppointment.fuel_qty);
  const [gallons, setGallons] = useState("");
  const [oilType, setOilType] = useState(newAppointment.oil_type);
  const [oilQty, setOilQty] = useState(newAppointment.oil_qty);
  const [addService, setAddService] = useState(newAppointment.additional_serv);

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
        <div className="service-fields">
          {/* <h3>On Field Service Request</h3> */}
          <p className="md">N- {newAppointment.tail}</p>
        </div>
        <div className="card my-5">
          <div>
            <form class="">
              <div>
                <h3>On Field Services</h3>
              </div>
              <div>
                <div className="service-selector">
                  <input type="checkbox" />
                  <p className="sm text-bold">Fuel</p>
                  <div></div>
                </div>

                <div className="service-fields">
                  <section>
                    <p className="sm">Type</p>


                    <select
                      value={fuelType}
                      onChange={(event) => setFuelType(event.target.value)}
                    >
                      <option selected>Choose...</option>
                      <option value="100LL">100 LL... $3.75</option>
                      <option value="Jet A">Jet A... $2.69</option>
                    </select>

                    {/* May Not Use This Code, depending on db changes */}
                    {/* {props.store.price.map((price) => (
                      <select
                        class="custom-select"
                        id="inputGroupSelect01"
                        value={fuelType}
                        onChange={(event) => setFuelType(event.target.value)}
                      >
                        <option selected>Choose...</option>
                        <option value="100LL">
                          100LL... {price.fuel_100L}
                        </option>
                        <option value="Jet A">
                          Jet A... {price.fuel_jetA}
                        </option>
                      </select>
                    ))} */}

                  </section>
                  <section>
                    <p className="sm">Volume</p>

                    <div className="dropdown">
                      <select
                        value={fuelQty}
                        onChange={(event) => setFuelQty(event.target.value)}
                      >
                        <option selected>Choose...</option>
                        <option value="Gal">Specify Gallons</option>
                        <option value="Full">Full</option>
                        <option value="Tabs">Tabs</option>
                      </select>
                    </div>
                  </section>
                  <section>
                    {fuelQty === "Gal" ? (
                      <input
                        type="number"
                        // class="form-control"
                        value={gallons}
                        onChange={(event) => setGallons(event.target.value)}
                        placeholder="Enter an Amount"
                      />
                    ) : (
                        <div hidden></div>
                      )}
                  </section>
                </div>

                <p className="lead text-bold">Oil</p>
                <div className="service-fields">
                  <section>
                    <p className="sm">Oil Type</p>
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
                    <p className="sm">Oil Qty</p>
                    <select
                      class="custom-select"
                      id="inputGroupSelect01"
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
                  </section>
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
              </div>
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
