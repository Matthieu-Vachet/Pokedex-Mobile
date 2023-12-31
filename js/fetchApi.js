
let pokemonApi = "https://tyradex.vercel.app/api/v1/pokemon/";
let currentPokemonData;

// Fonction pour appeler l'API pour la génération aleatoire de pokemon
export default async function fetchPokemon() {
    let randomPokemon = Math.floor(Math.random() * 1017) + 1;
    let api = `${pokemonApi}${randomPokemon}`;
    let response = await fetch(api);
    let data = await response.json();
    currentPokemonData = data.pokedexId;
    return data;
  }


  // Fonction pour appeler l'API pour la recherche d'un pokemon par nom ou par numéro
  export async function fetchPokemonByName(pokemonName) {
    let api = `${pokemonApi}${pokemonName}`;
    console.log(api);
    let response = await fetch(api);
    let data = await response.json();
    return data;
  }