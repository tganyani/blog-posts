require('dotenv').config()
const jwt = require('jsonwebtoken')
const UsersService = require('../services/users.services')


const authMiddleware = async (req, res, next) => {
    try {
      const token = req.session.token
      const usersService = new UsersService()
      if (token) {
        const secretKey = process.env.SECRETE_KEY;
        const {userId}  = await jwt.verify(token, secretKey)
        const findUser = await usersService.getUserById(userId)
        if (findUser) {
          next();
        } else {
          res.redirect('/login')
        }
      } else {
        res.redirect('/login')
      }
    } catch (error) {
     res.redirect('/login')
    }
  };

  module.exports = authMiddleware
  