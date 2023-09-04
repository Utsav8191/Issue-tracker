const mongoose = require('mongoose');

// Connecting to MongoDb 
mongoose.connect("mongodb://127.0.0.1/issue_tracker")
    .then(()=> console.log("Successfully connected to the Database"))
    .catch((err)=> console.log(`Error while connect to DB: ${err}`))