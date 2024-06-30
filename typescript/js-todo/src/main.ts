import "./style.css"

type Todo = {
  id: string
  name: string
  completed: boolean
}

const form = document.querySelector<HTMLFormElement>("#new-todo-form")!
const todoInput = document.querySelector<HTMLInputElement>("#todo-input")!

const todos = []

form.addEventListener("submit", (e) => {
	e.preventDefault()

	const todoName = todoInput.value
	if (todoName === "") return
	const newTodo = {
		id: crypto.randomUUID(),
		name: todoName,
		completed: false,
	}
	todos.push(newTodo)
	todoInput.value = ""
})



function renderNewTodo(todo: Todo) {
const listItem = document.createElement('li')
listItem.classList.add('list-item')

const label = document.createElement('label')
}