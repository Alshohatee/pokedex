import React from "react";
import axios from "axios";
import Header from "./Header";
import Card from "./Card";
import SubHeaderInfo from "./SubHeaderInfo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      userPokemons: [],
    };

    this.fetchPokemonApi = this.fetchPokemonApi.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
  handleClick(pokemon) {
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

  render() {
    return (
      <div className="App">
        <Header />
        <SubHeaderInfo />

        <div id="grid">
          {this.state.pokemons && this.state.userPokemons.length < 6
            ? this.state.pokemons.map((item, index) => {
                // console.log(item);
                return (
                  <Card
                    key={index}
                    id={index}
                    name={item.name}
                    imgUrl={item.sprites.front_default}
                    HP={item.stats[5].base_stat}
                    ATK={item.stats[4].base_stat}
                    onClick={this.handleClick}
                  />
                );
              })
            : null}

          {this.state.userPokemons.length >= 6
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
      </div>
    );
  }
}

export default App;
