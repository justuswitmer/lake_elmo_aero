import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

// Style Imports
import aeroLogo from "./aero-logo.png";
import "./Header.css";

function Header(props) {
  const price = useSelector((state) => state.price);

  console.log("price is:", price);

  return (
    <div className="header">
      <div className="container text-center flex">
        <Link to="/">
          <img src={aeroLogo} alt="aero logo" />
        </Link>
        {/* <p className="md">Lake Elmo Aero Services</p> */}

        <div className="text-center text-bold">
          <p className="">Current Fuel Prices</p>
          {props.store.price.map(price =>
            <h4 className="">{price.type}....{price.pricePerGal}</h4>
          )}
        </div>

        {/* <h1>Lake Elmo Aero Service Request</h1> */}
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(Header);
