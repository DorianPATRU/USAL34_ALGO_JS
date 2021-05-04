const inputList = document.querySelector('#inputList')
const teams = document.querySelector('#teams')
const personByTeamInput = document.querySelector('#personByTeam')

const addParticipant = document.querySelector('#addParticipant')
addParticipant.addEventListener('click', addParticipantOnClick)

const randomButton = document.querySelector('#random-button')
randomButton.addEventListener('click', randomButtonOnclick)

function addParticipantOnClick() {
  const input = document.createElement('input')
  const newParticipantNumber = inputList.childElementCount + 1
  input.setAttribute('type', 'text')
  input.setAttribute('name', `participant-${newParticipantNumber}`)
  input.setAttribute('placeholder', `Participant ${newParticipantNumber}`)

  inputList.appendChild(input)
}

function randomButtonOnclick() {
  teams.textContent = '';

  let participants = []
  inputList.querySelectorAll('input')
    .forEach(input => participants.push(input.value))

  const participantsShuffled = shuffleArray(participants)
  
  // TODO : 1. Récupérer le nombre de participant par équipe
  const personByTeam = Number(personByTeamInput.value)

  // TODO : 2. Déterminer le nombre d'équipe
  const teamsNumber = Math.ceil(participantsShuffled.length / personByTeam) 

  // TODO : 3.a Créer les équipes (uniquement via des tableaux avec la console)
  // Méthode 1
  // let teamsShuffled = []
  // for (let j = 0; j < teamsNumber; j++) { 
  //   let equipe = []
  //   for(let i = teamsShuffled.length * personByTeam; i < teamsShuffled.length * personByTeam + personByTeam; i++) {
  //     if (participantsShuffled[i]) {
  //       equipe.push(participantsShuffled[i])
  //     }
  //   }
  //   teamsShuffled.push(equipe)
  // }

  // Méthode 2
  let teamsShuffled = []
  let index  = 0
  while (index < participantsShuffled.length) {
    teamsShuffled.push(
      participantsShuffled.slice(index, index + personByTeam)
    )
    index = index + personByTeam
  }

  // for (let index = 0; index < participantsShuffled.length; index += personByTeam) {
  //   teamsShuffled.push(
  //     participantsShuffled.slice(index, index + personByTeam)
  //   )
  // }
  
  // TODO : 3b. Ajouter dans la page les équipes en fonction des tableaux créés dans l'étape a
  for (let i = 0; i < teamsShuffled.length; i++) {
    addNewTeamBlock(teamsShuffled[i], i)
  }

  teamsShuffled.forEach((team, index) => addNewTeamBlock(team, index))
}

function addNewTeamBlock(participants, i) {
  let team = document.createElement('div')
  team.classList.add('team')
  let title = document.createElement('h1')
  title.textContent = `Équipe ${i+1}`

  let list = document.createElement('ul')

  participants.forEach(participant => {
    let element = document.createElement('li') 
    element.textContent = participant
    list.appendChild(element)
  })

  team.appendChild(title)
  team.appendChild(list)
  teams.appendChild(team)
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function shuffleArray(arrayToShuffle){
  const arrayToShuffleCopy = [...arrayToShuffle]
  const arrayShuffled = []

  while(arrayToShuffleCopy.length > 0) {
    const randomIndex = getRandomNumber(0, arrayToShuffleCopy.length - 1)
    arrayShuffled.push(arrayToShuffleCopy[randomIndex]) 
    arrayToShuffleCopy.splice(randomIndex, 1)
  }
  return arrayShuffled
}
