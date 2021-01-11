// https://www.marmiton.org/recettes/recette_soupe-aux-7-legumes_65063.aspx

// Sélectionner chaque ingrédient 
let poireau = document.getElementById('poireau');
let carotte = document.querySelector("#carotte");
let navet = document.querySelector("#navet");
let celeris = document.querySelector("#celeris");
let pomme_de_terre = document.querySelector("#pomme-de-terre");
let tomate = document.querySelector("#tomate");
let courgette = document.querySelector("#courgette");
let oignon = document.querySelector("#oignon");
let bouillon = document.querySelector("#bouillon");
let creme = document.querySelector("#creme");
let beurre = document.querySelector("#beurre");

// Sélectionner tous les légumes
let legumes = document.querySelectorAll('[data-type="legume"]');


// Sélectionner tous les produits laitiers
let produitsLaitiers = document.querySelectorAll('[data-type=produit-laitier]');

let legumesPeler = []
let legumesLaver = []

function peler() {
  legumes.forEach(function(legume){
    if (!legumesPeler.includes(legume)) {
      legume.textContent = legume.textContent + " => pelé"
      legumesPeler.push(legume)
    }
  })
}

function laver() {
  legumesPeler.forEach(function(legume){
    legume.textContent = legume.textContent + " => lavé"
    legumesLaver.push(legume)
  })
}

let buttonPeler = document.querySelector('#peler')
let buttonLaver = document.querySelector('#laver')
let buttonCouper = document.querySelector('#couper')

buttonPeler.addEventListener('click', peler)
buttonLaver.addEventListener('click', laver)
buttonCouper.addEventListener('click', function() {
  legumes.forEach(function(legume){
    legume.textContent = legume.textContent + " => coupé"
  })
})