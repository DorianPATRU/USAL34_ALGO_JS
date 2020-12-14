let ageTony = 25, ageSosa = 25;

let compa1 = ageTony == ageSosa;
let compa2 = ageTony != ageSosa;
let compa3 = false;
let compa4 = true;

// Utilisation de if et else
if (compa1) {
    console.log("Je passe ici")
} else {
    console.log("Je passe ici dans le else")
}

// Utilisation de else if 
if (compa1) {
    console.log("Je passe ici")
} else if (compa2) {
    console.log("Je passe ici dans le else compa2")
} else {
    console.log("Je passe ici dans le else")
}

// Utilisation de plusieurs conditions avec opérateur logique 'et'
if (compa1 && compa3) {
    console.log("Je passe ici")
}

// Utilisation de plusieurs conditions avec opérateur logique 'ou'
if (compa1 || compa3) {
    console.log("Je passe ici")
}

// Utilisation d'une condition avec opérateur logique 'not'
if (!compa1) {
    console.log("Je passe ici")
}

// Utilisation de plusieurs conditions avec plusieurs opérateurs logiques
if ((compa1 && compa2) || (a || b)) {
    console.log("Je passe ici")
}

// Mémo opérateur logique 'et'
// false && false = false
// false && true = false
// true && false = false
// true && true = true

// Mémo opérateur logique 'ou'
// false || false = false
// false || true = true
// true || false = true
// true || true = true

