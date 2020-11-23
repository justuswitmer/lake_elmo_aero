import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function Admin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="step-one">
      <section className="container">
        <div className="text-center m-5">
          <h3>Open Requests</h3>
        </div>
        <div className="card my-4 text-bold">
          <div class="row lead table-head">
            <div class="col-sm text-bold">Service Date</div>
            <div class="col-sm text-bold">Tail Number</div>
            <div class="col-sm text-bold">Service Type</div>
            <div class="col-sm text-bold">Details</div>
          </div>

          <div class="row flex">
            <div class="col-sm">11/12/2020</div>
            <div class="col-sm">N-9276G</div>
            <div class="col-sm">Jet A</div>
            <div class="col-sm">
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleShow}
              >
                View
              </button>
            </div>
          </div>

          <div class="row flex">
            <div class="col-sm">11/27/2020</div>
            <div class="col-sm">N-4216S</div>
            <div class="col-sm">Field Service</div>
            <div class="col-sm">
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleShow}
              >
                View
              </button>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-outline my-3">
          Service History
        </button>
      </section>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">N-4216S</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <div className="flex m-2">
            <button type="submit" className="btn btn-primary flex">
              Mark As Complete
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Admin;
