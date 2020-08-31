import React from "react";
import axios from "axios";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
    this.fetchPokemonApi = this.fetchPokemonApi.bind(this);
  }
  async fetchPokemonApi() {
    try {
      let response = await axios({
        method: "get",
        url: `https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`,
      });
      this.setState({ data: response.data.results });
    } catch (err) {
      console.error(err);
    }
  }
  componentDidMount() {
    this.fetchPokemonApi();
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.data
          ? this.state.data.map(function (item) {
              return <p>{item.name}</p>;
            })
          : null}
      </div>
    );
  }
}

export default App;
