const express = require("express")
const app = express()
const mongoose = require("mongoose")
require('dotenv/config');


const personRoutes = require('./routes/personRoutes')

const DB_USERNAME = process.env.MONGO_USERNAME
const DB_PASSWORD = encodeURIComponent(process.env.MONGO_PASSWORD)

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use('/person', personRoutes)

app.get('/', (req, res) => {
    res.json({message: "Oi express!"})
})

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@leticiagoncalves.kjzrn.mongodb.net/bancoTeste?retryWrites=true&w=majority`)
.then(() => {
    console.log('MongoDB conectado')
    app.listen(3000)
}).catch((err) => console.error(err))