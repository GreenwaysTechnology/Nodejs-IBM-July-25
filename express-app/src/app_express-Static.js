const express = require('express')
const app = express()
const fs = require('node:fs')
const path = require('node:path')
const morgan = require('morgan')

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))
//register to serve static pages : it looks index.html automatically.
app.use(express.static(path.join(__dirname, "public")))


//start server
const server = app.listen(3000, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})
