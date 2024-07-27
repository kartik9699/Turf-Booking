const express = require('express');
const conn = require('./db');
const cors=require('cors')
const PORT =5000;

const app = express();
app.use(cors())
app.use(express.json())
conn().then(() => {
    console.log("Database connected and data loaded");
}).catch(err => {
    console.error("Failed to connect to the database:", err);
});

app.use('/api', require('./Router/DisplayTurf'));

app.use('/api', require('./Router/NewUser'));
app.use('/api', require('./Router/Loginuser'));
app.use('/api', require('./Router/BookingOrder'));
app.use('/api', require('./Router/DisplayBooks'));
app.use('/api', require('./Router/NewAdmin'));
app.use('/api', require('./Router/LoginAdmin'));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
