import React from "react";

//Style Import
import "./ApptSuccess.css";

function ApptSuccess() {
  return (
    <div className="step-two">
      <section className="container">
        <div className="card my-5">
          <h3>Thanks!</h3>
          <h4> Your Service Request Has Been Received.</h4>
          <p>
            Please contact Lake Elmo Aero with any service change requests.
            phone: (651) 777-1399 | email: info@lakeelmoaero.com
          </p>
          <a href="http://www.lakeelmoaero.com">Back To Lake Elmo Aero</a>
        </div>
      </section>
    </div>
  );
}

export default ApptSuccess;
