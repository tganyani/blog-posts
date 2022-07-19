const pg = require('pg')
const conString = "postgres://cxsyatnq:iLAC6fGRXfqeJXbtBeTZoRUswOrMwQgM@isilo.db.elephantsql.com/cxsyatnq"
const client = new pg.Client(conString)

client.connect()

module.exports = client