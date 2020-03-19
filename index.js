const express = require("express")
const app = express()
const usersController = require("./backend/controllers/usersControls")
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/api/users/', usersController)

app.listen(8080, () => {
    console.log('Listening to port 8080....')
})