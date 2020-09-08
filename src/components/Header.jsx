import React from "react";

function Header(props) {
  return (
    <div id="header">
      <h1>Pokedex</h1>
      <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "red" }}>
        <a class="navbar-brand" href="">
          Pokedex
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          style={{ color: "black" }}
        >
          <div class="navbar-nav">
            <a
              class="nav-item nav-link  nav-font"
              onClick={() => {
                props.onClick("Home");
              }}
            >
              Home <span class="sr-only">(current)</span>
            </a>
            <a
              class="nav-item nav-link nav-font"
              onClick={() => {
                props.onClick("Form a Team");
              }}
            >
              Form A Team
            </a>
            <a
              class="nav-item nav-link nav-font"
              onClick={() => {
                props.onClick("Search for Pokemon by Name");
              }}
            >
              Search for Pokemon by Name
            </a>
            <a
              class="nav-item nav-link nav-font"
              onClick={() => {
                props.onClick("Search for Pokemon by ID");
              }}
            >
              Search for Pokemon by ID
            </a>
          </div>
        </div>
      </nav>

      {/* <div id="header"> */}
      {/* <h1>Pokedex</h1>
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
      </div> */}
    </div>
  );
}

export default Header;
