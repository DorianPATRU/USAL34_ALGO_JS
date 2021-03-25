function getPlanetName(position) {
    const planets = [
      "Earth", //0
      "Mercury", //1
      "Venus", //2
      "Mars", //3
      "Jupiter", //4
      "Saturn", //5
      "Uranus", //6
      "Neptune", //7
    ];
  
    // if (position === 1) return planets[1];
    // if (position === 2) return planets[2];
    // // ...
    // if (position === 8) return planets[8];
    // return "Erreur position n'est pas correcte";
  
    switch (position) {
      case 1:
        return planets[1];
      case 2:
        return planets[2];
      case 3:
        return planets[0];
      case 4:
        return planets[3];
      case 5:
        return planets[4];
      case 6:
        return planets[5];
      case 7:
        return planets[6];
      case 8:
        return planets[7];
      default:
        return "Erreur position n'est pas correcte";
    }
  }
  
  getPlanetName(1); // => "Mercury"
  getPlanetName(3); // => "Earth"
  getPlanetName(6); // => "Saturn"