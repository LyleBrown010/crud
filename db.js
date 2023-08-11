const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'localhost', 
    user: 'root', 
    password: 'LyleB010', 
    database: 'employee_db'
})



module.exports = mysqlPool;     