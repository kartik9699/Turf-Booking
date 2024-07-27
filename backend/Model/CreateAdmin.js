const mongoose=require('mongoose')
const { Schema } = mongoose;

const Admin = new Schema({
  Name:{
    type:String, 
    required:true
  } ,
  Contact:{
    type:String,
    required:true
  }, 
  Email:{
    type:String,
    required:true
  } ,
  price:{
    type:Number,
    required:true
  }
 ,
 Password:{
    type:String,
    required:true
    },
    Location:{
        type:String,
    required:true
    },
    Desc:{
      type:String,
      required:true
    },
    img:{
type:Array
    },
  date: { type: Date, default: Date.now },
 
});

module.exports = mongoose.model('Admin', Admin);