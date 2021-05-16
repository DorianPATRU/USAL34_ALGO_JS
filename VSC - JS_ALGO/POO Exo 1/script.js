// ETAPE 1
// let movie1 = {
//   title: "Jurassic Park",
//   releaseDate: 1993,
//   director: "Steven Spielberg",
//   genres: ["Action", "Adventure", "Sci-Fi", "Thriller"],
//   presentation: function() {
//     return `${this.title}, réalisé par ${this.director} en ${this.releaseDate} !`
//   }
// };

// let movie2 = {
//   title: "Le monde perdu: Jurassic Park",
//   releaseDate: 1997,
//   director: "Steven Spielberg",
//   genres: ["Action", "Adventure", "Sci-Fi"],
//   presentation: function() {
//     return `${this.title}, réalisé par ${this.director} en ${this.releaseDate} !`
//   }
// };

// console.log(movie1, movie2.presentation())

/* // ETAPE 2
// Cette fonction sert de "constructeur"
let Film = function (title, releaseDate, director, genres) {
  this.title = title;
  this.releaseDate = releaseDate;
  this.director = director;
  this.genres = genres;

  this.presentation = function () {
    return `${this.title}, réalisé par ${this.director} en ${this.releaseDate} !`;
  };
};

let genres = ["Action", "Adventure", "Sci-Fi", "Thriller"];
let movie1 = new Film("Jurassic Park", 1993, "Steven Spielberg", genres);
movie1.donnerUneNote = function (note) {
  this.note = note;
};
movie1.donnerUneNote(8);
// console.log(movie1)

let Documentaire = function (title, releaseDate, director, genres = []) {
  Film.call(this, title, releaseDate, director);
  this.genres = [...genres, "documentaire"];
  this.presentation = function () {
    return `${this.title} est un ${this.genres},  réalisé par ${this.director} en ${this.releaseDate} !`;
  };
};

let surLaTerreDesDinosaures = new Documentaire(
  "Sur la terre des dinosaures",
  2013,
  "Neil Nightingale"
);
console.log(surLaTerreDesDinosaures.presentation());
// Sur la terre des dinosaures est un documentaire, réalisé par Neil Nightingale en 2013 !

let movie2 = Object.create(movie1);
movie2.title = "Jurassic Park 2";
movie2.releaseDate = 1997;
movie2.donnerUneNote(7);

console.log(movie2);
 */
// ETAPE 3
// Les classes en ES6

class Personne {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
  }

  sayHello() {
    return `Hello ${this.firstname} ${this.lastname}`
  }
}

class Student extends Personne {
  constructor(firstname, lastname) {
    super(firstname, lastname)
    this.formations = []
  }

  setFormation(formation) {
    this.formations.push(formation)
  }

  getFormations() {
    return this.formations
  }
}

let pauline = new Student('Pauline', 'Flament')
pauline.setFormation('BTS Hôtellerie')
pauline.setFormation('CNAM')

console.log(pauline.sayHello())
console.log(pauline.getFormations())

let dorian = new Student('Dorian', 'Patru')

console.log(dorian.sayHello())

dorian.setFormation('Bac Pro SEN')
dorian.setFormation('CNAM')

console.log(dorian.getFormations())