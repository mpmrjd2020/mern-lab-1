const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose
    .connect('mongodb://localhost/mern-lab', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(instance => console.log(`Connected to db: ${instance.connections[0].name}`))
    .catch(error => console.log('Connection failed!', error))

module.exports = mongoose