const buttonA = document.querySelector("#button-a");
const buttonB = document.querySelector("#button-b");
const buttonArrowRight = document.querySelector("#button-right");
const display = document.querySelector("#affichage");
const select = document.querySelector("#select");
const start = document.querySelector("#start");
const maxlineNumber = 5;

const games = [{
  name: "Super Mario",
  price: 20,
}, {
  name: "Tetris",
  price: 25,
}, {
  name: "Sonic",
  price: 17.50,
}]

const createElementParagraphe = text => {
  if (display.querySelectorAll("p").length >= maxlineNumber)
    display.removeChild(display.firstChild);
  const p = document.createElement("p");
  p.appendChild(document.createTextNode(text));
  display.appendChild(p);
};

createElementParagraphe("Hello")

function pressOnKey(key) {
  createElementParagraphe(`Je presse sur ${key}`);
}

document.addEventListener("keyup", function(event) {
  console.log(event.key)
  if (event.key === 'a') {
    buttonA.classList.remove("pressed");
    pressOnKey(event.key)
  }
  if (event.key === 'b') {
    buttonB.classList.remove("pressed");
    pressOnKey(event.key)
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === 'a') {
    buttonA.classList.add("pressed");
  }
  if (event.key === 'b') {
    buttonB.classList.add("pressed");
  }
  if (event.key === 'ArrowRight') {
    buttonB.classList.add("pressed");
  }
});

select.addEventListener('click', function() {
  document.querySelector(".nes-container").classList.toggle('is-dark')
})

start.addEventListener('click', function() {
  games.map(game => createElementParagraphe(`${game.name} : ${game.price} €`))
})









