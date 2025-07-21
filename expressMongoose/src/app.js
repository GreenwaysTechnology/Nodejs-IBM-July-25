require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000
app.use(bodyParser.json())

async function connectDb() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('Database has been connected')
        // const server = app.listen(PORT, () => {
        //     console.log(server.address())
        //     console.log(`Express is running @ ${server.address().port}`)
        // })
    }
    catch (err) {
        console.log(err)
    }
}
connectDb()

app.use('/api/posts', require('./routers/post.router'))


const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})