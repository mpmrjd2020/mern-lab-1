const mongoose = require('../db/connections')

const UserSchema = new mongoose.Schema({
    name: String,
    url: String
})

const User = mongoose.model('User', UserSchema)

module.exports = User