const TODOS = require('../mock-data/todos')

class TodoService {

    findAll() {
        return TODOS
    }
}
module.exports = new TodoService()