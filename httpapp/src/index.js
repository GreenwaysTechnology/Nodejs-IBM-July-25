const http = require('node:http')
const todoService = require('./services/todo.service')

const PORT = 3000
const server = http.createServer((req, res) => {
    const jsonData = JSON.stringify(todoService.findAll())
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    res.write(jsonData)
    res.end()
})

//start the server
server.listen(PORT, () => {
    console.log(`Http Server is listening at ${PORT}`)
})

//attach server event: request event
server.on('request', (req, res) => {
    console.log('Request Recived on', `[${new Date().toISOString()}]`, "URL is", req.url, "method ", req.method)

})