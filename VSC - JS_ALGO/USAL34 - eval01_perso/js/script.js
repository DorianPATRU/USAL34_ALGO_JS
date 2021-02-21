const buttonA = document.querySelector("#button-a");
const buttonB = document.querySelector("#button-b");

function pressOnKey(key) {
  console.log(key);
}

document.addEventListener("keyup", function(event) {
  if (event.key === 'a') {
    buttonA.classList.remove("pressed");
    pressOnKey(event.key)
  }
  if (event.key === 'b') {
    buttonB.classList.remove("pressed");
    pressOnKey(event.key)
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === 'a') {
    buttonA.classList.add("pressed");
  }
  if (event.key === 'b') {
    buttonB.classList.add("pressed");
  }
});

// Exercice 1 dans le fichier md

// Exercice 2

function p (text){
  let divAffichage = document.querySelector("#affichage");
  let ajoutTexte = document.createTextNode(text);

  divAffichage.append(ajoutTexte);
}

p("Hello");

// Exercice 3

document.addEventListener("keyup", function(event) {
  if (event.key === 'a') {
    pressOnKey(event.key)
    let divAffichage = document.querySelector("#affichage");
    document.createElement("br");
    let ajoutTexte = document.createTextNode(" Je presse sur a ");
  
    divAffichage.append(ajoutTexte);
  }
  if (event.key === 'b') {
    pressOnKey(event.key)
    let divAffichage = document.querySelector("#affichage");
    document.createElement("br");
    let ajoutTexte = document.createTextNode(" Je presse sur b ");
  
    divAffichage.append(ajoutTexte);
  }
});

// Exercice 4

let nesContainer = document.querySelector(".nes-container");

let boutonSelect = document.querySelector("#select");
let etat = "blanc";
let etat2 = "noir";

function clicSurSelect () {
  if (etat === "blanc") {
  document.querySelector(".nes-container").style.background = '#000000';
  document.querySelector(".nes-container").style.color = '#ffffff';
  etat2 = "noir"
  
  } else if (etat2 === "noir") {
  document.querySelector(".nes-container").style.background = '#ffffff';
  document.querySelector(".nes-container").style.color = '#000000';
  etat = "blanc"
  }
};

boutonSelect.addEventListener("click", clicSurSelect);

// Le prompt passe en noir mais sans être gérer par une classe, 
// pour le "repassage" en blanc je n'ai pas trouver l'erreur

// Exercice 5












