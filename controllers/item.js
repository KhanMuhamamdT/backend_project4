const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// this is the default route for returning all the records
router.get("/", (req, res) => {
  console.log("default path get");
  Item.find({}).then(users => res.json(users));
});
// Getting User information
// "Test case">> "http://localhost:8080/api/users/MK"
router.get("/:userID", (req, res) => {
  console.log("Getting user information wwith search critera");
  console.log(req.params.userID);
  Item.find({ _id: req.params.userID }).then(users => res.json(users));
});

// Deleting User
// "Test case">> "http://localhost:8080/api/users/MK"
// ALDO: updated to use _id instead of userId param
router.delete("/:userID", (req, res) => {
  console.log(req.params.userID);
  Item.findOneAndDelete({ _id: req.params.userID }).then(users =>
    res.json(users)
  );
});

// Updating User
router.put("/:userID", (req, res) => {
    Item.findOneAndUpdate({ _id: req.params.userID }, req.body, {
    new: true
  }).then(users => res.json(users));
});

//    Insertion  the record
router.post("/", (req, res) => {
  console.log("Creation of record: ");
  Item.create(req.body).then(users => res.json(users));
});
module.exports = router;
