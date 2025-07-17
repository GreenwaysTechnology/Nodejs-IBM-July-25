const express = require('express')

const commentsRouter = express.Router()

commentsRouter.get('/', async (req, res) => {
    try {
        res.json({message:'Comments Router'})
    }
    catch (err) {
        console.log(err)
    }
})


module.exports = commentsRouter;