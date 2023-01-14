const express = require("express");
const router = express.Router();
const User = require("../models/user");

const mongoose = require("mongoose");
const user = require("../models/user");

const db =
  "mongodb+srv://venkatesh:8885353813@cluster0.deyty9r.mongodb.net/EcommerceDB?retryWrites=true&w=majority";

mongoose.connect(db, (err) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log("DB connection establish succesfully");
  }
});

mongoose.set("strictQuery", true);

router.get("/", (req, res) => {
  res.send("from API ROUTE");
});

router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log("Error: " + error);
    } else {
      res.status(200).send(registeredUser);
    }
  });
});

router.post("/login", (req, res) => {
  let userData = req.body;
  User.findOne({ username: userData.username }, (error) => {
    if (error) {
      console.log("Error: " + error);
    } else {
      if (!user) {
        res.status(401).send("Invalid Username");
      } else if (user.password !== userData.password) {
        res.status(401).send("Invalid Password");
      } else {
        res.status(200).send(user);
      }
    }
  });
});

module.exports = router;
