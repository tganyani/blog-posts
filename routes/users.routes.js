const express = require('express')
const UsersController = require('../controllers/users.controllers')

class UsersRoutes {
    path = '/users'
    router = express.Router()
    usersController = new UsersController()
    constructor() {
        this.intialiseRoutes()
    }
    intialiseRoutes() {
        this.router.get(`${this.path}`, this.usersController.getAllUsers)
        this.router.get(`${this.path}/:id`, this.usersController.getUserById)
        this.router.delete(`${this.path}/:id`, this.usersController.deleteUser)
        this.router.post(`${this.path}`, this.usersController.createUser)
    }
}

module.exports = new UsersRoutes
