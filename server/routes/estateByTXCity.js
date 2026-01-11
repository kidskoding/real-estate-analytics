const express = require('express');
const router = express.Router();
const db = require('../db')

router.get('/', async (req, res) => {
    try {
        const query = `
            SELECT city, COUNT(*) as count
            FROM galveston_real_estate
            WHERE city IS NOT NULL
            GROUP BY city
            ORDER BY count DESC
            LIMIT 20;
        `;
        
        const { rows } = await db.query(query);
        res.json({rows})
        console.log(rows);
    } catch(error) {
        console.log('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;