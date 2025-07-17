const http = require('node:http')

const PORT = 3000
//create server
const server = http.createServer((req, res) => {
    //how to read input
    let data = ''
    req.on('data', (chunk) => {
        data += chunk
    })
    req.on('end', () => {
        console.log(data)
        res.end('Saved')
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