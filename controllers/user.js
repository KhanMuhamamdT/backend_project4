const express = require("express");
const router = express.Router();
const User = require("../models/User");

// this is the default route for returning all the records
router.get("/", (req, res) => {
  console.log("default path get");
  User.find({}).then(users => res.json(users));
});
// Getting User information
// "Test case">> "http://localhost:8080/api/users/MK"
router.get("/:userID", (req, res) => {
  console.log("Getting user information wwith search critera");
  console.log(req.params.userID);
  User.find({ _id: req.params.userID }).then(users => res.json(users));
});

// Deleting User
// "Test case">> "http://localhost:8080/api/users/MK"
// ALDO: updated to use _id instead of userId param
router.delete("/:userID", (req, res) => {
  console.log(req.params.userID);
  User.findOneAndDelete({ _id: req.params.userID }).then(users =>
    res.json(users)
  );
});

// Updating User
router.put("/:userID", (req, res) => {
    User.findOneAndUpdate({ _id: req.params.userID }, req.body, {
    new: true
  }).then(users => res.json(users));
});

//    Insertion  the record
router.post("/", (req, res) => {
  console.log("Creation of record: ");
  User.create(req.body).then(users => res.json(users));
  

});
module.exports = router;
