import React from "react";

function Header() {
  return (
    <div id="header">
      <h1>Pokedex</h1>
      <div id="nav">
        <div class="navbar-item" onclick="goHome()">
          Home
        </div>
        <div class="navbar-item" onclick="formTeam()">
          Form a Team
        </div>
        <div class="navbar-item" onclick="searchByName()">
          Search for Pokemon by Name
        </div>
        <div class="navbar-item" onclick="searchbyid()">
          Search for Pokemon by ID
        </div>
      </div>
    </div>
  );
}

export default Header;
