require("dotenv").config()
const express = require("express")
const massive = require("massive")
const session = require("express-session")

const {login, register} = require("./controller/authController")

const app = express()

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
}))

app.post("/auth/login", login)
app.post("/auth/register", register)

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance)
    console.log("connected for sure")
}).catch(error => console.log(error))


app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))

