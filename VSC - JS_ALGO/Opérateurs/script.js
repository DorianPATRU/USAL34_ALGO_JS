function direAuRevoir(nom) {
    let maPhrase = 'Au revoir ' + nom;
    return maPhrase;
}

let premierTest = direAuRevoir() // Au revoir undefined
let secondTest = direAuRevoir(" Dorian"); // Au revoir Dorian

// console.log(premierTest);
// console.log(secondTest);

//function addition(x, y) {
    //let somme = x + y;
    //return somme;
//}

// let addition = function(x, y) {
    //let somme = x + y;
    //return somme;
//}

let addition = (x, y) => {
    let somme = x + y
    return somme
}

let addition = (x, y) => x + y

console.log(addition(1, 2));
// console.log(addition(12000, 2124543));











