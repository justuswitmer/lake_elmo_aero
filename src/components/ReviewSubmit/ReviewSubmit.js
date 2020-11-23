import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

//Style Imports
import "./ReviewSubmit.css";

function ReviewSubmit() {
  return (
    <div className="step-one">
      <section className="container">
        <div className="card my-5">
          <div>
            <h4>Field Service</h4>
          </div>
          <div className="">
            <p className="md text-center">Service Details</p>
            <div className="text-center grid">
              <section className="m-1">
                <p className="lead text-bold">Fuel</p>
                <p className="sm">Type: 100L</p>
                <p className="sm">Volume: Tabs</p>
              </section>
              <section className="m-1">
                <p className="lead text-bold">Oil</p>
                <p className="sm">Amount: 3 qts</p>
              </section>

              <section className="m-1">
                <p className="lead text-bold">Additional Service Details</p>
                <p className="sm">Check Tire Pressure</p>
              </section>
            </div>
          </div>
          <hr />
          <div className="">
            <p className="md text-center m-2">Appointment Details</p>
            <p className="md text-center m-2">N-4216S</p>
            <div class="text-center grid">
              <section className="m-1">
                <p className="lead text-bold">Customer Information</p>
                <p className="sm">Full Name: John Smith</p>
                <p className="sm">Phone: (763) 555-5555</p>
                <p className="sm">Email: john@test.com</p>
              </section>

              <section className="m-1">
                <p className="lead text-bold">Date / Time</p>
                <p className="">11/27/2020</p>
                <p className="sm">15:52</p>
              </section>

              <section className="m-1">
                <p className="lead text-bold">Hangar Access</p>
                <p className="sm">Hangar: 23F </p>
                <p className="sm">Lake Elmo Aero has access</p>
              </section>

              <section className="m-1">
                <p className="lead text-bold">Additional Comments</p>
                <p className="sm">Thank You!</p>
              </section>
            </div>

            <div className="flex btn-grouping">
              <Link to="/FieldServiceApptForm">
                <Button>Back</Button>
              </Link>
              <Link to="/ApptSuccess">
                <Button>Submit</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewSubmit;
