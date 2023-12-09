const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require('body-parser')

const walletRoutes = require("./routes/walletRoutes")

app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['*'],
    exposedHeaders: ['Content-Type']
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//initialise routes globally here for different modules

app.use('/walletRoutes',walletRoutes)


module.exports = app