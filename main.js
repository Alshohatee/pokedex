//makeing the nav bar go to different places
allowedPokemonName = []
let nameInputMessage = document.getElementById("FormMessage")
var FormName = document.getElementById("FormName")
var gridChoices = document.getElementById("grid")
var selectSixheader = document.getElementById("SelectSixheader")
var chosenPokemon = document.getElementById("chosenPokemon")

var searchById = document.getElementById("search-byid")
var userPokemonDiv = document.getElementById("userpo")
var input = document.getElementById("filed1").value




elem = 0

var div = document.createElement("div")
div.style.backgroundColor = "red"

var h11 = document.createElement("h1")
h11.innerText = "welcome to the pokedex"

var h2= document.createElement("h2")
h2.style.textAlign = "center"

h2.innerText = "Make your own team of pokemon by clicking, their name, or id"
div.appendChild(h11)
div.appendChild(h2)
document.body.appendChild(div)

goHome()
creating150Choices()
/*******************************************************************************
nav bar function
********************************************************************************/
function goHome() {
  div.style.display= "block"
  selectSixheader.style.display= "none"
  chosenPokemon.style.display= "none"
  FormName.style.display= "none";
  userPokemonDiv.style.display= "none";
  nameInputMessage.style.display= "none";
  gridChoices.style.display= "none";
}

function formTeam(){
  div.style.display= "none"
  chosenPokemon.style.display= "none"
  SelectSixheader.style.display= "block"
  nameInputMessage.style.display= "block";
  nameInputMessage.innerText = "Enter your name:"
  FormName.style.display= "block";
  gridChoices.style.display= "grid";
}

// to prevent preventDefault
document.getElementById('FormNameInputshow').addEventListener('submit', function(e){
  e.preventDefault();

}, false);
// TO SUBMIT THE INFO
function SubmitNameOrId() {

  gridChoices.style.display= "none";
  nameInputMessage.style.display= "block";
  FormName.style.display = "block"
  var input = document.getElementById("filed1").value

  if( input != "" && nameInputMessage.innerText == "Enter your name:"){
    if(document.getElementById("filed1").value != ""){
        t.name = document.getElementById("filed1").value
        nameInputMessage.innerText = `Hello ${input}`
    }
  }else  if (input != "" && nameInputMessage.innerText == "Enter Pokemon name:"){
var index = 0
do {
  if(allowedPokemonName[index]!=input){
    nameInputMessage.innerText = "Enter Pokemon name again:"
    console.log(nameInputMessage.innerText );
    found = false
  }else {
    getPokeomByName(input,  "chosen")
    nameInputMessage.innerText += `\n ${input} was added.`
    break;
  }

index++
}while(!found && index < 150);



  }
  else if(input != "" && nameInputMessage.innerText == "Enter Pokemon ID:"){

    if(input > 0 && input < 151){
      nameInputMessage.innerText += `\n ${input} was added.`
      getPokeomByID(input, "chosen")
    }else {
      nameInputMessage.innerText += `\n ${input} was not available.`
    }
  }
}

function searchByName(){

  div.style.display= "none"
  chosenPokemon.style.display= "block"
  gridChoices.style.display= "none";
  userPokemonDiv.style.display= "grid"
  gridChoices.style.display= "none"
  div.style.display= "none"
  FormName.style.display= "block";
  nameInputMessage.style.display= "block";
  nameInputMessage.innerText = "Enter Pokemon name:"
}

function searchbyid(){
  div.style.display= "none"
    chosenPokemon.style.display= "block"
  gridChoices.style.display= "none";
  userPokemonDiv.style.display= "grid"
  gridChoices.style.display= "none"
  div.style.display= "none"
  FormName.style.display= "block";
  nameInputMessage.style.display= "block";
  nameInputMessage.innerText = "Enter Pokemon ID:"
}

function creating150Choices(){
  for(let i = 1; i < 150 ; i++){

    getPokeomByID(i,"choices")

  }
}


/*******************************************************************************
classes
********************************************************************************/


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

  }

  add(object){
    this.pokemonList.push(object)
  }
}



class Pokemon {
  constructor(data, abilitiesHolder){
    this.name = data.name
    this.image = data.sprites.front_default
    this.hp = data.stats[5].base_stat
    this.atk = data.stats[4].base_stat
    this.abilities = abilitiesHolder
  }
  //display method
  drawingObj(){
    pokemonClickableChoices(this)
  }


}
   t = new Trainer("Aseel")

/*****************************************************************************
***********************************display*******************************************
******************************************************************************/
function pokemonClickableChoices(obj){


  var div1 = document.createElement("div");

  // div1.id = 1
  div1.style.height = "97%";
  div1.style.background = "#5F9EA0";
  div1.style.alignItems  = "center";
  div1.style.borderRadius = "25px";
  div1.style.boxShadow  = "0 1px 6px rgba(0, 0, 0, 0.9), 0 1px 4px rgba(0, 0, 0, 0.24)";
  div1.style.cursor = "pointer";

  document.getElementById("grid").appendChild(div1);


  // creating image feild
  var x = document.createElement("IMG");
  x.src = obj.image
  x.style.display ="block";
  x.style.margin = "0 auto";
  x.style.textAlign  = "center";

  div1.appendChild(x);


  var para = document.createElement("p");
  para.style.color ="white";
  para.style.textAlign  = "center";
  var str = "name: " + obj.name + "\r"
  str += "hp: " + obj.hp + "\n"
  str += "atk: " + obj.atk + "\n" + "abilities: "
  for(let i = 0 ; i < obj.abilities.length; i++){
str += obj.abilities[i] + " "
  }
  var node = document.createTextNode(str);
  para.appendChild(node);

  div1.appendChild(para);
  div1.addEventListener("click", ()=>{
    div1.style.backgroundImage = "url('https://www.trzcacak.rs/myfile/detail/234-2343102_how-to-draw-poke-ball-drawing-easy-pokemon.png')";
    div1.style.backgroundSize = "100% 100%";
    div1.style.backgroundRepeat  = "no-repeat";

    elem++

//becuase we can not push obj back so we create an objects
   pokemon = {
     name: obj.name,
     image: obj.image,
     hp:  obj.hp,
     atk: obj.atk,
     abilities: obj.abilities

   }

    t.add(pokemon)

    if(elem ==  6){
chosenPokemon.style.display= "block"
      console.log(elem);


      gridChoices.style.display = "none"
      gridChoices.classList.remove("mystyle");
      for(let j = 0 ; j < 6;j++ ){
        userPokemonsDiv(t.pokemonList[j])
      }

      let df = document.createElement("div")

      df.classList.add("grid")

    }
  });
}

function userPokemonsDiv(object){
  userPokemonDiv.style.display = "grid"
  userPokemonDiv.classList.add("grid1")
  var div1 = document.createElement("div");
  div1.style.height = "97%";
  div1.style.background = "#5F9EA0";
  div1.style.color = "white";
  div1.style.margin = "0";
  div1.style.alignItems  = "center";
  div1.style.border = "1px solid #000000";
  div1.style.boxShadow  = "10px 10px grey";
  document.getElementById("userpo").appendChild(div1);

  // creating image feild
  var x = document.createElement("IMG");
  x.src = `https://play.pokemonshowdown.com/sprites/xyani-shiny/${object.name}.gif`
  // x.src = `${object.image}`
  x.style.display ="block";
  x.style.margin = "0 auto";
  x.style.textAlign  = "center";

  div1.appendChild(x);

  var para = document.createElement("p");
  para.style.color ="white";
  para.style.textAlign  = "center";
  var str = "name: " + object.name + "\r"
  str += "hp: " + object.hp + "\n"
  str += "atk: " + object.atk + "\n"
  var node = document.createTextNode(str);
  para.appendChild(node);
  div1.appendChild(para);
}


/*****************************************************************************
******************************************************************************
******************************************************************************/

function getPokeomByID(id,functionDcicder) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let text = this.responseText
      let data = JSON.parse(text)
      console.log(id);
      allowedPokemonName.push(data.name);

      let abilitiesHolder = []
      for (let i = 0 ; i < data.abilities.length; i++){
      abilitiesHolder.push(data.abilities[i].ability.name);
      }


      if(functionDcicder =="choices"){
        new Pokemon( data, abilitiesHolder).drawingObj();
      }else if (functionDcicder == "chosen"){
        userPokemonsDiv(new Pokemon(data, abilitiesHolder))
      }
    }

  };

  xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/id/${id}.json`, true);
  xhttp.send();
}

function getPokeomByName(name,functionDcicder) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let text = this.responseText
      let data = JSON.parse(text)

    let  abilitiesHolder = []
      for (let i = 0 ; i < data.abilities.length; i++){
      abilitiesHolder.push(data.abilities[i].ability.name);
      }
      if(functionDcicder =="choices"){
        new Pokemon( data, abilitiesHolder).drawingObj();
      }else if (functionDcicder == "chosen"){
        console.log("ase1");
        userPokemonsDiv(new Pokemon(data, abilitiesHolder))
      }
    }

  };
  xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/name/${name}.json`, true);
  xhttp.send();
}





/*
// will be fixed latter
queryPokemonAPIID = (i)=>{
fetch(`https://fizal.me/pokeapi/api/v2/id/${i}.json`)
.then((resp) =>{return resp.json()})
.then((data) => {

let name  = data.name;
let image = data.sprites.back_default;
let hp = data.stats[5].base_stat;
let atk = data.stats[4].base_stat;







for (let i = 0 ; i < data.abilities.length; i++){
console.log(data.abilities[i].ability.name);
// data.abilities[i].ability.name
}
console.log(hp, atk, name);
})
}

function getingPokemonDetailsID(i){
axios.get(`https://fizal.me/pokeapi/api/v2/id/${i}.json`)
.then(function (res){
// user (new Pokemon(res))
new Pokemon( res).drawingObj(res);
})
}


function queryPokemonAPIName (name){
fetch(`https://fizal.me/pokeapi/api/v2/name/${name}.json`)
.then((resp) =>{
return resp.json()})
.then((data) => {// this is where it's resolved
console.log("asdf");
let name  = data.name;
let image = data.sprites.back_default;
let hp = data.stats[5].base_stat;
let atk = data.stats[4].base_stat;
for (let i = 0 ; i < data.abilities.length; i++){
console.log(data.abilities[i].ability.name);
// data.abilities[i].ability.name
}
console.log(name);
})
}

function getingPokemonDetailsIDSingle(i){
axios.get(`https://fizal.me/pokeapi/api/v2/id/${i}.json`)
.then(function (res){
userPokemonsDiv(new Pokemon(res))
// new Pokemon( res).drawingObj(res);
})
}

function getingPokemonDetailsName(d){
// console.log(i);
axios.get(`https://fizal.me/pokeapi/api/v2/name/${d}.json`)
.then(function (res){
// user (new Pokemon(res))
new Pokemon(res).drawingObj(res);
})
}
function getingPokemonDetailsNameSingle(d){
// console.log(i);
axios.get(`https://fizal.me/pokeapi/api/v2/name/${d}.json`)
.then(function (res){
name1 = res.data.name
userPokemonsDiv(new Pokemon(res))
// new Pokemon(res).drawingObj(res);
})


}


*/
