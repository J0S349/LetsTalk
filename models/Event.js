const mongoose = require('mongoose');
const { Schema } = mongoose;

//Create Network Schema
const eventSchema = new Schema({
  Name: String,
  Description: String,
  Date: Date,
  Location: String
});

// Create our model class with a 'network' collection
const events = mongoose.model('events', eventSchema);

module.exports = events;
