class Hero {
    constructor(name) {
      this.name = name;
    }
  
    hello() {
      console.log(`Je suis ${this.name}, un ${this.type} qui possède ${this.pv} points de vie.`)
    }
  
    attack(character) {
      if (character.pv - this.pa > 0) {
        character.pv = character.pv - this.pa
      } else {
        character.pv = 0
      }
      console.log(`${this.name} attaque ${character.name} et lui inflige ${this.pa} points de dégâts`)
    }
  
    getPV() {
      console.log(`${this.name} a ${this.pv} points de vie.`)
    }
  
    isAlive() {
      return this.pv !== 0 
    }
  }
  
  class Knight extends Hero {
    type = 'chevalier'
    pv = 150
    pa = 9
  }
  
  class Mage extends Hero {
    type = 'magicien'
    pv = 50
    pa = 1
  }
  
  class Monster extends Hero {
    type = 'monstre'
    pv = 275
    pa = 9
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
    arthur.attack(zorb)
    merlin.attack(zorb)
    zorb.attack(arthur)
  
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