const { Client } = require('pg');
require('dotenv').config();

const txEstateDB = new Client({
    host: 'localhost',
    user: 'postgres',
    password: process.env.PG_DB_PASSWORD,
    database: 'anirudh'
});

txEstateDB.connect(err => {
    if(err) {
        console.error('PostgreSQL connection error to texas real estate database:', err.stack);
    }
    else {
        console.log('PostgreSQL connected to texas real estate database...');
    }
});

module.exports = txEstateDB;