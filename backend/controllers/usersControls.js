const express = require('express')
const router = express.Router()
const User = require('../models/Users')

router.get('/', (req, res) => {
    User.find({}).then(users => res.json(users))
  })

router.get('/:_id', (req, res) => {
    console.log(req.params)
    User.findById(req.params._id)
    .then(user => res.json(user))
})

router.post('/', (req, res) => {
    console.log(req.body)
    User.create(req.body)
    .then(user => res.json(user))
})

router.put('/:id', (req, res) => {
    console.log(req.params)
    User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(user => res.json(user))
})

router.delete('/:id', (req, res) => {
       console.log(req.params)
       User.findByIdAndDelete(req.params.id)
       .then(user => res.json(user))
})

module.exports = router