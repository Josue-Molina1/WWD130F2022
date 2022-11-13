const baseUrl = "https://pokeapi.co/v2/pokemon/pokemon/";
//const response = fetch(baseURL).then(function (response){
    console.log("first");
//};


async function getPokemon(url, callback){
    const response = await fetch(baseURL);
    if (response.ok);
    const data = await response.json();
    //console.log(data);
    doStuff(data);

    callback(data);
}

function pokemonTemplate(pokemon){
    return `<h2>${pokemon.name}</h2>
    <img src="${pokemon.sprites.other.home.front_default}"alt=${pokemon.name}"`;
}


function doStuff(data){
    const outputEl = document.querySelector("#Output")
    const html = pokemonTemplate(data);
    outputEl.insertAdjacentHTML("afterbegin", html)
   // console.log("Stuff")
}

function doStuffList

getPokemon(baseUrl+"Ditto", doStuff);
getPokemon(baseURL+"?limit=20");
//20 might be the default fetch data set 
//Asyncronous function => Promises
// we gotta specify "fetch" what we expect for our data so we can use a .json() or .text() or .blob(anything thats is nos Json or Text)
