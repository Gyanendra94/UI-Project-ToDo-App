const todoItem = document.querySelector("#todoInput")
const addTodo = document.querySelector(".add")
const removeAllTodo = document.querySelector(".removeAll")
const todoList = document.querySelector(".todo-list")

function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = "myForm error"
  const small = formControl.querySelector("small")
  small.innerText = message

  setTimeout(() => small.remove(), 3000)
}

function showSucess(input) {
  const formControl = input.parentElement
  formControl.className = "myForm noerror"
}
function checkRequired(input) {
  if (input.value.trim() === "") {
    showError(input, "TodoItem is required")
  } else {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(`${todoItem.value}`))

    todoList.appendChild(li)

    //clear fields
    todoItem.value = ""
  }
}

addTodo.addEventListener("click", (e) => {
  e.preventDefault()

  checkRequired(todoItem)
})
