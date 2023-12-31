import fetchApi from "./fetchApi.js";
import { updateBackground, updatePokemonInfo, updateGenderSection } from "./domManipulation.js";
import typesBackground from "./typeBackground.js";

export default async function changePokemon(callback) {
    const data = await fetchApi();

    const firstType = data.types[0].name;
    const backgroundColor = typesBackground[firstType];

    updateBackground(backgroundColor);
    updatePokemonInfo(data);

    const sexeMasculin = data.sexe && data.sexe.male;
    const sexeFeminin = data.sexe && data.sexe.female;

    updateGenderSection(sexeMasculin, sexeFeminin);

    // Appeler le callback si celui-ci est défini
    if (callback && typeof callback === 'function') {
        setTimeout(callback, 5000);
    }
}
