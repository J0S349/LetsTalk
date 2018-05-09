const mongoose = require('mongoose');
const { Schema } = mongoose;

//Create Network Schema
const networkSchema = new Schema({
  ID: String,
  Name: String,
  Fullname: String,
  Description: String,
  Link: String,
  DateCreated: Date
});

// Create our model class with a 'network' collection
const network = mongoose.model('network', networkSchema);

module.exports = network;
