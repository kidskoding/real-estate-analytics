const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('../postgresdb');

router.get('/', (req, res) => {
    res.send('Login Route');
});

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    try {
        const query = 'SELECT * FROM users WHERE username = $1';
        const { rows } = await db.query(query, [username]);

        if(rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = rows[0];
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(401).json({ message: 'Incorrect username or password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch(error) {
        console.log('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;