const express = require('express')
const PORT = 3000
const app = express()

//middlewares
app.use(function (req, res, next) {
    console.log('Middleware')
    //chain the middleware: move to next
    next()
})


app.get('/', (req, res) => {
    res.end('Hello Express')
})


//start server
app.listen(PORT, () => {
    console.log(`Express server is Running at ${PORT}`)
})