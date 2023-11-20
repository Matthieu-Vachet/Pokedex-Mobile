const loaderContainer = document.getElementById("loader_container");

document.getElementById("button_random").addEventListener("click", () => {
    window.location.href = "/Pages/pokemonRandom.html";

});

const rechercheButton = document.getElementById("search_icon");
const inputRecherche = document.getElementById("recherche");

rechercheButton.addEventListener("click", () => {
    const inputValue = inputRecherche.value;
    window.location.href = `/Pages/pokemonByName.html?name=${inputValue}`;
});