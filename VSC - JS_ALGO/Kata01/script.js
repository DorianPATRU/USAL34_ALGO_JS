function getLitres(time) {
  const demiLitreDEauParHeure = 0.5;
  const litreDEauMaximum = 3
  // consommation d'eau en litre arrondis à l'inférieur
  let litre = Math.floor(time * demiLitreDEauParHeure)
  if(litre >= litreDEauMaximum) {
    return litreDEauMaximum;
  }
  return litre;
  }

console.log (getLitres(1.4)); // => 0
console.log (getLitres(2)); // => 1
console.log (getLitres(5.5)); // => 2
console.log (getLitres(12.3)); // => 3
console.log (getLitres(0.82)); // => 0
console.log (getLitres(11.8)); // => 3
console.log (getLitres(0)); // => 0
