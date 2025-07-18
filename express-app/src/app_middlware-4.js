const express = require('express')
const PORT = 3000
const app = express()

//url specific middleware
app.get('/api/hello', (req, res, next) => {
    res.set('hello', 'this is get method')
    next()
})

app.get('/', (req, res) => {
    res.end('Hello Express')
})

app.get('/api/hello', (req, res) => {
    res.end('Hello-GET')
})
app.post('/api/hello', (req, res) => {
    res.end('Hello-POST')
})
app.put('/api/hello', (req, res) => {
    res.end('Hello-Put')
})
app.delete('/api/hello', (req, res) => {
    res.end('Hello-Delete')
})

app.get('/api/hai', (req, res) => {
    res.end('hai-GET')
})
//start server
app.listen(PORT, () => {
    console.log(`Express server is Running at ${PORT}`)
})