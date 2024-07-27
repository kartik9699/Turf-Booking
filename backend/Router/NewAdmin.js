const express = require('express');
const router = express.Router();
const admin = require('../Model/CreateAdmin');
const { body, validationResult } = require('express-validator');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
    "/createadmin",
    upload.array('img', 5), // Allows up to 5 image uploads
    [
        body('Email', 'Invalid email').isEmail(),
        body('Password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
        body('Name', 'Name must be at least 5 characters long').isLength({ min: 5 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await admin.create({
                Name: req.body.Name,
                Email: req.body.Email,
                Password: req.body.Password,
                Location: req.body.Location,
                price: req.body.price,
                Contact: req.body.Contact,
                Desc:req.body.Desc,
                img: req.files.map(file => file.originalname) // Store image buffers in the database
            });
            res.json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
);

module.exports = router;
