const express = require('express')
const PORT = 3000
const app = express()
//router
const userRouter = express.Router()
app.use('/api/users', userRouter)

//userRouter
// userRouter.use(function (req, res, next) {
//     console.log('User Router')
//     res.set('user', 'this is user Router')
//     next()
// })
// userRouter.use('/', function (req, res, next) {
//     console.log('User Router')
//     res.set('user', 'this is user Router')
//     next()
// })
userRouter.get('/api/users', function (req, res, next) {
    console.log('User Router')
    res.set('user', 'this is user Router')
    next()
})
userRouter.get('/', (req, res) => {
    res.send('User router')
})
userRouter.get('/:id', (req, res) => {
    res.send('User router details')
})


//start server
app.listen(PORT, () => {
    console.log(`Express server is Running at ${PORT}`)
})