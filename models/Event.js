const mongoose = require("../db/connection");
const EventSchema = mongoose.Schema({
  
  "event_name": String,
  "event_url" :String,
  "event_date": Date,
  "event_start_time": String,
  "event_end_time" : String,
   "status"  : String,
  userid: 
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId
    }
  });
const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
