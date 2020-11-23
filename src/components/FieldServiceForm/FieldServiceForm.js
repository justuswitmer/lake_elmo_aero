import React from "react";
import { connect } from "react-redux";
import mapStoreToProps from '../../redux/mapStoreToProps';

function FieldServiceForm(props) {
  return (
    <div className="step-one">
      <section className="container">
        <div className="card my-5">
          <div>
            <h3>Field Service</h3>
          </div>
          <div>
            <p className="lg">N-4216S</p>
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
                    <select class="custom-select" id="inputGroupSelect01">
                      <option selected>Choose...</option>
                      <option value="1">100L... {price.fuel_100L}</option>
                      <option value="2">Jet A... {price.fuel_jetA}</option>
                    </select>
                    ))}
                  </section>

                  <section>
                    <p className="sm">Volume</p>
                    <select class="custom-select" id="inputGroupSelect01">
                      <option selected>Choose...</option>
                      <option value="1">Full</option>
                      <option value="2">Tabs</option>
                      <option value="3">Lbs</option>
                    </select>
                  </section>
                </div>

                <section>
                  <p className="lead text-bold">Oil Type</p>
                  <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Oil...</option>
                    <option value="Aero Shell 15W50">Aero Shell 15W50</option>
                    <option value="Philips 20W50">Philips 20W50</option>
                  </select>
                </section>

                <section>
                  <p className="lead text-bold">Oil</p>
                  <select class="custom-select" id="inputGroupSelect01">
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
                    ></textarea>
                  </div>
                </section>
              </div>
            </form>
            <div className="flex btn-grouping">
              <button type="submit" class="btn btn-primary mb-2 my-5">
                Back
              </button>
              <button type="submit" class="btn btn-primary mb-2 my-5">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default connect(mapStoreToProps) (FieldServiceForm);
