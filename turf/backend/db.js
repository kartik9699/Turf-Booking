const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Turf_Booking', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    const fetch_data = await mongoose.connection.db.collection("admins");
    const data = await fetch_data.find({}).toArray();    
    global.Turf = data;
    const fetch_Books = await mongoose.connection.db.collection("bookings");
    const Books = await fetch_Books.find({}).toArray();    
    global.Books = Books;
    
        
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
module.exports = conn;