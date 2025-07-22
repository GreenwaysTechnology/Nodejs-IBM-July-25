const express = require('express')
const userRouter = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

userRouter.get('/', async (req, res) => {
    try {
        //prisma.entityName.api
        const users = await prisma.user.findMany()
        res.json(users)
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }
})
userRouter.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        if (!user) {
            res.status(401).json({ message: `User not found for ID ${id}` })
        }
        res.json(user)
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }
})
userRouter.post('/', async (req, res) => {
    try {
        const user = req.body
        if (user) {
            const newUser = await prisma.user.create({
                data: {
                    name: user.name,
                    email: user.email

                }
            })
            res.status(201).location("/api/users/save").json(newUser)

        } else {
            res.status(404).json({ message: "Input is not Valid" })
        }

    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }
})
userRouter.put('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const user = req.body
        const updateUser = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name: user.name,
                email: user.email
            }
        })
        if (updateUser) {
            res.status(200).json(updateUser)
        } else {
            res.status(401).json({ message: `Update failed for ${id}` })
        }

    }
    catch (err) {
        res.status(404).json({ message: err.message })

    }
})

userRouter.delete('/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
        const user = await prisma.user.findUnique({
            where: {
                //id: id
                id
            },
        })
        if (user == null) {
            res.status(401).json({ message: `User not found for ID ${id}` })
        } else {
            await prisma.user.delete({
                where: {
                    id
                },
            })
            res.status(204).end()
        }


    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})




module.exports = userRouter