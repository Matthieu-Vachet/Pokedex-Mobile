// const inputRecherche = document.getElementById("recherche");

let pokemonApi = "https://tyradex.vercel.app/api/v1/pokemon/";
let currentPokemonData;
export default async function fetchPokemon() {
    let randomPokemon = Math.floor(Math.random() * 1017) + 1;
    
    let api = `${pokemonApi}${randomPokemon}`;
    let response = await fetch(api);
    let data = await response.json();
    currentPokemonData = data.pokedexId;
    return data;
  }

// export async function fetchPokemonByName() {
//     let api = `${pokemonApi}${inputRecherche.value}`;
//     let response = await fetch(api);
//     let data = await response.json();
//     return data;
//   }