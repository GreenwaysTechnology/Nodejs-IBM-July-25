const express = require('express')
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.end('Hello Express')
})
app.get('/api/users',(req,res)=>{
    const variables = req.query
    console.log(variables.city ,variables.state) 
    res.end('Path param')
})

const server = app.listen(PORT, () => {
    console.log(`Express server is Running at ${server.address().port}`)
})