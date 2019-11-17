class Pokemon {
  constructor(name){
    this.name = name
    this.hp = hp
    this.atk = atk
    this.abilities = []
  }
}


class Trainer {
  constructor(name) {
    this.name = name
    this.pokemonList = []

  }
  all (){
  // this function will return an array of Pokemon objects
  return this.pokemonList
  }

  get(name){
    //this function will find the pokemon base on their name
    // it will return them as objects to the arrayList
    //API

  }
}
