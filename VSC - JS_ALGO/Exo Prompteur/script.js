import geometry from './geometry.js'

// Exo 1
const button = document.querySelector('#monBouton')

function clickOnButton(event) {
  let nom = prompt('Quel est votre prénom ?')
  console.log(`Bonjour ${nom}`)
}

button.addEventListener('click', clickOnButton)

// Exo 2
console.log(geometry.squareArea(4)) // 16
console.log(geometry.triangleArea(4, 2)) // 4
console.log(geometry.circleArea(4)) // 50.26....

// Exo 3
document.querySelector('#monInput').addEventListener('input', (event) => {
  document.querySelector('#monImage').setAttribute('src', `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${event.target.value}`)
})

// Exo 4
async function getMembers() {
  const responsePageOne  = await fetch('https://api.github.com/orgs/facebook/members?per_page=100&page=1')
  const membersPageOne = await responsePageOne .json()
  const responsePageTwo  = await fetch('https://api.github.com/orgs/facebook/members?per_page=100&page=2')
  const membersPageTwo = await responsePageTwo .json()
  
  console.log(membersPageOne, membersPageTwo)
  membersPageOne.map(function(member) { console.log(member.login) })
  membersPageTwo.map(member => console.log(member.login))
}
getMembers()