const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");


router.post("/register",(req,res)=>{
    //console.log(req.body);
    const {email} = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
            }
        });
        const mailOptions = {
            from:process.env.EMAIL,
            to : email,
            subject:"Sending Email With React And Nodejs",
            html:'<h1>Congratulation You Successfully sent email</h1>'
        }
        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log("Error",error)
            }else{
                console.log("Email Sent" + onfocus.response);
                res.status(201).json({status:201,info})
            }
        })
    } catch (error) {
        res.status(401).json({status:401,error})

    }
});

module.exports = router