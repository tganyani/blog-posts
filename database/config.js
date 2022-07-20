const pg = require('pg')
require('dotenv').config()
const conString = process.env.DB_URL
const client = new pg.Client(conString)

client.connect()

module.exports = client