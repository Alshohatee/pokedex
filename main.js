//makeing the nav bar go to different places
var allowedPokemonName = [];
let nameInputMessage = document.getElementById("FormMessage");
var FormName = document.getElementById("FormName");
var gridChoices = document.getElementById("grid");
var selectSixheader = document.getElementById("SelectSixheader");
var chosenPokemon = document.getElementById("chosenPokemon");

var searchById = document.getElementById("search-byid");
var userPokemonDiv = document.getElementById("userpo");
var input = document.getElementById("filed1").value;

elem = 0;
var teamOfSix = 6;

var div = document.createElement("div");
div.style.backgroundColor = "red";

var h11 = document.createElement("h1");
h11.innerText = "welcome to the pokedex";

var h2 = document.createElement("h2");
h2.style.textAlign = "center";

h2.innerText = "Make your own team of pokemon by clicking, their name, or id";
div.appendChild(h11);
div.appendChild(h2);
document.body.appendChild(div);

goHome();
creating150Choices();
/*******************************************************************************
nav bar function
********************************************************************************/
function goHome() {
  div.style.display = "block";
  selectSixheader.style.display = "none";
  chosenPokemon.style.display = "none";
  FormName.style.display = "none";
  userPokemonDiv.style.display = "none";
  nameInputMessage.style.display = "none";
  gridChoices.style.display = "none";
}

function formTeam() {
  div.style.display = "none";
  chosenPokemon.style.display = "none";
  SelectSixheader.style.display = "block";
  nameInputMessage.style.display = "block";
  nameInputMessage.innerText = "Enter your name:";
  FormName.style.display = "block";
  gridChoices.style.display = "grid";
}

// to prevent preventDefault
document.getElementById("FormNameInputshow").addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
  },
  false
);

// TO SUBMIT THE INFO
function SubmitNameOrId() {
  gridChoices.style.display = "none";
  nameInputMessage.style.display = "block";
  FormName.style.display = "block";
  var input = document.getElementById("filed1").value;

  if (input != "" && nameInputMessage.innerText == "Enter your name:") {
    if (document.getElementById("filed1").value != "") {
      t.name = document.getElementById("filed1").value;
      nameInputMessage.innerText = `Hello ${input}`;
    }
  } else if (
    input != "" &&
    nameInputMessage.innerText == "Enter Pokemon name:"
  ) {
    var index = 0;
    do {
      if (allowedPokemonName[index] != input) {
        nameInputMessage.innerText = "Enter Pokemon name again:";
        console.log(nameInputMessage.innerText);
        found = false;
      } else {
        getPokeomByName(input, "chosen");
        nameInputMessage.innerText += `\n ${input} was added.`;
        break;
      }

      index++;
    } while (!found && index < 150);
  } else if (input != "" && nameInputMessage.innerText == "Enter Pokemon ID:") {
    if (input > 0 && input < 151) {
      nameInputMessage.innerText += `\n ${input} was added.`;
      getPokeomByID(input, "chosen");
    } else {
      nameInputMessage.innerText += `\n ${input} was not available.`;
    }
  }
}

function searchByName() {
  div.style.display = "none";
  chosenPokemon.style.display = "block";
  gridChoices.style.display = "none";
  userPokemonDiv.style.display = "grid";
  gridChoices.style.display = "none";
  div.style.display = "none";
  FormName.style.display = "block";
  nameInputMessage.style.display = "block";
  nameInputMessage.innerText = "Enter Pokemon name:";
}

function searchbyid() {
  div.style.display = "none";
  chosenPokemon.style.display = "block";
  gridChoices.style.display = "none";
  userPokemonDiv.style.display = "grid";
  gridChoices.style.display = "none";
  div.style.display = "none";
  FormName.style.display = "block";
  nameInputMessage.style.display = "block";
  nameInputMessage.innerText = "Enter Pokemon ID:";
}

function creating150Choices() {
  for (let i = 1; i < 150; i++) {
    getPokeomByID(i, "choices");
  }
}

/*******************************************************************************
classes
********************************************************************************/

class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemonList = [];
  }

  all() {
    // this function will return an array of Pokemon objects
    return this.pokemonList;
  }

  get(object) {
    this.pokemonList.push(object);
  }
}

class Pokemon {
  constructor(data, abilitiesHolder) {
    this.name = data.name;
    this.image = data.sprites.front_default;
    this.hp = data.stats[5].base_stat;
    this.atk = data.stats[4].base_stat;
    this.abilities = abilitiesHolder;
  }
  //display method
  drawingObj() {
    pokemonClickableChoices(this);
  }
}
t = new Trainer("Aseel");

/*****************************************************************************
 ***********************************display*******************************************
 ******************************************************************************/
function pokemonClickableChoices(obj) {
  var div1 = document.createElement("div");
  selectSixheader.innerHTML = `${teamOfSix} here`;
  // div1.id = 1
  div1.style.height = "97%";
  div1.style.background = "#5F9EA0";
  div1.style.alignItems = "center";
  div1.style.borderRadius = "25px";
  div1.style.boxShadow =
    "0 1px 6px rgba(0, 0, 0, 0.9), 0 1px 4px rgba(0, 0, 0, 0.24)";
  div1.style.cursor = "pointer";

  document.getElementById("grid").appendChild(div1);

  // creating image feild
  var img = document.createElement("IMG");
  img.src = obj.image;
  img.style.display = "block";
  img.style.margin = "0 auto";
  div1.appendChild(img);

  var nameh5 = document.createElement("h5");
  nameh5.innerText = obj.name;
  nameh5.style.margin = "0";

  div1.appendChild(nameh5);

  var stats = document.createElement("p");
  stats.innerText = "HP: " + obj.hp + " atk: " + obj.atk;
  div1.appendChild(stats);

  var str = "Abilities: ";
  for (let i = 0; i < obj.abilities.length; i++) {
    let x = i + 1;
    if (i != obj.abilities.length) {
      str += obj.abilities[i] + ", ";
    }
  }
  str += obj.abilities[obj.abilities.length - 1] + ".";
  var ailities = document.createElement("p");
  ailities.innerText = str;
  div1.appendChild(ailities);

  div1.addEventListener("click", () => {
    div1.style.backgroundImage =
      "url('https://www.trzcacak.rs/myfile/detail/234-2343102_how-to-draw-poke-ball-drawing-easy-pokemon.png')";
    div1.style.backgroundSize = "100% 100%";
    div1.style.backgroundRepeat = "no-repeat";

    elem++;
    teamOfSix--;
    selectSixheader.innerHTML = `${teamOfSix} here`;
    //becuase we can not push obj back so we create an objects
    pokemon = {
      name: obj.name,
      image: obj.image,
      hp: obj.hp,
      atk: obj.atk,
      abilities: obj.abilities,
    };

    t.get(pokemon);

    if (elem == 6) {
      chosenPokemon.style.display = "block";
      console.log(elem);

      gridChoices.style.display = "none";
      gridChoices.classList.remove("mystyle");
      for (let j = 0; j < 6; j++) {
        userPokemonsDiv(t.pokemonList[j]);
      }

      let df = document.createElement("div");

      df.classList.add("grid");
    }
  });
}

function userPokemonsDiv(obj) {
  userPokemonDiv.style.display = "grid";
  userPokemonDiv.classList.add("grid1");
  var div1 = document.createElement("div");
  div1.style.height = "97%";
  div1.style.background = "#5F9EA0";
  div1.style.color = "white";
  div1.style.margin = "0";
  div1.style.alignItems = "center";
  div1.style.border = "1px solid #000000";
  div1.style.boxShadow = "10px 10px grey";
  document.getElementById("userpo").appendChild(div1);

  // creating image feild

  var img = document.createElement("IMG");
  img.src = `https://play.pokemonshowdown.com/sprites/xyani-shiny/${obj.name}.gif`;
  img.style.display = "block";
  img.style.margin = "0 auto";
  div1.appendChild(img);

  var nameh5 = document.createElement("h5");
  nameh5.innerText = obj.name;
  nameh5.style.margin = "0";

  div1.appendChild(nameh5);

  var stats = document.createElement("p");
  stats.innerText = "HP: " + obj.hp + " atk: " + obj.atk;
  div1.appendChild(stats);

  var str = "Abilities: ";
  for (let i = 0; i < obj.abilities.length; i++) {
    let x = i + 1;
    if (i != obj.abilities.length) {
      str += obj.abilities[i] + ", ";
    }
  }
  str += obj.abilities[obj.abilities.length - 1] + ".";
  var abilities = document.createElement("p");
  abilities.innerText = str;

  div1.appendChild(abilities);
}

/*****************************************************************************
                    GetPokeomByID AND GetPokeomByName
 ******************************************************************************/

function getPokeomByID(id, functionDcicder) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let text = this.responseText;
      let data = JSON.parse(text);

      allowedPokemonName.push(data.name);

      let abilitiesHolder = [];
      for (let i = 0; i < data.abilities.length; i++) {
        abilitiesHolder.push(data.abilities[i].ability.name);
      }

      if (functionDcicder == "choices") {
        new Pokemon(data, abilitiesHolder).drawingObj();
      } else if (functionDcicder == "chosen") {
        userPokemonsDiv(new Pokemon(data, abilitiesHolder));
      }
    }
  };

  xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/id/${id}.json`, true);
  xhttp.send();
}

function getPokeomByName(name, functionDcicder) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let text = this.responseText;
      let data = JSON.parse(text);

      let abilitiesHolder = [];
      for (let i = 0; i < data.abilities.length; i++) {
        abilitiesHolder.push(data.abilities[i].ability.name);
      }
      if (functionDcicder == "choices") {
        new Pokemon(data, abilitiesHolder).drawingObj();
      } else if (functionDcicder == "chosen") {
        userPokemonsDiv(new Pokemon(data, abilitiesHolder));
      }
    }
  };
  xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/name/${name}.json`, true);
  xhttp.send();
}
