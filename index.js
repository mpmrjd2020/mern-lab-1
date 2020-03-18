const express = require("express")
const app = express()
const usersController = require("./controllers/usersConrols")


app.use(express.json())

app.use("/api/users", usersController)

app.listen(8080, () => {
    console.log('Listening to port 8080....')
})