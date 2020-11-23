import React from "react";

//Style Imports
import "./JetAFuelForm.css";

function JetAFuelForm() {
  return (
    <div className="step-one">
      <section className="container">
        <div className="card my-5">
          <div>
            <h2>Jet A Fuel Service </h2>
          </div>
          <div>
            <p className="lg">N-9276G</p>
          </div>

          <section>
            <p className="lead">Approx. Fuel Volume Needed</p>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
              />
              <div class="input-group-append">
                <span class="input-group-text">lbs</span>
              </div>
            </div>
          </section>
          <h3>Appointment Details</h3>
          <div>
            <p className="lead">Contact Information</p>
            <form class="">
              <div class="form-group mb-2">
                <p className="text-bold lead"></p>
              </div>
              <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="First Name"
                />

                <label for="inputPassword2" class="sr-only"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Last Name"
                />

                <label for="inputPassword2" class="sr-only"></label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Phone"
                />

                <label for="inputPassword2" class="sr-only"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Email"
                />
              </div>

              <div>
              <section>
                  <p className="lead text-bold">Oil Type</p>
                  <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Oil...</option>
                    <option value="Aero Shell 15W50">Aero Shell 15W50</option>
                    <option value="Philips 20W50">Philips 20W50</option>
                  </select>
                </section>
                
              <section>
                  <p className="lead text-bold">Oil Amount</p>
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
                  <p className="lead">Date</p>
                  <input type="date" />
                </section>
                <section>
                  <p className="lead">Approx. Time</p>
                  <input type="time" />
                </section>

                <section>
                  <p className="lead">Additional Comments</p>
                  <div class="input-group">
                    <textarea
                      class="form-control"
                      aria-label="With textarea"
                    ></textarea>
                  </div>
                </section>
              </div>
            </form>
            <div className="flex btn-spacing">
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

export default JetAFuelForm;
