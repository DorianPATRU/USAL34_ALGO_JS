let etape1 = 1
let etape2 = 2
let etape3 = 3

let oeufButton = document.querySelector("#oeuf");
let selButton = document.querySelector("#sel");
let farineButton = document.querySelector("#farine");

oeufButton.addEventListener("click", oeuf);
selButton.addEventListener("click", sel);
farineButton.addEventListener("click", farine);

function oeuf() {
    if (condition) {
        console.log("L'oeuf est sélectionné");
    }
}

function sel() {
    if (etape2 ===1) {
        console.log("Le sel est sélectionné");
    }
}

function farine() {
    if (etape3 ===1) {
        console.log("La farine est sélectionné", "Les ingrédients sont prêts");
    }
}