function andTheWinnerIs(hero1, hero2) {
  while (hero1.health >= 0 && hero2.health >= 0) {
    hero2.health = hero2.health - hero1.attack
    if (hero2.health >= 0) {
      hero1.health = hero1.health - hero2.attack
    }
  }
  if(hero2.health >= 0) {
    return hero2.name
  }
  return hero1.name
}
  
  andTheWinnerIs(
    { name: "Medusa", health: 1090, attack: 50 },
    { name: "Pudge", health: 3010, attack: 10 }
  ); // Medusa
