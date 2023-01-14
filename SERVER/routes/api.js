const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const db =
  "mongodb+srv://venkatesh:8885353813@cluster0.deyty9r.mongodb.net/EcommerceDB?retryWrites=true&w=majority";

router.get("/", (req, res) => {
  res.send("from API ROUTE");
});

mongoose.connect(db, (err) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log("DB connection establish succesfully");
  }
});

module.exports = router;
