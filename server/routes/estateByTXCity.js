const express = require('express');
const router = express.Router();
const db = require('../tx-estate-db');

router.get('/', async (req, res) => {
    try {
        const query = `
            SELECT city, COUNT(*) as count 
            FROM texas_real_estate 
            WHERE st = 'TX' 
            AND city IS NOT NULL 
            AND city IN ('TOMBALL', 'SPRING', 'KATY', 'FRISCO', 'IRVING', 'PLANO')
            GROUP BY city;
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