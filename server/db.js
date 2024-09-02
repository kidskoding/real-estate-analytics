const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: process.env.PG_DB_PASSWORD,
    database: 'login-system'
});

client.connect(err => {
    if(err) {
        console.error('PostgreSQL connection error:', err.stack);
    } else {
        console.log('PostgreSQL connected...');
    }
});

module.exports = client;