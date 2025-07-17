const TODOS = require('../mock-data/todos')
// const TODOS=null
class TodoService {

    //async callback
    findAll(resolve, reject) {
        if (TODOS) {
            setTimeout(resolve, 1000, TODOS)
        } else {
            setTimeout(reject, 1000, { message: 'Records Not Found' })
        }
    }
}
module.exports = new TodoService()