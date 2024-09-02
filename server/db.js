const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_DB_PASSWORD,
    database: 'login-system'
});

db.connect((err) => {
    if(err) throw err;
    console.log('MySQL connected...');
});

module.exports = db;