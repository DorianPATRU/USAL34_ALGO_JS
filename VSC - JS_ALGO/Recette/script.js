let ingredients = [
  { name: "Poireau", etat: 'initial', categorie: 'legume' },
  { name: "Carotte", etat: 'initial', categorie: 'legume' },
  { name: "Navet", etat: 'initial', categorie: 'legume' },
  { name: "Branche de celeris", etat: 'initial', categorie: 'legume' },
  { name: "Pomme de Terre", etat: 'initial', categorie: 'legume' },
  { name: "Tomate", etat: 'initial', categorie: 'legume' },
  { name: "Courgette", etat: 'initial', categorie: 'legume' },
  { name: "Oignon", etat: 'initial', categorie: 'legume' },
  { name: "Bouillon cube", etat: 'initial', categorie: 'assaisonnement' },
  { name: "Crème fraiche", etat: 'initial', categorie: 'produit laitier' },
  { name: "Beurre", etat: 'initial', categorie: 'produit laitier' },
];
let etape = 0

function rafraichirAffichage() {
  document.body.innerHTML = ''

  let recetteTitle = document.createElement('h1')
  recetteTitle.textContent = "Soupe aux 7 légumes"
  document.body.appendChild(recetteTitle)
  
  let listeIngredients = document.createElement('ul')
  ingredients.forEach(function(ingredient) {
    let ingredientElement = document.createElement('li')
    let ingredientCheckbox = document.createElement('input')
    ingredientCheckbox.setAttribute('type', 'checkbox')
    ingredientCheckbox.setAttribute('id', ingredient.name)
    let ingredientLabel = document.createElement('label')
    ingredientLabel.setAttribute('for', ingredient.name)
    ingredientLabel.textContent = `${ingredient.name} (${ingredient.etat})`
    ingredientElement.appendChild(ingredientCheckbox)
    ingredientElement.appendChild(ingredientLabel)
    listeIngredients.appendChild(ingredientElement)
  })
  document.body.appendChild(listeIngredients);

  let pelerBouton = document.createElement('button')
  pelerBouton.textContent = "Peler les légumes"
  pelerBouton.setAttribute('id', 'peler')
  document.body.appendChild(pelerBouton)
  document.querySelector('#peler').addEventListener('click', peler)

  let laverBouton = document.createElement('button')
  laverBouton.textContent = "Laver les légumes"
  laverBouton.setAttribute('id', 'laver')
  document.body.appendChild(laverBouton)
  document.querySelector('#laver').addEventListener('click', laver)
}
rafraichirAffichage()

function peler(){
  // ??.forEach(function(ingredient){
  ingredients.forEach(function(ingredient){
    if (ingredient.categorie === 'legume' && ingredient.etat === 'initial') {
      ingredient.etat = "pelé"
    }
  })
  rafraichirAffichage()
}

function laver(){
  ingredients.forEach(function(ingredient){
    if (ingredient.categorie === 'legume' && ingredient.etat === 'pelé') {
      ingredient.etat = "lavé"
    }
  })
  rafraichirAffichage()
}

