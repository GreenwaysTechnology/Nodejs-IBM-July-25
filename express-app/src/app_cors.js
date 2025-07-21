const express = require('express')
const app = express()
const cors = require('cors')

// const corsOptions = {
//     origin: 'http://www.abce.com'
// }
//allow only from this url.
const corsOptions = {
    origin: 'http://127.0.0.1:5500'
}
app.use(cors(corsOptions))

//allow any body to access this app
// app.use(cors())

app.get('/', (req, res) => {
    res.end('Home Page')
})


app.get('/api/customers/:id', (req, res, next) => {
    res.json({ msg: 'cors enabled for only this particular' })
})

//start server
const server = app.listen(3000, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})
