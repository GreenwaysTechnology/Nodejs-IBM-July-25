import { firstName } from "./lib.js"
import TodoService from "./services/todo.service.js"

function main() {
    console.log(firstName)
    let todoService = new TodoService()
    console.log(todoService.findAll())
}
main()