import Todo from './todo.js'

const todoContainer = document.querySelector('.todo-list') 

const clickOnTodo = (event) => {
  event.stopPropagation();
  console.log('click', event.currentTarget)
  event.currentTarget.parentElement.classList.toggle('done')
}

const generateTodo = (todo) => {
  const item = document.createElement("li");
  item.classList.add("todo-item");
  if (todo.completed)
    item.classList.add("done");
  const content = `<input id="${todo.id}" name="${todo.id}" type="checkbox" ${todo.completed ? 'checked' : ''}>
  <label for="${todo.id}" class="tick"></label>
  <span>${todo.title}</span>`;
  item.innerHTML = content;
  item.querySelector('label').addEventListener('click', clickOnTodo)
  todoContainer.appendChild(item);
};

const getTodos = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos'
      )
      if (response.ok) {
        const todos = await response.json();
        todos.filter(todo => todo.userId === 5).slice(0, 5).map(todo => generateTodo(todo))
        return 
      }
    console.error(response.status);
  } catch (error) {
    console.error(error);
  }
};
getTodos();


setInterval(
  () => document.querySelector('.clock').textContent = `${new Date().toLocaleTimeString()}`, 
  1000
);

const todo201 = {
  id:201,
  userId: 5,
  title: "Prendre des vacances",
  completed: false
}

let newTodo = new Todo(todo201)
newTodo.createHTML()
newTodo.addTo(todoContainer)