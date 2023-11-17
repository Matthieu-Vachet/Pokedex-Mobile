
export function updateBackground(color) {

    const capacité1 = document.getElementById("capacité1");
    const capacité2 = document.getElementById("capacité2");
    const capacité3 = document.getElementById("capacité3");
    const separator = document.getElementById("separator");
    const separatorStats = document.getElementById("separatorStats");
    const valueStatsRight = document.getElementById("valueStatsRight");
    const valueStatsLeft = document.getElementById("valueStatsLeft");
    const generationText = document.getElementById("generationText");
    const evolveSection = document.getElementById("evolveSection");

    document.body.style.background = color;
    heightValue.style.backgroundImage = color;
    weightValue.style.backgroundImage = color;
    separator.style.background = color;
    capacité1.style.background = color;
    capacité2.style.background = color;
    capacité3.style.background = color;
    separatorStats.style.background = color;
    valueStatsRight.style.backgroundImage = color;
    valueStatsLeft.style.backgroundImage = color;
    generationText.style.backgroundImage = color;
    evolveSection.style.background = color;

}


export function updatePokemonInfo(data) {
    const pkemonName = document.getElementById("Pokemon_name");
    const pokemonId = document.getElementById("Pokemon_id");
    const namejpn = document.getElementById("nameJpn");
    const imagePokemon = document.getElementById("spriteRegular");
    const imageShiny = document.getElementById("spriteShiny");
    const imageType1 = document.getElementById("type1");
    const nameType1 = document.getElementById("nameType1");
    const imageType2 = document.getElementById("type2");
    const nameType2 = document.getElementById("nameType2");
    const boxtype2 = document.getElementById("typePokemon2");
    const descValue = document.getElementById("descValue");
    const heightValue = document.getElementById("heightValue");
    const weightValue = document.getElementById("weightValue");
    const capacitéTitle1 = document.getElementById("capacitéTitle1");
    const capacitéTitle2 = document.getElementById("capacitéTitle2");
    const capacitéTitleSecret = document.getElementById("capacitéTitleSecret");
    const pv = document.getElementById("pv");
    const attaque = document.getElementById("attaque");
    const defense = document.getElementById("defense");
    const attaqueSpé = document.getElementById("attaqueSpé");
    const defenseSpé = document.getElementById("defenseSpé");
    const vitesse = document.getElementById("vitesse");
    const generationText = document.getElementById("generationText");

    const normalValue = document.getElementById("normalValue");
    const planteValue = document.getElementById("planteValue");
    const feuValue = document.getElementById("feuValue");
    const eauValue = document.getElementById("eauValue");
    const electriqueValue = document.getElementById("electriqueValue");
    const glaceValue = document.getElementById("glaceValue");
    const combatValue = document.getElementById("combatValue");
    const poisonValue = document.getElementById("poisonValue");
    const solValue = document.getElementById("solValue");
    const volValue = document.getElementById("volValue");
    const PsyValue = document.getElementById("psyValue");
    const InsecteValue = document.getElementById("insecteValue");
    const RocheValue = document.getElementById("rocheValue");
    const SpectreValue = document.getElementById("spectreValue");
    const DragonValue = document.getElementById("dragonValue");
    const TenebreValue = document.getElementById("tenebreValue");
    const AcierValue = document.getElementById("acierValue");
    const feeValue = document.getElementById("feeValue");
    const evolveConditionText = document.getElementById("evolveConditionText");
    const evolveNameText = document.getElementById("evolveNameText");
    const evolveNameId = document.getElementById("evolveNameId");
    const MegaSpriteBackground = document.getElementById("MegaSpriteBackground");
    const GmaxSpriteBackground = document.getElementById("GmaxSpriteBackground");

    pkemonName.innerHTML = data.name.fr;
    pokemonId.innerHTML = "#" + data.pokedexId;
    namejpn.innerHTML = data.name.jp;
    imagePokemon.src = data.sprites.regular;
    if (data.sprites && data.sprites.shiny) {
        imageShiny.style.display = "block";
        imageShiny.src = data.sprites.shiny;
    } else {
        imageShiny.style.display = "none";
    }
    imageType1.src = data.types[0].image;
    nameType1.innerHTML = data.types[0].name;

    if (Array.isArray(data.types) && data.types.length > 1 && data.types[1]) {
        boxtype2.style.display = "flex";
        imageType2.src = data.types[1].image;
        nameType2.innerHTML = data.types[1].name;
    } else {
        boxtype2.style.display = "none";
    }

    descValue.innerHTML = data.category;
    heightValue.innerHTML = data.height;
    weightValue.innerHTML = data.weight;
    if (data.talents && Array.isArray(data.talents) && data.talents.length > 0) {
        capacitéTitle1.innerHTML = data.talents[0].name;
    } else {
        capacitéTitle1.innerHTML = "---";
    }    
    if (data.talents && Array.isArray(data.talents) && data.talents.length > 1) {
        capacitéTitle2.innerHTML = data.talents[1].name;
    } else {
        capacitéTitle2.innerHTML = "---";
    }
    if (data.talents && Array.isArray(data.talents) && data.talents.length > 2) {
        capacitéTitleSecret.innerHTML = data.talents[2].name;
    } else {
        capacitéTitleSecret.innerHTML = "---";
    }
    pv.innerHTML = data.stats.hp;
    attaque.innerHTML = data.stats.atk;
    defense.innerHTML = data.stats.def;
    attaqueSpé.innerHTML = data.stats.spe_atk;
    defenseSpé.innerHTML = data.stats.spe_def;
    vitesse.innerHTML = data.stats.vit;
    generationText.innerHTML = `Generation ${data.generation}`;//data.generation;

    normalValue.innerHTML = data.resistances[0].multiplier;
    planteValue.innerHTML = data.resistances[1].multiplier;
    feuValue.innerHTML = data.resistances[2].multiplier;
    eauValue.innerHTML = data.resistances[3].multiplier;
    electriqueValue.innerHTML = data.resistances[4].multiplier;
    glaceValue.innerHTML = data.resistances[5].multiplier;
    combatValue.innerHTML = data.resistances[6].multiplier;
    poisonValue.innerHTML = data.resistances[7].multiplier;
    solValue.innerHTML = data.resistances[8].multiplier;
    volValue.innerHTML = data.resistances[9].multiplier;
    PsyValue.innerHTML = data.resistances[10].multiplier;
    InsecteValue.innerHTML = data.resistances[11].multiplier;
    RocheValue.innerHTML = data.resistances[12].multiplier;
    SpectreValue.innerHTML = data.resistances[13].multiplier;
    DragonValue.innerHTML = data.resistances[14].multiplier;
    TenebreValue.innerHTML = data.resistances[15].multiplier;
    AcierValue.innerHTML = data.resistances[16].multiplier;
    feeValue.innerHTML = data.resistances[17].multiplier;

    if (data.evolution && Array.isArray(data.evolution.next) && data.evolution.next.length > 0) {

        evolveConditionText.innerHTML = data.evolution.next[0].condition
        evolveNameText.innerHTML = data.evolution.next[0].name
        evolveNameId.innerHTML ="#" + data.evolution.next[0].pokedexId
    } else {
        evolveConditionText.innerHTML = "";
        evolveNameText.innerHTML = "Aucune évolution";
        evolveNameId.innerHTML = "";
    }

    MegaSpriteBackground.style.display = "none";
    if (data.evolution && Array.isArray(data.evolution.mega) && data.evolution.mega.length > 0) {
        MegaSpriteBackground.style.display = "block";
        MegaSpriteBackground.src = data.evolution.mega[0].sprites.regular;
    } else {
        MegaSpriteBackground.style.display = "none";
    }



}

export function updateGenderSection(sexeMasculin, sexeFeminin) {
    const genreSection = document.getElementById("genreSection");
    genreSection.innerHTML = "";

    if (sexeFeminin) {
        genreSection.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="34" viewBox="0 0 25 34" fill="none">
        <g clip-path="url(#clip0_1358_739)">
            <path
                d="M14.5381 22.482L14.3332 22.5195V22.7279V25V25.25H14.5832H16.6665C17.6808 25.25 18.4998 26.0691 18.4998 27.0833C18.4998 28.0976 17.6808 28.9167 16.6665 28.9167H14.5832H14.3332V29.1667V31.25C14.3332 32.2643 13.5141 33.0833 12.4998 33.0833C11.4856 33.0833 10.6665 32.2643 10.6665 31.25V29.1667V28.9167H10.4165H8.33317C7.3189 28.9167 6.49984 28.0976 6.49984 27.0833C6.49984 26.0691 7.3189 25.25 8.33317 25.25H10.4165H10.6665V25V22.7279V22.5195L10.4615 22.482C5.2462 21.5268 1.2915 16.9541 1.2915 11.4583C1.2915 5.26828 6.30978 0.25 12.4998 0.25C18.6899 0.25 23.7082 5.26828 23.7082 11.4583C23.7082 16.9541 19.7535 21.5268 14.5381 22.482ZM5.53225 8.57226C5.15324 9.48726 4.95817 10.4679 4.95817 11.4583C4.95817 12.4487 5.15324 13.4294 5.53225 14.3444C5.91125 15.2594 6.46676 16.0908 7.16707 16.7911C7.86738 17.4914 8.69877 18.0469 9.61377 18.4259C10.5288 18.8049 11.5095 19 12.4998 19C13.4902 19 14.4709 18.8049 15.3859 18.4259C16.3009 18.0469 17.1323 17.4914 17.8326 16.7911C18.5329 16.0908 19.0884 15.2594 19.4674 14.3444C19.8464 13.4294 20.0415 12.4487 20.0415 11.4583C20.0415 10.4679 19.8464 9.48726 19.4674 8.57226C19.0884 7.65726 18.5329 6.82588 17.8326 6.12557C17.1323 5.42526 16.3009 4.86975 15.3859 4.49074C14.4709 4.11174 13.4902 3.91667 12.4998 3.91667C11.5095 3.91667 10.5288 4.11174 9.61377 4.49074C8.69877 4.86975 7.86738 5.42526 7.16707 6.12557C6.46676 6.82588 5.91125 7.65726 5.53225 8.57226Z"
                stroke="gray" stroke-width="0.5" />
        </g>
        <defs>
            <clipPath id="clip0_1358_739">
                <rect width="25" height="33.3333" fill="gray" />
            </clipPath>
        </defs>
    </svg>`;
    }

    if (sexeMasculin) {
        genreSection.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 30 35" fill="none">
        <path
            d="M25.1946 9.97501L25.0179 9.79824L24.8411 9.97501L21.3188 13.4973L21.1718 13.6443L21.2894 13.8156C22.5679 15.6775 23.3214 17.9254 23.3214 20.3571C23.3214 26.728 18.1566 31.8929 11.7857 31.8929C5.41486 31.8929 0.25 26.728 0.25 20.3571C0.25 13.9863 5.41486 8.82143 11.7857 8.82143C14.2113 8.82143 16.4656 9.5686 18.3267 10.8531L18.4982 10.9714L18.6455 10.8241L22.1678 7.30178L22.3446 7.125L22.1678 6.94823L19.9312 4.71162C19.5413 4.32172 19.4276 3.73945 19.6375 3.22899C19.8461 2.72148 20.3431 2.39286 20.8929 2.39286H28.3929C29.1454 2.39286 29.75 2.99745 29.75 3.75V11.25C29.75 11.7998 29.4214 12.2967 28.9139 12.5054C28.4034 12.7152 27.8211 12.6015 27.4312 12.2116L25.1946 9.97501ZM11.7857 28.1071C12.8035 28.1071 13.8112 27.9067 14.7515 27.5172C15.6918 27.1277 16.5461 26.5569 17.2658 25.8372C17.9854 25.1176 18.5563 24.2632 18.9458 23.3229C19.3353 22.3827 19.5357 21.3749 19.5357 20.3571C19.5357 19.3394 19.3353 18.3316 18.9458 17.3913C18.5563 16.4511 17.9854 15.5967 17.2658 14.8771C16.5461 14.1574 15.6918 13.5866 14.7515 13.1971C13.8112 12.8076 12.8035 12.6071 11.7857 12.6071C10.768 12.6071 9.76019 12.8076 8.81992 13.1971C7.87964 13.5866 7.02529 14.1574 6.30564 14.8771C5.58598 15.5967 5.01512 16.4511 4.62565 17.3913C4.23617 18.3316 4.03571 19.3394 4.03571 20.3571C4.03571 21.3749 4.23617 22.3827 4.62565 23.3229C5.01512 24.2632 5.58598 25.1176 6.30564 25.8372C7.02529 26.5569 7.87964 27.1277 8.81992 27.5172C9.76019 27.9067 10.768 28.1071 11.7857 28.1071Z"
            stroke="gray" stroke-width="0.5" />
    </svg>`;
    }
}


