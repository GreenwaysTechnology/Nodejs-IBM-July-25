const express = require('express')

const postRouter = express.Router()

postRouter.get('/', async (req, res) => {
    try {
        res.json({message:'Post Router'})
    }
    catch (err) {
        console.log(err)
    }
})


module.exports = postRouter;