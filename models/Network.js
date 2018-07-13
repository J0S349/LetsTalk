const mongoose = require('mongoose');
const { Schema } = mongoose;



// Creating Post schema
const PostSchema = new Schema({
  Content: String,
  Date: Date, 
  Count: Number
});


//Create Network Schema
const NetworkSchema = new Schema({
  Name: String,
  Fullname: String,
  Description: String,
  Link: String,
  Type: String, 
  Posts: [PostSchema]
});

// Create our model class with a 'network' collection
const Networks = mongoose.model('networks', NetworkSchema);

module.exports = Networks;
