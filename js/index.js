import changePokemon from "./changePokemon.js";
// import changePokemonByName from "./changePokemonByName.js";
import { showLoader, hideLoader } from "./loader.js";


let randomButton = document.getElementById("pokeball");

changePokemon(() => {
    hideLoader();
});

randomButton.addEventListener("click", () => {
    showLoader();
    changePokemon(() => {
        hideLoader();
    });
})


// const rechercheButton = document.getElementById("search_icon");
// const inputRecherche = document.getElementById("recherche");


// rechercheButton.addEventListener("click", () => {
//     window.location.href = "/Pages/pokemonByName.html";
//     changePokemonByName();
//     console.log("rechercheButton.value", inputRecherche.value);
// })