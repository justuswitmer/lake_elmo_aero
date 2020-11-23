import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";

//Style Import
import "./StepOne.css";

function StepOne() {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (event) => {
    console.log("in setService with:", event);
    setSelectedService(event);
  };

  console.log("selectedService is:", selectedService);

  return (
    <div className="step-one">
      <section className="container">
        <div className="card flex">
          <h3 className=" text-center text-bold">Current Fuel Prices</h3>
          <h4 className="">100L .... $3.75</h4>
          <h4 className="">Jet A .... $2.69</h4>
        </div>
        <div className="card my-4">
          <div>
            <h3 className="text-center">Enter Tail Number</h3>
          </div>
          <div className="">
            <div className="flex mx-sm-3 mb-2">
              <p className="text-bold lead m-1">N-</p>
              <input
                type="text"
                // class="form-control"
                id="inputPassword2"
                placeholder="number"
              />
            </div>
            <h3 className="text-center m-5">Service Request Type</h3>
            <DropdownButton
              id="dropdown-basic-button"
              title="Select Service Type"
              onChange={handleServiceChange}
              value={selectedService}
            >
              <Dropdown.Item
                onClick={() => {
                  handleServiceChange("Field Hangar Service");
                }}
              >
                Field Hangar Service
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleServiceChange("Jet A Fuel Service");
                }}
              >
                Jet A Fuel Service
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div>{selectedService}</div>
          <div>
            {selectedService ? (
              <Link to="/FieldServiceApptForm">
                <Button>Next</Button>
              </Link>
            ) : null}
          </div>
        </div>

        {/* <section className="card my-5">
          <button class="btn btn-primary mb-2">Field Service Request</button>
          <button class="btn btn-primary mb-2">
            Jet A Fuel Receiving Request
          </button>
        </section> */}
      </section>
    </div>
  );
}

export default StepOne;
