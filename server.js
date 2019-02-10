// Server Setup
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')

/*
// For create dummy data
const data = require('./src/data.json')
const Client = require('./server/model/ClientModel')
*/

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/crmDB', { useNewUrlParser: true })

const app = express()
app.use(express.static(path.join(__dirname, 'src')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use('/', api)

app.listen(8000, function () {
    console.log(`Server is Running with port 8000!`)
})

/*
// loop for create dummy data from json file to DB
data.forEach(c => {
    let client = new Client(c)
    client.save()
})
*/
