const http = require('node:http')
const { findAll } = require('./services/todo.service')

const PORT = 3000
const server = http.createServer((req, res) => {

    findAll().then(todos => {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        });
        const jsonData = JSON.stringify(todos)
        res.write(jsonData)
        res.end()
    }).catch(err => {
        res.writeHead(500, {
            'Content-Type': 'application/json',
        });
        res.write({ err: err })
        res.end()
    })

})

//start the server
server.listen(PORT, () => {
    console.log(`Http Server is listening at ${PORT}`)
})

//attach server event: request event
server.on('request', (req, res) => {
    console.log('Request Recived on', `[${new Date().toISOString()}]`, "URL is", req.url, "method ", req.method)

})