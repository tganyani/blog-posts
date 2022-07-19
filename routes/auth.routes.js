const express = require('express')
const AuthController = require('../controllers/auth.controllers')

class AuthRoutes {
    path = '/'
    router = express.Router()
    authController = new AuthController()
    constructor(){
        this.initialiseRoutes()
    }
    initialiseRoutes(){
        this.router.post(`${this.path}login`, this.authController.login)
        this.router.post(`${this.path}logout`, this.authController.logout)
    }
}

module.exports = new AuthRoutes

