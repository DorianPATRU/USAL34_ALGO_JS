const buttonA = document.querySelector("#button-a");
const buttonB = document.querySelector("#button-b");
const buttonSelect = document.querySelector("#select");
const ButtonStart = document.querySelector("#start");

function pressOnKey(key) {
  console.log(key);
}

document.addEventListener("keyup", function (event) {
  if (event.key === "a") {
    buttonA.classList.remove("pressed");
    pressOnKey(event.key);
  }
  if (event.key === "b") {
    buttonB.classList.remove("pressed");
    pressOnKey(event.key);
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    buttonA.classList.add("pressed");
  }
  if (event.key === "b") {
    buttonB.classList.add("pressed");
  }
});

function createParagraph(text) {
  let hello = document.createElement("p");
  hello.textContent = text;
  let divAffichage = document.querySelector("#affichage");
  divAffichage.appendChild(hello);
}

createParagraph("Hello");

document.addEventListener("keyup", function (event) {
  if (event.key === "a") {
    buttonA.classList.remove("pressed");
    createParagraph("Je presse sur a");
  }
  if (event.key === "b") {
    buttonB.classList.remove("pressed");
    createParagraph("Je presse sur b");
  }
});

// buttonSelect.addEventListener("click", function (event) {
//   const nesContainer = document.querySelector(".nes-container");
//   nesContainer.classList.toggle("is-dark");
// });

document.addEventListener("keyup", function (event) {
  
  if (event.key === "a") {
    
    const nesContainer = document.querySelector(".nes-container");
    
    nesContainer.classList.toggle("is-dark");
  }
});

// let nb = "";




