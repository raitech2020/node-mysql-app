const mysql = require("mysql2")

const DB_HOST = "127.0.0.1"
const DB_USER = "admin"
const DB_PASSWORD = "admin"
const DB_NAME = "nodedb"
const DB_PORT = 3306

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
})

db.connect((err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`MySQL connection established to ${DB_NAME} on ${DB_HOST}`)
})

module.exports = db
