import React from "react";
import axios from "axios";
import Header from "./Header";
import Card from "./Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
    };

    this.fetchPokemonApi = this.fetchPokemonApi.bind(this);
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

    // console.log(arr);
    console.log(this.state.pokemons);
  }
  componentDidMount() {
    this.fetchPokemonApi();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div id="grid">
          {this.state.pokemons
            ? this.state.pokemons.map(function (item) {
                console.log(item);
                return (
                  <Card
                    name={item.name}
                    imgUrl={item.sprites.front_default}
                    HP={item.stats[5].base_stat}
                    ATK={item.stats[4].base_stat}
                  />
                );
              })
            : "null"}
        </div>
      </div>
    );
  }
}

export default App;
