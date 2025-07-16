const http = require('node:http')

const PORT = 3000
//create server
const server = http.createServer((req, res) => {
    //process client request and send response
    const data = [{ id: 1, name: 'Subramanian' }, { id: 2, name: 'Murugan' }]
    const jsonData = JSON.stringify(data)
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