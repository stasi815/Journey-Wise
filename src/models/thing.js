const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EntheogenSchema = new Schema({
  name: { type: String },
  
})

Thing = mongoose.model('Thing', ThingSchema);

module.exports = Thing;