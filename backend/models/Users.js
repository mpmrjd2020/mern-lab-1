const mongoose = require('../db/connection')

const UserSchema = new mongoose.Schema({
    name: String,
    url: string
})

const User = mongoose.model('User', UserSchema)

module.exports = User