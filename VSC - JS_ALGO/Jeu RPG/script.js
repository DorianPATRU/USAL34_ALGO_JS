function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}

class Hero {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(`Je suis ${this.name}, un ${this.type} qui possède ${this.pv} points de vie.`)
  }

  attack(character) {
    const randomAttack = getRandomNumber(this.pa[0], this.pa[1])
    if (character.pv - randomAttack > 0) {
      character.pv = character.pv - randomAttack
    } else {
      character.pv = 0
    }
    console.log(`${this.name} attaque ${character.name} et lui inflige ${randomAttack} points de dégâts`)
  }

  getPV() {
    console.log(`${this.name} a ${this.pv} ${this.pv > 0 ? 'points' : 'point'} de vie.`)
  }

  isAlive() {
    return this.pv !== 0 
  }
}

class Knight extends Hero {
  type = 'chevalier'
  pv = 150
  pa = [9, 12]
}

class Mage extends Hero {
  type = 'magicien'
  pv = 50
  pa = [1, 4]
  pm = [16, 24]
  magicAttackPercentage = 40

  magicAttack(character) {
    const randomAttack = getRandomNumber(this.pm[0], this.pm[1])
    if (character.pv - randomAttack > 0) {
      character.pv = character.pv - randomAttack
    } else {
      character.pv = 0
    }
    console.log(`${this.name} envoie une boule de feu à ${character.name} et lui inflige ${randomAttack} points de dégâts`)
  }
}

class Monster extends Hero {
  type = 'monstre'
  pv = 275
  pa = [9, 18]
}

const arthur = new Knight("Arthur");
const merlin = new Mage("Merlin");
const zorb = new Monster("Zorb");

arthur.hello();
merlin.hello();
zorb.hello();

let step = 1
while(zorb.isAlive() && (arthur.isAlive() || merlin.isAlive())) {
  console.log(`--- Étape ${step} ---`)
  
  if (arthur.isAlive()) {
    arthur.attack(zorb)
  }

  if (merlin.magicAttackPercentage > Math.round(Math.random() * 100)) {
    merlin.magicAttack(zorb)
  } else {
    merlin.attack(zorb)
  } 

  if (arthur.isAlive()) {
    zorb.attack(arthur)
  } else {
    zorb.attack(merlin)
  }

  arthur.getPV()
  merlin.getPV()
  zorb.getPV()

  step++
}

console.log(`------`);
if (zorb.isAlive()) {
  console.log("Perdu !");
} else {
  console.log("Gagné !");
}
console.log(`------`);
