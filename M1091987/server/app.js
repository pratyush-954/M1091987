// const dotenv = require("dotenv");

const express = require("express");
const app = express();
const router = express.router;

//dotenv to hide password and username using key value pair

// dotenv.config({path:'./config.env'});

//Connecting to Mongoose
const mongoose = require("mongoose");
const DB =
  "mongodb+srv://Pratyush954:Pratyush954@cluster0.h1trnoy.mongodb.net/userbase?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log("no connection"));

const User = require("./model/userSchema");

//Middleware
//to make routing easy
app.use(express.json());
app.use(require("./router/auth"));

const middleware = (req, res, next) => {
  console.log("Hello World my middleware");
  next();
};

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.get("/about", middleware, (req, res) => {
  console.log("Middleware before About");
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.cookie('Contact','contact');
  res.send("Contact");
});

app.get("/signin", (req, res) => {
  res.send("Login");
});

app.get("/signup", (req, res) => {
  res.send("Registration");
});

app.get("/signup", (req, res) => {
  res.send("Create");
});

app.get("/signup", (req, res) => {
  res.send("List");
});


app.listen(5000, () => {
  console.log("Server is running on Port Number 5000");
});
