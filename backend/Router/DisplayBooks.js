const express = require('express');
const router = express.Router();

router.post('/DisplayBooks', (req, res) => {
    try {
        if (global.Books) {
            res.json(global.Books);
        } else {
            res.status(500).send("Data not loaded yet");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
