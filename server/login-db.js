const { Client } = require('pg');
require('dotenv').config();

const loginDb = new Client({
    host: 'localhost',
    user: 'postgres',
    password: process.env.PG_DB_PASSWORD,
    database: 'login-system'
});

loginDb.connect(err => {
    if(err) {
        console.error('PostgreSQL connection error to login database:', err.stack);
    } else {
        console.log('PostgreSQL connected to login database...');
    }
});

module.exports = loginDb;