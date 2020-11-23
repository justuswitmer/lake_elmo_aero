import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

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
   const newFuelQty = fuelQty === "Gal" ? gallons : fuelQty
    
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
    <div className="step-one">
      <section className="container">
        <div className="card my-5">
          <div>
            <h3>Field Service</h3>
          </div>
          <div>
            <p className="lg">N{newAppointment.tail}</p>
            <form class="">
              <div>
                <h3>Services</h3>
              </div>
              <div>
                <div className="">
                  <section>
                    <p className="lead text-bold">Fuel</p>
                    <p className="sm">Type</p>
                    {props.store.price.map((price) => (

                    <select class="custom-select" id="inputGroupSelect01"
                    value={fuelType}
                    onChange={event => setFuelType(event.target.value)}
                    >
                      <option selected>Choose...</option>
                      <option value="100LL">100LL... {price.fuel_100L}</option>
                      <option value="Jet A">Jet A... {price.fuel_jetA}</option>
                    </select>

                    ))}
                  </section>

                  <section>
                    <p className="sm">Volume</p>
                    <select
                      class="custom-select"
                      id="inputGroupSelect01"
                      value={fuelQty}
                      onChange={(event) => setFuelQty(event.target.value)}
                    >
                      <option selected>Choose...</option>
                      <option value="Gal">Specify Gallons</option>
                      <option value="Full">Full</option>
                      <option value="Tabs">Tabs</option>
                    </select>
                  </section>
                  <section>
                    {fuelQty === "Gal" ? (
                      <input
                        type="number"
                        // class="form-control"
                        value={gallons}
                        onChange={(event) => setGallons(event.target.value)}
                        id="inputPassword2"
                        placeholder="Enter an Amount"
                      />
                    ) : (
                      <div hidden></div>
                    )}
                  </section>
                </div>

                <section>
                  <p className="lead text-bold">Oil Type</p>
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
                  <p className="lead text-bold">Oil</p>
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

                <section>
                  <p className="lead text-bold">Additional Service Details</p>
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
                <button>Back</button>
              </Link>
              <Link to="/FieldServiceApptForm">
                <button onClick={addDetails}>Next</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default connect(mapStoreToProps)(FieldServiceForm);
