const express = require('express')
const router = express.Router()
const Client = require('../model/ClientModel')

// Read about Restful API
// GET ROUTE
router.get('/clients', function (req, res) {
    Client.find({}, function (err, clients) {
        res.send(clients)

    })
})

// POST ROUTE
router.post('/addclient', function (req, res) {
    let c = new Client(req.body)
    c.save()
    res.end()
})

// PUT ROUTE
router.put('/updateclient/:id', function (req, res) {
    Client.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, client) {
        res.send(client)
    })
})


module.exports = router
