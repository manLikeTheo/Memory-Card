import React from "react";
import ScoreBoard from "./ScoreBoard";
import logoPNG from "../assets/images/logoPNG.jpg";

function Header() {
  return (
    <header>
      <div className="logo-heading">
        <img src={logoPNG} alt="" className="logo" />
        {/* <h1 className="heading">Winter is Coming</h1> */}
      </div>
      <ScoreBoard />
    </header>
  );
}

export default Header;
