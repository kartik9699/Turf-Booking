const express=require('express')
const router=express.Router()
const Bookings =require('../Model/Booking')
router.post('/Booking', async (req,res)=>{
    try {
        await Bookings.create({
             Name:req.body.Name,
             Email:req.body.Email,
             Contact:req.body.Contact,
             location:req.body.location,
             date:req.body.date,
             time:req.body.time,
         })
         res.json({
             success:true
         })
     } catch (error) {
         console.log(error)
         res.json({
             success:false
         })
     }
     }
     )
     module.exports=router;