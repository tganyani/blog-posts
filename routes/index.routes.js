const express = require('express')
const IndexControllers = require('../controllers/index.conrollers')
const authMiddleware = require ('../midleware/auth.midleware')

class IndexRoutes {
    path = '/'
    router = express.Router()
    indexControllers = new IndexControllers()
    constructor(){
        this.initialiseRoutes()
    }

    initialiseRoutes() {
        this.router.get(`${this.path}`, this.indexControllers.homePage)
        this.router.get(`${this.path}login`, this.indexControllers.login)
        this.router.get(`${this.path}signup`, this.indexControllers.signUp)
        this.router.get(`${this.path}newpost`,authMiddleware, this.indexControllers.newPost)
    }

}

module.exports = new IndexRoutes()







