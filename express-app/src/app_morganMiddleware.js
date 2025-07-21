const express = require('express')
const app = express()
const fs = require('node:fs')
const path = require('node:path')
const morgan = require('morgan')

//console log information
// app.use(morgan('dev'))
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))

app.get('/api/greet',(req,res)=>{
    res.send('Hello')
})

//start server
const server = app.listen(3000, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})
