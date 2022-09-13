const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs/dist/bcrypt");
const jwt = require('jsonwebtoken');
const { json } = require("express");

const DB =
  "mongodb+srv://Pratyush954:Pratyush954@cluster0.h1trnoy.mongodb.net/userbase?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successfully");
  })
  .catch((err) => console.log("no connection"));

const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello World from router js");
});

//using promises

// router.post("/register", (req, res) => {
//   const { name, email, phone, password, cpassword } = req.body;

//   if (!name || !email || !phone || !password || !cpassword) {
//     return res.status(422).json({error:"Kindly fill all the fields"});
// }

//     User.findOne({email:email}).then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({err:"Email already exist"});
//         }

//         const user = new User({name, email, phone, password, cpassword});
//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfully"});
//         }).catch((err)=>res.status(500).json({error:'Failed to register'}));

//     }).catch(err=>{console.log(err);})
//   // console.log(name);
//   // console.log(email);
//   // res.json({message:req.body});
// });

//using async await

router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Kindly fill all the fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ err: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ err: "passwords donot match" });
    }
    const user = new User({ name, email, phone, password, cpassword });

    await user.save();

    res.status(201).json({ message: "user registered successfully" });
    // if(userExist){
    //     return res.status(201).json({message:'user registered successfully'});
    // }else{
    //     res.status(500).json({error:'Failed to Register.'})
    // }
  } catch (err) {
    console.log(err);
  }

  // console.log(name);
  // console.log(email);
  // res.json({message:req.body});
});

//login code

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({message:"data came check console also"});
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Kindly fill all the fields" });
    }

    //to make it compare with mongo db email we need to use mongoose code here

    const UserLogin = await User.findOne({ email: email });

    //To match Login password user entered and already in database

    if (UserLogin) {
      
        const isMatch = await bcrypt.compare(password, UserLogin.password);

       token = await UserLogin.generateAuthToken();
        console.log(token);
        res.cookie('jwtoken', token, {
            expires:new Date(Date.now()+25892000000), //add millisec to current days(30) for expire
            httpOnly:true // otherwise will run only on secure
        });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Password" });
      }

      if (!UserLogin) {
        res.staus(404).json({ error: "User Error" });
      } else {
        res.json({ message: "User Signed in successfully" });
        // console.log(UserLogin);
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

//Logout Page

router.get('/logout', (req, res)=>{
  console.log("Logged Out");
  res.clearCookie('jwtoken', {path:'/'});
  res.status(200).send('User Logged Out');
});


//createEmployee Code

router.post("/create", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Kindly fill all the fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ err: "Email should be validated" });
    } else if (password != cpassword) {
      return res.status(422).json({ err: "passwords donot match" });
    }
    const user = new User({ name, email, phone, password, cpassword });

    await user.save();

    res.status(201).json({ message: "Employee Created successfully" });
    // if(userExist){
    //     return res.status(201).json({message:'user registered successfully'});
    // }else{
    //     res.status(500).json({error:'Failed to Register.'})
    // }
  } catch (err) {
    console.log(err);
  }

  // console.log(name);
  // console.log(email);
  // res.json({message:req.body});
});

//Employee List Code

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({message:"data came check console also"});
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Kindly fill all the fields" });
    }

    //to make it compare with mongo db email we need to use mongoose code here

    const UserLogin = await User.findOne({ email: email });

    //To match Login password user entered and already in database

    if (UserLogin) {
      
        const isMatch = await bcrypt.compare(password, UserLogin.password);

       token = await UserLogin.generateAuthToken();
        console.log(token);
        res.cookie('jwtoken', token, {
            expires:new Date(Date.now()+25892000000), //add millisec to current days(30) for expire
            httpOnly:true // otherwise will run only on secure
        });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Password" });
      }

      if (!UserLogin) {
        res.staus(404).json({ error: "User Error" });
      } else {
        res.json({ message: "User Signed in successfully" });
        // console.log(UserLogin);
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
