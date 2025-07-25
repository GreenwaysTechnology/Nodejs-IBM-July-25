const express = require('express')
const app = express()
const fs = require('node:fs')
const path = require('node:path')
const morgan = require('morgan')
//configure .env file into code
// const dotenv = require('dotenv')
// dotenv.config()
require('dotenv').config()

//here we read PORT From enviroment, before that we need to set
const PORT = process.env.PORT || 3000

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))


app.get('/api/greet', (req, res) => {
    res.send('Hello')
})


//start server
const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})
