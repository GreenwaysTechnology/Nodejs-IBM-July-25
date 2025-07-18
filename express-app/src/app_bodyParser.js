const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000
const app = express()

//register body parser middleware
app.use(bodyParser.json())

app.use('/api/users', require('./routers/user.router'))
app.use('/api/posts', require('./routers/post.router'))
app.use('/api/comments', require('./routers/comments.router'))

app.get('/', (req, res) => {
    res.end('Hello Express')
})

//start server
const server = app.listen(PORT, () => {
    console.log(`Express server is Running at ${server.address().port}`)
})