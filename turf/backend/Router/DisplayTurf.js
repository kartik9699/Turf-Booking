const express = require('express');
const router = express.Router();

router.post('/DisplayData', (req, res) => {
    try {
        if (global.Turf) {
            res.json(global.Turf);
        } else {
            res.status(500).send("Data not loaded yet");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
