import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import LogOutButton from "../LogOutButton/LogOutButton";
import FuelPrice from "../FuelPrice/FuelPrice";

// Style Imports
import aeroLogo from "./images/aero-logo.png";
import "./Header.css";

function Header(props) {
  const price = useSelector((state) => state.price);
  console.log("price is:", price);
  return (
    <div className={props.store.user.id ? "headerAdmin" : "header"}>
      <div className="container text-center flex">
        <div>
          <Link to="/">
            <img src={aeroLogo} alt="aero logo" />
          </Link>
        </div>
        <div className="text-center text-bold">
          <div className={props.store.user.id ? "fuelPriceEdit" : ""}>
            <p>Current Fuel Prices</p>
            {props.store.user.id && <FuelPrice />}
          </div>
          {props.store.price.map((price) => (
            <p className="sm">
              {price.type}....{price.pricePerGal}
            </p>
          ))}
          {props.store.user.id && <LogOutButton />}
        </div>
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(Header);
