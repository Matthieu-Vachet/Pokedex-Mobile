import changePokemon from "./changePokemon.js";

let randomButton = document.getElementById("pokeball");

changePokemon();

randomButton.addEventListener("click", () => {
    changePokemon();
})