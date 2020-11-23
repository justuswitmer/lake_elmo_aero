import React from "react";
import { Link } from "react-router-dom";
// Style Imports
import aeroLogo from "./aero-logo.png";
import "./Header.css";

function Header() {

  return (
    <div className="header">
      <div className="container text-center">
        <Link to="/">
        <img src={aeroLogo} alt="aero logo"/>
        </Link>
        <h1>Lake Elmo Aero Service Request</h1>
      </div>
    </div>
  );
}

export default Header;
