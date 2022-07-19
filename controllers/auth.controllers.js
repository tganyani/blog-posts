const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const UsersService = require('../services/users.services')

class AuthController {
    usersService = new UsersService()

    login = async (req, res, next) => {
        try {
            const userFound = await this.usersService.getUserByUsername(req.body.username)
            if (userFound) {
                const isPasswordMatch = await bcrypt.compare(req.body.password, userFound.password)
                if (isPasswordMatch) {
                    const token = jwt.sign({
                        userId: userFound.user_id
                    }, process.env.SECRETE_KEY, { expiresIn: '1h' })
                    req.session.username = userFound.username
                    req.session.userId = userFound.user_id
                    req.session.token = token
                    req.session.isLoggedIn = true
                    res.redirect('/')
                }
                else {
                    res.render('signIn',{"error":"wrong username or password"})
                }
            }
            else{
                res.render('signUp',{"error":"you need to sign up here"})
            }
        } catch (err) {
            next(err)
        }
    }


    logout = async (req, res, next)=>{
        try {
            req.session.destroy()
            res.redirect('/')
        } catch (err) {
            next(err)
        }
    }
}


module.exports = AuthController


