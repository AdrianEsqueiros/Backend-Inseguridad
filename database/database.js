const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.host || 'localhost',
  database: process.env.database || 'inseguridad',
  user: process.env.user || 'root',
  password: process.env.password || null,
})

module.exports = connection
