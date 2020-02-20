// const mongoose = require("./connection");
// const User = require("../models/User");
// const seedData = require("./data.json");

// User.deleteMany({}).then(() => {
//     User.create(seedData).then(users => {
//       console.log(users);
//       process.exit();
//     });
//   });

const mongoose = require("./connection");
const User = require("../models/User");
const Event = require("../models/Event");
// clear the database of records using both models
// clear the database of records using both models
User.deleteMany({}).then(() => {
  console.log("deleted all users");
  Event.deleteMany({}).then(() => {
    console.log("deleted all Events");
      // create a user
      User.create({
        firstname: "MK",
        lastname: "Muhamamd Khan",
        email: "MK@hotai.com",
        address : "Emily Rd"
      }).then(paul => {
        // create the posts
        Event.create({
        event_name: "Garage Sale",
        event_url : "Yahhoo.com",
        event_date: "12/12/2019",
        event_start_time: "08:59:00",
        event_end_time : "08:59:00",
        status  : "open",
        userID: paul.id
        })
                    
          });
    
  });
});
console.log("Successful .................");
