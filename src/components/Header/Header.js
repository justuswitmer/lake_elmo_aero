import React from "react";

// Style Imports
import aeroLogo from "./aero-logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="container text-center">
        <img src={aeroLogo} alt="aero logo" />
        <h1>Lake Elmo Aero Service Request</h1>
      </div>
    </div>
  );
}

export default Header;
