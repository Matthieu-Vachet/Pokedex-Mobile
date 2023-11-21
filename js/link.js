// const loaderContainer = document.getElementById("loader_container");
// Redirection vers la page du pokemon aleatoire
document.getElementById("button_random").addEventListener("click", () => {
    window.location.href = "/Pages/pokemonRandom.html";

});


// Redirection vers la page du pokemon par nom ou par numéro
const rechercheButton = document.getElementById("search_icon");
const inputRecherche = document.getElementById("recherche");

rechercheButton.addEventListener("click", () => {
    const inputValue = inputRecherche.value;
    window.location.href = `/Pages/pokemonByName.html?name=${inputValue}`;
});