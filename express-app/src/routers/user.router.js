const express = require('express')
const userRouter = express.Router()

const users = [{
    id: 1,
    name: 'Erik',
    email: 'erik@gmail.com'
},
{
    id: 2,
    name: 'Subramanian',
    email: 'subu@gmail.com'
}]

//findAll
userRouter.get('/', async (req, res) => {
    try {
        res.json(users)
    }
    catch (err) {
        console.log(err)
    }
})
//findById
userRouter.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const user = users.find(u => u.id === id)
        if (!user) {
            //error resonse
            res.status(404).json({ error: 'User Not Found' })
        }
        //throw new Error('something happened')
        res.status(200).json(user)
    }
    catch (err) {
        console.log(err)
        res.status(404).json({ error: err })
    }
})
//save
userRouter.post('/', async (req, res) => {
    try {
        //read payload
        // const payload = req.body
        const { name, email } = req.body
        // const newUser = { id: users.length + 1, name: name, email: email }
        const newUser = { id: users.length + 1, name, email }
        users.push(newUser)
        res.status(201).json(newUser)
    }
    catch (err) {
        console.log(err)
    }
})
//update : PUT /:id
userRouter.put('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { name, email } = req.body
        const user = users.find(u => u.id === id)
        if (!user) {
            res.status(404).json({ error: 'User Not Found' })
        }
        //update
        user.name = name || user.name
        user.email = email || user.email
        res.json(user)
    }
    catch (err) {
        console.log(err)
    }
})

//Delete
userRouter.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const index = users.findIndex(u => u.id === id)
        if (index === -1) {
            res.status(404).json({ error: 'User Not Found' })
        }
        const deletedUser = users.splice(index, 1)[0]
        res.json(deletedUser)
    }
    catch (err) {
        console.log(err)
        res.status(404).json({ error: err })
    }
})

module.exports = userRouter;