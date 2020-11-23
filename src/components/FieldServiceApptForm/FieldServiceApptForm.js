import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function FieldServiceApptForm() {
  return (
    <div className="step-one">
      <section className="container">
        <div className="card my-5">
          <div>
            <h4>Field Service</h4>
          </div>

          <div>
            <p className="lg">N-4216S</p>
            <h3>Appointment Details</h3>
          </div>
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
                  placeholder="Full Name"
                />

                <label for="inputPassword2" class="sr-only"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Hanger Number"
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
                  <p className="lead">Date</p>
                  <input type="date" />
                </section>
                <section>
                  <p className="lead">Time</p>
                  <input type="time" />
                </section>

                <section>
                  <p className="lead">Hanger Access</p>
                  <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">I will be there</option>
                    <option value="2">Door Code</option>
                    <option value="3">Lake Elmo Aero has access</option>
                    <option value="3">Hanger Unlocked</option>
                  </select>
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
            <div className="flex btn-grouping">
              <div className="btn-grouping">
                <Link to="/FieldServiceForm">
                  <button>Back</button>
                </Link>
                <Link to="/ReviewSubmit">
                  <button>Next</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FieldServiceApptForm;
