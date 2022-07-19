const UsersService = require('../services/users.services')

class UsersController {

    usersService = new UsersService()

    getAllUsers = async (req, res, next) => {
        try {
            res.json(await this.usersService.getAllUsers())
        } catch (err) {
            next(err)
        }
    }
    getUserById = async (req, res, next) => {
        try {
            res.json(await this.usersService.getUserById(Number(req.params.id)))
        } catch (err) {
            next(err)
        }
    }
    createUser = async (req, res, next) => {
        try {
            await this.usersService.createUser(req.body)
            res.redirect('/login')
        } catch (err) {
            next(err)
        }
    }

    deleteUser = async (req, res, next)=>{
        try {
            res.json(await this.usersService.deleteUser(req.params.id))
        } catch (err) {
            
        }
    }
}


module.exports = UsersController





