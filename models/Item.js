
const mongoose = require("../db/connection");
const ItemSchema = mongoose.Schema({
  
  "item_desc": String,
  "quantity" : Number,
  "unit_price": Number, 
 
  userid: 
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId
    },

    eventid: 
    {
      ref: "Event",
      type: mongoose.Schema.Types.ObjectId
    }


  });
const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;
