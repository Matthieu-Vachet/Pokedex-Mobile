import { fetchPokemonByName } from "./fetchApi.js";
import { updateBackground, updatePokemonInfo, updateGenderSection } from "./domManipulation.js";
import typesBackground from "./typeBackground.js";

const searchParams = new URLSearchParams(window.location.search);
const searchValue = searchParams.get("name");


async function renderPokemonByName() {
    const data = await fetchPokemonByName(searchValue);
    if (data.types && data.types.length > 0) {
      const firstType = data.types[0].name;
      const backgroundColor = typesBackground[firstType];
  
      updateBackground(backgroundColor);
      updatePokemonInfo(data);
  
      const sexeMasculin = data.sexe && data.sexe.male;
      const sexeFeminin = data.sexe && data.sexe.female;
  
      updateGenderSection(sexeMasculin, sexeFeminin);
    } else {
      // Gérer le cas où les données du Pokémon ne sont pas disponibles
      console.log('Les données du Pokémon ne sont pas disponibles');
      window.location.href = '../Pages/erreur404.html';
    }
  }
  
  // Appel de la fonction pour afficher les données du Pokémon
  renderPokemonByName();