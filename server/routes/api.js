const express = require('express')
const router = express.Router()
const Client = require('../model/ClientModel')

// GET ROUTE
router.get('/clients', function (req, res) {
    Client.find({}, function (err, clients) {
        res.send(clients)

    })
})

// POST ROUTE
router.post('/clients', function (req, res) {
    let c = new Client(req.body)
    c.save()
    res.end()
})

// PUT ROUTE
router.put('/clients/:id', function (req, res) {
    Client.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, client) {
        res.send(client)
    })
})

module.exports = router
