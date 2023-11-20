import changePokemon from "./changePokemon.js";
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
