const addParticipant = document.querySelector('#addParticipant')
const randomButton = document.querySelector('#random-button')

const inputList = document.querySelector('#inputList')
const teams = document.querySelector('#teams')

let participants = []

function addNewParticipant() {

  let input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('name', `participant-${inputList.childElementCount + 1}`)
  input.setAttribute('placeholder', `Participant ${inputList.childElementCount + 1}`)

  inputList.appendChild(input)
}

function generateRandomTeam() {
  participants = []
  teams.textContent = '';

  inputList.querySelectorAll('input')
    .forEach(input => participants.push(input.value))

  let team = document.createElement('div')
  team.classList.add('team')
  let title = document.createElement('h1')
  title.textContent = 'Équipe x'

  let list = document.createElement('ul')

  participants.forEach(participant => {
    let element = document.createElement('li') 
    element.textContent = participant
    list.appendChild(element)
  })

  team.appendChild(title)
  team.appendChild(list)
  teams.appendChild(team)

  const participantsShuffled = randomParticipants(participants)
  console.log(participantsShuffled)
}

addParticipant.addEventListener('click', addNewParticipant)
randomButton.addEventListener('click', generateRandomTeam)


function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomParticipants(participantsToRandom){
  const a = [...participantsToRandom]
  const b = []

  // Étape intiale
  // a['Dorian', 'Ethan', 'Julien', 'Léa', 'Mélanie','Pauline', 'Romain', 'Sandra']
  // b[]

  // Tant que il y a un élément dans le tableau a = while
  while(a.length > 0) {
    const randomIndex = getRandomNumber(0, a.length - 1)
    b.push(a[randomIndex]) 
    a.splice(randomIndex, 1)
  }
  return b

  // Étape 1
  // Nombre aléatoire entre 0 et 7
  // a ['Dorian', 'Julien', 'Léa', 'Mélanie','Pauline', 'Romain', 'Sandra']
  // b ['Ethan']

  // Étape 2
  // Nombre aléatoire entre 0 et 6
  // a ['Dorian', 'Julien', 'Léa', 'Mélanie', 'Romain', 'Sandra']
  // b ['Ethan', 'Pauline']

  // Étape n 
  // a []
  // b ['Ethan', 'Pauline', 'Julien', 'Dorian', 'Mélanie', 'Léa', 'Romain', 'Sandra']
}
