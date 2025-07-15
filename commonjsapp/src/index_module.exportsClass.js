const TodoService = require('./services/todo.service')

function main() {
  // console.log(TodoService)
  let todoService = new TodoService()
  console.log(todoService.findAll())
}
main()