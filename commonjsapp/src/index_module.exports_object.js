// const todoService = require('./services/todo.service')
const { findAll } = require('./services/todo.service')

function main() {
    // console.log(todoService.findAll())
    console.log(findAll())
}
main()