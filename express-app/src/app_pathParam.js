const express = require('express')
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.end('Hello Express')
})
app.get('/api/users/:id',(req,res)=>{
    console.log(req.params.id)
    res.end('Path param')
})

const server = app.listen(PORT, () => {
    console.log(`Express server is Running at ${server.address().port}`)
})