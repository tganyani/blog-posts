const express = require('express')
const session = require('express-session')
const path = require('path')
require('dotenv').config()
const IndexRouter = require('./routes/index.routes')
const UsersRoutes = require('./routes/users.routes')
const AuthRoutes = require('./routes/auth.routes')
const PostRoutes = require('./routes/post.routes')

const app = express()

app.set('view engine','ejs')
app.set('views', path.join(__dirname, './views'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('static'))
app.use(session({
    secret: process.env.SECRETE_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 10 }
}))
app.use(function (req, res, next) {
    res.locals.session = req.session
    next()
})
app.use('/', IndexRouter.router)
app.use('/', UsersRoutes.router)
app.use('/', AuthRoutes.router)
app.use('/', PostRoutes.router)


const port = process.env.PORT || 4000



app.listen(port, () => console.log(`The server is on port: ${port}`))






 