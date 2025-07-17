const express = require('express')
const { findAll } = require('../services/user.service')

const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    try {
        const users = await findAll()
        res.json(users)
    }
    catch (err) {
        console.log(err)
    }
})


module.exports = userRouter;