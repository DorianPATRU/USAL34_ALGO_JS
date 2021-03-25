function whatTimeIsIt(milliseconds) {
  let heures = Math.floor(milliseconds / 1000 / 60 / 60);
  let minutes = Math.floor(milliseconds / 1000 / 60) % 60;
  let reste_minutes = minutes;
  let secondes = Math.floor(milliseconds / 1000) % 60;
  let reste_secondes = secondes % 60;

  if (heures < 10) {
    heures = `0${heures}`;
  }

  if (reste_minutes < 10) {
    reste_minutes = `0${reste_minutes}`;
  }

  if (reste_secondes < 10) {
    reste_secondes = `0${reste_secondes}`;
  }

  return `${heures}:${reste_minutes}:${reste_secondes}`;
  // return heures + ":" + reste_minutes + ":" + reste_secondes
}

whatTimeIsIt(0); // => "00:00:00"
whatTimeIsIt(50); // => "00:00:00"
whatTimeIsIt(1000); // => "00:00:01"
whatTimeIsIt(61000); // => "00:01:01"
whatTimeIsIt(864212); // => "00:14:24"
whatTimeIsIt(3601000); // => "01:00:01"
whatTimeIsIt(9601240); // => "02:40:01"

