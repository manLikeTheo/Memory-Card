import React from "react";
import ScoreBoard from "./ScoreBoard";

function Header() {
  return (
    <header>
      <div className="logo-heading">
        <img src="" alt="" className="logo" />
        <h1 className="heading">Winter is Coming</h1>
      </div>
      <ScoreBoard />
    </header>
  );
}

export default Header;
