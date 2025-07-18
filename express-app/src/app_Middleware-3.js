const express = require('express')
const PORT = 3000
const app = express()

//middlewares
app.use(function (req, res, next) {
    //custom header
    res.set("message", "Hello")
    //chain the middleware: move to next
    next()
})
app.use(function (req, res, next) {
    res.set("name", "Subramanian")

    console.log('M2')
    //chain the middleware: move to next
    next()
})
app.use(function (req, res, next) {
    res.set("company", "IBM")

    console.log('M3')
    //chain the middleware: move to next
    next()
})


app.get('/', (req, res) => {
    res.end('Hello Express')
})

app.get('/api/hello', (req, res) => {
    res.end('Hello Express')
})
//start server
app.listen(PORT, () => {
    console.log(`Express server is Running at ${PORT}`)
})