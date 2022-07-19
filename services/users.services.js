const client = require('../database/config')
const bcrypt = require('bcrypt')


class UsersServices {
    getAllUsers = async ()=>{
        const results = await client.query('SELECT * FROM user_entity')
        return results.rows
    }

    getUserById = async (id) => {
        const results = await client.query(`SELECT * FROM user_entity WHERE user_id=${id}`)
        return results.rows[0]
    }
    getUserByUsername = async (username) => {
        const results = await client.query(`SELECT * FROM user_entity WHERE username='${username}'`)
        return results.rows[0]
    }

    createUser = async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        const result = await client.query(`INSERT INTO user_entity (username,password, firstName, lastName) VALUES('${user.username}','${hashedPassword}','${user.firstName}','${user.lastName}')`)
        if (result.rowCount) {
            return 'Users successfully created'
        }
        else {
            return 'There was error while creating the user'
        }
    }

    deleteUser = async (id) => {
        const result = await client.query(`DELETE FROM user_entity WHERE user_id =${id}`)
        return result
    }
}


module.exports = UsersServices












