import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatISO, format } from "date-fns";

//Style Imports
import "./JetAFuelForm.css";
import MaskedInput from "react-text-mask";
import oil from "./images/oil.svg";
import one from "../images/one.svg";
import two from "../images/two.svg";
import three from "../images/three.svg";
import four from "../images/four.svg";
import calendar from "../images/calendar.svg";

function JetAFuelForm(props) {
  //For Input Validation
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [oilError, setOilError] = useState("");
  const [servicesError, setServicesError] = useState("");

  //For rendering form fields
  const [oilIsChecked, setOilIsChecked] = useState(false);

  const newAppointment = useSelector((state) => state.newAppointment);
  const [firstName, setFirstName] = useState(newAppointment.first);
  const [lastName, setLastName] = useState(newAppointment.last);
  const [phoneNum, setPhoneNum] = useState(newAppointment.phone);
  const [email, setEmail] = useState(newAppointment.email);
  const [fuelQty, setFuelQty] = useState(newAppointment.fuel_qty);
  const [oilType, setOilType] = useState(newAppointment.oil_type);
  const [oilQty, setOilQty] = useState(newAppointment.oil_qty);
  const [addService, setAddService] = useState(newAppointment.additional_serv);
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  //Handles the setting of each state and resets error fields.
  const handleEmail = (event) => {
    setEmail(event);
    setEmailError("");
  };

  const handleFirstName = (event) => {
    setFirstName(event);
    setFirstNameError("");
  };

  const handleOilType = (event) => {
    setOilType(event);
    setOilError("");
  };

  const handleOilQty = (event) => {
    setOilQty(event);
    setOilError("");
  };

  //Handles whether or not the Oil Checkbox is marked, and resets any errors that may have occurred.
  const oilStatus = () => {
    setOilIsChecked(oilIsChecked === false ? true : false);

    if (oilError) {
      setOilError(""); // removes error message if conditions are met
    }
  };

  // Determines if there are any issues with required fields. If no, it returns true.
  const validateContactForm = () => {
    if (!email.includes("@")) {
      setEmailError("Invalid Email Format");
    }

    if (!firstName) {
      setFirstNameError("First Name Cannot Be Blank");
    }

    if (!email.includes("@") || !firstName) {
      console.log("Input Field Error");
      return false;
    }

    return true;
  };

  const validateOilForm = () => {
    console.log("in validateOilForms");

    //If Oil is checked, but no Qty or Type, add this error
    if (
      oilIsChecked &&
      (oilType === "Choose..." || oilQty === 0 || oilQty === "Choose...")
    ) {
      setOilError("Please Confirm Oil Type and Quantity");
      return false;
    }

    return true;
  };

  // Confirms if ANY service is selected. If not, returns false;
  const validateServices = () => {
    //If Oil and Fuel are NOT checked, and addService is null, add this error
    if (!oilIsChecked && fuelQty === "0") {
      setServicesError("Please Confirm Services Needed");
      console.log("No Services Selected");
      return false;
    }

    return true;
  };

  //If Forms are validated, addDetails is triggered
  const onSubmit = () => {
    const serviceIsValid = validateServices();
    const contactIsValid = validateContactForm();
    const oilIsValid = validateOilForm();

    if (serviceIsValid && contactIsValid && oilIsValid) {
      addDetails();
      props.history.push("/ReviewSubmitJetA");
      console.log("FORM IS VALID");
    }
  };

  const formattedDateTime = formatISO(startDate);
  const createdDate = formatISO(new Date());
  const displayDate = format(new Date(), "MM/dd/yyyy HH:mm");
  const emailApptDate = format(new Date(startDate), "MM/dd/yyyy HH:mm");
  const addDetails = () => {
    const fuelType = "Jet A";
    const newAddService = addService === "" ? "None" : addService;
    dispatch({
      type: "SET_FIRST",
      payload: firstName,
    });
    dispatch({
      type: "SET_LAST",
      payload: lastName,
    });
    dispatch({
      type: "SET_PHONE",
      payload: phoneNum,
    });
    dispatch({
      type: "SET_EMAIL",
      payload: email,
    });
    dispatch({
      type: "SET_FUEL_TYPE",
      payload: fuelType,
    });
    dispatch({
      type: "SET_FUEL_QTY",
      payload: `${fuelQty}gal`,
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
      type: "SET_APPT_DATE",
      payload: formattedDateTime,
    });
    dispatch({
      type: "SET_ADD_SERV",
      payload: newAddService,
    });
    dispatch({
      type: "SET_CREATED_DATE",
      payload: createdDate,
    });
    dispatch({
      type: "SET_DISPLAY_DATE",
      payload: displayDate,
    });
    dispatch({
      type: "SET_EMAIL_DATE",
      payload: emailApptDate,
    });
  };

  return (
    <div className="container">
      <div className="step-one">
        <div className="row mb-5">
          <section className="col">
            <div className="step-display mb-3 mt-2">
              <img src={one} alt="one" className="m-2 step-icon" />
              <p className="lead text-bold">How Much Jet A Fuel Do You Need?</p>
            </div>
            <div className="card mb-4">
              <div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Dollar amount (with dot and two decimal places)"
                  value={fuelQty}
                  onChange={(event) => setFuelQty(event.target.value)}
                />
                <span className="">gallons</span>
              </div>

              {/* Oil Section Menu */}
              <div className="service-menu">
                <div className="service-selector">
                  <div className="service-checkbox">
                    <input
                      className={`${oilError ? "is-invalid" : ""}`}
                      type="checkbox"
                      onChange={() => oilStatus()}
                    />
                    <p className="lead text-bold">Oil</p>
                    <div className="invalid-feedback">{oilError}</div>
                  </div>
                  <img src={oil} alt="oil" className="oil-icon" />
                </div>
                <form
                  className={`service-fields ${
                    oilIsChecked === false ? "hidden" : ""
                  }`}
                >
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="oilType">Oil Type</label>
                      <select
                        className="form-control"
                        id="oilType"
                        value={oilType}
                        onChange={(event) => handleOilType(event.target.value)}
                      >
                        <option selected>Choose...</option>
                        <option value="Aero Shell 15W50">
                          Aero Shell 15W50
                        </option>
                        <option value="Philips 20W50">Philips 20W50</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label for="quantity">Quantity</label>
                      <select
                        className="form-control"
                        id="quantity"
                        value={oilQty}
                        onChange={(event) => handleOilQty(event.target.value)}
                      >
                        <option selected>Quarts...</option>
                        <option value="1">1 qt</option>
                        <option value="2">2 qts</option>
                        <option value="3">3 qts</option>
                        <option value="4">4 qts</option>
                        <option value="5">5 qts</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              {/* Additional Service Details */}
              <section>
                <p className="lead">Additional Service Details</p>
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
          </section>

          {/* About Jet A Fuel Service */}
          <div className="col">
            <p className="md text-color ">24-Hour Service</p>
            <div className="">
              <p>
                Our round-the-clock Jet Refueling Services make it easy to keep
                you on schedule.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Appointment Time */}
          <section className="col">
            <div className="step-display mb-3 mt-2">
              <img src={two} alt="two" className="m-2 step-icon" />
              <p className="lead text-bold">
                Select Your Service Date And Time
              </p>
            </div>
            <div className="card mb-4">
              <DatePicker
                todayButton="Today"
                selected={startDateTime}
                onChange={(datetime) => setStartDateTime(datetime)}
                minDate={new Date()}
                showTimeSelect
                timeIntervals={15}
                minTime={setHours(setMinutes(new Date(), 0), 7)}
                maxTime={setHours(setMinutes(new Date(), 0), 19)}
                excludeTimes={omittedTimes}
                timeCaption="Time"
                dateFormat="MM/dd/yyyy HH:mm"
                timeFormat="HH:mm"
                customInput={<ApptPicker />}
              />

              <div className="flex">
                {/* <p>You've Selected</p> */}
                <p className="p-1">
                  {moment(formattedDateTime).format("MM/DD/YYYY")}
                </p>
                <p className="p-1">At</p>
                <p className="p-1">
                  {moment(formattedDateTime).format("HH:mm")}
                </p>
              </div>
            </div>
          </section>
          {/* Contact Info */}
          <section className="col">
            <div className="step-display mb-3">
              <img src={three} alt="three" className="m-2 step-icon" />
              <p className="lead text-bold">Add Your Contact Information</p>
            </div>
            <form>
              <div className="card mb-4">
                <div className="form-group col-md-10">
                  {/* <label for="firstName">First Name *</label> */}

                  <input
                    className={` form-control ${
                      firstNameError ? "is-invalid" : ""
                    }`}
                    id="firstName"
                    type="text"
                    placeholder="First Name *"
                    value={firstName}
                    onChange={(event) => handleFirstName(event.target.value)}
                  />
                  <div className="invalid-feedback">{firstNameError}</div>
                </div>

                <div className="form-group col-md-10">
                  {/* <label for="lastName">Last Name</label> */}
                  <input
                    className="form-control"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>

                <div className="">
                  <div className="form-group col-md-10">
                    {/* <label for="email">Email *</label> */}
                    <input
                      className={` form-control ${
                        emailError ? "is-invalid" : ""
                      }`}
                      id="email"
                      type="text"
                      placeholder="Email *"
                      value={email}
                      onChange={(event) => handleEmail(event.target.value)}
                    />
                    <div className="invalid-feedback">{emailError}</div>
                  </div>

                  <div className="form-group col-md-10">
                    {/* <label for="phone">Phone</label> */}
                    <MaskedInput
                      mask={[
                        "(",
                        /[1-9]/,
                        /\d/,
                        /\d/,
                        ")",
                        " ",
                        /\d/,
                        /\d/,
                        /\d/,
                        "-",
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                      ]}
                      guide={true}
                      // showMask={true}
                      className="form-control"
                      id="phone"
                      type="text"
                      placeholder="Phone"
                      value={phoneNum}
                      onChange={(event) => setPhoneNum(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div>
          <div className="flex btn-spacing">
            <Link to="/">
              <button className="btn-outline text-color lead text-bold">
                Back
              </button>
            </Link>
            <button className="btn" onClick={onSubmit}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JetAFuelForm;
