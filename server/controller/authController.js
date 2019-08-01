const bcrypt = require("bcryptjs")


let login = async (req, res) => {
    const {username, password} = req.body
    const db = req.app.get("db")

    const user = await db.check_user(username).catch(err => console.log(err))

    if (!user[0]) {
        res.status(401).json("Incorrect username or password")
    } else {
        const isAuthorized = await bcrypt.compare(password, user[0].password).catch(err => console.log(err))

        if(!isAuthorized) {
            res.status(401).json("Incorrect username or password")
        } else {
            req.session.user = {
                username,
                id: user[0].id
            }
            res.json(req.session.user)
        }
    }
} 

let register = async (req, res) => {
    const {username, password} = req.body
    const db = req.app.get("db")

    const user = await db.check_user(username).catch(err => console.log(err))
    if (user[0]) {
        res.status(401).json("Username is already taken")
    } else {
        const hash = await bcrypt.hash(password, 10).catch(err => console.log(err))

        const newUser = await db.create_user([username, hash])

            req.session.user = {
                username,
                id: newUser[0].id
            }
            res.json(req.session.user)
        }
    }

module.exports = {
    login,
    register
}