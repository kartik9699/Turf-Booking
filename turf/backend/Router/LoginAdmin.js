const express=require('express')
const router=express.Router()
const admin =require('../Model/CreateAdmin')
const{ body}=require('express-validator')
//const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtsecret="MynameiskartikmahendraParabbavlat"
router.post("/LoginAdmin" ,async (req,res)=>{
    
try {
let email=req.body.Email
   const userdata=await admin.findOne({ Email: email })
   if(!userdata){
    return res.status(400).json({
        success:false
    })}
    if(req.body.Password !==userdata.Password){
        return res.status(400).json({
            success:false
        })
        
    }
    const data={
        admin:  {
          id:userdata._id ,
          Name:userdata.Name
        }  
      }
      const authToken=jwt.sign(data,jwtsecret)
    return res.status(200).json({
        success:true,authToken:authToken
        })
    
} catch (error) {
    console.log(error)
    res.json({
        success:false,
        message:"something went wrong"
    })
}
}
)
module.exports=router;