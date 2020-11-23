import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

// Style Imports
import aeroLogo from "./aero-logo.png";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="container text-center flex">
        <Link to="/">
          <img src={aeroLogo} alt="aero logo" />
        </Link>
        {/* <p className="md">Lake Elmo Aero Services</p> */}
        {props.store.price.map((price) => (
          <div className="text-center text-bold">
            <p className="">Current Fuel Prices</p>
            <h4 className="">100 LL .... {price.fuel_100L}</h4>
            <h4 className="">Jet A .... {price.fuel_jetA}</h4>
          </div>
        ))}
        {/* <h1>Lake Elmo Aero Service Request</h1> */}
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(Header);
