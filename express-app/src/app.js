const express = require('express')
//const userRouter = require('./routers/user.router')
const PORT = 3000
const app = express()

//bind Routers with application object, so that application can redirect to routers
// app.use('/api/users',userRouter)
app.use('/api/users', require('./routers/user.router'))
app.use('/api/posts', require('./routers/post.router'))
app.use('/api/comments', require('./routers/comments.router'))

//expose apis
//get ===HTTP GET Verb
app.get('/', (req, res) => {
    res.end('Hello Express')
})

//start server
const server = app.listen(PORT, () => {
    console.log(`Express server is Running at ${server.address().port}`)
})