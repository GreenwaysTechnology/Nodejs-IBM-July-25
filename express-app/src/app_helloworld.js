const express = require('express')

const PORT = 3000
const app = express()

//expose apis
//get ===HTTP GET Verb
app.get('/', (req, res) => {
     res.end('Hello Express')
})


//start server
app.listen(PORT, () => {
    console.log(`Express server is Running at ${PORT}`)
})