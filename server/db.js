const { Client } = require('pg');
require('dotenv').config();

const db = new Client(process.env.DB_URL);

db.connect(err => {
    if(err) {
        console.error('PostgreSQL connection error to login database:', err.stack);
    } else {
        console.log('PostgreSQL connected to login database...');
    }
});

module.exports = db;