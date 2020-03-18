const express = require('express')
const router = express.Router()
const User = require('../models/Users')

router.get('/', (req, res) => {
    res.send('Users GET route is working!')
    // User.find({}).then(users => res.json(users))
  })

module.exports = router