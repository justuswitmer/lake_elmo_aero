import React from "react";

function ReviewSubmitJetA() {
  return (
    <div className="step-one">
      <section className="container">
        <div className="card my-5">
          <div>
            <h4>Jet A Fuel Service</h4>
          </div>
          <div className="">
            <p className="md text-center">Service Details</p>
            <div className="text-center m-5 ">
              <section className="m-1">
                <p className="lead text-bold">Fuel</p>
                <p className="sm">Volume: 30lbs</p>
              </section>
            </div>
          </div>
          <hr />
          <div className="">
            <p className="md text-center m-2">Appointment Details</p>
            <p className="md text-center m-2">N-9276G</p>
            <div class="text-center grid">
              <section className="m-1">
                <p className="lead text-bold">Customer Information</p>
                <p className="sm">Full Name: Cindy Carter</p>
                <p className="sm">Phone: (763) 555-1234</p>
                <p className="sm">Email: cindy@test.com</p>
              </section>

              <section className="m-1">
                <p className="lead text-bold">Date / Time</p>
                <p className="">11/12/2020</p>
                <p className="sm">01:55</p>
              </section>

              <section className="m-1">
                <p className="lead text-bold">Additional Comments</p>
                <p className="sm">Thank You!</p>
              </section>
            </div>

            <div className="flex btn-grouping">
              <button type="submit" class="btn btn-primary mb-2 my-5 flex">
                Back
              </button>
              <button type="submit" class="btn btn-primary mb-2 my-5 flex">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ReviewSubmitJetA;
