const mongoose=require('mongoose')
const { Schema } = mongoose;

const Bookings = new Schema({
  Name:{
    type:String, 
    required:true
  } ,// String is shorthand for {type: String}
  Contact:{
    type:String,
    //required:true
  }, 
  Email:{
    type:String,
    required:true
  } 
 ,
 location:{
    type:String,
    required:true
    },
  date: { type: String,
    required:true

  },
  time:{type : String,
    required:true
  }
 
});
// This creates a 'User' collection in the database
module.exports = mongoose.model('Bookings', Bookings);