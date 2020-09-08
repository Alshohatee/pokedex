import React from "react";
import axios from "axios";
import Header from "./Header";
import Card from "./Card";
import SubHeaderInfo from "./SubHeaderInfo";
import Form from "./Form";
import Info from "./Info";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      userPokemons: [],
      currentNav: "",
    };

    this.fetchPokemonApi = this.fetchPokemonApi.bind(this);
    this.handleClickCard = this.handleClickCard.bind(this);
    this.handleClickOnHeader = this.handleClickOnHeader.bind(this);
    this.addByNameOrId = this.addByNameOrId.bind(this);
  }

  async fetchPokemonApi() {
    var arr = [];

    for (var id = 1; id <= 150; id++) {
      try {
        let response = await axios({
          method: "get",
          url: `https://fizal.me/pokeapi/api/v2/id/${id}.json`,
        });
        arr.push(response.data);
        this.setState({ pokemons: arr });
      } catch (err) {
        console.error(err);
      }
    }
    console.log(this.state.pokemons);
  }
  componentDidMount() {
    this.fetchPokemonApi();
  }

  // FormTeam
  handleClickCard(pokemon) {
    var alreadyAdded = false;
    this.state.userPokemons.map((item) => {
      console.log(item[0].id);
      if (item[0].id === pokemon[0].id) {
        alreadyAdded = true;
        return alreadyAdded;
      }
      return alreadyAdded;
    });

    if (alreadyAdded) {
      return;
    }

    var arr = this.state.userPokemons;
    arr.push(pokemon);
    if (this.state.userPokemons.length <= 6) {
      this.setState((prevState) => {
        return {
          ...prevState,
          userPokemons: arr,
        };
      });
    }

    this.setState((prevState) => {
      return {
        ...prevState,
        pokemons: this.state.pokemons.filter((podex, index) => {
          return index !== pokemon[0].id;
        }),
      };
    });
  }

  async addByNameOrId(value) {
    if (this.state.userPokemons.length === 6) return;
    var url = "";
    if (typeof value === "string") {
      url = `https://fizal.me/pokeapi/api/v2/name/${value}.json`;
    }
    if (Number(value)) {
      url = `https://fizal.me/pokeapi/api/v2/id/${value}.json`;
    }

    try {
      let response = await axios({
        method: "get",
        url: url,
      });
      console.log(response.data);
      console.log(response.data);
      // var x = {
      //   id: value,
      //   name: response.data.name,
      //   // imgUrl: response.data.sprites.front_default,
      //   HP: response.data.stats[5].base_stat,
      //   ATK: response.data.stats[4].base_stat,
      // };

      this.handleClickCard([
        {
          id: value,
          name: response.data.name,
          imgUrl: response.data.sprites.front_default,
          HP: response.data.stats[5].base_stat,
          ATK: response.data.stats[4].base_stat,
        },
      ]);
    } catch (err) {
      console.error(err);
    }
  }

  handleClickOnHeader(Nav) {
    console.log(Nav);

    this.setState((prevState) => {
      return {
        ...prevState,
        currentNav: Nav,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Header onClick={this.handleClickOnHeader} />

        {/* subHeader unders the home tap */}
        {this.state.currentNav === "Home" || this.state.currentNav === "" ? (
          <SubHeaderInfo
            title="Welcome to the Pokedex"
            subTitle="  Your own team of pokemon by clicking, or by searching for their name or
        id."
          />
        ) : null}

        {/* subHeader unders the Form a Team tap */}
        {this.state.currentNav === "Form a Team" &&
        this.state.userPokemons.length < 6 ? (
          <SubHeaderInfo
            title="Choose Your Team by clicking or searching"
            subTitle={`Left: ${6 - this.state.userPokemons.length}`}
          />
        ) : null}

        {/* subHeader unders the Form a Search for Pokemon by id or name */}
        {(this.state.currentNav === "Search for Pokemon by ID" ||
          this.state.currentNav === "Search for Pokemon by Name") &&
        this.state.userPokemons.length < 6 ? (
          <SubHeaderInfo
            title="Choose Your Team by clicking or searching"
            subTitle={6 - this.state.userPokemons.length}
          />
        ) : null}

        {/* subHeader unders the Form a Team tap the team is already formed up */}
        {this.state.currentNav !== "Home" &&
        this.state.userPokemons.length === 6 ? (
          <SubHeaderInfo
            title="Your Team"
            subTitle={`Your team is made of ${this.state.userPokemons.length}`}
          />
        ) : null}

        {/* subHeader unders Form the Search for Pokemon by Name */}
        {this.state.currentNav === "Search for Pokemon by Name" &&
        this.state.userPokemons.length < 6 ? (
          <Form
            label="Enter the name: "
            name="name"
            onClick={this.addByNameOrId}
          />
        ) : null}

        {/* subHeader unders Form the Search for Pokemon by id */}
        {this.state.currentNav === "Search for Pokemon by ID" &&
        this.state.userPokemons.length < 6 ? (
          <Form label="Enter the ID: " name="id" onClick={this.addByNameOrId} />
        ) : null}

        {/* The gird to show no not show */}
        {this.state.currentNav !== "Home" && this.state.currentNav !== "" ? (
          <div id="grid">
            {this.state.pokemons &&
            this.state.userPokemons.length < 6 &&
            this.state.currentNav === "Form a Team" &&
            this.state.currentNav !== "Home"
              ? this.state.pokemons.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      id={index}
                      name={item.name}
                      imgUrl={item.sprites.front_default}
                      HP={item.stats[5].base_stat}
                      ATK={item.stats[4].base_stat}
                      onClick={this.handleClickCard}
                    />
                  );
                })
              : null}

            {this.state.userPokemons.length >= 6 &&
            this.state.currentNav !== "Search for Pokemon by ID" &&
            this.state.currentNav !== "Search for Pokemon by Name"
              ? this.state.userPokemons.map((item, index) => {
                  console.log(item[0].name);
                  return (
                    <Card
                      key={index}
                      id={index}
                      name={item[0].name}
                      imgUrl={item[0].imgUrl}
                      HP={item[0].HP}
                      ATK={item[0].ATK}
                    />
                  );
                })
              : null}

            {this.state.userPokemons.length <= 6 &&
            (this.state.currentNav === "Search for Pokemon by ID" ||
              this.state.currentNav === "Search for Pokemon by Name") &&
            (this.state.currentNav !== "Home" || this.state.currentNav !== " ")
              ? this.state.userPokemons.map((item, index) => {
                  console.log(item[0].name);
                  return (
                    <Card
                      key={index}
                      id={index}
                      name={item[0].name}
                      imgUrl={item[0].imgUrl}
                      HP={item[0].HP}
                      ATK={item[0].ATK}
                    />
                  );
                })
              : null}
          </div>
        ) : (
          <div className="grid-info">
            <Info
              title="Form a Team by Clicking"
              imgUrl={process.env.PUBLIC_URL + "/vidoes/info1.mov"}
            />

            <Info
              title="Form a Team  by Entering Name"
              imgUrl={process.env.PUBLIC_URL + "/vidoes/info2.mov"}
            />

            <Info
              title="Form a Team  by Entering Id"
              imgUrl={process.env.PUBLIC_URL + "/vidoes/info3.mov"}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
