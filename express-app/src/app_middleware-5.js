const express = require('express')
const PORT = 3000
const app = express()

//parametermized middleware
const middleware = function (param) {
    return function (req, res, next) {
        //middleware logic
        console.log(param)
        next()
    }
}
app.use(middleware('hello'))

app.get('/', (req, res) => {
    res.send('Home')
})

//start server
app.listen(PORT, () => {
    console.log(`Express server is Running at ${PORT}`)
})