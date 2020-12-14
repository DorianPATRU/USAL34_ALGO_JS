# Georges et sa comptabilité

Georges, il n'aime pas faire ses comptes. Et nous, on l'aime bien Georges, alors on va l'aider en créant un petit script qui fera sa comptabilité !

---

## Code

```js
const january = [
  {
    name: "Pantalon",
    amount: "-56.59",
  },
  {
    name: "Internet",
    amount: "-29.99",
  },
  {
    name: "Sandwitch",
    amount: "-5.99",
  },
  {
    name: "Salaire",
    amount: "1750"
  }
];

const february = [
  {
    name: "BMW",
    amount: "90000",
  },
  {
    name: "Chaussettes",
    amount: "4.99",
  },
  {
    name: "Salaire",
    amount: "1750"
  }
];

const march = [
  {
    name: "Course",
    amount: "-287.54"
  }
  {
    name: "Gommettes",
    amount: "-2.99",
  },
  {
    name: "Pastilles pour la gorge",
    amount: "-4.99",
  },
  {
    name: "Parfum Georgio Armani",
    amount: "-49.99",
  },
  {
    name: "Salaire",
    amount: "1750"
  }
];

function getTotalBills(bills) {
  // TODO
  // 1. -56.59, -29.99, -5.99, 1750 | february ... boucle sur le tableau + récupérer une valeur d'un objet
  // 2. string => number
  // 3. number < 0, number >= 0
  // 4. calcul
  // 5. renvoyer une chaine de caractère
}


getTotalBills(january); // => "Dépense : 92.57 € | Recette : 1750 € | Total: 1657.43 €"
getPlanetName(february); // => "Dépense : 90004.99 € | Recette : 1750 € | Total: -88254.99 €"
getPlanetName(march); // => "Dépense : 345.51 € | Recette : 1750.00 € | Total: 1404.49 €"
```
