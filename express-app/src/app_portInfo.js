const express = require('express')

const PORT = 3000

const app = express()

//expose apis
//get ===HTTP GET Verb
app.get('/', (req, res) => {
    res.end('Hello Express')
})

//Resource:USERs
app.get('/api/users', (req, res) => {
    res.end('USERS GET')
})
app.post('/api/users', (req, res) => {
    res.end('USERS POST')
})
app.put('/api/users', (req, res) => {
    res.end('USERS PUT')
})
app.delete('/api/users', (req, res) => {
    res.end('USERS DELETE')
})

//start server
const server = app.listen(PORT, () => {
    console.log(`Express server is Running at ${server.address().port}`)
})