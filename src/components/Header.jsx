import React from "react";

function Header(props) {
  return (
    <div id="header">
      <h1>Pokedex</h1>
      <div id="nav">
        <div
          className="navbar-item"
          onClick={() => {
            props.onClick("Home");
          }}
        >
          Home
        </div>
        <div
          className="navbar-item"
          onClick={() => {
            props.onClick("Form a Team");
          }}
        >
          Form a Team
        </div>
        <div
          className="navbar-item"
          onClick={() => {
            props.onClick("Search for Pokemon by Name");
          }}
        >
          Search for Pokemon by Name
        </div>
        <div
          className="navbar-item"
          onClick={() => {
            props.onClick("Search for Pokemon by ID");
          }}
        >
          Search for Pokemon by ID
        </div>
      </div>
    </div>
  );
}

export default Header;
