export default class Todo {
  html = ""
  constructor(todo) {
    this.id = todo.id
    this.title = todo.title
    this.completed = todo.completed
  }

  onClick(event) {
    this.completed = !this.completed
    event.currentTarget.parentElement.classList.toggle('done')
  }

  addTo(htmlContainer) {
    htmlContainer.appendChild(this.html)
  }

  createHTML() {
    const item = document.createElement("li");
    item.classList.add("todo-item");
    if (this.completed)
      item.classList.add("done");
    const content = `<input id="${this.id}" name="${this.id}" type="checkbox" ${this.completed ? 'checked' : ''}>
    <label for="${this.id}" class="tick"></label>
    <span>${this.title}</span>`;
    item.innerHTML = content;
    item.querySelector('label').addEventListener('click', this.onClick)
    this.html = item
  }
}