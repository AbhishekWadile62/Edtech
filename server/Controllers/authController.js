const UserModel = require("../Models/userModel");
const UserModel2 = require("../Models/user");
const { oauth2client } = require("../Utils/googleConfig");
require ("dotenv").config();
const axios = require("axios");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const googleLogin = async (req, res) => {
  try {
    console.log("this is try ");
    const { code } = req.query;
    console.log(code);
    const googleRes = await oauth2client.getToken(code);
    console.log(googleRes.tokens);
    oauth2client.setCredentials(googleRes.tokens);
    const toc = googleRes.tokens.access_token;
    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${toc}`
    );
    const { email, name, picture } = userRes.data;
    let user = await UserModel.findOne({ email });
    if (!user) {
      user = await UserModel.create({
        name,
        email,
        image: picture,
      });
    }
    const { _id } = user;
    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIMEOUT,
    });
    return res.status(200).json({
      message: "Success",
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const signup = async (req,res)=>{
  // try{
  //   const {name}=req.body.name;
  //   const {email}=req.body.email;
  //   const {password}=req.body.password;
  //   console.log(req.body);
  //   const user = await UserModel2.findOne({email});
  //   if(user){
  //     return res.status(409).json({message:"User already exist, you can login",success:false})
  //   }
  //   const userModel = new UserModel2({name,email,password})
  //   userModel.password = await bcrypt.hash(password,10)
  //   await userModel.save();
  //   res.status(201)
  //     .json({
  //         message:"Signup successfully",
  //         success:true
  //     })
  // }catch(err){
  //     console.log(err);
  //     res.status(500).json({
  //         message:"internal server error",
  //         success:false
  //       })
  // }


  try {
    const { name, email, password } = req.body; // Correct way to extract values

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    const user = await UserModel2.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists, you can login", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hashing password
    const newUser = new UserModel2({ name, email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: "Signup successfully", success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error", success: false });
  }
}
const login = async (req,res)=>{ 
  try{
    const {email,password}=req.body;
    const user = await UserModel2.findOne({email:email});
    console.log(req.body);
    const errorMessage = "Authentication failed email or password is wrong";
    if(!user){
      return res.status(403).json({message:errorMessage,success:false})
    }
    const isPassEqual = await bcrypt.compare(password,user.password);
    if(!isPassEqual){
      return res.status(403)
          .json({message:errorMessage,success:false})
    }
    const jwtToken = jwt.sign(
      {email:user.email, _id:user._id},
      process.env.JWT_SECRET,
      {expiresIn:process.env.JWT_TIMEOUT}
    )
    res.status(200)
      .json({
          message:"Login success",
          success:true,
          jwtToken,
          email,
          name:user.name
      })
  }catch(err){
      res.status(500).json({
          message:"internal server error",
          success:false
        })
  }
}

module.exports = {
  googleLogin,signup,login
};
