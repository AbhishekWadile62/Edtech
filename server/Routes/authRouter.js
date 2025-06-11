
const express = require("express");
const router = new express.Router();
const { googleLogin,login,signup } = require('../Controllers/authController');


router.get('/test',(req,res)=>{
    res.send('test pass');
})
router.post('/login',login)

router.post('/signup',signup)
router.get('/google',googleLogin)
module.exports = router;