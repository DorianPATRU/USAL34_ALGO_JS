/* Exercice 1 */

let Intervalle = setInterval(HorlogeCourante, 1000);

function HorlogeCourante() {
  let date = new Date();

  let TempsCourant = date.toLocaleTimeString();

  document.querySelector(".clock").innerHTML = TempsCourant;
}

/* Exercice 2 */

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json));

/* Exercice 3 */

let Tâche = document.querySelector(".todo-list");

let Li = document.createElement("li");

Tâche.appendChild(Li);

/* Exercice 5 */

/*import ToDo from './module.js'*/
