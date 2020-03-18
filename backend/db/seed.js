const userSchema = require('../models/Users')
const usersData = require('./usersData.json')

userSchema.remove({})

userSchema.collection.insert(usersData)
    .then(userDT => {
        console.log(userDT)
    })
    .catch(err => {
        console.log(err)
    })