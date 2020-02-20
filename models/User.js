const mongoose = require("../db/connection");
const UserSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  address: String
  });
const User = mongoose.model("User", UserSchema);
module.exports = User;
