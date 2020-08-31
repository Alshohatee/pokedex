import React from "react";

function Header() {
  return (
    <div id="header">
      <h1>Pokedex</h1>
      <div id="nav">
        <div className="navbar-item" onclick="goHome()">
          Home
        </div>
        <div className="navbar-item" onclick="formTeam()">
          Form a Team
        </div>
        <div className="navbar-item" onclick="searchByName()">
          Search for Pokemon by Name
        </div>
        <div className="navbar-item" onclick="searchbyid()">
          Search for Pokemon by ID
        </div>
      </div>
    </div>
  );
}

export default Header;
