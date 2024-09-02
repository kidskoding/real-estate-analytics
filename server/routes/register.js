const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');

router.get('/', (req, res) => {
    res.send('Registration Route');
});

router.post('/', async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
        const values = [username, email, hashedPassword];

        await db.query(query, values);

        res.status(201).json({ message: 'User registered successfully' });
    } catch(error) {
        console.log('Error:', error);
        if (error.code === '23505') {
            return res.status(409).json({ message: 'User already exists' });
        }
        return res.status(500).json({ message: 'Database error' });
    }
});

module.exports = router;